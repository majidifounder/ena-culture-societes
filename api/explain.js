// Vercel serverless function — POST /api/explain
//
// Called on demand by script.js ONLY when a user clicks "Pourquoi je me
// suis trompé ? (IA)" on a wrong answer. Holds the Anthropic API key
// server-side (via the ANTHROPIC_API_KEY environment variable) so it is
// never exposed in the static frontend's source code.
//
// Setup: in the Vercel project dashboard, go to
// Settings -> Environment Variables and add:
//   ANTHROPIC_API_KEY = sk-ant-...   (get one at console.anthropic.com)
// Optionally also set ALLOWED_ORIGIN to your site's exact origin
// (e.g. "https://youruser.github.io") to restrict CORS instead of "*".

const MODEL = "claude-haiku-4-5-20251001";

function truncate(value, max) {
  return String(value == null ? "" : value).slice(0, max);
}

module.exports = async (req, res) => {
  const allowedOrigin = process.env.ALLOWED_ORIGIN || "*";
  res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "Server not configured: missing ANTHROPIC_API_KEY" });
    return;
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }
  body = body || {};

  const question = body.question;
  const options = Array.isArray(body.options) ? body.options : null;
  const correctAnswer = body.correctAnswer;
  const userAnswer = body.userAnswer;
  const explanation = body.explanation;

  if (!question || !options || !correctAnswer || !userAnswer) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  var prompt =
    "Question posee au candidat : " + truncate(question, 500) + "\n" +
    "Options proposees : " + options.map(function (o) { return truncate(o, 200); }).join(" | ") + "\n" +
    "Reponse correcte : " + truncate(correctAnswer, 200) + "\n" +
    "Reponse choisie par le candidat (incorrecte) : " + truncate(userAnswer, 200) + "\n" +
    "Explication de reference : " + truncate(explanation, 600) + "\n\n" +
    "En 2 a 3 phrases maximum, en francais, explique au candidat precisement pourquoi son choix est incorrect et comment mieux retenir la bonne reponse. Sois direct et pedagogique, ne repete pas la question, ne pose pas de nouvelle question.";

  try {
    var upstream = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 220,
        temperature: 0.3,
        system: "Tu es un tuteur bref et precis pour un candidat au concours marocain ENA (Ecoles Nationales d'Architecture), matiere Culture et Societes. Tu reponds uniquement en 2 a 3 phrases, en francais, jamais plus.",
        messages: [{ role: "user", content: prompt }]
      })
    });

    if (!upstream.ok) {
      var errText = await upstream.text().catch(function () { return ""; });
      res.status(502).json({ error: "Upstream error", detail: truncate(errText, 300) });
      return;
    }

    var data = await upstream.json();
    var text = (data && data.content && data.content[0] && data.content[0].text) ? data.content[0].text.trim() : "";

    if (!text) {
      res.status(502).json({ error: "Empty response from model" });
      return;
    }

    res.status(200).json({ text: truncate(text, 500) });
  } catch (err) {
    res.status(500).json({ error: "Request failed", detail: truncate(err && err.message, 300) });
  }
};
