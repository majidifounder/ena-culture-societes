// Entraînement ENA — moteur de l'application (vanilla JS, aucune dépendance)
"use strict";

var STORAGE_KEY = "ena_trainer_v1";

var ICONS = {
  bulb: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0 0 12 2z"/></svg>',
  bulbSmall: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2.3h6c0-1.1.4-1.8 1-2.3A7 7 0 0 0 12 2z"/></svg>'
};

// Defensive merge of the optional "Art & Architecture" module file.
// The app must keep working perfectly if questions-art-architecture.js is absent.
var AA = (typeof QUESTIONS_ART_ARCHITECTURE !== "undefined") ? QUESTIONS_ART_ARCHITECTURE : [];

// ---------------------------------------------------------------
// AI "Pourquoi je me suis trompé ?" — OPTIONAL enhancement layered on top
// of the rule-based explanation (which is always shown regardless).
//
// AI_ENDPOINT points at a small Vercel serverless function (see
// api/explain.js) that holds the real Anthropic API key server-side, in
// the ANTHROPIC_API_KEY environment variable — never in this file, which
// is public static source. That function must be deployed separately
// (it is NOT part of this static site's GitHub Pages build) and its own
// env var configured in the Vercel project dashboard before it will
// return real answers; until then it fails closed (HTTP 500) and the
// button below just falls back to the message shown for any AI error.
//
// To point this at a different backend, set AI_ENDPOINT to any endpoint
// accepting a POST body of:
//   { question, options, correctAnswer, userAnswer, explanation }
// and returning JSON: { text: "..." } (a short 2-3 sentence string).
//
// Set AI_ENABLED = false to disable the feature entirely — no network
// request is then ever attempted, and the app remains 100% functional
// offline with only the rule-based explanation.
// ---------------------------------------------------------------
var AI_ENABLED = true;
var AI_ENDPOINT = "https://ena-ai-explain.vercel.app/api/explain";
var AI_CACHE_KEY = "ena_ai_cache_v1";
var aiExplanationCache = {};

var LEVELS = [
  { min: 85, label: "Excellent", note: "Profil très compétitif." },
  { min: 70, label: "Très bon", note: "Au-dessus du seuil habituel d'admissibilité." },
  { min: 55, label: "Bon", note: "Admissible, à consolider." },
  { min: 40, label: "Moyen", note: "Révisions ciblées nécessaires." },
  { min: 0, label: "Insuffisant", note: "Reprendre les fondamentaux." }
];

// ---------------------------------------------------------------
// State
// ---------------------------------------------------------------

var state = {
  screen: "landing", // landing | exam | results | review
  settings: {
    scoring: "training", // "ena" (+1/-1/0) | "training" (+3/-1/0)
    length: 300,          // 300 | 500 (or module-specific length when moduleScope !== "all")
    timer: true,
    moduleScope: "all"    // "all" | "artArchitecture"
  },
  session: [],       // array of question objects (with _order attached)
  currentIndex: 0,
  answers: {},       // qId -> { pickedPos, correctPos, correct, skipped, originalIndex }
  startTime: null,
  questionStartTime: null,
  elapsedBeforePause: 0,
  reviewFilter: { status: "all", module: "all", subtheme: "all", search: "" },
  reviewOpenAll: false,
  hasSavedSession: false
};

// ---------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------

function esc(s) {
  return String(s).replace(/[&<>]/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c];
  });
}

function shuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

function pointsForCorrect() {
  return state.settings.scoring === "ena" ? 1 : 3;
}

function formatTime(totalSeconds) {
  var s = Math.max(0, Math.floor(totalSeconds));
  var h = Math.floor(s / 3600);
  var m = Math.floor((s % 3600) / 60);
  var sec = s % 60;
  var pad = function (n) { return n < 10 ? "0" + n : "" + n; };
  return h > 0 ? (h + ":" + pad(m) + ":" + pad(sec)) : (pad(m) + ":" + pad(sec));
}

function letterFor(i) { return ["A", "B", "C", "D"][i]; }

function $(sel, root) { return (root || document).querySelector(sel); }
function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

// ---------------------------------------------------------------
// Persistence (optional resume) — must never break the app
// ---------------------------------------------------------------

function saveProgress() {
  try {
    if (state.screen !== "exam") return;
    var payload = {
      settings: state.settings,
      sessionRefs: state.session.map(function (q) { return { id: q.id, order: q._order }; }),
      currentIndex: state.currentIndex,
      answers: state.answers,
      elapsed: elapsedSeconds()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (e) { /* localStorage unavailable — ignore silently */ }
}

function clearProgress() {
  try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* ignore */ }
}

function loadSavedSession() {
  try {
    var raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    var data = JSON.parse(raw);
    if (!data || !data.sessionRefs || !data.sessionRefs.length) return null;
    return data;
  } catch (e) { return null; }
}

function elapsedSeconds() {
  if (!state.startTime) return state.elapsedBeforePause || 0;
  return state.elapsedBeforePause + (Date.now() - state.startTime) / 1000;
}

// ---------------------------------------------------------------
// Session construction
// ---------------------------------------------------------------

function attachOrder(list) {
  return list.map(function (q) {
    var copy = Object.create(q);
    copy._order = shuffle([0, 1, 2, 3]);
    return copy;
  });
}

// buildSession draws from the ORIGINAL question bank only (unchanged
// behaviour) — the Art & Architecture add-on module is intentionally kept
// out of the general "Toutes les matières" blend so it doesn't swamp the
// existing, carefully weighted mix. Use buildArtArchitectureSession for a
// dedicated Art & Architecture run.
function buildSession(length) {
  var byModule = {};
  QUESTIONS.forEach(function (q) {
    (byModule[q.module] = byModule[q.module] || []).push(q);
  });
  var moduleNames = Object.keys(byModule);
  var selected = [];

  if (length >= QUESTIONS.length) {
    selected = QUESTIONS.slice();
  } else {
    var total = QUESTIONS.length;
    var quotas = moduleNames.map(function (m) {
      return Math.round((byModule[m].length / total) * length);
    });
    var sum = quotas.reduce(function (a, b) { return a + b; }, 0);
    var diff = length - sum;
    while (diff !== 0) {
      var idx = quotas.indexOf(Math.max.apply(null, quotas));
      if (diff > 0) { quotas[idx]++; diff--; } else {
        var idxMin = quotas.indexOf(Math.min.apply(null, quotas));
        quotas[idxMin]--; diff++;
      }
    }
    moduleNames.forEach(function (m, i) {
      var pool = shuffle(byModule[m]);
      selected = selected.concat(pool.slice(0, Math.min(quotas[i], pool.length)));
    });
  }

  selected = shuffle(selected);
  return attachOrder(selected);
}

function artArchitecturePool() {
  return QUESTIONS.concat(AA).filter(function (q) { return q.module === "Art & Architecture"; });
}

function buildArtArchitectureSession(length) {
  var pool = shuffle(artArchitecturePool());
  var selected = pool.slice(0, Math.min(length, pool.length));
  return attachOrder(selected);
}

function displayCorrectPos(q) { return q._order.indexOf(q.correctIndex); }

// ---------------------------------------------------------------
// Rendering — Landing
// ---------------------------------------------------------------

function renderLanding() {
  var saved = loadSavedSession();
  state.hasSavedSession = !!saved;
  var total = QUESTIONS.length;
  var aaTotal = artArchitecturePool().length;
  var scope = state.settings.moduleScope;

  var html = '';
  html += '<div class="hero">';
  html += '  <p class="eyebrow">Concours ENA · Culture &amp; Sociétés</p>';
  html += '  <h1>Entraînement QCM — Culture &amp; Sociétés</h1>';
  html += '  <p class="lead">Banque de ' + total + ' questions vérifiées : institutions marocaines, organisations internationales, géographie, actualité 2024–2026 et culture générale classique.'
    + (aaTotal > 0 ? ' Un module dédié <b>Art &amp; Architecture</b> (' + aaTotal + ' questions) est aussi disponible séparément.' : '')
    + ' 100% hors ligne, aucune donnée envoyée nulle part.</p>';
  html += '</div>';

  html += '<div class="card">';
  html += '  <h2 style="margin-bottom:0.75rem;">Règles du jeu</h2>';
  html += '  <p class="text-dim" style="font-size:0.92rem;">Une question à la fois. Choisir une réponse la verrouille définitivement — impossible de revenir en arrière. Le bouton « Passer » compte pour 0 point et avance, lui aussi de façon définitive. Après chaque réponse : verdict, explication complète, raisons des erreurs et astuce mémoire.</p>';

  html += '  <div class="settings">';

  html += '    <div class="setting-row">';
  html += '      <span class="setting-label">Barème</span>';
  html += '      <div class="toggle-group" data-group="scoring">';
  html += '        <button type="button" class="toggle-option" data-value="ena">ENA officiel · +1 / −1 / 0</button>';
  html += '        <button type="button" class="toggle-option" data-value="training">Entraînement · +3 / −1 / 0</button>';
  html += '      </div>';
  html += '    </div>';

  if (aaTotal > 0) {
    html += '    <div class="setting-row">';
    html += '      <span class="setting-label">Contenu</span>';
    html += '      <div class="toggle-group" data-group="scope">';
    html += '        <button type="button" class="toggle-option" data-value="all">Toutes les matières</button>';
    html += '        <button type="button" class="toggle-option" data-value="artArchitecture">Art &amp; Architecture uniquement (' + aaTotal + ')</button>';
    html += '      </div>';
    html += '    </div>';
  }

  html += '    <div class="setting-row">';
  html += '      <span class="setting-label">Longueur</span>';
  html += '      <div class="toggle-group" data-group="length">';
  if (scope === "artArchitecture") {
    var aaShort = Math.min(50, aaTotal);
    html += '        <button type="button" class="toggle-option" data-value="' + aaShort + '">' + aaShort + ' questions</button>';
    html += '        <button type="button" class="toggle-option" data-value="' + aaTotal + '">' + aaTotal + ' questions (module complet)</button>';
  } else {
    html += '        <button type="button" class="toggle-option" data-value="300">300 questions (examen)</button>';
    html += '        <button type="button" class="toggle-option" data-value="' + total + '">' + total + ' questions (banque complète)</button>';
  }
  html += '      </div>';
  html += '    </div>';

  html += '    <div class="setting-row">';
  html += '      <span class="setting-label">Chronomètre</span>';
  html += '      <div class="toggle-group" data-group="timer">';
  html += '        <button type="button" class="toggle-option" data-value="on">Activé</button>';
  html += '        <button type="button" class="toggle-option" data-value="off">Désactivé</button>';
  html += '      </div>';
  html += '    </div>';

  html += '  </div>'; // settings

  html += '  <div class="btn-row mt-lg">';
  if (saved) {
    html += '    <button type="button" class="btn btn-primary" id="btn-resume">Reprendre la session en cours</button>';
  }
  html += '    <button type="button" class="btn ' + (saved ? '' : 'btn-primary') + '" id="btn-start">Commencer l\'examen</button>';
  html += '  </div>';

  html += '  <p class="kbd-hint">Pendant l\'examen : <kbd>1</kbd>–<kbd>4</kbd> pour choisir, <kbd>Entrée</kbd> ou <kbd>Espace</kbd> pour continuer, <kbd>S</kbd> pour passer.</p>';
  html += '</div>';

  $("#app").innerHTML = html;

  $all('[data-group="scoring"] .toggle-option').forEach(function (btn) {
    btn.classList.toggle("active", btn.dataset.value === state.settings.scoring);
    btn.addEventListener("click", function () {
      state.settings.scoring = btn.dataset.value;
      renderLanding();
    });
  });
  $all('[data-group="scope"] .toggle-option').forEach(function (btn) {
    btn.classList.toggle("active", btn.dataset.value === state.settings.moduleScope);
    btn.addEventListener("click", function () {
      state.settings.moduleScope = btn.dataset.value;
      state.settings.length = state.settings.moduleScope === "artArchitecture"
        ? Math.min(50, aaTotal)
        : 300;
      renderLanding();
    });
  });
  $all('[data-group="length"] .toggle-option').forEach(function (btn) {
    btn.classList.toggle("active", Number(btn.dataset.value) === state.settings.length);
    btn.addEventListener("click", function () {
      state.settings.length = Number(btn.dataset.value);
      renderLanding();
    });
  });
  $all('[data-group="timer"] .toggle-option').forEach(function (btn) {
    var isOn = btn.dataset.value === "on";
    btn.classList.toggle("active", isOn === state.settings.timer);
    btn.addEventListener("click", function () {
      state.settings.timer = isOn;
      renderLanding();
    });
  });

  var btnStart = $("#btn-start");
  if (btnStart) btnStart.addEventListener("click", startNewExam);
  var btnResume = $("#btn-resume");
  if (btnResume) btnResume.addEventListener("click", resumeExam);
}

function startNewExam() {
  clearProgress();
  state.session = state.settings.moduleScope === "artArchitecture"
    ? buildArtArchitectureSession(state.settings.length)
    : buildSession(state.settings.length);
  state.currentIndex = 0;
  state.answers = {};
  state.elapsedBeforePause = 0;
  state.startTime = Date.now();
  state.screen = "exam";
  state.questionStartTime = Date.now();
  render();
}

function resumeExam() {
  var data = loadSavedSession();
  if (!data) { startNewExam(); return; }
  var byId = {};
  QUESTIONS.concat(AA).forEach(function (q) { byId[q.id] = q; });
  state.session = data.sessionRefs.map(function (ref) {
    var copy = Object.create(byId[ref.id]);
    copy._order = ref.order;
    return copy;
  }).filter(function (q) { return q && q.id !== undefined; });
  state.settings = data.settings || state.settings;
  state.currentIndex = data.currentIndex || 0;
  state.answers = data.answers || {};
  state.elapsedBeforePause = data.elapsed || 0;
  state.startTime = Date.now();
  state.screen = "exam";
  state.questionStartTime = Date.now();
  render();
}

// ---------------------------------------------------------------
// Rendering — Exam
// ---------------------------------------------------------------

function currentQuestion() { return state.session[state.currentIndex]; }
function currentAnswer() {
  var q = currentQuestion();
  return q ? state.answers[q.id] : null;
}

function renderExam() {
  var q = currentQuestion();
  if (!q) { finishExam(); return; }
  var total = state.session.length;
  var idx = state.currentIndex + 1;
  var pct = Math.round((state.currentIndex / total) * 100);
  var ans = currentAnswer();

  var html = '';
  html += '<div class="exam-header">';
  html += '  <span class="progress-label">Question ' + idx + ' / ' + total + '</span>';
  if (state.settings.timer) {
    html += '  <span class="timer" id="timer-display">' + formatTime(elapsedSeconds()) + '</span>';
  }
  html += '</div>';
  html += '<div class="progress-bar"><div class="progress-bar-fill" style="width:' + pct + '%"></div></div>';

  html += '<div class="card question-card" id="question-card">';
  html += '  <div class="module-tag">' + esc(q.module) + ' · ' + esc(q.subject) + '</div>';

  if (ans && q.contested) {
    html += '  <div class="contested-badge">⚠️ Réponse contestée</div>';
  }

  html += '  <h2 class="question-text">' + esc(q.question) + '</h2>';

  html += '  <div class="options" role="group" aria-label="Options de réponse">';
  var correctPos = displayCorrectPos(q);
  for (var pos = 0; pos < 4; pos++) {
    var origIdx = q._order[pos];
    var optText = q.options[origIdx];
    var classes = "option-btn";
    var locked = !!ans;
    if (locked) {
      if (pos === correctPos) classes += " correct";
      else if (ans.pickedPos === pos) classes += " wrong-picked";
      else classes += " dimmed";
    }
    html += '    <button type="button" class="' + classes + '" data-pos="' + pos + '"' + (locked ? " disabled" : "") + ' aria-label="Option ' + letterFor(pos) + '">';
    html += '      <span class="option-badge">' + letterFor(pos) + '</span><span>' + esc(optText) + '</span>';
    html += '    </button>';
  }
  html += '  </div>';

  if (ans) {
    html += renderReveal(q, ans);
  }

  html += '  <div class="exam-actions">';
  if (!ans) {
    html += '    <button type="button" class="btn btn-ghost" id="btn-skip">Passer</button>';
    html += '    <span></span>';
  } else {
    html += '    <span></span>';
    html += '    <button type="button" class="btn btn-primary" id="btn-next">Question suivante →</button>';
  }
  html += '  </div>';

  html += '</div>';

  $("#app").innerHTML = html;

  $all(".option-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (currentAnswer()) return;
      lockAnswer(Number(btn.dataset.pos));
    });
  });
  var skipBtn = $("#btn-skip");
  if (skipBtn) skipBtn.addEventListener("click", skipQuestion);
  var nextBtn = $("#btn-next");
  if (nextBtn) { nextBtn.addEventListener("click", goNext); nextBtn.focus(); }

  startTimerTick();
}

function renderReveal(q, ans) {
  var html = '';
  var verdictClass = ans.skipped ? "skipped" : (ans.correct ? "correct" : "wrong");
  var verdictText = ans.skipped
    ? "Passé · +0"
    : (ans.correct ? ("Correct ✓ +" + pointsForCorrect()) : "Faux ✗ −1");

  html += '<div class="verdict-banner ' + verdictClass + '" aria-live="polite">' + verdictText + '</div>';

  var scoreSoFar = computeScore(state.answers, upToIndex(q));
  html += '<div class="score-line">';
  html += '  <span>Score : <b>' + scoreSoFar.points + '</b> pts</span>';
  html += '  <span>Précision : <b>' + scoreSoFar.pct + '%</b></span>';
  html += '</div>';

  if (!ans.skipped) {
    html += '<div class="reveal-section">';
    html += '  <div class="reveal-heading">Explication</div>';
    html += '  <p class="explanation-text">' + esc(q.explanation) + '</p>';
    html += '</div>';

    html += '<div class="reveal-section">';
    html += '  <div class="reveal-heading">Pourquoi les autres réponses sont fausses</div>';
    html += '  <ul class="why-list">';
    var correctPos = displayCorrectPos(q);
    for (var pos = 0; pos < 4; pos++) {
      var origIdx = q._order[pos];
      if (pos === correctPos) {
        html += '<li class="is-correct">' + letterFor(pos) + '. ' + esc(q.options[origIdx]) + ' — bonne réponse.</li>';
      } else {
        html += '<li>' + letterFor(pos) + '. ' + esc(q.whyWrong[origIdx]) + '</li>';
      }
    }
    html += '  </ul>';
    html += '</div>';

    if (q.memoryTrick) {
      html += '<div class="memory-callout">' + ICONS.bulb + '<span><b>Astuce mémoire —</b> ' + esc(q.memoryTrick) + '</span></div>';
    }
  }

  html += '<div class="source-line">Source : ' + esc(q.source) + '</div>';

  if (!ans.skipped && !ans.correct) {
    html += renderAIBlock(q, ans);
  }

  return html;
}

// ---------------------------------------------------------------
// AI "Pourquoi je me suis trompé ?" — rendering + wiring
// (fallback-first: the rule-based explanation above is always shown;
// this block is a purely optional, on-demand enhancement)
// ---------------------------------------------------------------

function renderAIBlock(q, ans) {
  var key = q.id + "::" + ans.pickedPos;
  var cached = getCachedAIExplanation(key);
  var html = '<div class="ai-block">';
  html += '<button type="button" class="btn btn-ghost ai-explain-btn" data-qid="' + q.id + '" data-choice="' + ans.pickedPos + '">' + ICONS.bulbSmall + ' Pourquoi je me suis trompé ? (IA)</button>';
  html += '<div class="ai-panel"' + (cached ? '' : ' hidden') + ' data-ai-panel="' + esc(key) + '">' + (cached ? esc(cached) : '') + '</div>';
  html += '</div>';
  return html;
}

function findQuestionById(id) {
  var inSession = state.session.filter(function (q) { return q.id === id; })[0];
  if (inSession) return inSession;
  return QUESTIONS.concat(AA).filter(function (q) { return q.id === id; })[0];
}

function getCachedAIExplanation(key) {
  if (aiExplanationCache[key]) return aiExplanationCache[key];
  try {
    var raw = localStorage.getItem(AI_CACHE_KEY);
    if (raw) {
      var store = JSON.parse(raw);
      if (store && store[key]) { aiExplanationCache[key] = store[key]; return store[key]; }
    }
  } catch (e) { /* localStorage unavailable — ignore silently */ }
  return null;
}

function setCachedAIExplanation(key, text) {
  aiExplanationCache[key] = text;
  try {
    var raw = localStorage.getItem(AI_CACHE_KEY);
    var store = raw ? JSON.parse(raw) : {};
    store[key] = text;
    localStorage.setItem(AI_CACHE_KEY, JSON.stringify(store));
  } catch (e) { /* localStorage unavailable — ignore silently */ }
}

function showAIPanel(panel, text) {
  panel.hidden = false;
  panel.textContent = text;
}

// getAIExplanation — the ONLY function that ever touches the network, and
// only when explicitly enabled above AND the user clicks the button on a
// wrong answer. Never called automatically, never called for correct or
// skipped answers, never called twice for the same question+choice (the
// caller checks the cache first).
function getAIExplanation(question, choiceIndex) {
  if (!AI_ENABLED || !AI_ENDPOINT) return Promise.reject(new Error("AI disabled"));
  var origIdx = (question._order ? question._order[choiceIndex] : choiceIndex);
  var payload = {
    question: question.question,
    options: question.options,
    correctAnswer: question.options[question.correctIndex],
    userAnswer: question.options[origIdx],
    explanation: question.explanation
  };

  var controller = (typeof AbortController !== "undefined") ? new AbortController() : null;
  var timeoutId = controller ? setTimeout(function () { controller.abort(); }, 15000) : null;

  return fetch(AI_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal: controller ? controller.signal : undefined
  }).then(function (res) {
    if (timeoutId) clearTimeout(timeoutId);
    if (!res.ok) throw new Error("AI request failed (" + res.status + ")");
    return res.json();
  }).then(function (data) {
    var text = (data && data.text) ? String(data.text).slice(0, 400) : "";
    if (!text) throw new Error("Empty AI response");
    return text;
  }).catch(function (err) {
    if (timeoutId) clearTimeout(timeoutId);
    throw err;
  });
}

function handleAIButtonClick(btn) {
  var qid = Number(btn.dataset.qid);
  var choice = Number(btn.dataset.choice);
  var key = qid + "::" + choice;
  var panel = document.querySelector('[data-ai-panel="' + key + '"]');
  if (!panel) return;

  var cached = getCachedAIExplanation(key);
  if (cached) { showAIPanel(panel, cached); return; }

  if (!AI_ENABLED || !AI_ENDPOINT) {
    showAIPanel(panel, "IA indisponible – explication de secours affichée ci-dessus.");
    return;
  }

  showAIPanel(panel, "Chargement…");
  var q = findQuestionById(qid);
  getAIExplanation(q, choice).then(function (text) {
    setCachedAIExplanation(key, text);
    showAIPanel(panel, text);
  }).catch(function () {
    showAIPanel(panel, "IA indisponible – explication de secours affichée ci-dessus.");
  });
}

document.addEventListener("click", function (e) {
  var btn = e.target.closest ? e.target.closest(".ai-explain-btn") : null;
  if (!btn) return;
  handleAIButtonClick(btn);
});

function upToIndex(q) { return state.session.indexOf(q); }

function lockAnswer(pos) {
  var q = currentQuestion();
  if (!q || state.answers[q.id]) return;
  var correctPos = displayCorrectPos(q);
  var correct = pos === correctPos;
  state.answers[q.id] = {
    pickedPos: pos,
    correctPos: correctPos,
    correct: correct,
    skipped: false,
    originalPicked: q._order[pos],
    timeSpent: (Date.now() - state.questionStartTime) / 1000
  };
  saveProgress();
  render();
}

function skipQuestion() {
  var q = currentQuestion();
  if (!q || state.answers[q.id]) return;
  state.answers[q.id] = {
    pickedPos: null,
    correctPos: displayCorrectPos(q),
    correct: false,
    skipped: true,
    originalPicked: null,
    timeSpent: (Date.now() - state.questionStartTime) / 1000
  };
  saveProgress();
  render();
}

function goNext() {
  state.currentIndex++;
  state.questionStartTime = Date.now();
  if (state.currentIndex >= state.session.length) {
    finishExam();
  } else {
    saveProgress();
    render();
  }
}

function finishExam() {
  state.elapsedBeforePause = elapsedSeconds();
  state.startTime = null;
  clearProgress();
  state.screen = "results";
  render();
}

var timerInterval = null;
function startTimerTick() {
  if (timerInterval) clearInterval(timerInterval);
  if (!state.settings.timer) return;
  timerInterval = setInterval(function () {
    var el = $("#timer-display");
    if (el) el.textContent = formatTime(elapsedSeconds());
  }, 1000);
}

// ---------------------------------------------------------------
// Scoring helpers
// ---------------------------------------------------------------

function computeScore(answers, uptoIdx) {
  var pts = pointsForCorrect();
  var points = 0, correct = 0, wrong = 0, skipped = 0, answered = 0;
  var limit = uptoIdx === undefined ? state.session.length - 1 : uptoIdx;
  for (var i = 0; i <= limit && i < state.session.length; i++) {
    var q = state.session[i];
    var a = answers[q.id];
    if (!a) continue;
    answered++;
    if (a.skipped) { skipped++; continue; }
    if (a.correct) { points += pts; correct++; }
    else { points -= 1; wrong++; }
  }
  var pct = answered > 0 ? Math.round((correct / (limit + 1)) * 100) : 0;
  return { points: points, correct: correct, wrong: wrong, skipped: skipped, answered: answered, pct: pct };
}

function fullResults() {
  var pts = pointsForCorrect();
  var points = 0, correct = 0, wrong = 0, skipped = 0;
  var byModule = {};
  var bySubject = {};

  state.session.forEach(function (q) {
    var a = state.answers[q.id];
    byModule[q.module] = byModule[q.module] || { correct: 0, total: 0 };
    byModule[q.module].total++;
    bySubject[q.subject] = bySubject[q.subject] || { correct: 0, total: 0 };
    bySubject[q.subject].total++;

    if (!a) return;
    if (a.skipped) { skipped++; return; }
    if (a.correct) {
      points += pts; correct++;
      byModule[q.module].correct++;
      bySubject[q.subject].correct++;
    } else {
      points -= 1; wrong++;
    }
  });

  var total = state.session.length;
  var pctCorrect = total > 0 ? Math.round((correct / total) * 100) : 0;
  var maxTheoretical = total * pts;

  var level = LEVELS[LEVELS.length - 1];
  for (var i = 0; i < LEVELS.length; i++) {
    if (pctCorrect >= LEVELS[i].min) { level = LEVELS[i]; break; }
  }

  return {
    points: points, maxTheoretical: maxTheoretical, correct: correct, wrong: wrong,
    skipped: skipped, total: total, pctCorrect: pctCorrect, level: level,
    byModule: byModule, bySubject: bySubject
  };
}

// ---------------------------------------------------------------
// Rendering — Results
// ---------------------------------------------------------------

function renderResults() {
  var r = fullResults();

  var html = '';
  html += '<div class="results-score">';
  html += '  <p class="eyebrow">Résultat de la session</p>';
  html += '  <div class="big-number">' + r.points + '</div>';
  html += '  <div class="sub-number">points sur un maximum théorique de ' + r.maxTheoretical + '</div>';
  html += '  <div class="level-badge">' + r.pctCorrect + '% de bonnes réponses — ' + esc(r.level.label) + '</div>';
  html += '  <p class="level-note">' + esc(r.level.note) + ' Estimation indicative, ne reflétant pas une échelle officielle de l\'ENA.</p>';

  html += '  <div class="counts-row">';
  html += '    <div class="count-tile ok"><div class="n">' + r.correct + '</div><div class="l">Correctes</div></div>';
  html += '    <div class="count-tile err"><div class="n">' + r.wrong + '</div><div class="l">Fausses</div></div>';
  html += '    <div class="count-tile skip"><div class="n">' + r.skipped + '</div><div class="l">Non répondues</div></div>';
  html += '  </div>';
  html += '</div>';

  html += '<div class="results-grid">';

  html += '  <div class="card">';
  html += '    <h2 style="font-size:1.1rem;margin-bottom:1rem;">Résultat par module</h2>';
  Object.keys(r.byModule).forEach(function (m) {
    var d = r.byModule[m];
    var pct = d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0;
    html += '    <div class="bar-row"><span class="bar-label">' + esc(m) + '</span><span class="bar-track"><span class="bar-fill" style="width:' + pct + '%"></span></span><span class="bar-pct">' + pct + '%</span></div>';
  });
  html += '  </div>';

  var subjectStats = Object.keys(r.bySubject).map(function (s) {
    var d = r.bySubject[s];
    var pct = d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0;
    return { subject: s, pct: pct, total: d.total };
  }).filter(function (s) { return s.total >= 3; });

  var strong = subjectStats.slice().sort(function (a, b) { return b.pct - a.pct; }).slice(0, 5);
  var weak = subjectStats.slice().sort(function (a, b) { return a.pct - b.pct; }).slice(0, 5);

  html += '  <div class="card">';
  html += '    <h2 style="font-size:1.1rem;margin-bottom:0.75rem;">Points forts</h2>';
  html += '    <ul class="subject-list" style="margin-bottom:1.25rem;">';
  if (strong.length === 0) html += '<li class="text-dim">Pas assez de données (minimum 3 questions par sujet).</li>';
  strong.forEach(function (s) {
    html += '<li><button type="button" class="jump-subject" data-subject="' + esc(s.subject) + '">' + esc(s.subject) + '</button><span class="pct">' + s.pct + '%</span></li>';
  });
  html += '    </ul>';
  html += '    <h2 style="font-size:1.1rem;margin-bottom:0.75rem;">Points faibles</h2>';
  html += '    <ul class="subject-list">';
  if (weak.length === 0) html += '<li class="text-dim">Pas assez de données (minimum 3 questions par sujet).</li>';
  weak.forEach(function (s) {
    html += '<li><button type="button" class="jump-subject" data-subject="' + esc(s.subject) + '">' + esc(s.subject) + '</button><span class="pct">' + s.pct + '%</span></li>';
  });
  html += '    </ul>';
  html += '  </div>';

  html += '</div>'; // results-grid

  html += '<div class="btn-row mt-lg">';
  html += '  <button type="button" class="btn btn-primary" id="btn-review">Mode révision complet</button>';
  html += '  <button type="button" class="btn" id="btn-restart">Recommencer</button>';
  html += '  <button type="button" class="btn btn-ghost" id="btn-home">Changer les paramètres</button>';
  html += '</div>';

  $("#app").innerHTML = html;

  $all(".jump-subject").forEach(function (btn) {
    btn.addEventListener("click", function () {
      state.reviewFilter = { status: "all", module: "all", subtheme: "all", search: btn.dataset.subject };
      state.reviewOpenAll = false;
      state.screen = "review";
      render();
    });
  });

  $("#btn-review").addEventListener("click", function () {
    state.reviewFilter = { status: "all", module: "all", subtheme: "all", search: "" };
    state.reviewOpenAll = false;
    state.screen = "review";
    render();
  });
  $("#btn-restart").addEventListener("click", startNewExam);
  $("#btn-home").addEventListener("click", function () {
    state.screen = "landing";
    render();
  });
}

// ---------------------------------------------------------------
// Rendering — Review
// ---------------------------------------------------------------

function questionStatus(q) {
  var a = state.answers[q.id];
  if (!a) return "unanswered";
  if (a.skipped) return "unanswered";
  return a.correct ? "correct" : "wrong";
}

function subthemeOf(q) { return q.subtheme || q.subject; }

function filteredReviewItems() {
  var f = state.reviewFilter;
  var search = (f.search || "").toLowerCase();
  return state.session.filter(function (q) {
    var status = questionStatus(q);
    if (f.status === "wrong" && status !== "wrong") return false;
    if (f.status === "unanswered" && status !== "unanswered") return false;
    if (f.status === "correct" && status !== "correct") return false;
    if (f.module !== "all" && q.module !== f.module) return false;
    if (f.subtheme && f.subtheme !== "all" && subthemeOf(q) !== f.subtheme) return false;
    if (search) {
      var hay = (q.question + " " + q.subject + " " + q.module).toLowerCase();
      if (hay.indexOf(search) === -1) return false;
    }
    return true;
  });
}

function renderReview() {
  var modules = Array.from(new Set(state.session.map(function (q) { return q.module; })));
  var subthemes = Array.from(new Set(state.session.map(subthemeOf))).sort();
  var items = filteredReviewItems();

  var html = '';
  html += '<div class="filter-bar">';
  ["all", "wrong", "unanswered", "correct"].forEach(function (val) {
    var labels = { all: "Toutes", wrong: "Fausses", unanswered: "Non répondues", correct: "Correctes" };
    var active = state.reviewFilter.status === val ? "active" : "";
    html += '<button type="button" class="toggle-option ' + active + '" data-status="' + val + '">' + labels[val] + '</button>';
  });
  html += '<select id="module-filter">';
  html += '<option value="all">Tous les modules</option>';
  modules.forEach(function (m) {
    html += '<option value="' + esc(m) + '"' + (state.reviewFilter.module === m ? " selected" : "") + '>' + esc(m) + '</option>';
  });
  html += '</select>';
  html += '<select id="subtheme-filter">';
  html += '<option value="all">Tous les sujets</option>';
  subthemes.forEach(function (s) {
    html += '<option value="' + esc(s) + '"' + (state.reviewFilter.subtheme === s ? " selected" : "") + '>' + esc(s) + '</option>';
  });
  html += '</select>';
  html += '<input type="search" id="search-input" placeholder="Rechercher dans les questions…" value="' + esc(state.reviewFilter.search) + '">';
  html += '<button type="button" class="btn" id="btn-open-all">' + (state.reviewOpenAll ? "Tout replier" : "Tout ouvrir") + '</button>';
  html += '<button type="button" class="btn btn-ghost" id="btn-back-results">← Résultats</button>';
  html += '</div>';

  html += '<p class="text-dim" style="margin:0 0 1rem;">' + items.length + ' question(s) affichée(s)</p>';

  items.forEach(function (q) {
    var a = state.answers[q.id];
    var status = questionStatus(q);
    var dotClass = status === "correct" ? "ok" : (status === "wrong" ? "err" : "");
    html += '<details class="review-card"' + (state.reviewOpenAll ? " open" : "") + '>';
    html += '  <summary><span class="status-dot ' + dotClass + '"></span><span>' + esc(q.question) + '</span></summary>';
    html += '  <div class="review-body">';
    html += '    <div class="module-tag">' + esc(q.module) + ' · ' + esc(q.subject) + '</div>';
    if (q.contested) html += '<div class="contested-badge">⚠️ Réponse contestée</div>';

    html += '    <div class="review-options">';
    for (var pos = 0; pos < 4; pos++) {
      var origIdx = q._order[pos];
      var cls = "review-option";
      if (pos === q._order.indexOf(q.correctIndex)) cls += " correct";
      else if (a && a.pickedPos === pos) cls += " wrong-picked";
      html += '<div class="' + cls + '">' + letterFor(pos) + '. ' + esc(q.options[origIdx]) + (a && a.pickedPos === pos ? "  (votre réponse)" : "") + '</div>';
    }
    html += '    </div>';

    html += '    <div class="reveal-section" style="border-top:none;padding-top:0;">';
    html += '      <div class="reveal-heading">Explication</div>';
    html += '      <p class="explanation-text">' + esc(q.explanation) + '</p>';
    html += '    </div>';

    html += '    <div class="reveal-section">';
    html += '      <div class="reveal-heading">Pourquoi les autres réponses sont fausses</div>';
    html += '      <ul class="why-list">';
    var correctPos = q._order.indexOf(q.correctIndex);
    for (var p2 = 0; p2 < 4; p2++) {
      var oi = q._order[p2];
      if (p2 === correctPos) html += '<li class="is-correct">' + letterFor(p2) + '. ' + esc(q.options[oi]) + ' — bonne réponse.</li>';
      else html += '<li>' + letterFor(p2) + '. ' + esc(q.whyWrong[oi]) + '</li>';
    }
    html += '      </ul>';
    html += '    </div>';

    if (q.memoryTrick) {
      html += '    <div class="memory-callout">' + ICONS.bulb + '<span><b>Astuce mémoire —</b> ' + esc(q.memoryTrick) + '</span></div>';
    }
    html += '    <div class="source-line">Source : ' + esc(q.source) + '</div>';
    if (a && !a.skipped && !a.correct) {
      html += renderAIBlock(q, a);
    }
    html += '  </div>';
    html += '</details>';
  });

  $("#app").innerHTML = html;

  $all("[data-status]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      state.reviewFilter.status = btn.dataset.status;
      render();
    });
  });
  $("#module-filter").addEventListener("change", function (e) {
    state.reviewFilter.module = e.target.value;
    render();
  });
  $("#subtheme-filter").addEventListener("change", function (e) {
    state.reviewFilter.subtheme = e.target.value;
    render();
  });
  var searchInput = $("#search-input");
  searchInput.addEventListener("input", function (e) {
    state.reviewFilter.search = e.target.value;
    render();
  });
  $("#btn-open-all").addEventListener("click", function () {
    state.reviewOpenAll = !state.reviewOpenAll;
    render();
  });
  $("#btn-back-results").addEventListener("click", function () {
    state.screen = "results";
    render();
  });
}

// ---------------------------------------------------------------
// Master render + keyboard handling
// ---------------------------------------------------------------

function render() {
  if (state.screen === "landing") renderLanding();
  else if (state.screen === "exam") renderExam();
  else if (state.screen === "results") { if (timerInterval) clearInterval(timerInterval); renderResults(); }
  else if (state.screen === "review") { if (timerInterval) clearInterval(timerInterval); renderReview(); }
}

document.addEventListener("keydown", function (e) {
  if (state.screen !== "exam") return;
  var tag = (e.target && e.target.tagName) || "";
  if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;

  var ans = currentAnswer();
  if (!ans) {
    if (["1", "2", "3", "4"].indexOf(e.key) !== -1) {
      e.preventDefault();
      lockAnswer(Number(e.key) - 1);
    } else if (e.key.toLowerCase() === "s") {
      e.preventDefault();
      skipQuestion();
    }
  } else {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      goNext();
    }
  }
});

// ---------------------------------------------------------------
// Boot
// ---------------------------------------------------------------

render();
