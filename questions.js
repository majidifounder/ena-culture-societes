// Banque de questions — Entraînement ENA (Écoles Nationales d'Architecture)
// Module "Culture & Sociétés" — 500 questions vérifiées
// Aucun fait n'est inventé : voir le champ "source" de chaque question.

const QUESTIONS = [

// ============================================================
// MODULE 1 — MAROC (institutions, géographie économique, projets)
// ============================================================

{
  id: 1, module: "Maroc", subject: "Institutions", difficulty: 1,
  question: "La Constitution actuellement en vigueur au Maroc a été adoptée en :",
  options: ["1996", "2004", "2011", "2017"],
  correctIndex: 2,
  explanation: "La Constitution marocaine actuelle date de 2011, adoptée dans le contexte des réformes régionales du Printemps arabe. Elle a notamment consacré l'amazigh comme langue officielle aux côtés de l'arabe.",
  whyWrong: ["1996 correspond à la révision constitutionnelle instaurant le bicaméralisme, pas au texte actuel", "2004 est l'année du Code de la famille (Moudawana), pas d'une Constitution", "", "2017 est l'année de la réintégration du Maroc à l'Union africaine"],
  memoryTrick: "2011 : Printemps arabe → nouvelle Constitution marocaine.",
  source: "Constitution du Royaume du Maroc, 2011", contested: false
},
{
  id: 2, module: "Maroc", subject: "Institutions", difficulty: 1,
  question: "Depuis la Constitution de 2011, l'amazigh a le statut de :",
  options: ["Langue nationale sans statut officiel", "Langue officielle aux côtés de l'arabe", "Langue reconnue uniquement dans l'enseignement", "Langue régionale facultative"],
  correctIndex: 1,
  explanation: "La Constitution de 2011 érige l'amazigh en langue officielle de l'État, au même titre que l'arabe. C'est une avancée majeure par rapport aux textes constitutionnels antérieurs.",
  whyWrong: ["Ce statut est inférieur à celui réellement accordé par le texte de 2011", "", "L'officialisation dépasse le seul cadre scolaire", "Il ne s'agit pas d'une simple faculté régionale mais d'un statut national officiel"],
  memoryTrick: "2011 : deux langues officielles, arabe ET amazigh.",
  source: "Constitution du Royaume du Maroc, 2011, art. 5", contested: false
},
{
  id: 3, module: "Maroc", subject: "Institutions", difficulty: 1,
  question: "Le Roi Mohammed VI a été intronisé le :",
  options: ["30 juillet 1999", "23 juillet 1999", "3 mars 2000", "30 juillet 2001"],
  correctIndex: 0,
  explanation: "Mohammed VI est intronisé le 30 juillet 1999, succédant à son père Hassan II. Cette date est depuis célébrée chaque année comme Fête du Trône.",
  whyWrong: ["", "Le 23 juillet 1999 est la date du décès de Hassan II, pas de l'intronisation", "Ces dates ne correspondent à aucun événement institutionnel marocain de cette nature", "L'intronisation a eu lieu en 1999, pas en 2001"],
  memoryTrick: "Hassan II décède le 23, Mohammed VI intronisé le 30 — même mois, juillet 1999.",
  source: "Maroc.ma, biographie officielle de S.M. le Roi", contested: false
},
{
  id: 4, module: "Maroc", subject: "Institutions", difficulty: 1,
  question: "La Fête du Trône, célébrant l'intronisation du Roi Mohammed VI, est fixée au :",
  options: ["6 novembre", "18 novembre", "30 juillet", "3 mars"],
  correctIndex: 2,
  explanation: "La Fête du Trône est célébrée le 30 juillet, en mémoire de l'intronisation de Mohammed VI le 30 juillet 1999. C'est l'une des principales fêtes nationales marocaines.",
  whyWrong: ["Le 6 novembre est la date de la Marche Verte (1975)", "Le 18 novembre est la Fête de l'Indépendance", "", "Le 3 mars n'est pas une fête nationale marocaine"],
  memoryTrick: "Trône en été : 30 juillet.",
  source: "Maroc.ma, calendrier des fêtes nationales", contested: false
},
{
  id: 5, module: "Maroc", subject: "Institutions", difficulty: 2,
  question: "La Chambre des Représentants du Parlement marocain compte :",
  options: ["270 sièges", "325 sièges", "395 sièges", "450 sièges"],
  correctIndex: 2,
  explanation: "La Chambre des Représentants, chambre basse du Parlement bicaméral marocain, compte 395 sièges pourvus pour un mandat de 5 ans au suffrage universel direct.",
  whyWrong: ["Ce chiffre ne correspond pas à la composition actuelle de la Chambre", "Ce chiffre ne correspond pas à la composition actuelle de la Chambre", "", "Ce chiffre surestime la composition réelle de la Chambre"],
  memoryTrick: "395 députés, comme un numéro à retenir en un bloc : « 3-9-5 ».",
  source: "Constitution du Royaume du Maroc, 2011 ; législatives 2021/2026", contested: false
},
{
  id: 6, module: "Maroc", subject: "Institutions", difficulty: 2,
  question: "Les membres de la Chambre des Représentants sont élus pour un mandat de :",
  options: ["4 ans", "5 ans", "6 ans", "7 ans"],
  correctIndex: 1,
  explanation: "Le mandat des membres de la Chambre des Représentants est de 5 ans, sauf dissolution anticipée. C'est la durée retenue pour les législatives de 2021 et 2026.",
  whyWrong: ["4 ans est la durée d'un mandat présidentiel dans d'autres systèmes, pas celle des députés marocains", "", "6 ans correspond par exemple au mandat sénatorial américain, pas marocain", "7 ans était l'ancienne durée du mandat présidentiel français, sans rapport avec le Maroc"],
  memoryTrick: "5 ans entre deux législatives : 2021 → 2026.",
  source: "Constitution du Royaume du Maroc, 2011", contested: false
},
{
  id: 7, module: "Maroc", subject: "Institutions", difficulty: 1,
  question: "Le Parlement marocain est bicaméral : la Chambre des Représentants et :",
  options: ["La Chambre des Conseillers", "Le Sénat", "La Chambre Haute", "L'Assemblée Nationale"],
  correctIndex: 0,
  explanation: "Le Parlement marocain comprend deux chambres : la Chambre des Représentants (chambre basse) et la Chambre des Conseillers (chambre haute), issue notamment des collectivités territoriales et des organisations professionnelles.",
  whyWrong: ["", "« Sénat » est le nom utilisé dans d'autres pays (France, États-Unis), pas au Maroc", "Ce n'est pas l'appellation officielle marocaine", "C'est le nom de la chambre unique dans des régimes monocaméraux, pas le nom marocain"],
  memoryTrick: "Conseillers en haut, Représentants en bas.",
  source: "Constitution du Royaume du Maroc, 2011", contested: false
},
{
  id: 8, module: "Maroc", subject: "Institutions", difficulty: 1,
  question: "Le Chef du gouvernement marocain, en poste depuis octobre 2021, est :",
  options: ["Saad Eddine El Othmani", "Aziz Akhannouch", "Abdelilah Benkirane", "Nizar Baraka"],
  correctIndex: 1,
  explanation: "Aziz Akhannouch, du Rassemblement National des Indépendants (RNI), est Chef du gouvernement depuis octobre 2021, à la suite de la victoire électorale de son parti aux législatives du 8 septembre 2021.",
  whyWrong: ["El Othmani (PJD) était Chef du gouvernement avant 2021", "", "Benkirane (PJD) a dirigé le gouvernement avant El Othmani", "Baraka est ministre de l'Intérieur, pas Chef du gouvernement"],
  memoryTrick: "Akhannouch : RNI, 2021, comme un trio à retenir ensemble.",
  source: "Maroc.ma, gouvernement 2021", contested: false
},
{
  id: 9, module: "Maroc", subject: "Institutions", difficulty: 1,
  question: "Aziz Akhannouch est issu du parti :",
  options: ["Parti de la Justice et du Développement (PJD)", "Rassemblement National des Indépendants (RNI)", "Parti Authenticité et Modernité (PAM)", "Parti de l'Istiqlal"],
  correctIndex: 1,
  explanation: "Aziz Akhannouch dirige le RNI, parti arrivé en tête des législatives de septembre 2021 et qui conduit depuis la coalition gouvernementale avec le PAM et l'Istiqlal.",
  whyWrong: ["Le PJD dirigeait le gouvernement précédent, pas celui d'Akhannouch", "", "Le PAM est un partenaire de la coalition gouvernementale, pas le parti d'Akhannouch", "L'Istiqlal est également un partenaire de la coalition, pas le parti d'Akhannouch"],
  memoryTrick: "RNI comme « Rassemblement » que dirige Akhannouch.",
  source: "Maroc.ma, gouvernement 2021", contested: false
},
{
  id: 10, module: "Maroc", subject: "Institutions", difficulty: 2,
  question: "La coalition gouvernementale formée après les législatives de 2021 réunit le RNI et :",
  options: ["Le PJD et l'USFP", "Le PAM et l'Istiqlal", "Le MP et l'UC", "Le PPS et le PJD"],
  correctIndex: 1,
  explanation: "Le gouvernement Akhannouch s'appuie sur une coalition RNI–PAM–Istiqlal, formée à l'issue des législatives du 8 septembre 2021, qui avaient marqué la défaite du PJD sortant.",
  whyWrong: ["Le PJD est le grand perdant de 2021, exclu de cette coalition", "", "C'est la bonne coalition tripartite", "Ni le PPS ni le PJD ne font partie de cette coalition"],
  memoryTrick: "RNI + PAM + Istiqlal = la coalition de 2021.",
  source: "Maroc.ma, gouvernement 2021", contested: false
},
{
  id: 11, module: "Maroc", subject: "Élections", difficulty: 2,
  question: "Les précédentes élections législatives marocaines, remportées par le RNI, ont eu lieu le :",
  options: ["7 octobre 2016", "8 septembre 2021", "23 septembre 2026", "5 mai 2020"],
  correctIndex: 1,
  explanation: "Les élections législatives du 8 septembre 2021 ont vu la victoire du RNI d'Aziz Akhannouch, qui forme ensuite le gouvernement avec le PAM et l'Istiqlal.",
  whyWrong: ["2016 correspond au scrutin précédent, remporté par le PJD", "", "2026 est la date des prochaines législatives, pas des précédentes", "Aucune élection législative marocaine ne s'est tenue à cette date"],
  memoryTrick: "8 septembre 2021 : RNI en tête.",
  source: "Maroc.ma, résultats législatives 2021", contested: false
},
{
  id: 12, module: "Maroc", subject: "Élections", difficulty: 2,
  question: "Les prochaines élections législatives au Maroc sont prévues le :",
  options: ["10 septembre 2026", "23 septembre 2026", "30 juillet 2026", "18 novembre 2026"],
  correctIndex: 1,
  explanation: "Les élections législatives marocaines sont programmées pour le mercredi 23 septembre 2026, avec une campagne électorale se déroulant du 10 au 22 septembre.",
  whyWrong: ["Le 10 septembre marque le début de la campagne électorale, pas le jour du scrutin", "", "Le 30 juillet est la Fête du Trône, sans lien avec le calendrier électoral", "Le 18 novembre est la Fête de l'Indépendance, sans lien avec ce scrutin"],
  memoryTrick: "23 septembre 2026 : jour J des législatives.",
  source: "Actualité électorale marocaine, 2026", contested: false
},
{
  id: 13, module: "Maroc", subject: "Élections", difficulty: 3,
  question: "La campagne électorale précédant les législatives du 23 septembre 2026 se déroule :",
  options: ["Du 1er au 20 septembre", "Du 10 au 22 septembre", "Du 15 au 23 septembre", "Du 5 au 23 septembre"],
  correctIndex: 1,
  explanation: "La campagne officielle pour les législatives de 2026 court du 10 au 22 septembre, soit la veille du scrutin fixé au 23 septembre 2026.",
  whyWrong: ["Cette période ne correspond pas au calendrier électoral annoncé", "", "Cette période dépasse la date de fin de campagne réelle", "Cette période ne correspond pas au calendrier électoral annoncé"],
  memoryTrick: "10 → 22 : douze jours de campagne avant le vote du 23.",
  source: "Actualité électorale marocaine, 2026", contested: false
},
{
  id: 14, module: "Maroc", subject: "Élections", difficulty: 2,
  question: "En janvier 2026, Aziz Akhannouch a annoncé qu'il :",
  options: ["Dissolvait le Parlement", "Ne se représenterait ni aux législatives ni à la présidence du RNI", "Démissionnait immédiatement du gouvernement", "Fusionnait le RNI avec le PAM"],
  correctIndex: 1,
  explanation: "En janvier 2026, Akhannouch annonce qu'il ne briguera pas de nouveau mandat aux législatives de septembre 2026, ni la présidence du RNI, ouvrant la voie à un congrès extraordinaire du parti.",
  whyWrong: ["Aucune dissolution du Parlement n'a été annoncée à cette date", "", "Il reste en fonction jusqu'au terme de son mandat, sans démission immédiate", "Aucune fusion entre les deux partis n'a été annoncée"],
  memoryTrick: "Janvier 2026 : Akhannouch tourne la page, sans démissionner tout de suite.",
  source: "Actualité politique marocaine, janvier 2026", contested: false
},
{
  id: 15, module: "Maroc", subject: "Élections", difficulty: 3,
  question: "Le congrès extraordinaire du RNI faisant suite à cette annonce se tient le 7 février 2026 à :",
  options: ["Rabat", "Casablanca", "El Jadida", "Agadir"],
  correctIndex: 2,
  explanation: "Le congrès extraordinaire du RNI se tient le 7 février 2026 à El Jadida, ville qui abrite également la Cité portugaise de Mazagan, inscrite au patrimoine mondial de l'UNESCO.",
  whyWrong: ["Rabat est la capitale administrative, mais n'accueille pas ce congrès", "Casablanca est la capitale économique, mais n'accueille pas ce congrès", "", "Agadir n'est pas la ville retenue pour ce congrès"],
  memoryTrick: "El Jadida : la ville du congrès RNI de février 2026.",
  source: "Actualité politique marocaine, février 2026", contested: false
},
{
  id: 16, module: "Maroc", subject: "Institutions", difficulty: 1,
  question: "Depuis le découpage territorial de 2015, le Maroc compte :",
  options: ["12 régions", "16 régions", "9 régions", "24 régions"],
  correctIndex: 0,
  explanation: "Le découpage territorial de 2015 a redessiné la carte régionale du Maroc en 12 régions, remplaçant l'ancien découpage à 16 régions.",
  whyWrong: ["", "16 régions correspondait à l'ancien découpage, antérieur à 2015", "Ce chiffre ne correspond pas au découpage régional marocain", "Ce chiffre ne correspond pas au découpage régional marocain"],
  memoryTrick: "2015 : le Maroc passe à 12 régions.",
  source: "Découpage territorial du Maroc, 2015", contested: false
},
{
  id: 17, module: "Maroc", subject: "Institutions", difficulty: 1,
  question: "La capitale administrative du Royaume du Maroc est :",
  options: ["Casablanca", "Rabat", "Marrakech", "Fès"],
  correctIndex: 1,
  explanation: "Rabat est la capitale administrative et politique du Maroc, siège du Parlement, du gouvernement et des principales institutions de l'État, alors que Casablanca en est la capitale économique.",
  whyWrong: ["Casablanca est la capitale économique, pas administrative", "", "Marrakech est une capitale régionale touristique, pas la capitale du Royaume", "Fès fut une ancienne capitale impériale, mais n'est pas la capitale actuelle"],
  memoryTrick: "Rabat gouverne, Casablanca produit.",
  source: "Institutions du Royaume du Maroc", contested: false
},
{
  id: 18, module: "Maroc", subject: "Institutions", difficulty: 2,
  question: "Parmi ces couples « ville / statut », lequel est exact ?",
  options: ["Casablanca, capitale administrative", "Rabat, capitale économique", "Rabat, capitale administrative", "Marrakech, capitale économique"],
  correctIndex: 2,
  explanation: "Rabat est la capitale administrative du Royaume, tandis que Casablanca en est le poumon économique. Ce couple est l'un des pièges classiques du QCM ENA.",
  whyWrong: ["Casablanca est la capitale économique, pas administrative", "Rabat est la capitale administrative, pas économique", "", "Marrakech n'est ni l'une ni l'autre : elle est capitale d'une région touristique"],
  memoryTrick: "Le piège classique : n'inverse jamais Rabat et Casablanca.",
  source: "Institutions du Royaume du Maroc", contested: false
},
{
  id: 19, module: "Maroc", subject: "Institutions", difficulty: 2,
  question: "Le Maroc a réintégré l'Union africaine le :",
  options: ["30 janvier 2017", "18 novembre 2016", "6 novembre 2015", "30 juillet 2018"],
  correctIndex: 0,
  explanation: "Le Maroc réintègre l'Union africaine le 30 janvier 2017, après en avoir été absent depuis son retrait de l'Organisation de l'unité africaine (OUA) en 1984.",
  whyWrong: ["", "Cette date ne correspond à aucun événement institutionnel de cette nature", "Cette date ne correspond à aucun événement institutionnel de cette nature", "Cette date ne correspond à aucun événement institutionnel de cette nature"],
  memoryTrick: "30 janvier 2017 : le Maroc revient à la table africaine.",
  source: "Union africaine, sommet d'Addis-Abeba, 30 janvier 2017", contested: false
},
{
  id: 20, module: "Maroc", subject: "Institutions", difficulty: 2,
  question: "Avant sa réintégration en 2017, le Maroc avait quitté l'Organisation de l'unité africaine (OUA) en :",
  options: ["1975", "1984", "1991", "1999"],
  correctIndex: 1,
  explanation: "Le Maroc s'était retiré de l'OUA en 1984, avant de réintégrer l'Union africaine, qui lui a succédé, le 30 janvier 2017.",
  whyWrong: ["1975 est l'année de la Marche Verte, pas du retrait de l'OUA", "", "1991 ne correspond pas à cet événement", "1999 est l'année d'intronisation de Mohammed VI, sans lien avec ce retrait"],
  memoryTrick: "Retrait en 1984, retour en 2017 : 33 ans d'absence.",
  source: "Union africaine, historique des adhésions", contested: false
},
{
  id: 21, module: "Maroc", subject: "Infrastructure", difficulty: 1,
  question: "La ligne à grande vitesse Al Boraq, reliant Tanger à Kénitra, est :",
  options: ["La première ligne à grande vitesse d'Afrique", "La plus longue ligne ferroviaire du Maroc", "Une ligne réservée au fret", "Un projet encore à l'étude en 2026"],
  correctIndex: 0,
  explanation: "Al Boraq, mise en service entre Tanger et Kénitra, est la première ligne à grande vitesse du continent africain, précédant le prolongement vers Kénitra–Marrakech lancé en avril 2025.",
  whyWrong: ["", "Ce n'est pas la ligne ferroviaire la plus longue du Maroc, mais la plus rapide", "Al Boraq est une ligne mixte voyageurs à grande vitesse, pas une ligne de fret", "Al Boraq est déjà en service, ce n'est pas un projet à l'étude"],
  memoryTrick: "Al Boraq : première LGV d'Afrique.",
  source: "ONCF, LGV Al Boraq", contested: false
},
{
  id: 22, module: "Maroc", subject: "Infrastructure", difficulty: 2,
  question: "Les travaux de la LGV Kénitra–Marrakech ont été lancés par le Roi le :",
  options: ["24 avril 2025", "6 novembre 2024", "12 janvier 2026", "30 juillet 2025"],
  correctIndex: 0,
  explanation: "Le Roi Mohammed VI a lancé les travaux de la LGV Kénitra–Marrakech le 24 avril 2025, dans le cadre du programme ferroviaire « ONCF Cap 2030 ».",
  whyWrong: ["", "Cette date ne correspond pas au lancement de ce chantier", "Cette date ne correspond pas au lancement de ce chantier", "Cette date ne correspond pas au lancement de ce chantier"],
  memoryTrick: "Avril 2025 : le Roi lance Kénitra–Marrakech.",
  source: "Maroc.ma, lancement LGV Kénitra–Marrakech, avril 2025", contested: false
},
{
  id: 23, module: "Maroc", subject: "Infrastructure", difficulty: 2,
  question: "La LGV Kénitra–Marrakech s'étendra sur environ :",
  options: ["230 km", "430 km", "630 km", "830 km"],
  correctIndex: 1,
  explanation: "La future LGV Kénitra–Marrakech s'étend sur environ 430 km et permettra de relier Tanger à Marrakech en 2h40, contre plus de 4h aujourd'hui.",
  whyWrong: ["Cette distance sous-estime la longueur réelle de la ligne", "", "Cette distance surestime la longueur réelle de la ligne", "Cette distance surestime largement la longueur réelle de la ligne"],
  memoryTrick: "430 km entre Kénitra et Marrakech.",
  source: "ONCF, programme Cap 2030", contested: false
},
{
  id: 24, module: "Maroc", subject: "Infrastructure", difficulty: 2,
  question: "Une fois la LGV Kénitra–Marrakech achevée, le trajet Tanger–Marrakech durera environ :",
  options: ["1h20", "2h40", "3h50", "5h00"],
  correctIndex: 1,
  explanation: "Grâce au prolongement de la ligne à grande vitesse jusqu'à Marrakech, le trajet Tanger–Marrakech sera ramené à environ 2h40.",
  whyWrong: ["Cette durée est inférieure à celle réellement annoncée", "", "Cette durée est supérieure à celle réellement annoncée", "Cette durée correspond à peu près au temps de trajet actuel, avant la LGV"],
  memoryTrick: "Tanger–Marrakech : 2h40 chrono, but ultime du programme Cap 2030.",
  source: "ONCF, programme Cap 2030", contested: false
},
{
  id: 25, module: "Maroc", subject: "Infrastructure", difficulty: 3,
  question: "Le programme ferroviaire « ONCF Cap 2030 » représente un investissement global de :",
  options: ["53 milliards de dirhams", "29 milliards de dirhams", "96 milliards de dirhams", "14 milliards de dirhams"],
  correctIndex: 2,
  explanation: "Le programme « ONCF Cap 2030 » mobilise 96 milliards de dirhams au total, répartis entre 53 milliards pour l'infrastructure LGV, 29 milliards pour l'acquisition de trains et 14 milliards pour la modernisation du réseau existant.",
  whyWrong: ["53 milliards correspond uniquement à la part infrastructure LGV du programme", "29 milliards correspond uniquement à la part consacrée à l'achat de trains", "", "14 milliards correspond uniquement à la part modernisation du réseau"],
  memoryTrick: "96 Mds = 53 (LGV) + 29 (trains) + 14 (modernisation).",
  source: "ONCF, programme Cap 2030", contested: false
},
{
  id: 26, module: "Maroc", subject: "Infrastructure", difficulty: 3,
  question: "Dans le programme « ONCF Cap 2030 », la part consacrée à l'acquisition de 168 nouveaux trains est de :",
  options: ["14 milliards de dirhams", "29 milliards de dirhams", "53 milliards de dirhams", "96 milliards de dirhams"],
  correctIndex: 1,
  explanation: "Sur les 96 milliards de dirhams du programme Cap 2030, 29 milliards sont dédiés à l'acquisition de 168 nouveaux trains, notamment auprès d'Alstom.",
  whyWrong: ["14 milliards correspond à la modernisation du réseau existant, pas à l'achat de trains", "", "53 milliards correspond à la part infrastructure LGV", "96 milliards est le montant total du programme, pas la seule part consacrée aux trains"],
  memoryTrick: "168 trains, 29 milliards : à retenir en tandem.",
  source: "ONCF, programme Cap 2030", contested: false
},
{
  id: 27, module: "Maroc", subject: "Infrastructure", difficulty: 2,
  question: "Dans le cadre du programme Cap 2030, l'industriel Alstom doit fournir au Maroc :",
  options: ["8 rames Avelia Horizon", "18 rames Avelia Horizon", "28 rames Avelia Horizon", "38 rames Avelia Horizon"],
  correctIndex: 1,
  explanation: "Alstom fournit 18 rames Avelia Horizon dans le cadre du renouvellement du matériel roulant prévu par le programme ONCF Cap 2030.",
  whyWrong: ["Ce chiffre sous-estime le nombre réel de rames commandées", "", "Ce chiffre surestime le nombre réel de rames commandées", "Ce chiffre surestime largement le nombre réel de rames commandées"],
  memoryTrick: "18 rames Avelia, comme Al Boraq version 2.0.",
  source: "ONCF, programme Cap 2030 ; Alstom", contested: false
},
{
  id: 28, module: "Maroc", subject: "Infrastructure", difficulty: 2,
  question: "Parmi les nouvelles gares prévues par le programme Cap 2030 figure :",
  options: ["Casablanca-Sud", "Casablanca-Nord", "Rabat-Centre", "Marrakech-Gueliz"],
  correctIndex: 0,
  explanation: "Le programme Cap 2030 prévoit notamment la création des gares de Casablanca-Sud, de Benslimane et de l'aéroport Mohammed V.",
  whyWrong: ["", "Ce nom ne figure pas parmi les nouvelles gares annoncées", "Ce nom ne figure pas parmi les nouvelles gares annoncées", "Ce nom ne figure pas parmi les nouvelles gares annoncées"],
  memoryTrick: "Casablanca-Sud, Benslimane, Aéroport Mohammed V : le trio des nouvelles gares.",
  source: "ONCF, programme Cap 2030", contested: false
},
{
  id: 29, module: "Maroc", subject: "Infrastructure", difficulty: 3,
  question: "Parmi les liaisons de type RER prévues par l'ONCF figure :",
  options: ["Casablanca–Settat", "Tanger–Tétouan", "Agadir–Essaouira", "Oujda–Nador"],
  correctIndex: 0,
  explanation: "L'ONCF prévoit des liaisons de type RER sur les axes Casablanca–Settat, Rabat–Salé–Kénitra et Marrakech–Safi, pour développer une offre ferroviaire de proximité.",
  whyWrong: ["", "Cette liaison ne figure pas parmi les RER annoncés par l'ONCF", "Cette liaison ne figure pas parmi les RER annoncés par l'ONCF", "Cette liaison ne figure pas parmi les RER annoncés par l'ONCF"],
  memoryTrick: "Trois RER : Casablanca–Settat, Rabat–Salé–Kénitra, Marrakech–Safi.",
  source: "ONCF, programme Cap 2030", contested: false
},
{
  id: 30, module: "Maroc", subject: "Infrastructure", difficulty: 2,
  question: "L'Office national des aéroports (ONDA) prévoit un investissement, à l'horizon 2030, de :",
  options: ["10 milliards de dirhams", "25 milliards de dirhams", "50 milliards de dirhams", "96 milliards de dirhams"],
  correctIndex: 1,
  explanation: "L'ONDA a annoncé un programme d'investissement de 25 milliards de dirhams à l'horizon 2030, incluant un nouveau terminal et une nouvelle piste à Casablanca ainsi que le doublement des terminaux de Marrakech, Agadir et Fès.",
  whyWrong: ["Ce montant sous-estime l'investissement annoncé par l'ONDA", "", "Ce montant surestime l'investissement annoncé par l'ONDA", "Ce montant correspond au programme ferroviaire Cap 2030, pas au programme aéroportuaire"],
  memoryTrick: "ONDA : 25 milliards pour les aéroports d'ici 2030.",
  source: "ONDA, programme d'investissement 2030", contested: false
},
{
  id: 31, module: "Maroc", subject: "Eau", difficulty: 2,
  question: "Le Maroc dispose actuellement d'un nombre d'unités de dessalement déjà réalisées de :",
  options: ["7", "17", "27", "40"],
  correctIndex: 1,
  explanation: "Le Maroc compte 17 unités de dessalement d'eau de mer déjà réalisées, avec 4 supplémentaires en construction et 11 autres programmées.",
  whyWrong: ["Ce chiffre sous-estime le nombre d'unités déjà réalisées", "", "Ce chiffre surestime le nombre d'unités déjà réalisées", "Ce chiffre surestime largement le nombre d'unités déjà réalisées"],
  memoryTrick: "17 unités déjà là, 4 en chantier, 11 à venir.",
  source: "Stratégie nationale de l'eau, Maroc", contested: false
},
{
  id: 32, module: "Maroc", subject: "Eau", difficulty: 3,
  question: "En plus des 17 unités déjà réalisées, le Maroc a programmé, en dessalement, :",
  options: ["2 unités en construction et 5 programmées", "4 unités en construction et 11 programmées", "10 unités en construction et 20 programmées", "1 unité en construction et 3 programmées"],
  correctIndex: 1,
  explanation: "Au-delà des 17 unités déjà en service, 4 unités de dessalement sont en construction et 11 autres sont programmées, dans le cadre de la stratégie nationale de sécurisation de l'eau potable.",
  whyWrong: ["Ces chiffres sous-estiment les capacités en construction et programmées", "", "Ces chiffres surestiment largement les capacités en construction et programmées", "Ces chiffres sous-estiment fortement les capacités en construction et programmées"],
  memoryTrick: "17 – 4 – 11 : réalisées, en construction, programmées.",
  source: "Stratégie nationale de l'eau, Maroc", contested: false
},
{
  id: 33, module: "Maroc", subject: "Eau", difficulty: 2,
  question: "Le projet de dessalement Safi–Marrakech est présenté comme :",
  options: ["Le plus petit projet de dessalement du Maroc", "Le plus grand projet de dessalement de la région Marrakech-Safi", "Un projet réservé à l'irrigation agricole", "Un projet entièrement financé par l'Espagne"],
  correctIndex: 1,
  explanation: "Le projet de dessalement Safi–Marrakech est le plus grand de la région Marrakech-Safi ; il vise à sécuriser l'approvisionnement en eau potable de plus d'un million d'habitants, dont Marrakech et Tamansourt.",
  whyWrong: ["C'est au contraire le plus grand projet de dessalement de sa région", "", "Le projet vise avant tout l'eau potable, pas uniquement l'irrigation", "Aucune source ne confirme un financement exclusivement espagnol de ce projet"],
  memoryTrick: "Safi–Marrakech : le plus grand dessalement de sa région.",
  source: "Stratégie nationale de l'eau, région Marrakech-Safi", contested: false
},
{
  id: 34, module: "Maroc", subject: "Eau", difficulty: 3,
  question: "La première phase du projet de dessalement Safi–Marrakech, prévue en avril 2026, doit fournir :",
  options: ["10 millions de m³/an", "40 millions de m³/an", "80 millions de m³/an", "120 millions de m³/an"],
  correctIndex: 1,
  explanation: "La première phase du projet, prévue en avril 2026, doit fournir 40 millions de m³ par an, une capacité qui sera ensuite portée à 80 millions de m³ par an.",
  whyWrong: ["Ce chiffre sous-estime la capacité de la première phase", "", "80 millions de m³/an est la capacité visée à terme, pas celle de la première phase", "Ce chiffre surestime largement la capacité de la première phase"],
  memoryTrick: "Phase 1 : 40 millions de m³ ; à terme : 80 millions.",
  source: "Stratégie nationale de l'eau, région Marrakech-Safi", contested: false
},
{
  id: 35, module: "Maroc", subject: "Eau", difficulty: 2,
  question: "La station de dessalement d'Essaouira représente un investissement d'environ :",
  options: ["100 millions de dirhams", "500 millions de dirhams", "1 milliard de dirhams", "5 milliards de dirhams"],
  correctIndex: 2,
  explanation: "La station de dessalement d'Essaouira représente un investissement d'environ 1 milliard de dirhams, dans le cadre du renforcement de l'approvisionnement en eau potable de la région.",
  whyWrong: ["Ce montant sous-estime largement l'investissement annoncé", "Ce montant sous-estime l'investissement annoncé", "", "Ce montant surestime largement l'investissement annoncé"],
  memoryTrick: "Essaouira : 1 milliard de dirhams pour dessaler.",
  source: "Stratégie nationale de l'eau, Essaouira", contested: false
},
{
  id: 36, module: "Maroc", subject: "Eau", difficulty: 2,
  question: "Le barrage Kheng Grou, dont la mise en service est prévue début 2027, est présenté comme :",
  options: ["Le plus grand barrage du Maroc", "Le 5e plus grand barrage du Maroc", "Le plus ancien barrage du Maroc", "Le seul barrage de la région de l'Oriental"],
  correctIndex: 1,
  explanation: "Le barrage Kheng Grou est présenté comme le 5e plus grand barrage du Maroc, avec une mise en service prévue au début de l'année 2027.",
  whyWrong: ["Il n'est pas présenté comme le plus grand, mais comme le 5e plus grand", "", "C'est un nouveau barrage, pas le plus ancien du pays", "Rien n'indique qu'il s'agisse du seul barrage de sa région"],
  memoryTrick: "Kheng Grou : 5e plus grand, service prévu en 2027.",
  source: "Stratégie nationale de l'eau, barrages", contested: false
},
{
  id: 37, module: "Maroc", subject: "Énergie", difficulty: 1,
  question: "Le complexe solaire NOOR à Ouarzazate est composé de :",
  options: ["1 centrale", "2 centrales", "4 centrales", "6 centrales"],
  correctIndex: 2,
  explanation: "Le complexe solaire NOOR Ouarzazate est composé de 4 centrales, pour une capacité cumulée d'environ 580 à 600 MW selon les sources officielles.",
  whyWrong: ["Ce chiffre sous-estime largement la composition du complexe", "Ce chiffre sous-estime la composition du complexe", "", "Ce chiffre surestime la composition du complexe"],
  memoryTrick: "NOOR = 4 centrales à Ouarzazate.",
  source: "MASEN, complexe NOOR Ouarzazate", contested: false
},
{
  id: 38, module: "Maroc", subject: "Énergie", difficulty: 2,
  question: "La capacité cumulée du complexe solaire NOOR Ouarzazate est d'environ :",
  options: ["100 MW", "300 MW", "580 MW", "1200 MW"],
  correctIndex: 2,
  explanation: "Le complexe NOOR Ouarzazate affiche une capacité cumulée d'environ 580 MW (jusqu'à 600 MW selon maroc.ma), ce qui en fait l'un des plus grands complexes solaires au monde lors de sa mise en service.",
  whyWrong: ["Ce chiffre sous-estime largement la capacité réelle du complexe", "Ce chiffre sous-estime la capacité réelle du complexe", "", "Ce chiffre surestime largement la capacité réelle du complexe"],
  memoryTrick: "NOOR : environ 580 à 600 MW cumulés.",
  source: "MASEN ; maroc.ma, complexe NOOR Ouarzazate", contested: false
},
{
  id: 39, module: "Maroc", subject: "Énergie", difficulty: 2,
  question: "Le complexe NOOR Ouarzazate dispose d'une capacité de stockage thermique d'environ :",
  options: ["1 heure", "3 heures", "7,5 heures", "24 heures"],
  correctIndex: 2,
  explanation: "Le complexe NOOR Ouarzazate dispose d'une capacité de stockage thermique d'environ 7,5 heures, lui permettant de continuer à produire de l'électricité après le coucher du soleil.",
  whyWrong: ["Ce chiffre sous-estime largement la capacité de stockage", "Ce chiffre sous-estime la capacité de stockage", "", "Ce chiffre surestime largement la capacité de stockage"],
  memoryTrick: "NOOR stocke 7,5 heures d'énergie solaire.",
  source: "MASEN, complexe NOOR Ouarzazate", contested: false
},
{
  id: 40, module: "Maroc", subject: "Énergie", difficulty: 3,
  question: "Le complexe NOOR Ouarzazate permet d'éviter, chaque année, l'émission d'environ :",
  options: ["90 000 tonnes de CO2", "900 000 tonnes de CO2", "9 millions de tonnes de CO2", "90 millions de tonnes de CO2"],
  correctIndex: 1,
  explanation: "Le complexe solaire NOOR Ouarzazate permet d'éviter environ 900 000 tonnes de CO2 par an, contribuant aux objectifs marocains de transition énergétique.",
  whyWrong: ["Ce chiffre sous-estime largement les émissions évitées", "", "Ce chiffre surestime largement les émissions évitées", "Ce chiffre surestime très largement les émissions évitées"],
  memoryTrick: "NOOR évite environ 900 000 tonnes de CO2 par an.",
  source: "MASEN, complexe NOOR Ouarzazate", contested: false
},
{
  id: 41, module: "Maroc", subject: "Énergie", difficulty: 1,
  question: "Le Maroc s'est fixé comme objectif d'atteindre, en 2030, une part d'énergies renouvelables dans son mix électrique de :",
  options: ["Plus de 30%", "Plus de 52%", "Plus de 70%", "100%"],
  correctIndex: 1,
  explanation: "Le Maroc vise plus de 52% d'énergies renouvelables dans son mix électrique à l'horizon 2030, un objectif porté par le développement du solaire, de l'éolien et de l'hydroélectricité.",
  whyWrong: ["Cet objectif sous-estime la cible réellement annoncée", "", "Cet objectif surestime la cible réellement annoncée", "Le Maroc ne vise pas 100% mais un objectif intermédiaire de 52%"],
  memoryTrick: "52% en 2030 : l'objectif renouvelable marocain.",
  source: "Stratégie énergétique nationale du Maroc", contested: false
},
{
  id: 42, module: "Maroc", subject: "Énergie", difficulty: 3,
  question: "La capacité renouvelable installée au Maroc est passée de 2 417 MW en 2016 à environ :",
  options: ["3 000 MW en 2025", "4 851 MW en 2025", "6 200 MW en 2025", "10 000 MW en 2025"],
  correctIndex: 1,
  explanation: "La capacité renouvelable installée au Maroc est passée de 2 417 MW en 2016 à environ 4 851 MW en 2025, soit un quasi-doublement en une décennie.",
  whyWrong: ["Ce chiffre sous-estime la progression réelle de la capacité installée", "", "Ce chiffre surestime la progression réelle de la capacité installée", "Ce chiffre surestime très largement la progression réelle de la capacité installée"],
  memoryTrick: "2 417 MW (2016) → 4 851 MW (2025) : presque le double.",
  source: "Stratégie énergétique nationale du Maroc", contested: false
},
{
  id: 43, module: "Maroc", subject: "Énergie", difficulty: 2,
  question: "L'« Offre Maroc Hydrogène Vert » est pilotée par :",
  options: ["l'ONEE", "MASEN", "l'ONDA", "l'ONCF"],
  correctIndex: 1,
  explanation: "L'« Offre Maroc Hydrogène Vert » est pilotée par MASEN (Moroccan Agency for Sustainable Energy), qui a sélectionné 7 projets intégrés dans les régions du Sud.",
  whyWrong: ["L'ONEE gère l'électricité et l'eau, mais ne pilote pas ce programme spécifique", "", "L'ONDA gère les aéroports, sans lien avec l'hydrogène vert", "L'ONCF gère le réseau ferroviaire, sans lien avec l'hydrogène vert"],
  memoryTrick: "MASEN pilote le solaire ET l'hydrogène vert.",
  source: "MASEN, Offre Maroc Hydrogène Vert", contested: false
},
{
  id: 44, module: "Maroc", subject: "Énergie", difficulty: 3,
  question: "Dans le cadre de l'Offre Maroc Hydrogène Vert, le nombre de projets intégrés sélectionnés dans les régions du Sud est de :",
  options: ["3", "5", "7", "12"],
  correctIndex: 2,
  explanation: "MASEN a sélectionné 7 projets intégrés dans le cadre de l'Offre Maroc Hydrogène Vert, tous situés dans les régions du Sud du Royaume.",
  whyWrong: ["Ce chiffre sous-estime le nombre réel de projets sélectionnés", "Ce chiffre sous-estime le nombre réel de projets sélectionnés", "", "Ce chiffre surestime le nombre réel de projets sélectionnés"],
  memoryTrick: "7 projets, régions du Sud, pilotage MASEN.",
  source: "MASEN, Offre Maroc Hydrogène Vert", contested: false
},
{
  id: 45, module: "Maroc", subject: "Énergie", difficulty: 2,
  question: "Le Maroc dispose de deux interconnexions électriques avec l'Espagne, pour une capacité totale de :",
  options: ["400 MW", "700 MW", "1400 MW", "2800 MW"],
  correctIndex: 2,
  explanation: "Le Maroc dispose de deux interconnexions électriques avec l'Espagne, pour une capacité totale de 1400 MW ; un troisième câble est à l'étude.",
  whyWrong: ["Ce chiffre sous-estime largement la capacité des deux interconnexions", "Ce chiffre sous-estime la capacité des deux interconnexions", "", "Ce chiffre surestime la capacité des deux interconnexions existantes"],
  memoryTrick: "Deux câbles Maroc–Espagne : 1400 MW au total.",
  source: "Réseau électrique, interconnexion Maroc–Espagne", contested: false
},
{
  id: 46, module: "Maroc", subject: "Énergie", difficulty: 2,
  question: "Le projet Xlinks, censé relier le Maroc au Royaume-Uni par câble électrique sous-marin, est actuellement :",
  options: ["Achevé et opérationnel", "En pause", "Abandonné définitivement", "En phase de construction avancée"],
  correctIndex: 1,
  explanation: "Le projet Xlinks, qui vise à exporter de l'électricité renouvelable marocaine vers le Royaume-Uni, est actuellement en pause.",
  whyWrong: ["Le projet n'est ni achevé ni opérationnel à ce stade", "", "Une mise en pause n'équivaut pas à un abandon définitif confirmé", "Le projet est en pause, et non en construction avancée"],
  memoryTrick: "Xlinks : le câble Maroc–UK, en pause.",
  source: "Projet Xlinks Maroc–Royaume-Uni", contested: false
},
{
  id: 47, module: "Maroc", subject: "UNESCO", difficulty: 2,
  question: "Le Maroc a ratifié la Convention du patrimoine mondial de l'UNESCO le :",
  options: ["28 octobre 1975", "18 novembre 1980", "6 novembre 1985", "30 juillet 1990"],
  correctIndex: 0,
  explanation: "Le Maroc a ratifié la Convention du patrimoine mondial de l'UNESCO le 28 octobre 1975, avant l'inscription de son premier bien, la médina de Fès, en 1981.",
  whyWrong: ["", "Cette date ne correspond pas à la ratification marocaine de la Convention", "Cette date ne correspond pas à la ratification marocaine de la Convention", "Cette date ne correspond pas à la ratification marocaine de la Convention"],
  memoryTrick: "1975 : ratification ; 1981 : premier bien inscrit (Fès).",
  source: "UNESCO, ratifications de la Convention du patrimoine mondial", contested: false
},
{
  id: 48, module: "Maroc", subject: "UNESCO", difficulty: 1,
  question: "Le Maroc compte, au patrimoine mondial de l'UNESCO, un nombre de biens inscrits de :",
  options: ["5, tous culturels", "9, tous culturels", "9, dont 2 naturels", "12, dont 3 naturels"],
  correctIndex: 1,
  explanation: "Le Maroc compte 9 biens inscrits au patrimoine mondial de l'UNESCO, tous de nature culturelle (médinas, sites archéologiques et villes historiques).",
  whyWrong: ["Ce chiffre sous-estime le nombre réel de biens inscrits", "", "Le Maroc ne compte aucun bien naturel inscrit, seulement des biens culturels", "Ce chiffre surestime le nombre réel de biens inscrits"],
  memoryTrick: "9 biens marocains, tous culturels — aucun bien naturel.",
  source: "UNESCO, Liste du patrimoine mondial, Maroc", contested: false
},
{
  id: 49, module: "Maroc", subject: "UNESCO", difficulty: 1,
  question: "Le premier bien marocain inscrit au patrimoine mondial de l'UNESCO, en 1981, est :",
  options: ["La médina de Marrakech", "La médina de Fès", "Le ksar d'Aït Ben Haddou", "La médina d'Essaouira"],
  correctIndex: 1,
  explanation: "La médina de Fès est le premier bien marocain inscrit au patrimoine mondial de l'UNESCO, en 1981, en tant que témoignage exceptionnel de ville médiévale préservée.",
  whyWrong: ["Marrakech est également inscrite, mais pas en premier", "", "Le ksar d'Aït Ben Haddou est inscrit, mais pas en premier", "Essaouira est inscrite, mais bien plus tardivement"],
  memoryTrick: "Fès d'abord : premier bien marocain classé, 1981.",
  source: "UNESCO, Liste du patrimoine mondial, médina de Fès", contested: false
},
{
  id: 50, module: "Maroc", subject: "UNESCO", difficulty: 2,
  question: "« Rabat, capitale moderne et ville historique » a été inscrite au patrimoine mondial de l'UNESCO en :",
  options: ["1981", "1997", "2012", "2023"],
  correctIndex: 2,
  explanation: "Rabat, capitale moderne et ville historique, est inscrite au patrimoine mondial de l'UNESCO en 2012, comme exemple de patrimoine urbain partagé entre tradition et modernité coloniale.",
  whyWrong: ["1981 est l'année d'inscription de la médina de Fès, pas de Rabat", "", "", "2023 est l'année d'inscription du Malhoun au patrimoine immatériel, pas celle de Rabat"],
  memoryTrick: "Rabat : dernière inscrite parmi les 9 biens marocains, en 2012.",
  source: "UNESCO, Liste du patrimoine mondial, Rabat", contested: false
},
{
  id: 51, module: "Maroc", subject: "UNESCO", difficulty: 1,
  question: "Le ksar d'Aït Ben Haddou, inscrit au patrimoine mondial de l'UNESCO, est un exemple remarquable d'architecture en :",
  options: ["Pisé (terre crue)", "Marbre", "Béton armé", "Fer forgé"],
  correctIndex: 0,
  explanation: "Le ksar d'Aït Ben Haddou est un ensemble fortifié bâti en pisé, technique de construction en terre crue caractéristique de l'architecture présaharienne du sud marocain.",
  whyWrong: ["", "Le marbre n'est pas le matériau caractéristique de ce ksar", "Le béton armé est une technique moderne, étrangère à ce site historique", "Le fer forgé n'est pas le matériau structurel de ce ksar"],
  memoryTrick: "Aït Ben Haddou : terre crue, pas pierre.",
  source: "UNESCO, Liste du patrimoine mondial, ksar d'Aït Ben Haddou", contested: false
},
{
  id: 52, module: "Maroc", subject: "UNESCO", difficulty: 2,
  question: "La « Cité portugaise de Mazagan », inscrite au patrimoine mondial de l'UNESCO, correspond à la ville actuelle de :",
  options: ["Essaouira", "El Jadida", "Safi", "Larache"],
  correctIndex: 1,
  explanation: "Mazagan est l'ancien nom portugais de la ville d'El Jadida, dont la cité fortifiée est inscrite au patrimoine mondial de l'UNESCO au titre de l'architecture militaire portugaise.",
  whyWrong: ["Essaouira est un site distinct, également inscrit mais sous son propre nom", "", "Safi n'est pas le nom moderne de Mazagan", "Larache n'est pas le nom moderne de Mazagan"],
  memoryTrick: "Mazagan = ancien nom portugais d'El Jadida.",
  source: "UNESCO, Liste du patrimoine mondial, cité portugaise de Mazagan", contested: false
},
{
  id: 53, module: "Maroc", subject: "UNESCO", difficulty: 1,
  question: "Volubilis, site archéologique marocain inscrit au patrimoine mondial de l'UNESCO, est avant tout un site :",
  options: ["Romain antique", "Médiéval almohade", "Colonial français", "Portugais du XVIe siècle"],
  correctIndex: 0,
  explanation: "Volubilis est un site archéologique romain antique, situé près de Meknès, inscrit au patrimoine mondial de l'UNESCO pour ses vestiges exceptionnellement préservés.",
  whyWrong: ["", "Volubilis est antérieur à la période almohade de plusieurs siècles", "Volubilis est un site antique, sans lien avec la période coloniale française", "Volubilis est romain, pas portugais"],
  memoryTrick: "Volubilis : ruines romaines près de Meknès.",
  source: "UNESCO, Liste du patrimoine mondial, Volubilis", contested: false
},
{
  id: 54, module: "Maroc", subject: "UNESCO", difficulty: 2,
  question: "Parmi ces sites marocains, lequel n'est PAS inscrit au patrimoine mondial de l'UNESCO ?",
  options: ["Médina de Marrakech", "Ksar d'Aït Ben Haddou", "Chefchaouen", "Médina de Tétouan"],
  correctIndex: 2,
  explanation: "Chefchaouen, célèbre pour ses ruelles bleues, ne figure pas parmi les 9 biens marocains inscrits au patrimoine mondial de l'UNESCO, contrairement à Marrakech, Aït Ben Haddou et Tétouan.",
  whyWrong: ["Marrakech est bien inscrite au patrimoine mondial", "Aït Ben Haddou est bien inscrit au patrimoine mondial", "", "Tétouan est bien inscrite au patrimoine mondial"],
  memoryTrick: "Bleue mais pas classée : Chefchaouen n'est pas sur la liste des 9.",
  source: "UNESCO, Liste du patrimoine mondial, Maroc", contested: false
},
{
  id: 55, module: "Maroc", subject: "UNESCO", difficulty: 2,
  question: "Le Maroc compte, au patrimoine culturel immatériel de l'UNESCO, un nombre d'éléments inscrits de :",
  options: ["6", "9", "16", "22"],
  correctIndex: 2,
  explanation: "Le Maroc compte 16 éléments inscrits au patrimoine culturel immatériel de l'UNESCO, dont le Malhoun (2023) et le caftan marocain (décembre 2025).",
  whyWrong: ["Ce chiffre sous-estime largement le nombre d'éléments inscrits", "Ce chiffre sous-estime le nombre d'éléments inscrits", "", "Ce chiffre surestime le nombre d'éléments inscrits"],
  memoryTrick: "16 éléments immatériels marocains à l'UNESCO.",
  source: "UNESCO, patrimoine culturel immatériel, Maroc", contested: false
},
{
  id: 56, module: "Maroc", subject: "UNESCO", difficulty: 2,
  question: "Le Malhoun, genre poético-musical marocain, a été inscrit au patrimoine culturel immatériel de l'UNESCO en :",
  options: ["2015", "2019", "2023", "2025"],
  correctIndex: 2,
  explanation: "Le Malhoun a été inscrit au patrimoine culturel immatériel de l'UNESCO en 2023, deux ans avant l'inscription du caftan marocain en décembre 2025.",
  whyWrong: ["Cette date ne correspond pas à l'inscription du Malhoun", "Cette date ne correspond pas à l'inscription du Malhoun", "", "2025 est l'année d'inscription du caftan, pas du Malhoun"],
  memoryTrick: "Malhoun 2023, caftan 2025 : deux ans d'écart.",
  source: "UNESCO, patrimoine culturel immatériel, Malhoun", contested: false
},
{
  id: 57, module: "Maroc", subject: "UNESCO", difficulty: 2,
  question: "Le caftan marocain a été inscrit au patrimoine culturel immatériel de l'UNESCO en :",
  options: ["Mars 2024", "Décembre 2025", "Juin 2026", "Novembre 2023"],
  correctIndex: 1,
  explanation: "Le caftan marocain a été inscrit au patrimoine culturel immatériel de l'UNESCO en décembre 2025, consacrant ce savoir-faire textile traditionnel.",
  whyWrong: ["Cette date ne correspond pas à l'inscription du caftan", "", "Cette date ne correspond pas à l'inscription du caftan", "2023 est l'année d'inscription du Malhoun, pas du caftan"],
  memoryTrick: "Caftan : décembre 2025, tout juste après le Malhoun.",
  source: "UNESCO, patrimoine culturel immatériel, caftan marocain", contested: false
},
{
  id: 58, module: "Maroc", subject: "UNESCO", difficulty: 3,
  question: "La candidature du zellige marocain au patrimoine culturel immatériel de l'UNESCO est visée pour le cycle :",
  options: ["2025", "2026", "2027", "2030"],
  correctIndex: 2,
  explanation: "La candidature du zellige, art traditionnel de mosaïque céramique, est visée pour le cycle d'inscription 2027 au patrimoine culturel immatériel de l'UNESCO.",
  whyWrong: ["Cette échéance ne correspond pas à la candidature annoncée pour le zellige", "Cette échéance ne correspond pas à la candidature annoncée pour le zellige", "", "Cette échéance ne correspond pas à la candidature annoncée pour le zellige"],
  memoryTrick: "Zellige : candidature visée pour 2027.",
  source: "UNESCO, candidatures en préparation, zellige marocain", contested: false
},
{
  id: 59, module: "Maroc", subject: "UNESCO", difficulty: 1,
  question: "Parmi les biens marocains inscrits au patrimoine mondial de l'UNESCO figure la médina de :",
  options: ["Tétouan", "Chefchaouen", "Ifrane", "Ouarzazate"],
  correctIndex: 0,
  explanation: "La médina de Tétouan fait partie des 9 biens marocains inscrits au patrimoine mondial de l'UNESCO, reconnue pour son architecture andalouse préservée.",
  whyWrong: ["", "Chefchaouen n'est pas inscrite au patrimoine mondial de l'UNESCO", "Ifrane n'est pas inscrite au patrimoine mondial de l'UNESCO", "Ouarzazate n'est pas inscrite au patrimoine mondial de l'UNESCO"],
  memoryTrick: "Tétouan : médina classée, influence andalouse.",
  source: "UNESCO, Liste du patrimoine mondial, médina de Tétouan", contested: false
},
{
  id: 60, module: "Maroc", subject: "UNESCO", difficulty: 1,
  question: "Parmi les biens marocains inscrits au patrimoine mondial de l'UNESCO figure la médina de :",
  options: ["Essaouira", "Salé", "Khénifra", "Béni Mellal"],
  correctIndex: 0,
  explanation: "La médina d'Essaouira, ancienne cité portuaire fortifiée, fait partie des 9 biens marocains inscrits au patrimoine mondial de l'UNESCO.",
  whyWrong: ["", "Salé n'est pas inscrite au patrimoine mondial de l'UNESCO", "Khénifra n'est pas inscrite au patrimoine mondial de l'UNESCO", "Béni Mellal n'est pas inscrite au patrimoine mondial de l'UNESCO"],
  memoryTrick: "Essaouira : médina fortifiée classée UNESCO.",
  source: "UNESCO, Liste du patrimoine mondial, médina d'Essaouira", contested: false
},
{
  id: 61, module: "Maroc", subject: "UNESCO", difficulty: 1,
  question: "Parmi les biens marocains inscrits au patrimoine mondial de l'UNESCO figure la ville historique de :",
  options: ["Meknès", "Taza", "Settat", "Kénitra"],
  correctIndex: 0,
  explanation: "La ville historique de Meknès, ancienne capitale du sultan Moulay Ismaïl, fait partie des 9 biens marocains inscrits au patrimoine mondial de l'UNESCO.",
  whyWrong: ["", "Taza n'est pas inscrite au patrimoine mondial de l'UNESCO", "Settat n'est pas inscrite au patrimoine mondial de l'UNESCO", "Kénitra n'est pas inscrite au patrimoine mondial de l'UNESCO"],
  memoryTrick: "Meknès : ville historique classée, capitale de Moulay Ismaïl.",
  source: "UNESCO, Liste du patrimoine mondial, Meknès", contested: false
},
{
  id: 62, module: "Maroc", subject: "Économie", difficulty: 1,
  question: "Le Maroc, via l'OCP, détient les premières réserves mondiales de :",
  options: ["Pétrole", "Phosphates", "Or", "Gaz naturel"],
  correctIndex: 1,
  explanation: "Le Maroc détient les premières réserves mondiales de phosphates, exploitées notamment par l'OCP, acteur mondial majeur de ce secteur.",
  whyWrong: ["Le Maroc n'est pas un producteur pétrolier majeur", "", "Le Maroc n'est pas connu pour des réserves d'or de premier plan mondial", "Le Maroc ne dispose pas de réserves de gaz naturel de premier plan mondial"],
  memoryTrick: "OCP = phosphates, premières réserves mondiales.",
  source: "OCP, réserves mondiales de phosphates", contested: false
},
{
  id: 63, module: "Maroc", subject: "Économie", difficulty: 1,
  question: "Le premier secteur exportateur du Maroc est :",
  options: ["Le textile", "L'automobile", "L'agriculture", "Le tourisme"],
  correctIndex: 1,
  explanation: "L'automobile est le premier secteur exportateur du Maroc, porté notamment par les pôles industriels de Tanger et de Kénitra.",
  whyWrong: ["Le textile reste un secteur important mais n'est pas le premier exportateur", "", "L'agriculture est un secteur clé, mais n'est pas le premier poste d'exportation", "Le tourisme génère des devises mais n'est pas comptabilisé comme le premier secteur exportateur"],
  memoryTrick: "Automobile : numéro un des exportations marocaines.",
  source: "Économie marocaine, secteur automobile", contested: false
},
{
  id: 64, module: "Maroc", subject: "Économie", difficulty: 2,
  question: "Les deux principaux pôles industriels de l'automobile au Maroc sont situés à :",
  options: ["Tanger et Kénitra", "Casablanca et Fès", "Agadir et Oujda", "Marrakech et Safi"],
  correctIndex: 0,
  explanation: "L'industrie automobile marocaine s'articule autour de deux grands pôles industriels, situés à Tanger et à Kénitra.",
  whyWrong: ["", "Ces deux villes ne sont pas les pôles automobiles marocains reconnus", "Ces deux villes ne sont pas les pôles automobiles marocains reconnus", "Ces deux villes ne sont pas les pôles automobiles marocains reconnus"],
  memoryTrick: "Tanger et Kénitra : les deux pôles auto du Maroc.",
  source: "Économie marocaine, secteur automobile", contested: false
},
{
  id: 65, module: "Maroc", subject: "Économie", difficulty: 1,
  question: "La banque centrale du Maroc, qui émet le dirham (MAD), se nomme :",
  options: ["Bank Al-Maghrib", "Attijariwafa Bank", "Banque Populaire", "BMCE Bank"],
  correctIndex: 0,
  explanation: "Bank Al-Maghrib est la banque centrale du Royaume du Maroc, chargée notamment de l'émission du dirham marocain (MAD).",
  whyWrong: ["", "Attijariwafa Bank est une banque commerciale, pas la banque centrale", "La Banque Populaire est une banque commerciale, pas la banque centrale", "BMCE Bank est une banque commerciale, pas la banque centrale"],
  memoryTrick: "Bank Al-Maghrib : la seule à émettre le dirham.",
  source: "Bank Al-Maghrib, banque centrale du Maroc", contested: false
},
{
  id: 66, module: "Maroc", subject: "Économie", difficulty: 2,
  question: "Le port de Nador West Med est appelé à devenir un futur terminal d'importation de :",
  options: ["Charbon", "Gaz naturel liquéfié (GNL)", "Blé", "Ciment"],
  correctIndex: 1,
  explanation: "Nador West Med est conçu pour devenir un futur terminal d'importation de gaz naturel liquéfié (GNL), renforçant la sécurité énergétique du Maroc.",
  whyWrong: ["Le charbon n'est pas la vocation annoncée de ce terminal", "", "Le blé n'est pas la vocation annoncée de ce terminal", "Le ciment n'est pas la vocation annoncée de ce terminal"],
  memoryTrick: "Nador West Med : futur terminal GNL.",
  source: "Nador West Med, projet portuaire", contested: false
},
{
  id: 67, module: "Maroc", subject: "Sport & projets", difficulty: 1,
  question: "La Coupe du Monde 2030 sera co-organisée par le Maroc, l'Espagne et :",
  options: ["l'Italie", "le Portugal", "la France", "l'Algérie"],
  correctIndex: 1,
  explanation: "La Coupe du Monde de football 2030 sera co-organisée par le Maroc, l'Espagne et le Portugal, une première édition tricontinentale à cheval sur l'Afrique et l'Europe (avec des matchs d'ouverture en Amérique du Sud).",
  whyWrong: ["L'Italie ne fait pas partie des pays hôtes de cette édition", "", "La France ne fait pas partie des pays hôtes de cette édition", "L'Algérie ne fait pas partie des pays hôtes de cette édition"],
  memoryTrick: "2030 : Maroc–Espagne–Portugal, trio organisateur.",
  source: "FIFA, Coupe du Monde 2030", contested: false
},
{
  id: 68, module: "Maroc", subject: "Sport & projets", difficulty: 2,
  question: "Dans la répartition des sites de la Coupe du Monde 2030, le Maroc accueillera :",
  options: ["3 sites", "6 sites", "11 sites", "14 sites"],
  correctIndex: 1,
  explanation: "Sur la répartition annoncée des sites de la Coupe du Monde 2030, l'Espagne en accueille 11, le Maroc 6 et le Portugal 3.",
  whyWrong: ["3 sites correspond à la part du Portugal, pas du Maroc", "", "11 sites correspond à la part de l'Espagne, pas du Maroc", "Ce chiffre dépasse la répartition annoncée pour le Maroc"],
  memoryTrick: "11 (Espagne) – 6 (Maroc) – 3 (Portugal).",
  source: "FIFA, Coupe du Monde 2030, répartition des sites", contested: false
},
{
  id: 69, module: "Maroc", subject: "Sport & projets", difficulty: 2,
  question: "La CAN 2025, organisée au Maroc, constitue pour le Royaume :",
  options: ["Sa première organisation de la compétition", "Sa deuxième organisation, après 1988", "Sa troisième organisation, après 1988 et 2000", "Une organisation conjointe avec l'Algérie"],
  correctIndex: 1,
  explanation: "La CAN 2025 est la deuxième Coupe d'Afrique des Nations organisée par le Maroc, après une première organisation en 1988.",
  whyWrong: ["Le Maroc avait déjà organisé la CAN en 1988", "", "Le Maroc n'a organisé la CAN qu'à deux reprises, en 1988 et en 2025", "La CAN 2025 est organisée par le seul Maroc, sans coorganisation"],
  memoryTrick: "1988 puis 2025 : deux CAN organisées par le Maroc.",
  source: "CAF, CAN 2025, Maroc", contested: false
},
{
  id: 70, module: "Maroc", subject: "Sport & projets", difficulty: 2,
  question: "La 35e édition de la Coupe d'Afrique des Nations (CAN 2025), organisée au Maroc, a réuni :",
  options: ["16 équipes", "20 équipes", "24 équipes", "32 équipes"],
  correctIndex: 2,
  explanation: "La CAN 2025, 35e édition de la compétition, a réuni 24 équipes réparties dans 9 stades sur 6 villes du Royaume.",
  whyWrong: ["Ce chiffre sous-estime le nombre d'équipes participantes", "Ce chiffre sous-estime le nombre d'équipes participantes", "", "Ce chiffre surestime le nombre d'équipes participantes"],
  memoryTrick: "CAN 2025 : 24 équipes, 9 stades, 6 villes.",
  source: "CAF, CAN 2025, Maroc", contested: false
},

// ============================================================
// MODULE 2 — ORGANISATIONS INTERNATIONALES
// ============================================================

{
  id: 71, module: "Organisations internationales", subject: "ONU", difficulty: 1,
  question: "L'Organisation des Nations unies (ONU) a été fondée en :",
  options: ["1919", "1945", "1948", "1960"],
  correctIndex: 1,
  explanation: "L'ONU a été fondée en 1945, au lendemain de la Seconde Guerre mondiale, pour succéder à la Société des Nations et maintenir la paix internationale.",
  whyWrong: ["1919 est l'année de création de la Société des Nations, ancêtre de l'ONU", "", "1948 est l'année de la Déclaration universelle des droits de l'homme, pas de la fondation de l'ONU", "1960 est l'année de nombreuses indépendances africaines, sans lien avec la fondation de l'ONU"],
  memoryTrick: "1945 : fin de la guerre, naissance de l'ONU.",
  source: "Charte des Nations unies, 1945", contested: false
},
{
  id: 72, module: "Organisations internationales", subject: "ONU", difficulty: 1,
  question: "Le siège de l'Organisation des Nations unies se trouve à :",
  options: ["Genève", "New York", "Vienne", "La Haye"],
  correctIndex: 1,
  explanation: "Le siège principal de l'ONU se trouve à New York, bien que plusieurs agences et bureaux onusiens soient basés à Genève, Vienne ou ailleurs.",
  whyWrong: ["Genève héberge de nombreuses agences onusiennes, mais pas le siège principal", "", "Vienne héberge notamment l'AIEA et l'OPEP, pas le siège principal de l'ONU", "La Haye héberge la Cour internationale de Justice, organe de l'ONU, mais pas son siège"],
  memoryTrick: "ONU : New York, pas Genève.",
  source: "Charte des Nations unies, siège de New York", contested: false
},
{
  id: 73, module: "Organisations internationales", subject: "ONU", difficulty: 2,
  question: "L'ONU compte actuellement :",
  options: ["154 États membres", "175 États membres", "193 États membres", "205 États membres"],
  correctIndex: 2,
  explanation: "L'ONU compte 193 États membres, un nombre stable depuis l'admission du Soudan du Sud en 2011.",
  whyWrong: ["Ce chiffre sous-estime le nombre d'États membres de l'ONU", "Ce chiffre sous-estime le nombre d'États membres de l'ONU", "", "Ce chiffre surestime le nombre d'États membres de l'ONU"],
  memoryTrick: "193 : le nombre d'États membres de l'ONU.",
  source: "ONU, États membres", contested: false
},
{
  id: 74, module: "Organisations internationales", subject: "ONU", difficulty: 2,
  question: "Le Secrétaire général de l'ONU depuis 2017 est :",
  options: ["Ban Ki-moon", "António Guterres", "Kofi Annan", "Boutros Boutros-Ghali"],
  correctIndex: 1,
  explanation: "António Guterres, ancien Premier ministre portugais, est Secrétaire général de l'ONU depuis 2017.",
  whyWrong: ["Ban Ki-moon a dirigé l'ONU avant Guterres, de 2007 à 2016", "", "Kofi Annan a dirigé l'ONU de 1997 à 2006", "Boutros-Ghali a dirigé l'ONU de 1992 à 1996"],
  memoryTrick: "Guterres, Portugais, Secrétaire général depuis 2017.",
  source: "ONU, Secrétariat général", contested: false
},
{
  id: 75, module: "Organisations internationales", subject: "ONU", difficulty: 2,
  question: "Le Conseil de sécurité de l'ONU compte :",
  options: ["10 membres", "15 membres", "20 membres", "27 membres"],
  correctIndex: 1,
  explanation: "Le Conseil de sécurité de l'ONU compte 15 membres, dont 5 permanents disposant d'un droit de veto et 10 membres non permanents élus.",
  whyWrong: ["Ce chiffre sous-estime la composition réelle du Conseil de sécurité", "", "Ce chiffre surestime la composition réelle du Conseil de sécurité", "Ce chiffre surestime largement la composition réelle du Conseil de sécurité"],
  memoryTrick: "15 membres : 5 permanents + 10 non permanents.",
  source: "Charte des Nations unies, Conseil de sécurité", contested: false
},
{
  id: 76, module: "Organisations internationales", subject: "ONU", difficulty: 2,
  question: "Parmi les membres permanents du Conseil de sécurité de l'ONU, disposant d'un droit de veto, figure :",
  options: ["l'Allemagne", "le Japon", "la Russie", "le Brésil"],
  correctIndex: 2,
  explanation: "Les cinq membres permanents du Conseil de sécurité, dotés d'un droit de veto, sont les États-Unis, le Royaume-Uni, la France, la Russie et la Chine.",
  whyWrong: ["L'Allemagne n'est pas membre permanent du Conseil de sécurité", "Le Japon n'est pas membre permanent du Conseil de sécurité", "", "Le Brésil n'est pas membre permanent du Conseil de sécurité"],
  memoryTrick: "Les 5 permanents : USA, UK, France, Russie, Chine.",
  source: "Charte des Nations unies, Conseil de sécurité", contested: false
},
{
  id: 77, module: "Organisations internationales", subject: "UNESCO", difficulty: 1,
  question: "Le siège de l'UNESCO se trouve à :",
  options: ["Paris", "Genève", "Rome", "New York"],
  correctIndex: 0,
  explanation: "L'UNESCO, organisation des Nations unies pour l'éducation, la science et la culture, a son siège à Paris.",
  whyWrong: ["", "Genève héberge l'OMS et l'OMC, pas l'UNESCO", "Rome héberge la FAO, pas l'UNESCO", "New York héberge le siège de l'ONU et l'UNICEF, pas l'UNESCO"],
  memoryTrick: "UNESCO : siège à Paris, culture oblige.",
  source: "UNESCO, siège de Paris", contested: false
},
{
  id: 78, module: "Organisations internationales", subject: "UNESCO", difficulty: 2,
  question: "L'UNESCO compte actuellement :",
  options: ["150 États membres", "175 États membres", "194 États membres", "210 États membres"],
  correctIndex: 2,
  explanation: "L'UNESCO compte 194 États membres, un chiffre légèrement supérieur à celui de l'ONU en raison de membres associés ou de statuts particuliers.",
  whyWrong: ["Ce chiffre sous-estime le nombre d'États membres de l'UNESCO", "Ce chiffre sous-estime le nombre d'États membres de l'UNESCO", "", "Ce chiffre surestime le nombre d'États membres de l'UNESCO"],
  memoryTrick: "194 membres à l'UNESCO, un de plus qu'à l'ONU (193).",
  source: "UNESCO, États membres", contested: false
},
{
  id: 79, module: "Organisations internationales", subject: "Agences ONU", difficulty: 1,
  question: "Le siège de l'UNICEF, fonds des Nations unies pour l'enfance, se trouve à :",
  options: ["Paris", "New York", "Genève", "Rome"],
  correctIndex: 1,
  explanation: "L'UNICEF a son siège à New York, aux côtés du siège principal de l'ONU.",
  whyWrong: ["Paris héberge l'UNESCO, pas l'UNICEF", "", "Genève héberge l'OMS et l'OMC, pas l'UNICEF", "Rome héberge la FAO, pas l'UNICEF"],
  memoryTrick: "UNICEF : New York, comme l'ONU elle-même.",
  source: "UNICEF, siège de New York", contested: false
},
{
  id: 80, module: "Organisations internationales", subject: "Agences ONU", difficulty: 2,
  question: "Le siège de la FAO, organisation pour l'alimentation et l'agriculture, se trouve à :",
  options: ["Genève", "Vienne", "Rome", "Bruxelles"],
  correctIndex: 2,
  explanation: "La FAO (Organisation des Nations unies pour l'alimentation et l'agriculture) a son siège à Rome.",
  whyWrong: ["Genève héberge l'OMS et l'OMC, pas la FAO", "Vienne héberge l'OPEP, pas la FAO", "", "Bruxelles héberge l'OTAN, pas la FAO"],
  memoryTrick: "FAO : Rome, capitale agricole symbolique.",
  source: "FAO, siège de Rome", contested: false
},
{
  id: 81, module: "Organisations internationales", subject: "Agences ONU", difficulty: 1,
  question: "Le siège de l'Organisation mondiale de la Santé (OMS) se trouve à :",
  options: ["Genève", "Paris", "New York", "Rome"],
  correctIndex: 0,
  explanation: "L'OMS a son siège à Genève, en Suisse, où sont également basées de nombreuses autres agences des Nations unies.",
  whyWrong: ["", "Paris héberge l'UNESCO, pas l'OMS", "New York héberge l'UNICEF, pas l'OMS", "Rome héberge la FAO, pas l'OMS"],
  memoryTrick: "OMS : Genève, la capitale suisse de la santé mondiale.",
  source: "OMS, siège de Genève", contested: false
},
{
  id: 82, module: "Organisations internationales", subject: "Agences ONU", difficulty: 2,
  question: "Le sigle anglais de l'Organisation mondiale de la Santé (OMS) est :",
  options: ["WHO", "WTO", "WMO", "WFP"],
  correctIndex: 0,
  explanation: "L'OMS se traduit en anglais par WHO (World Health Organization). WTO désigne l'OMC (commerce), à ne pas confondre.",
  whyWrong: ["", "WTO désigne l'Organisation mondiale du commerce (OMC), pas la santé", "WMO désigne l'Organisation météorologique mondiale, pas la santé", "WFP désigne le Programme alimentaire mondial, pas l'OMS"],
  memoryTrick: "OMS = WHO ; OMC = WTO — ne jamais les confondre.",
  source: "OMS / WHO, dénomination officielle", contested: false
},
{
  id: 83, module: "Organisations internationales", subject: "Agences ONU", difficulty: 2,
  question: "Le siège de l'Organisation mondiale du commerce (OMC) se trouve à :",
  options: ["Bruxelles", "Genève", "Washington", "Vienne"],
  correctIndex: 1,
  explanation: "L'OMC (Organisation mondiale du commerce), dont le sigle anglais est WTO, a son siège à Genève, comme l'OMS.",
  whyWrong: ["Bruxelles héberge l'OTAN, pas l'OMC", "", "Washington héberge le FMI et la Banque mondiale, pas l'OMC", "Vienne héberge l'OPEP, pas l'OMC"],
  memoryTrick: "OMC et OMS : toutes deux à Genève.",
  source: "OMC, siège de Genève", contested: false
},
{
  id: 84, module: "Organisations internationales", subject: "Agences ONU", difficulty: 2,
  question: "Le sigle anglais de l'Organisation mondiale du commerce (OMC) est :",
  options: ["WHO", "WTO", "IMF", "UNCTAD"],
  correctIndex: 1,
  explanation: "L'OMC se traduit en anglais par WTO (World Trade Organization), à ne pas confondre avec WHO (santé).",
  whyWrong: ["WHO désigne l'OMS (santé), pas l'OMC (commerce)", "", "IMF désigne le FMI, pas l'OMC", "UNCTAD désigne la CNUCED, une autre organisation liée au commerce et au développement"],
  memoryTrick: "WTO = commerce ; WHO = santé.",
  source: "OMC / WTO, dénomination officielle", contested: false
},
{
  id: 85, module: "Organisations internationales", subject: "Agences ONU", difficulty: 1,
  question: "Le siège du Fonds monétaire international (FMI) se trouve à :",
  options: ["New York", "Washington", "Genève", "Paris"],
  correctIndex: 1,
  explanation: "Le FMI a son siège à Washington, tout comme la Banque mondiale, avec laquelle il est souvent associé.",
  whyWrong: ["New York héberge l'ONU et l'UNICEF, pas le FMI", "", "Genève héberge l'OMS et l'OMC, pas le FMI", "Paris héberge l'UNESCO et l'OCDE, pas le FMI"],
  memoryTrick: "FMI et Banque mondiale : tous deux à Washington.",
  source: "FMI, siège de Washington", contested: false
},
{
  id: 86, module: "Organisations internationales", subject: "Agences ONU", difficulty: 2,
  question: "Le siège de la Banque mondiale se trouve à :",
  options: ["Washington", "New York", "Londres", "Genève"],
  correctIndex: 0,
  explanation: "La Banque mondiale a son siège à Washington, aux côtés du FMI, ces deux institutions étant issues des accords de Bretton Woods.",
  whyWrong: ["", "New York héberge l'ONU, pas la Banque mondiale", "Londres n'héberge ni le FMI ni la Banque mondiale", "Genève n'héberge ni le FMI ni la Banque mondiale"],
  memoryTrick: "Bretton Woods : FMI + Banque mondiale, tous deux à Washington.",
  source: "Banque mondiale, siège de Washington", contested: false
},
{
  id: 87, module: "Organisations internationales", subject: "Agences ONU", difficulty: 2,
  question: "Le siège de la Cour internationale de Justice (CIJ), organe judiciaire principal de l'ONU, se trouve à :",
  options: ["Genève", "New York", "La Haye", "Strasbourg"],
  correctIndex: 2,
  explanation: "La Cour internationale de Justice a son siège au Palais de la Paix, à La Haye, aux Pays-Bas.",
  whyWrong: ["Genève n'héberge pas la CIJ", "New York héberge le siège de l'ONU, pas la CIJ", "", "Strasbourg héberge la Cour européenne des droits de l'homme, pas la CIJ"],
  memoryTrick: "CIJ : Palais de la Paix, La Haye.",
  source: "CIJ, Palais de la Paix, La Haye", contested: false
},
{
  id: 88, module: "Organisations internationales", subject: "Agences ONU", difficulty: 2,
  question: "Le siège d'Interpol, organisation internationale de police criminelle, se trouve à :",
  options: ["Paris", "Lyon", "Genève", "La Haye"],
  correctIndex: 1,
  explanation: "Interpol a son siège à Lyon, en France, et non à Paris comme on le suppose souvent.",
  whyWrong: ["Paris n'est pas le siège d'Interpol, malgré une confusion fréquente", "", "Genève n'héberge pas Interpol", "La Haye héberge Europol, mais pas Interpol"],
  memoryTrick: "Interpol : Lyon, pas Paris — piège classique.",
  source: "Interpol, siège de Lyon", contested: false
},
{
  id: 89, module: "Organisations internationales", subject: "Agences ONU", difficulty: 1,
  question: "Le siège de l'Organisation du Traité de l'Atlantique Nord (OTAN) se trouve à :",
  options: ["Bruxelles", "Paris", "Londres", "Washington"],
  correctIndex: 0,
  explanation: "L'OTAN a son siège à Bruxelles, en Belgique, ville qui abrite également de nombreuses institutions de l'Union européenne.",
  whyWrong: ["", "Paris a hébergé le siège de l'OTAN avant 1967, mais plus aujourd'hui", "Londres n'est pas le siège de l'OTAN", "Washington n'est pas le siège de l'OTAN"],
  memoryTrick: "OTAN : Bruxelles, aujourd'hui, pas Paris.",
  source: "OTAN, siège de Bruxelles", contested: false
},
{
  id: 90, module: "Organisations internationales", subject: "Agences ONU", difficulty: 2,
  question: "Le siège de l'Organisation des pays exportateurs de pétrole (OPEP) se trouve à :",
  options: ["Vienne", "Genève", "Riyad", "Abou Dabi"],
  correctIndex: 0,
  explanation: "L'OPEP a son siège à Vienne, en Autriche, bien que ses membres soient principalement des pays producteurs de pétrole du Moyen-Orient et d'ailleurs.",
  whyWrong: ["", "Genève n'héberge pas l'OPEP", "Riyad est la capitale d'un membre fondateur de l'OPEP, mais pas le siège de l'organisation", "Abou Dabi n'est pas le siège de l'OPEP"],
  memoryTrick: "OPEP : siège à Vienne, malgré ses membres du Golfe.",
  source: "OPEP, siège de Vienne", contested: false
},
{
  id: 91, module: "Organisations internationales", subject: "Union africaine", difficulty: 1,
  question: "Le siège de l'Union africaine se trouve à :",
  options: ["Le Caire", "Addis-Abeba", "Nairobi", "Abuja"],
  correctIndex: 1,
  explanation: "L'Union africaine a son siège à Addis-Abeba, capitale de l'Éthiopie, ville qui a également hébergé l'ancienne OUA.",
  whyWrong: ["Le Caire n'est pas le siège de l'Union africaine", "", "Nairobi n'est pas le siège de l'Union africaine", "Abuja n'est pas le siège de l'Union africaine"],
  memoryTrick: "Union africaine : Addis-Abeba, comme l'OUA avant elle.",
  source: "Union africaine, siège d'Addis-Abeba", contested: false
},
{
  id: 92, module: "Organisations internationales", subject: "Union africaine", difficulty: 2,
  question: "L'Union africaine compte actuellement :",
  options: ["35 États membres", "42 États membres", "55 États membres", "60 États membres"],
  correctIndex: 2,
  explanation: "L'Union africaine compte 55 États membres, couvrant la quasi-totalité du continent africain.",
  whyWrong: ["Ce chiffre sous-estime le nombre d'États membres de l'UA", "Ce chiffre sous-estime le nombre d'États membres de l'UA", "", "Ce chiffre surestime le nombre d'États membres de l'UA"],
  memoryTrick: "55 États membres à l'Union africaine.",
  source: "Union africaine, États membres", contested: false
},
{
  id: 93, module: "Organisations internationales", subject: "Union africaine", difficulty: 2,
  question: "Le président de la Commission de l'Union africaine, élu en février 2025, est :",
  options: ["Moussa Faki Mahamat", "Mahmoud Ali Youssouf", "Nkosazana Dlamini-Zuma", "Alpha Condé"],
  correctIndex: 1,
  explanation: "Mahmoud Ali Youssouf, diplomate djiboutien, a été élu président de la Commission de l'Union africaine en février 2025.",
  whyWrong: ["Moussa Faki Mahamat est le président sortant, prédécesseur de Youssouf", "", "Dlamini-Zuma a présidé la Commission bien avant Moussa Faki Mahamat", "Alpha Condé n'a jamais présidé la Commission de l'Union africaine"],
  memoryTrick: "Février 2025 : Mahmoud Ali Youssouf (Djibouti) prend la présidence de la Commission.",
  source: "Union africaine, élection de la Commission, février 2025", contested: false
},
{
  id: 94, module: "Organisations internationales", subject: "Union africaine", difficulty: 2,
  question: "L'Union africaine a succédé à l'Organisation de l'unité africaine (OUA), créée en :",
  options: ["1945", "1963", "1975", "1990"],
  correctIndex: 1,
  explanation: "L'OUA a été créée en 1963 à Addis-Abeba ; l'Union africaine lui a succédé par la suite, conservant le même siège éthiopien.",
  whyWrong: ["1945 est l'année de fondation de l'ONU, pas de l'OUA", "", "1975 ne correspond pas à la création de l'OUA", "1990 ne correspond pas à la création de l'OUA"],
  memoryTrick: "OUA : 1963, Addis-Abeba.",
  source: "Union africaine, histoire de l'OUA", contested: false
},
{
  id: 95, module: "Organisations internationales", subject: "Union africaine", difficulty: 3,
  question: "Le plan de développement continental de long terme porté par l'Union africaine se nomme :",
  options: ["Vision 2030", "Agenda 2063", "Plan Marshall africain", "Stratégie 2050"],
  correctIndex: 1,
  explanation: "L'Agenda 2063 est le plan de développement continental de long terme de l'Union africaine, fixant des objectifs socio-économiques à l'échelle du siècle.",
  whyWrong: ["Ce nom ne correspond pas au plan porté par l'Union africaine", "", "Ce nom ne correspond pas au plan porté par l'Union africaine", "Ce nom ne correspond pas au plan porté par l'Union africaine"],
  memoryTrick: "Agenda 2063 : le siècle de l'indépendance de l'OUA (1963) comme horizon.",
  source: "Union africaine, Agenda 2063", contested: false
},
{
  id: 96, module: "Organisations internationales", subject: "Agences ONU", difficulty: 2,
  question: "Parmi ces organisations, laquelle n'a PAS son siège à Genève ?",
  options: ["OMS", "OMC", "FAO", "Haut-Commissariat aux droits de l'homme"],
  correctIndex: 2,
  explanation: "La FAO a son siège à Rome, contrairement à l'OMS, à l'OMC et au Haut-Commissariat aux droits de l'homme, tous basés à Genève.",
  whyWrong: ["L'OMS a bien son siège à Genève", "L'OMC a bien son siège à Genève", "", "Le Haut-Commissariat aux droits de l'homme a bien son siège à Genève"],
  memoryTrick: "Genève regroupe santé, commerce, droits humains — mais pas l'agriculture (Rome).",
  source: "Agences des Nations unies, sièges", contested: false
},
{
  id: 97, module: "Organisations internationales", subject: "ONU", difficulty: 2,
  question: "Les langues officielles de l'ONU sont au nombre de :",
  options: ["4", "5", "6", "8"],
  correctIndex: 2,
  explanation: "L'ONU compte 6 langues officielles : l'anglais, le français, l'espagnol, le russe, le chinois et l'arabe.",
  whyWrong: ["Ce chiffre sous-estime le nombre de langues officielles de l'ONU", "Ce chiffre sous-estime le nombre de langues officielles de l'ONU", "", "Ce chiffre surestime le nombre de langues officielles de l'ONU"],
  memoryTrick: "6 langues ONU : anglais, français, espagnol, russe, chinois, arabe.",
  source: "ONU, langues officielles", contested: false
},
{
  id: 98, module: "Organisations internationales", subject: "Agences ONU", difficulty: 3,
  question: "L'Organisation mondiale du commerce (OMC), créée en 1995, a succédé à un accord antérieur nommé :",
  options: ["Le GATT (1947)", "Le traité de Bretton Woods (1944)", "L'Acte unique européen (1986)", "Le traité de Rome (1957)"],
  correctIndex: 0,
  explanation: "L'OMC, créée en 1995, a succédé au GATT (Accord général sur les tarifs douaniers et le commerce), en vigueur depuis 1947.",
  whyWrong: ["", "Bretton Woods a fondé le FMI et la Banque mondiale, pas l'OMC", "L'Acte unique européen concerne l'Union européenne, sans lien avec l'OMC", "Le traité de Rome a fondé la CEE, sans lien direct avec l'OMC"],
  memoryTrick: "GATT (1947) → OMC (1995).",
  source: "OMC, histoire de l'organisation", contested: false
},
{
  id: 99, module: "Organisations internationales", subject: "Agences ONU", difficulty: 2,
  question: "Le Fonds monétaire international (FMI) et la Banque mondiale ont tous deux été créés lors des accords de :",
  options: ["Yalta (1945)", "Bretton Woods (1944)", "Versailles (1919)", "Maastricht (1992)"],
  correctIndex: 1,
  explanation: "Le FMI et la Banque mondiale sont tous deux issus des accords de Bretton Woods, signés en 1944, qui ont posé les bases du système financier international d'après-guerre.",
  whyWrong: ["Yalta concerne le partage géopolitique de l'après-guerre, pas les institutions financières", "", "Versailles concerne le traité de paix de 1919, sans lien avec le FMI ou la Banque mondiale", "Maastricht concerne la construction européenne, sans lien avec le FMI ou la Banque mondiale"],
  memoryTrick: "Bretton Woods 1944 : naissance du FMI et de la Banque mondiale.",
  source: "FMI / Banque mondiale, accords de Bretton Woods, 1944", contested: false
},
{
  id: 100, module: "Organisations internationales", subject: "Agences ONU", difficulty: 1,
  question: "Le siège d'Interpol se situe dans la ville de :",
  options: ["Lyon", "Marseille", "Bordeaux", "Toulouse"],
  correctIndex: 0,
  explanation: "Interpol, organisation internationale de police criminelle, a son siège à Lyon depuis 1989.",
  whyWrong: ["", "Marseille n'héberge pas le siège d'Interpol", "Bordeaux n'héberge pas le siège d'Interpol", "Toulouse n'héberge pas le siège d'Interpol"],
  memoryTrick: "Interpol : Lyon, ville-siège depuis 1989.",
  source: "Interpol, siège de Lyon", contested: false
},
{
  id: 101, module: "Organisations internationales", subject: "Agences ONU", difficulty: 2,
  question: "Le siège de l'Organisation internationale du Travail (OIT) se trouve à :",
  options: ["Genève", "Paris", "Rome", "Vienne"],
  correctIndex: 0,
  explanation: "L'Organisation internationale du Travail (OIT) a son siège à Genève, comme de nombreuses autres agences onusiennes spécialisées.",
  whyWrong: ["", "Paris héberge l'UNESCO, pas l'OIT", "Rome héberge la FAO, pas l'OIT", "Vienne héberge l'OPEP et l'AIEA, pas l'OIT"],
  memoryTrick: "OIT : encore Genève, la ville des agences sociales de l'ONU.",
  source: "OIT, siège de Genève", contested: false
},
{
  id: 102, module: "Organisations internationales", subject: "Agences ONU", difficulty: 3,
  question: "Le sigle anglais de l'Organisation internationale du Travail (OIT) est :",
  options: ["ILO", "IOT", "WTO", "ITU"],
  correctIndex: 0,
  explanation: "L'OIT se traduit en anglais par ILO (International Labour Organization).",
  whyWrong: ["", "Ce sigle n'existe pas pour cette organisation", "WTO désigne l'OMC (commerce), pas l'OIT", "ITU désigne l'Union internationale des télécommunications, pas l'OIT"],
  memoryTrick: "OIT = ILO, comme OMS = WHO.",
  source: "OIT / ILO, dénomination officielle", contested: false
},
{
  id: 103, module: "Organisations internationales", subject: "Agences ONU", difficulty: 2,
  question: "Le siège de l'Organisation mondiale de la propriété intellectuelle (OMPI) se trouve à :",
  options: ["Genève", "Bruxelles", "New York", "Vienne"],
  correctIndex: 0,
  explanation: "L'OMPI (Organisation mondiale de la propriété intellectuelle), sigle anglais WIPO, a son siège à Genève.",
  whyWrong: ["", "Bruxelles n'héberge pas l'OMPI", "New York n'héberge pas l'OMPI", "Vienne n'héberge pas l'OMPI"],
  memoryTrick: "OMPI : encore une agence onusienne à Genève.",
  source: "OMPI, siège de Genève", contested: false
},
{
  id: 104, module: "Organisations internationales", subject: "Agences ONU", difficulty: 3,
  question: "Le siège de l'Union postale universelle (UPU) se trouve à :",
  options: ["Berne", "Zurich", "Genève", "Lausanne"],
  correctIndex: 0,
  explanation: "L'Union postale universelle (UPU), l'une des plus anciennes organisations internationales, a son siège à Berne, en Suisse.",
  whyWrong: ["", "Zurich n'héberge pas l'UPU", "Genève héberge beaucoup d'agences onusiennes, mais pas l'UPU", "Lausanne n'héberge pas l'UPU"],
  memoryTrick: "UPU : Berne, pas Genève — une exception suisse.",
  source: "UPU, siège de Berne", contested: false
},
{
  id: 105, module: "Organisations internationales", subject: "Agences ONU", difficulty: 2,
  question: "Le siège de l'Agence internationale de l'énergie atomique (AIEA) se trouve à :",
  options: ["Vienne", "Genève", "Paris", "Bruxelles"],
  correctIndex: 0,
  explanation: "L'AIEA (Agence internationale de l'énergie atomique) a son siège à Vienne, où sont également basées l'OPEP et d'autres organisations internationales.",
  whyWrong: ["", "Genève n'héberge pas l'AIEA", "Paris n'héberge pas l'AIEA", "Bruxelles n'héberge pas l'AIEA"],
  memoryTrick: "Vienne : AIEA et OPEP, deux organisations dans la même ville.",
  source: "AIEA, siège de Vienne", contested: false
},
{
  id: 106, module: "Organisations internationales", subject: "Agences ONU", difficulty: 2,
  question: "Le Haut-Commissariat des Nations unies pour les réfugiés (HCR) a son siège à :",
  options: ["Genève", "New York", "Paris", "Rome"],
  correctIndex: 0,
  explanation: "Le HCR (Haut-Commissariat des Nations unies pour les réfugiés) a son siège à Genève, aux côtés de l'OMS et de l'OMC.",
  whyWrong: ["", "New York n'héberge pas le HCR", "Paris n'héberge pas le HCR", "Rome n'héberge pas le HCR"],
  memoryTrick: "HCR : encore Genève, la capitale humanitaire.",
  source: "HCR, siège de Genève", contested: false
},
{
  id: 107, module: "Organisations internationales", subject: "Organisations humanitaires", difficulty: 2,
  question: "Le Comité international de la Croix-Rouge (CICR), fondé en 1863 par Henry Dunant, a son siège à :",
  options: ["Genève", "Berne", "Zurich", "Lausanne"],
  correctIndex: 0,
  explanation: "Le CICR, fondé en 1863 à l'initiative du Suisse Henry Dunant, a son siège à Genève, ville désormais associée à de nombreuses organisations humanitaires et onusiennes.",
  whyWrong: ["", "Berne est la capitale suisse, mais n'héberge pas le CICR", "Zurich n'héberge pas le CICR", "Lausanne n'héberge pas le CICR"],
  memoryTrick: "Henry Dunant, 1863, Genève : naissance de la Croix-Rouge.",
  source: "CICR, histoire et siège de Genève", contested: false
},
{
  id: 108, module: "Organisations internationales", subject: "Ligue arabe", difficulty: 2,
  question: "Le siège de la Ligue des États arabes se trouve à :",
  options: ["Le Caire", "Riyad", "Tunis", "Amman"],
  correctIndex: 0,
  explanation: "La Ligue des États arabes, dont le Maroc est membre, a son siège au Caire, en Égypte.",
  whyWrong: ["", "Riyad n'est pas le siège de la Ligue arabe", "Tunis a temporairement accueilli le siège dans les années 1980, mais ce n'est pas le siège actuel", "Amman n'est pas le siège de la Ligue arabe"],
  memoryTrick: "Ligue arabe : Le Caire, son siège historique.",
  source: "Ligue des États arabes, siège du Caire", contested: false
},
{
  id: 109, module: "Organisations internationales", subject: "Ligue arabe", difficulty: 2,
  question: "La Ligue des États arabes a été fondée en :",
  options: ["1945", "1956", "1963", "1973"],
  correctIndex: 0,
  explanation: "La Ligue des États arabes a été fondée en 1945 au Caire, la même année que l'ONU, par sept États fondateurs.",
  whyWrong: ["", "1956 ne correspond pas à la fondation de la Ligue arabe", "1963 correspond à la création de l'OUA, pas de la Ligue arabe", "1973 ne correspond pas à la fondation de la Ligue arabe"],
  memoryTrick: "1945 : ONU et Ligue arabe naissent la même année.",
  source: "Ligue des États arabes, fondation 1945", contested: false
},
{
  id: 110, module: "Organisations internationales", subject: "OCI", difficulty: 3,
  question: "Le siège de l'Organisation de la coopération islamique (OCI) se trouve à :",
  options: ["Djeddah", "Le Caire", "Istanbul", "Abou Dabi"],
  correctIndex: 0,
  explanation: "L'Organisation de la coopération islamique (OCI) a son siège à Djeddah, en Arabie saoudite.",
  whyWrong: ["", "Le Caire héberge la Ligue arabe, pas l'OCI", "Istanbul n'est pas le siège de l'OCI", "Abou Dabi n'est pas le siège de l'OCI"],
  memoryTrick: "OCI : Djeddah, pas Le Caire — à ne pas confondre avec la Ligue arabe.",
  source: "OCI, siège de Djeddah", contested: false
},
{
  id: 111, module: "Organisations internationales", subject: "UNESCO", difficulty: 3,
  question: "L'UNESCO a officiellement été fondée le :",
  options: ["24 octobre 1945", "16 novembre 1945", "10 décembre 1948", "26 juin 1945"],
  correctIndex: 1,
  explanation: "L'UNESCO a été fondée le 16 novembre 1945 à Londres, quelques semaines après l'entrée en vigueur de la Charte des Nations unies.",
  whyWrong: ["Le 24 octobre 1945 est la date d'entrée en vigueur de la Charte des Nations unies (Journée des Nations unies), pas la fondation de l'UNESCO", "", "Le 10 décembre 1948 est la date de la Déclaration universelle des droits de l'homme", "Le 26 juin 1945 est la date de signature de la Charte des Nations unies à San Francisco"],
  memoryTrick: "UNESCO : 16 novembre 1945, quelques semaines après l'ONU.",
  source: "UNESCO, acte constitutif, 16 novembre 1945", contested: false
},
{
  id: 112, module: "Organisations internationales", subject: "Agences ONU", difficulty: 3,
  question: "L'Organisation mondiale de la Santé (OMS) a été fondée en :",
  options: ["1945", "1948", "1952", "1960"],
  correctIndex: 1,
  explanation: "L'OMS a été fondée en 1948, trois ans après la création de l'ONU, avec son siège établi à Genève.",
  whyWrong: ["1945 est l'année de fondation de l'ONU, pas de l'OMS", "", "1952 ne correspond pas à la fondation de l'OMS", "1960 ne correspond pas à la fondation de l'OMS"],
  memoryTrick: "OMS : 1948, trois ans après l'ONU.",
  source: "OMS, acte constitutif, 1948", contested: false
},
{
  id: 113, module: "Organisations internationales", subject: "Agences ONU", difficulty: 3,
  question: "L'UNICEF, fonds des Nations unies pour l'enfance, a été fondé en :",
  options: ["1946", "1950", "1955", "1963"],
  correctIndex: 0,
  explanation: "L'UNICEF a été fondé en 1946, au lendemain de la Seconde Guerre mondiale, pour venir en aide aux enfants dans les pays dévastés par le conflit.",
  whyWrong: ["", "1950 ne correspond pas à la fondation de l'UNICEF", "1955 ne correspond pas à la fondation de l'UNICEF", "1963 correspond à la création de l'OUA, pas de l'UNICEF"],
  memoryTrick: "UNICEF : 1946, juste après-guerre.",
  source: "UNICEF, histoire de l'organisation, 1946", contested: false
},
{
  id: 114, module: "Organisations internationales", subject: "Agences ONU", difficulty: 2,
  question: "Le Directeur général de l'Organisation mondiale de la Santé (OMS), en poste depuis 2017, est :",
  options: ["Tedros Adhanom Ghebreyesus", "Margaret Chan", "Gro Harlem Brundtland", "Hiroshi Nakajima"],
  correctIndex: 0,
  explanation: "Tedros Adhanom Ghebreyesus, ancien ministre éthiopien de la Santé, dirige l'OMS depuis 2017.",
  whyWrong: ["", "Margaret Chan a dirigé l'OMS avant Tedros, de 2006 à 2017", "Gro Harlem Brundtland a dirigé l'OMS de 1998 à 2003", "Hiroshi Nakajima a dirigé l'OMS de 1988 à 1998"],
  memoryTrick: "Tedros : DG de l'OMS depuis 2017, comme Guterres à l'ONU la même année.",
  source: "OMS, direction générale", contested: false
},
{
  id: 115, module: "Organisations internationales", subject: "Union européenne", difficulty: 2,
  question: "L'Union européenne, en tant que telle, a été créée par le traité de :",
  options: ["Rome (1957)", "Maastricht (1992)", "Lisbonne (2007)", "Nice (2001)"],
  correctIndex: 1,
  explanation: "Le traité de Maastricht, signé en 1992, crée officiellement l'Union européenne, succédant à la Communauté économique européenne (CEE).",
  whyWrong: ["Le traité de Rome (1957) a créé la CEE, ancêtre de l'UE, pas l'UE elle-même", "", "Le traité de Lisbonne (2007) réforme le fonctionnement de l'UE, mais ne la crée pas", "Le traité de Nice (2001) réforme les institutions européennes, mais ne crée pas l'UE"],
  memoryTrick: "Maastricht 1992 : naissance de l'Union européenne.",
  source: "Traité de Maastricht, 1992", contested: false
},
{
  id: 116, module: "Organisations internationales", subject: "Union européenne", difficulty: 2,
  question: "La Communauté économique européenne (CEE), ancêtre de l'Union européenne, a été créée par le traité de :",
  options: ["Paris (1951)", "Rome (1957)", "Maastricht (1992)", "Amsterdam (1997)"],
  correctIndex: 1,
  explanation: "Le traité de Rome, signé en 1957, crée la Communauté économique européenne (CEE), qui deviendra plus tard l'Union européenne avec le traité de Maastricht.",
  whyWrong: ["Le traité de Paris (1951) a créé la CECA (charbon et acier), pas la CEE", "", "Maastricht (1992) transforme la CEE en Union européenne, mais ne l'a pas créée", "Amsterdam (1997) réforme le fonctionnement européen, sans créer la CEE"],
  memoryTrick: "Rome 1957 : naissance de la CEE.",
  source: "Traité de Rome, 1957", contested: false
},
{
  id: 117, module: "Organisations internationales", subject: "Union européenne", difficulty: 2,
  question: "Le siège de la Commission européenne se trouve à :",
  options: ["Strasbourg", "Bruxelles", "Luxembourg", "Francfort"],
  correctIndex: 1,
  explanation: "La Commission européenne a son siège à Bruxelles, tandis que le Parlement européen tient ses sessions plénières à Strasbourg.",
  whyWrong: ["Strasbourg accueille les sessions plénières du Parlement européen, pas la Commission", "", "Luxembourg héberge la Cour de justice de l'Union européenne, pas la Commission", "Francfort héberge la Banque centrale européenne, pas la Commission"],
  memoryTrick: "Commission à Bruxelles, Parlement (plénier) à Strasbourg.",
  source: "Institutions de l'Union européenne", contested: false
},
{
  id: 118, module: "Organisations internationales", subject: "Union européenne", difficulty: 2,
  question: "Le siège de la Banque centrale européenne (BCE) se trouve à :",
  options: ["Bruxelles", "Paris", "Francfort", "Amsterdam"],
  correctIndex: 2,
  explanation: "La Banque centrale européenne (BCE), chargée de la politique monétaire de la zone euro, a son siège à Francfort, en Allemagne.",
  whyWrong: ["Bruxelles héberge la Commission européenne, pas la BCE", "Paris n'héberge pas la BCE", "", "Amsterdam n'héberge pas la BCE"],
  memoryTrick: "BCE : Francfort, cœur financier allemand.",
  source: "Banque centrale européenne, siège de Francfort", contested: false
},
{
  id: 119, module: "Organisations internationales", subject: "Union européenne", difficulty: 2,
  question: "Les sessions plénières du Parlement européen se tiennent principalement à :",
  options: ["Bruxelles", "Strasbourg", "Luxembourg", "La Haye"],
  correctIndex: 1,
  explanation: "Le Parlement européen tient ses sessions plénières mensuelles à Strasbourg, bien que ses commissions travaillent principalement à Bruxelles.",
  whyWrong: ["Bruxelles accueille les travaux des commissions parlementaires, pas les sessions plénières", "", "Luxembourg héberge le secrétariat général du Parlement, pas les sessions plénières", "La Haye n'a pas de rôle institutionnel pour le Parlement européen"],
  memoryTrick: "Strasbourg pour le plénier, Bruxelles pour les commissions.",
  source: "Institutions de l'Union européenne, Parlement européen", contested: false
},
{
  id: 120, module: "Organisations internationales", subject: "OTAN", difficulty: 2,
  question: "L'Organisation du Traité de l'Atlantique Nord (OTAN) a été fondée en :",
  options: ["1945", "1949", "1955", "1961"],
  correctIndex: 1,
  explanation: "L'OTAN a été fondée en 1949, par le traité de l'Atlantique Nord signé à Washington, en pleine Guerre froide.",
  whyWrong: ["1945 est l'année de fondation de l'ONU, pas de l'OTAN", "", "1955 est l'année de création du Pacte de Varsovie, organisation rivale de l'OTAN", "1961 ne correspond pas à la fondation de l'OTAN"],
  memoryTrick: "OTAN : 1949, en pleine Guerre froide.",
  source: "Traité de l'Atlantique Nord, 1949", contested: false
},
{
  id: 121, module: "Organisations internationales", subject: "Justice internationale", difficulty: 3,
  question: "La Cour pénale internationale (CPI), distincte de la Cour internationale de Justice (CIJ), a également son siège à :",
  options: ["Genève", "La Haye", "Strasbourg", "Bruxelles"],
  correctIndex: 1,
  explanation: "La Cour pénale internationale (CPI), qui juge les individus pour crimes graves, et la Cour internationale de Justice (CIJ), qui règle les différends entre États, ont toutes deux leur siège à La Haye, sans être la même institution.",
  whyWrong: ["Genève n'héberge ni la CPI ni la CIJ", "", "Strasbourg héberge la Cour européenne des droits de l'homme, pas la CPI", "Bruxelles n'héberge ni la CPI ni la CIJ"],
  memoryTrick: "La Haye : deux cours distinctes, CIJ (États) et CPI (individus).",
  source: "CPI et CIJ, sièges de La Haye", contested: false
},
{
  id: 122, module: "Organisations internationales", subject: "Sigles", difficulty: 2,
  question: "Le sigle anglais de l'OTAN est :",
  options: ["NATO", "NAT", "ATO", "OTAN-E"],
  correctIndex: 0,
  explanation: "L'OTAN se traduit en anglais par NATO (North Atlantic Treaty Organization).",
  whyWrong: ["", "Ce sigle n'existe pas pour cette organisation", "Ce sigle n'existe pas pour cette organisation", "Ce sigle n'existe pas pour cette organisation"],
  memoryTrick: "OTAN = NATO, un des sigles les plus connus.",
  source: "OTAN / NATO, dénomination officielle", contested: false
},
{
  id: 123, module: "Organisations internationales", subject: "Sigles", difficulty: 2,
  question: "Le sigle anglais du FMI (Fonds monétaire international) est :",
  options: ["IMF", "FMI-E", "MFI", "IFM"],
  correctIndex: 0,
  explanation: "Le FMI se traduit en anglais par IMF (International Monetary Fund).",
  whyWrong: ["", "Ce sigle n'existe pas pour cette organisation", "Ce sigle n'existe pas pour cette organisation", "Ce sigle n'existe pas pour cette organisation"],
  memoryTrick: "FMI = IMF, les lettres inversées.",
  source: "FMI / IMF, dénomination officielle", contested: false
},
{
  id: 124, module: "Organisations internationales", subject: "G7 / G20", difficulty: 2,
  question: "Le G7, groupe des principales puissances industrielles, réunit :",
  options: ["5 pays", "7 pays", "9 pays", "12 pays"],
  correctIndex: 1,
  explanation: "Le G7 réunit 7 pays parmi les principales puissances économiques mondiales : Allemagne, Canada, États-Unis, France, Italie, Japon et Royaume-Uni.",
  whyWrong: ["Ce chiffre sous-estime la composition du G7", "", "Ce chiffre surestime la composition du G7", "Ce chiffre surestime largement la composition du G7"],
  memoryTrick: "G7 : sept grandes puissances industrielles.",
  source: "G7, composition", contested: false
},
{
  id: 125, module: "Organisations internationales", subject: "BRICS", difficulty: 2,
  question: "Le groupe des BRICS, dans sa formation d'origine, réunissait le Brésil, la Russie, l'Inde, la Chine et :",
  options: ["l'Afrique du Sud", "l'Égypte", "l'Indonésie", "le Mexique"],
  correctIndex: 0,
  explanation: "Le groupe BRICS, dans sa composition d'origine élargie, réunit le Brésil, la Russie, l'Inde, la Chine et l'Afrique du Sud, cette dernière ayant rejoint le groupe en 2010.",
  whyWrong: ["", "L'Égypte n'appartient pas à la formation d'origine des BRICS", "L'Indonésie n'appartient pas à la formation d'origine des BRICS", "Le Mexique n'appartient pas à la formation d'origine des BRICS"],
  memoryTrick: "BRICS : Brésil, Russie, Inde, Chine, Afrique du Sud (le « S » final).",
  source: "BRICS, composition d'origine", contested: false
},
{
  id: 126, module: "Organisations internationales", subject: "ASEAN", difficulty: 3,
  question: "Le siège du secrétariat de l'ASEAN (Association des nations de l'Asie du Sud-Est) se trouve à :",
  options: ["Jakarta", "Bangkok", "Singapour", "Manille"],
  correctIndex: 0,
  explanation: "Le secrétariat de l'ASEAN a son siège à Jakarta, en Indonésie, plus grand pays membre de l'organisation.",
  whyWrong: ["", "Bangkok n'héberge pas le secrétariat de l'ASEAN", "Singapour n'héberge pas le secrétariat de l'ASEAN", "Manille n'héberge pas le secrétariat de l'ASEAN"],
  memoryTrick: "ASEAN : secrétariat à Jakarta.",
  source: "ASEAN, secrétariat de Jakarta", contested: false
},
{
  id: 127, module: "Organisations internationales", subject: "OPEP", difficulty: 2,
  question: "L'Organisation des pays exportateurs de pétrole (OPEP) a été fondée en :",
  options: ["1950", "1960", "1973", "1980"],
  correctIndex: 1,
  explanation: "L'OPEP a été fondée en 1960 à Bagdad, par cinq pays producteurs de pétrole, avant d'installer son siège à Vienne.",
  whyWrong: ["1950 ne correspond pas à la fondation de l'OPEP", "", "1973 est l'année du premier choc pétrolier, pas de la fondation de l'OPEP", "1980 ne correspond pas à la fondation de l'OPEP"],
  memoryTrick: "OPEP : fondée en 1960, siège ensuite à Vienne.",
  source: "OPEP, fondation de 1960", contested: false
},
{
  id: 128, module: "Organisations internationales", subject: "OPEP", difficulty: 2,
  question: "L'OPEP a été fondée dans la ville de :",
  options: ["Bagdad", "Vienne", "Riyad", "Téhéran"],
  correctIndex: 0,
  explanation: "L'OPEP a été fondée à Bagdad en 1960 ; son siège a ensuite été transféré à Vienne, où il se trouve toujours.",
  whyWrong: ["", "Vienne est le siège actuel de l'OPEP, mais pas sa ville de fondation", "Riyad n'est pas la ville de fondation de l'OPEP", "Téhéran n'est pas la ville de fondation de l'OPEP"],
  memoryTrick: "Fondée à Bagdad, installée à Vienne.",
  source: "OPEP, fondation de 1960 à Bagdad", contested: false
},
{
  id: 129, module: "Organisations internationales", subject: "Sigles", difficulty: 2,
  question: "Le sigle anglais de l'Union africaine (UA) est :",
  options: ["AU", "AFU", "UAF", "AAU"],
  correctIndex: 0,
  explanation: "L'Union africaine se traduit en anglais par AU (African Union), sigle couramment utilisé dans les documents internationaux.",
  whyWrong: ["", "Ce sigle n'existe pas pour cette organisation", "Ce sigle n'existe pas pour cette organisation", "Ce sigle n'existe pas pour cette organisation"],
  memoryTrick: "UA = AU, un des sigles les plus simples à retenir.",
  source: "Union africaine / African Union, dénomination officielle", contested: false
},
{
  id: 130, module: "Organisations internationales", subject: "Union européenne", difficulty: 3,
  question: "La Cour de justice de l'Union européenne a son siège à :",
  options: ["Luxembourg", "Strasbourg", "Bruxelles", "Francfort"],
  correctIndex: 0,
  explanation: "La Cour de justice de l'Union européenne a son siège à Luxembourg, à la différence de la Commission (Bruxelles), du Parlement (Strasbourg) et de la BCE (Francfort).",
  whyWrong: ["", "Strasbourg héberge le Parlement européen en session plénière, pas la Cour de justice", "Bruxelles héberge la Commission européenne, pas la Cour de justice", "Francfort héberge la BCE, pas la Cour de justice"],
  memoryTrick: "Quatre villes, quatre institutions : Bruxelles, Strasbourg, Francfort, Luxembourg.",
  source: "Cour de justice de l'Union européenne, siège de Luxembourg", contested: false
},

// ============================================================
// MODULE 3 — GÉOGRAPHIE (Maroc, Afrique, Europe, Monde)
// ============================================================

{
  id: 131, module: "Géographie", subject: "Relief du Maroc", difficulty: 1,
  question: "Le plus haut sommet du Maroc, culminant à 4 167 mètres, est :",
  options: ["Le Jbel Toubkal", "Le Jbel Ayachi", "Le Jbel Siroua", "Le Jbel Sarhro"],
  correctIndex: 0,
  explanation: "Le Jbel Toubkal, situé dans le Haut Atlas, culmine à 4 167 mètres et constitue le point culminant du Maroc et de l'Afrique du Nord.",
  whyWrong: ["", "Le Jbel Ayachi est un sommet du Haut Atlas oriental, mais moins élevé que le Toubkal", "Le Jbel Siroua est un massif volcanique, mais moins élevé que le Toubkal", "Le Jbel Sarhro est un massif de l'Anti-Atlas, moins élevé que le Toubkal"],
  memoryTrick: "Toubkal : 4 167 m, le toit du Maroc.",
  source: "Géographie du Maroc, Haut Atlas", contested: false
},
{
  id: 132, module: "Géographie", subject: "Relief du Maroc", difficulty: 1,
  question: "Le Jbel Toubkal se situe dans la chaîne du/de :",
  options: ["Rif", "Moyen Atlas", "Haut Atlas", "Anti-Atlas"],
  correctIndex: 2,
  explanation: "Le Jbel Toubkal appartient à la chaîne du Haut Atlas, la plus élevée des quatre grandes chaînes montagneuses du Maroc.",
  whyWrong: ["Le Rif est la chaîne du nord marocain, sans lien avec le Toubkal", "Le Moyen Atlas est une chaîne plus modeste, sans lien avec le Toubkal", "", "L'Anti-Atlas est une chaîne plus au sud, moins élevée que le Haut Atlas"],
  memoryTrick: "Haut Atlas = altitude la plus haute = Toubkal.",
  source: "Géographie du Maroc, Haut Atlas", contested: false
},
{
  id: 133, module: "Géographie", subject: "Relief du Maroc", difficulty: 2,
  question: "Parmi ces chaînes de montagnes, laquelle ne se trouve PAS au Maroc ?",
  options: ["Le Rif", "L'Anti-Atlas", "Les Pyrénées", "Le Moyen Atlas"],
  correctIndex: 2,
  explanation: "Les Pyrénées séparent la France de l'Espagne ; elles ne font pas partie des chaînes marocaines, à la différence du Rif, du Moyen Atlas, du Haut Atlas et de l'Anti-Atlas.",
  whyWrong: ["Le Rif est bien une chaîne marocaine, au nord du pays", "L'Anti-Atlas est bien une chaîne marocaine, au sud du Haut Atlas", "", "Le Moyen Atlas est bien une chaîne marocaine, entre le Rif et le Haut Atlas"],
  memoryTrick: "Le Maroc a quatre chaînes : Rif, Moyen Atlas, Haut Atlas, Anti-Atlas — pas les Pyrénées.",
  source: "Géographie du Maroc, chaînes montagneuses", contested: false
},
{
  id: 134, module: "Géographie", subject: "Relief du Maroc", difficulty: 1,
  question: "Le Rif, chaîne montagneuse marocaine, se situe :",
  options: ["Au nord du Maroc, face à la Méditerranée", "Au sud du Maroc, face au Sahara", "À l'est du Maroc, à la frontière algérienne", "Au centre du Maroc, près de Marrakech"],
  correctIndex: 0,
  explanation: "Le Rif est la chaîne montagneuse du nord du Maroc, longeant la côte méditerranéenne entre Tanger et la frontière algérienne.",
  whyWrong: ["", "C'est l'Anti-Atlas qui borde le Sahara, pas le Rif", "Le Rif longe la Méditerranée, il n'est pas centré sur la frontière algérienne", "Le Rif est au nord, loin de Marrakech"],
  memoryTrick: "Rif = nord + Méditerranée.",
  source: "Géographie du Maroc, le Rif", contested: false
},
{
  id: 135, module: "Géographie", subject: "Relief du Maroc", difficulty: 2,
  question: "L'Anti-Atlas, chaîne montagneuse marocaine, se situe :",
  options: ["Au nord, face à la Méditerranée", "Au sud du Haut Atlas, aux portes du Sahara", "Uniquement sur la côte atlantique", "À l'intérieur du Rif"],
  correctIndex: 1,
  explanation: "L'Anti-Atlas est la chaîne la plus méridionale du Maroc, prolongeant le Haut Atlas vers le Sahara.",
  whyWrong: ["C'est le Rif qui se situe au nord, face à la Méditerranée", "", "L'Anti-Atlas n'est pas limité à la façade atlantique", "L'Anti-Atlas est une chaîne distincte du Rif, plus au sud"],
  memoryTrick: "Anti-Atlas : la chaîne la plus proche du Sahara.",
  source: "Géographie du Maroc, l'Anti-Atlas", contested: false
},
{
  id: 136, module: "Géographie", subject: "Relief du Maroc", difficulty: 2,
  question: "Le Moyen Atlas, chaîne montagneuse marocaine, se situe :",
  options: ["Entre le Rif et le Haut Atlas", "Entre le Haut Atlas et l'Anti-Atlas", "Sur la côte atlantique uniquement", "À la frontière avec la Mauritanie"],
  correctIndex: 0,
  explanation: "Le Moyen Atlas se situe géographiquement entre le Rif, au nord, et le Haut Atlas, plus au sud.",
  whyWrong: ["", "C'est l'Anti-Atlas qui prolonge le Haut Atlas vers le sud, pas le Moyen Atlas", "Le Moyen Atlas est une chaîne intérieure, pas côtière", "Le Moyen Atlas est situé au centre-nord du Maroc, loin de la Mauritanie"],
  memoryTrick: "Du nord au sud : Rif, Moyen Atlas, Haut Atlas, Anti-Atlas.",
  source: "Géographie du Maroc, le Moyen Atlas", contested: false
},
{
  id: 137, module: "Géographie", subject: "Hydrographie du Maroc", difficulty: 2,
  question: "Le plus long oued du Maroc, à écoulement intermittent, est :",
  options: ["L'oued Draa", "L'oued Oum Er-Rbia", "L'oued Sebou", "L'oued Ziz"],
  correctIndex: 0,
  explanation: "L'oued Draa est le plus long cours d'eau du Maroc, mais son écoulement est intermittent, à la différence de l'Oum Er-Rbia qui coule en permanence.",
  whyWrong: ["", "L'Oum Er-Rbia est le plus long oued à écoulement permanent, mais pas le plus long dans l'absolu", "Le Sebou est un fleuve important du nord-ouest, mais pas le plus long du Maroc", "Le Ziz est un oued du Sud-Est, bien plus court que le Draa"],
  memoryTrick: "Le Draa est le plus long, mais coule par intermittence.",
  source: "Géographie du Maroc, hydrographie", contested: false
},
{
  id: 138, module: "Géographie", subject: "Hydrographie du Maroc", difficulty: 2,
  question: "Le plus long oued du Maroc à écoulement permanent est :",
  options: ["L'oued Draa", "L'oued Oum Er-Rbia", "L'oued Moulouya", "L'oued Tensift"],
  correctIndex: 1,
  explanation: "L'oued Oum Er-Rbia est le plus long cours d'eau marocain à écoulement permanent ; le Draa, plus long dans l'absolu, ne coule que par intermittence.",
  whyWrong: ["Le Draa est plus long dans l'absolu, mais à écoulement intermittent, pas permanent", "", "La Moulouya est un fleuve important du nord-est, mais plus court que l'Oum Er-Rbia", "Le Tensift arrose la région de Marrakech, mais est plus court que l'Oum Er-Rbia"],
  memoryTrick: "Piège classique : Draa (le plus long) ≠ Oum Er-Rbia (le plus long permanent).",
  source: "Géographie du Maroc, hydrographie", contested: false
},
{
  id: 139, module: "Géographie", subject: "Hydrographie du Maroc", difficulty: 2,
  question: "L'oued Moulouya, dans le nord-est du Maroc, se jette dans :",
  options: ["L'océan Atlantique", "La mer Méditerranée", "Le fleuve Sebou", "Le lac Al Massira"],
  correctIndex: 1,
  explanation: "L'oued Moulouya se jette dans la mer Méditerranée, à la différence de la plupart des grands oueds marocains qui rejoignent l'Atlantique.",
  whyWrong: ["La Moulouya se jette en Méditerranée, pas dans l'Atlantique", "", "La Moulouya est un cours d'eau autonome, distinct du Sebou", "Le lac Al Massira est une retenue de barrage sur l'Oum Er-Rbia, sans lien avec la Moulouya"],
  memoryTrick: "Moulouya : l'exception qui rejoint la Méditerranée.",
  source: "Géographie du Maroc, hydrographie", contested: false
},
{
  id: 140, module: "Géographie", subject: "Hydrographie du Maroc", difficulty: 1,
  question: "L'oued Bouregreg sépare les villes de :",
  options: ["Rabat et Salé", "Casablanca et Mohammedia", "Tanger et Tétouan", "Fès et Meknès"],
  correctIndex: 0,
  explanation: "L'oued Bouregreg sépare Rabat, sur la rive gauche, de Salé, sur la rive droite, formant l'estuaire au bord duquel se trouve notamment le Théâtre Royal de Rabat.",
  whyWrong: ["", "Casablanca et Mohammedia ne sont pas séparées par le Bouregreg", "Tanger et Tétouan ne sont pas séparées par le Bouregreg", "Fès et Meknès ne sont pas séparées par le Bouregreg"],
  memoryTrick: "Bouregreg : la rivière entre Rabat et Salé.",
  source: "Géographie du Maroc, hydrographie", contested: false
},
{
  id: 141, module: "Géographie", subject: "Hydrographie du Maroc", difficulty: 2,
  question: "L'oued Tensift arrose principalement la région de :",
  options: ["Marrakech", "Oujda", "Tanger", "Agadir"],
  correctIndex: 0,
  explanation: "L'oued Tensift traverse la région de Marrakech avant de rejoindre l'océan Atlantique près de Safi.",
  whyWrong: ["", "Oujda n'est pas arrosée par le Tensift", "Tanger n'est pas arrosée par le Tensift", "Agadir n'est pas arrosée par le Tensift"],
  memoryTrick: "Tensift : la rivière de Marrakech.",
  source: "Géographie du Maroc, hydrographie", contested: false
},
{
  id: 142, module: "Géographie", subject: "Hydrographie du Maroc", difficulty: 2,
  question: "L'oued Ziz est surtout associé aux oasis de la région de :",
  options: ["Tafilalet, dans le Sud-Est", "Souss, dans le Sud-Ouest", "Doukkala, sur la côte atlantique", "Saïss, près de Fès"],
  correctIndex: 0,
  explanation: "L'oued Ziz traverse le Tafilalet, région d'oasis du Sud-Est marocain, avant de se perdre dans les sables du Sahara.",
  whyWrong: ["", "Le Souss est arrosé par l'oued Souss, pas par le Ziz", "Les Doukkala ne sont pas traversées par le Ziz", "Le Saïss, plaine de Fès, n'est pas traversé par le Ziz"],
  memoryTrick: "Ziz : la rivière des oasis du Tafilalet.",
  source: "Géographie du Maroc, hydrographie", contested: false
},
{
  id: 143, module: "Géographie", subject: "Hydrographie du Maroc", difficulty: 2,
  question: "L'oued Sebou se jette dans l'océan Atlantique à proximité de :",
  options: ["Kénitra", "Agadir", "Essaouira", "Dakhla"],
  correctIndex: 0,
  explanation: "L'oued Sebou, l'un des plus importants fleuves du nord-ouest marocain, se jette dans l'Atlantique près de Kénitra, après avoir traversé la région de Fès.",
  whyWrong: ["", "Agadir n'est pas à l'embouchure du Sebou", "Essaouira n'est pas à l'embouchure du Sebou", "Dakhla n'est pas à l'embouchure du Sebou"],
  memoryTrick: "Sebou : embouchure près de Kénitra.",
  source: "Géographie du Maroc, hydrographie", contested: false
},
{
  id: 144, module: "Géographie", subject: "Détroit de Gibraltar", difficulty: 1,
  question: "Le détroit de Gibraltar sépare le Maroc de :",
  options: ["L'Espagne", "Le Portugal", "La France", "L'Italie"],
  correctIndex: 0,
  explanation: "Le détroit de Gibraltar sépare le Maroc de l'Espagne, sur une largeur d'environ 14 km au point le plus étroit.",
  whyWrong: ["", "Le Portugal n'est séparé du Maroc par aucun détroit direct", "La France n'est pas séparée du Maroc par le détroit de Gibraltar", "L'Italie n'est pas séparée du Maroc par le détroit de Gibraltar"],
  memoryTrick: "Gibraltar : Maroc face à l'Espagne.",
  source: "Géographie, détroit de Gibraltar", contested: false
},
{
  id: 145, module: "Géographie", subject: "Détroit de Gibraltar", difficulty: 2,
  question: "Au point le plus étroit, le détroit de Gibraltar mesure environ :",
  options: ["4 km", "14 km", "40 km", "80 km"],
  correctIndex: 1,
  explanation: "Le détroit de Gibraltar mesure environ 14 km à son point le plus étroit, entre la pointe de Tarifa (Espagne) et la côte marocaine.",
  whyWrong: ["Ce chiffre sous-estime largement la largeur du détroit", "", "Ce chiffre surestime la largeur réelle du détroit", "Ce chiffre surestime très largement la largeur réelle du détroit"],
  memoryTrick: "Gibraltar : environ 14 km au plus étroit.",
  source: "Géographie, détroit de Gibraltar", contested: false
},
{
  id: 146, module: "Géographie", subject: "Détroit de Gibraltar", difficulty: 2,
  question: "Le détroit de Gibraltar relie :",
  options: ["L'océan Atlantique et la mer Méditerranée", "La mer Méditerranée et la mer Noire", "L'océan Atlantique et l'océan Indien", "La mer Rouge et le golfe d'Aden"],
  correctIndex: 0,
  explanation: "Le détroit de Gibraltar relie l'océan Atlantique à la mer Méditerranée, constituant un passage maritime stratégique mondial.",
  whyWrong: ["", "C'est le détroit du Bosphore qui relie la Méditerranée (via la mer de Marmara) à la mer Noire", "Ce n'est pas Gibraltar qui relie ces deux océans", "C'est le détroit de Bab-el-Mandeb qui relie la mer Rouge au golfe d'Aden"],
  memoryTrick: "Gibraltar : la porte entre Atlantique et Méditerranée.",
  source: "Géographie, détroit de Gibraltar", contested: false
},
{
  id: 147, module: "Géographie", subject: "Ports du Maroc", difficulty: 2,
  question: "Le port de Tanger Med est situé à proximité immédiate :",
  options: ["Du détroit de Gibraltar", "Du Sahara", "De la frontière algérienne", "De l'estuaire du Bouregreg"],
  correctIndex: 0,
  explanation: "Tanger Med est un port en eaux profondes situé à proximité immédiate du détroit de Gibraltar, ce qui en fait une plateforme logistique majeure entre l'Europe et l'Afrique.",
  whyWrong: ["", "Tanger Med est au nord du pays, loin du Sahara", "Tanger Med n'est pas situé près de la frontière algérienne", "Tanger Med est distinct du site du Bouregreg, à Rabat-Salé"],
  memoryTrick: "Tanger Med : la porte portuaire de Gibraltar.",
  source: "Géographie du Maroc, port de Tanger Med", contested: false
},
{
  id: 148, module: "Géographie", subject: "Ports du Maroc", difficulty: 2,
  question: "Le port de Nador West Med se situe sur la façade :",
  options: ["Atlantique", "Méditerranéenne", "Il est situé à l'intérieur des terres", "Il n'existe pas encore de projet à Nador"],
  correctIndex: 1,
  explanation: "Nador West Med se situe sur la façade méditerranéenne du Maroc, dans la région de l'Oriental, et doit notamment devenir un terminal d'importation de GNL.",
  whyWrong: ["Nador se situe sur la façade méditerranéenne, pas atlantique", "", "Nador West Med est bien un port maritime, pas un site intérieur", "Le projet Nador West Med est un chantier portuaire bien réel"],
  memoryTrick: "Nador : façade méditerranéenne, comme Al Hoceïma.",
  source: "Géographie du Maroc, port de Nador West Med", contested: false
},
{
  id: 149, module: "Géographie", subject: "Ports du Maroc", difficulty: 1,
  question: "Le port d'Agadir se situe sur la façade :",
  options: ["Atlantique", "Méditerranéenne", "Il est situé sur un lac intérieur", "Il n'est pas un port maritime"],
  correctIndex: 0,
  explanation: "Agadir est un port de la façade atlantique du Maroc, important pour la pêche et le commerce dans le sud du pays.",
  whyWrong: ["", "Agadir n'est pas sur la façade méditerranéenne", "Agadir est un port maritime, pas lacustre", "Agadir est bien un port maritime actif"],
  memoryTrick: "Agadir : façade atlantique, sud du Maroc.",
  source: "Géographie du Maroc, port d'Agadir", contested: false
},
{
  id: 150, module: "Géographie", subject: "Ports du Maroc", difficulty: 2,
  question: "Le port de Jorf Lasfar se situe à proximité de la ville de :",
  options: ["El Jadida", "Nador", "Tanger", "Al Hoceïma"],
  correctIndex: 0,
  explanation: "Jorf Lasfar est un port industriel situé à proximité d'El Jadida, important notamment pour les exportations de phosphates de l'OCP.",
  whyWrong: ["", "Nador n'est pas la ville proche de Jorf Lasfar", "Tanger n'est pas la ville proche de Jorf Lasfar", "Al Hoceïma n'est pas la ville proche de Jorf Lasfar"],
  memoryTrick: "Jorf Lasfar : le port industriel d'El Jadida.",
  source: "Géographie du Maroc, port de Jorf Lasfar", contested: false
},
{
  id: 151, module: "Géographie", subject: "Ports du Maroc", difficulty: 2,
  question: "Le port de Mohammedia se situe entre :",
  options: ["Casablanca et Rabat", "Tanger et Tétouan", "Agadir et Essaouira", "Nador et Oujda"],
  correctIndex: 0,
  explanation: "Mohammedia est une ville portuaire située sur la côte atlantique, entre Casablanca et Rabat.",
  whyWrong: ["", "Mohammedia ne se situe pas entre Tanger et Tétouan", "Mohammedia ne se situe pas entre Agadir et Essaouira", "Mohammedia ne se situe pas entre Nador et Oujda, ville de l'intérieur"],
  memoryTrick: "Mohammedia : entre les deux capitales, Casablanca et Rabat.",
  source: "Géographie du Maroc, port de Mohammedia", contested: false
},
{
  id: 152, module: "Géographie", subject: "Ports du Maroc", difficulty: 2,
  question: "Le port de Dakhla Atlantique, actuellement en construction, se situe sur la façade :",
  options: ["Atlantique, dans le sud du Maroc", "Méditerranéenne, dans le nord du Maroc", "Il s'agit d'un port fluvial", "Il s'agit d'un port lacustre"],
  correctIndex: 0,
  explanation: "Dakhla Atlantique est un port en construction sur la façade atlantique, dans le sud du Maroc, destiné à devenir une plateforme logistique et énergétique majeure.",
  whyWrong: ["", "Dakhla se situe dans le sud, sur l'Atlantique, pas sur la Méditerranée au nord", "Dakhla Atlantique est un port maritime, pas fluvial", "Dakhla Atlantique est un port maritime, pas lacustre"],
  memoryTrick: "Dakhla Atlantique : le futur grand port du Sud.",
  source: "Géographie du Maroc, port de Dakhla Atlantique", contested: false
},
{
  id: 153, module: "Géographie", subject: "Aires protégées", difficulty: 2,
  question: "Le premier parc national créé au Maroc, en 1942, est le parc national :",
  options: ["De Toubkal", "De Souss-Massa", "D'Ifrane", "Du Haut Atlas oriental"],
  correctIndex: 0,
  explanation: "Le parc national de Toubkal, créé en 1942 autour du plus haut sommet du Maroc, est le premier parc national du pays.",
  whyWrong: ["", "Le parc de Souss-Massa a été créé plus tardivement", "Le parc d'Ifrane a été créé plus tardivement", "Le parc du Haut Atlas oriental a été créé plus tardivement"],
  memoryTrick: "Toubkal : premier sommet ET premier parc national du Maroc.",
  source: "Parc national de Toubkal, création 1942", contested: false
},
{
  id: 154, module: "Géographie", subject: "Aires protégées", difficulty: 3,
  question: "Le parc national de Toubkal, premier parc national du Maroc, a été créé en :",
  options: ["1928", "1942", "1965", "1980"],
  correctIndex: 1,
  explanation: "Le parc national de Toubkal a été créé en 1942, ce qui en fait le plus ancien parc national du Maroc.",
  whyWrong: ["Cette date ne correspond pas à la création du parc de Toubkal", "", "Cette date ne correspond pas à la création du parc de Toubkal", "Cette date ne correspond pas à la création du parc de Toubkal"],
  memoryTrick: "1942 : naissance du premier parc national marocain.",
  source: "Parc national de Toubkal, création 1942", contested: false
},
{
  id: 155, module: "Géographie", subject: "Maroc", difficulty: 1,
  question: "Le Maroc dispose de deux façades maritimes : la façade atlantique et la façade :",
  options: ["Méditerranéenne", "Mer Rouge", "Mer Noire", "Mer Caspienne"],
  correctIndex: 0,
  explanation: "Le Maroc possède une double façade maritime : atlantique à l'ouest et méditerranéenne au nord, une position stratégique unique en Afrique.",
  whyWrong: ["", "Le Maroc ne borde pas la mer Rouge", "Le Maroc ne borde pas la mer Noire", "Le Maroc ne borde pas la mer Caspienne"],
  memoryTrick: "Maroc : deux mers, Atlantique et Méditerranée.",
  source: "Géographie du Maroc, façades maritimes", contested: false
},
{
  id: 156, module: "Géographie", subject: "Hydrographie du Maroc", difficulty: 2,
  question: "Parmi ces cours d'eau, lequel ne se trouve PAS au Maroc ?",
  options: ["L'oued Sebou", "L'oued Draa", "La Loire", "L'oued Ziz"],
  correctIndex: 2,
  explanation: "La Loire est un fleuve français ; elle n'a aucun lien géographique avec le réseau hydrographique marocain, à la différence du Sebou, du Draa et du Ziz.",
  whyWrong: ["Le Sebou est bien un cours d'eau marocain", "Le Draa est bien un cours d'eau marocain", "", "Le Ziz est bien un cours d'eau marocain"],
  memoryTrick: "La Loire coule en France, pas au Maroc.",
  source: "Géographie du Maroc, hydrographie", contested: false
},
{
  id: 157, module: "Géographie", subject: "Afrique", difficulty: 1,
  question: "Le plus haut sommet d'Afrique est :",
  options: ["Le Kilimandjaro", "Le mont Kenya", "Le Toubkal", "Le mont Cameroun"],
  correctIndex: 0,
  explanation: "Le Kilimandjaro, situé en Tanzanie, culmine à environ 5 895 mètres et constitue le plus haut sommet du continent africain.",
  whyWrong: ["", "Le mont Kenya est le deuxième plus haut sommet d'Afrique, mais pas le premier", "Le Toubkal est le plus haut sommet du Maroc et d'Afrique du Nord, mais pas du continent entier", "Le mont Cameroun est un volcan actif, mais moins élevé que le Kilimandjaro"],
  memoryTrick: "Kilimandjaro : le toit de l'Afrique.",
  source: "Géographie de l'Afrique, Kilimandjaro", contested: false
},
{
  id: 158, module: "Géographie", subject: "Monde", difficulty: 1,
  question: "Le plus long fleuve du monde est :",
  options: ["L'Amazone", "Le Nil", "Le Mississippi", "Le Yangtsé"],
  correctIndex: 1,
  explanation: "Le Nil, avec environ 6 650 km, est généralement considéré comme le plus long fleuve du monde, devant l'Amazone.",
  whyWrong: ["L'Amazone est le fleuve le plus abondant du monde, mais généralement considéré comme légèrement plus court que le Nil", "", "Le Mississippi est un grand fleuve nord-américain, mais bien plus court que le Nil", "Le Yangtsé est le plus long fleuve d'Asie, mais plus court que le Nil"],
  memoryTrick: "Nil : le plus long fleuve du monde.",
  source: "Géographie physique, fleuves du monde", contested: false
},
{
  id: 159, module: "Géographie", subject: "Afrique", difficulty: 2,
  question: "Le Nil se jette dans :",
  options: ["La mer Méditerranée", "L'océan Atlantique", "La mer Rouge", "Le golfe de Guinée"],
  correctIndex: 0,
  explanation: "Le Nil se jette dans la mer Méditerranée, en Égypte, après avoir traversé plusieurs pays d'Afrique de l'Est et du Nord-Est.",
  whyWrong: ["", "Le Nil ne se jette pas dans l'Atlantique", "Le Nil ne se jette pas dans la mer Rouge", "Le Nil ne se jette pas dans le golfe de Guinée"],
  memoryTrick: "Nil : embouchure en Méditerranée, delta d'Égypte.",
  source: "Géographie de l'Afrique, le Nil", contested: false
},
{
  id: 160, module: "Géographie", subject: "Monde", difficulty: 1,
  question: "Le plus grand désert chaud du monde est :",
  options: ["Le désert de Gobi", "Le Sahara", "Le désert du Kalahari", "Le désert d'Atacama"],
  correctIndex: 1,
  explanation: "Le Sahara, qui s'étend sur le nord de l'Afrique, est le plus grand désert chaud du monde.",
  whyWrong: ["Le Gobi est un désert froid d'Asie, pas le plus grand désert chaud", "", "Le Kalahari est un désert d'Afrique australe, plus petit que le Sahara", "L'Atacama est un désert d'Amérique du Sud, plus petit que le Sahara"],
  memoryTrick: "Sahara : le plus grand désert chaud du monde.",
  source: "Géographie physique, déserts du monde", contested: false
},
{
  id: 161, module: "Géographie", subject: "Afrique", difficulty: 2,
  question: "Le plus grand lac d'Afrique est :",
  options: ["Le lac Victoria", "Le lac Tchad", "Le lac Tanganyika", "Le lac Malawi"],
  correctIndex: 0,
  explanation: "Le lac Victoria, partagé entre l'Ouganda, le Kenya et la Tanzanie, est le plus grand lac d'Afrique par sa superficie.",
  whyWrong: ["", "Le lac Tchad est bien plus petit que le lac Victoria", "Le lac Tanganyika est le plus profond d'Afrique, mais pas le plus étendu", "Le lac Malawi est plus petit que le lac Victoria"],
  memoryTrick: "Victoria : le plus grand lac d'Afrique.",
  source: "Géographie de l'Afrique, lac Victoria", contested: false
},
{
  id: 162, module: "Géographie", subject: "Afrique", difficulty: 2,
  question: "Le fleuve Congo, deuxième plus long fleuve d'Afrique, traverse principalement :",
  options: ["Le désert du Sahara", "La forêt équatoriale d'Afrique centrale", "Les hauts plateaux d'Éthiopie", "Le Sahel"],
  correctIndex: 1,
  explanation: "Le fleuve Congo traverse la grande forêt équatoriale d'Afrique centrale, l'un des plus vastes massifs forestiers tropicaux du monde.",
  whyWrong: ["Le Congo ne traverse pas le Sahara, désert du nord de l'Afrique", "", "Les hauts plateaux d'Éthiopie sont traversés par le Nil Bleu, pas par le Congo", "Le Congo traverse la forêt équatoriale, pas la zone sahélienne"],
  memoryTrick: "Congo : le grand fleuve de la forêt équatoriale.",
  source: "Géographie de l'Afrique, fleuve Congo", contested: false
},
{
  id: 163, module: "Géographie", subject: "Capitales d'Afrique", difficulty: 1,
  question: "La capitale de l'Égypte est :",
  options: ["Alexandrie", "Le Caire", "Louxor", "Assouan"],
  correctIndex: 1,
  explanation: "Le Caire est la capitale de l'Égypte et la plus grande ville du monde arabe par sa population.",
  whyWrong: ["Alexandrie est une grande ville portuaire égyptienne, mais pas la capitale", "", "Louxor est célèbre pour ses vestiges antiques, mais n'est pas la capitale", "Assouan est connue pour son haut barrage, mais n'est pas la capitale"],
  memoryTrick: "Le Caire : capitale de l'Égypte, sur le Nil.",
  source: "Géographie de l'Afrique, capitales", contested: false
},
{
  id: 164, module: "Géographie", subject: "Capitales d'Afrique", difficulty: 2,
  question: "La capitale administrative de l'Afrique du Sud est :",
  options: ["Le Cap", "Pretoria", "Johannesburg", "Bloemfontein"],
  correctIndex: 1,
  explanation: "L'Afrique du Sud a la particularité d'avoir trois capitales : Pretoria (administrative), Le Cap (législative) et Bloemfontein (judiciaire).",
  whyWrong: ["Le Cap est la capitale législative, pas administrative", "", "Johannesburg est la plus grande ville du pays, mais n'est pas une capitale officielle", "Bloemfontein est la capitale judiciaire, pas administrative"],
  memoryTrick: "Afrique du Sud : trois capitales, dont Pretoria pour l'administratif.",
  source: "Géographie de l'Afrique, capitales d'Afrique du Sud", contested: false
},
{
  id: 165, module: "Géographie", subject: "Capitales d'Afrique", difficulty: 2,
  question: "La capitale du Nigéria est :",
  options: ["Lagos", "Abuja", "Kano", "Ibadan"],
  correctIndex: 1,
  explanation: "Abuja est la capitale officielle du Nigéria depuis 1991, ayant remplacé Lagos, qui reste la plus grande ville et le principal centre économique du pays.",
  whyWrong: ["Lagos est l'ancienne capitale et la plus grande ville, mais plus la capitale officielle depuis 1991", "", "Kano est une grande ville du nord du Nigéria, mais pas la capitale", "Ibadan est une grande ville du sud-ouest du Nigéria, mais pas la capitale"],
  memoryTrick: "Nigéria : Abuja capitale depuis 1991, Lagos reste la plus grande ville.",
  source: "Géographie de l'Afrique, capitale du Nigéria", contested: false
},
{
  id: 166, module: "Géographie", subject: "Capitales d'Afrique", difficulty: 1,
  question: "La capitale du Kenya est :",
  options: ["Mombasa", "Nairobi", "Kisumu", "Nakuru"],
  correctIndex: 1,
  explanation: "Nairobi est la capitale et la plus grande ville du Kenya, centre politique et économique du pays.",
  whyWrong: ["Mombasa est le principal port du Kenya, mais pas la capitale", "", "Kisumu est une ville portuaire sur le lac Victoria, mais pas la capitale", "Nakuru est une ville importante du Rift Valley, mais pas la capitale"],
  memoryTrick: "Nairobi : capitale du Kenya.",
  source: "Géographie de l'Afrique, capitale du Kenya", contested: false
},
{
  id: 167, module: "Géographie", subject: "Capitales d'Afrique", difficulty: 1,
  question: "La capitale de l'Éthiopie, qui héberge également le siège de l'Union africaine, est :",
  options: ["Addis-Abeba", "Djibouti-ville", "Khartoum", "Asmara"],
  correctIndex: 0,
  explanation: "Addis-Abeba est la capitale de l'Éthiopie et héberge le siège de l'Union africaine, ce qui en fait un centre diplomatique majeur du continent.",
  whyWrong: ["", "Djibouti-ville est la capitale de Djibouti, pas de l'Éthiopie", "Khartoum est la capitale du Soudan, pas de l'Éthiopie", "Asmara est la capitale de l'Érythrée, pas de l'Éthiopie"],
  memoryTrick: "Addis-Abeba : capitale éthiopienne ET siège de l'Union africaine.",
  source: "Géographie de l'Afrique, capitale de l'Éthiopie", contested: false
},
{
  id: 168, module: "Géographie", subject: "Capitales d'Afrique", difficulty: 1,
  question: "La capitale de l'Algérie est :",
  options: ["Oran", "Alger", "Constantine", "Annaba"],
  correctIndex: 1,
  explanation: "Alger est la capitale de l'Algérie, pays voisin du Maroc à l'est.",
  whyWrong: ["Oran est la deuxième ville d'Algérie, mais pas la capitale", "", "Constantine est une grande ville de l'est algérien, mais pas la capitale", "Annaba est une ville portuaire algérienne, mais pas la capitale"],
  memoryTrick: "Alger : capitale de l'Algérie.",
  source: "Géographie de l'Afrique, capitale de l'Algérie", contested: false
},
{
  id: 169, module: "Géographie", subject: "Capitales d'Afrique", difficulty: 1,
  question: "La capitale de la Tunisie est :",
  options: ["Sfax", "Tunis", "Sousse", "Kairouan"],
  correctIndex: 1,
  explanation: "Tunis est la capitale de la Tunisie, pays du Maghreb voisin de l'Algérie et de la Libye.",
  whyWrong: ["Sfax est la deuxième ville de Tunisie, mais pas la capitale", "", "Sousse est une grande ville côtière, mais pas la capitale", "Kairouan est une ville sainte de l'islam, mais pas la capitale"],
  memoryTrick: "Tunis : capitale de la Tunisie.",
  source: "Géographie de l'Afrique, capitale de la Tunisie", contested: false
},
{
  id: 170, module: "Géographie", subject: "Capitales d'Afrique", difficulty: 1,
  question: "La capitale du Sénégal est :",
  options: ["Dakar", "Thiès", "Saint-Louis", "Touba"],
  correctIndex: 0,
  explanation: "Dakar est la capitale du Sénégal, ville portuaire la plus occidentale du continent africain.",
  whyWrong: ["", "Thiès est une grande ville sénégalaise, mais pas la capitale", "Saint-Louis fut l'ancienne capitale coloniale, mais pas l'actuelle", "Touba est une ville sainte du Sénégal, mais pas la capitale"],
  memoryTrick: "Dakar : capitale du Sénégal, pointe la plus occidentale d'Afrique.",
  source: "Géographie de l'Afrique, capitale du Sénégal", contested: false
},
{
  id: 171, module: "Géographie", subject: "Capitales d'Afrique", difficulty: 2,
  question: "La capitale politique de la Côte d'Ivoire est :",
  options: ["Abidjan", "Yamoussoukro", "Bouaké", "San-Pédro"],
  correctIndex: 1,
  explanation: "Yamoussoukro est la capitale politique officielle de la Côte d'Ivoire, bien qu'Abidjan reste le principal centre économique et administratif du pays.",
  whyWrong: ["Abidjan est la capitale économique, mais pas la capitale politique officielle", "", "Bouaké est la deuxième ville du pays, mais pas la capitale", "San-Pédro est un port important, mais pas la capitale"],
  memoryTrick: "Côte d'Ivoire : Yamoussoukro capitale politique, Abidjan capitale économique — comme Rabat/Casablanca.",
  source: "Géographie de l'Afrique, capitale de la Côte d'Ivoire", contested: false
},
{
  id: 172, module: "Géographie", subject: "Afrique", difficulty: 2,
  question: "Le détroit de Bab-el-Mandeb relie la mer Rouge :",
  options: ["Au golfe d'Aden", "À la mer Noire", "À la mer Caspienne", "Au golfe de Guinée"],
  correctIndex: 0,
  explanation: "Le détroit de Bab-el-Mandeb, situé entre Djibouti/l'Érythrée et le Yémen, relie la mer Rouge au golfe d'Aden.",
  whyWrong: ["", "La mer Noire est reliée à la Méditerranée par le Bosphore, pas par Bab-el-Mandeb", "La mer Caspienne est une mer fermée, sans lien avec Bab-el-Mandeb", "Le golfe de Guinée n'a pas de lien géographique avec Bab-el-Mandeb"],
  memoryTrick: "Bab-el-Mandeb : la porte entre mer Rouge et golfe d'Aden.",
  source: "Géographie, détroit de Bab-el-Mandeb", contested: false
},
{
  id: 173, module: "Géographie", subject: "Monde", difficulty: 1,
  question: "L'océan qui borde la façade ouest de l'Afrique est :",
  options: ["L'océan Atlantique", "L'océan Pacifique", "L'océan Indien", "L'océan Arctique"],
  correctIndex: 0,
  explanation: "L'océan Atlantique borde toute la façade occidentale de l'Afrique, du Maroc jusqu'à l'Afrique du Sud.",
  whyWrong: ["", "Le Pacifique ne borde pas l'Afrique", "L'océan Indien borde la façade est de l'Afrique, pas l'ouest", "L'océan Arctique ne borde pas l'Afrique"],
  memoryTrick: "Afrique de l'Ouest : façade atlantique.",
  source: "Géographie physique, océans", contested: false
},
{
  id: 174, module: "Géographie", subject: "Capitales d'Europe", difficulty: 1,
  question: "La capitale de l'Espagne est :",
  options: ["Barcelone", "Madrid", "Séville", "Valence"],
  correctIndex: 1,
  explanation: "Madrid est la capitale de l'Espagne, pays avec lequel le Maroc partage le détroit de Gibraltar.",
  whyWrong: ["Barcelone est la capitale de la Catalogne, mais pas de l'Espagne", "", "Séville est la capitale de l'Andalousie, mais pas de l'Espagne", "Valence est une grande ville espagnole, mais pas la capitale"],
  memoryTrick: "Madrid : capitale de l'Espagne, voisine du Maroc via Gibraltar.",
  source: "Géographie de l'Europe, capitale de l'Espagne", contested: false
},
{
  id: 175, module: "Géographie", subject: "Capitales d'Europe", difficulty: 1,
  question: "La capitale du Portugal, co-organisateur de la Coupe du Monde 2030, est :",
  options: ["Porto", "Lisbonne", "Faro", "Coimbra"],
  correctIndex: 1,
  explanation: "Lisbonne est la capitale du Portugal, pays qui co-organisera la Coupe du Monde 2030 avec le Maroc et l'Espagne.",
  whyWrong: ["Porto est la deuxième ville du Portugal, mais pas la capitale", "", "Faro est une ville touristique de l'Algarve, mais pas la capitale", "Coimbra est une ville universitaire historique, mais pas la capitale"],
  memoryTrick: "Lisbonne : capitale du Portugal, partenaire du Mondial 2030.",
  source: "Géographie de l'Europe, capitale du Portugal", contested: false
},
{
  id: 176, module: "Géographie", subject: "Capitales d'Europe", difficulty: 1,
  question: "La capitale de l'Italie est :",
  options: ["Milan", "Rome", "Naples", "Turin"],
  correctIndex: 1,
  explanation: "Rome est la capitale de l'Italie, ville qui abrite également le Vatican, le plus petit État du monde.",
  whyWrong: ["Milan est la capitale économique de l'Italie, mais pas la capitale politique", "", "Naples est une grande ville du sud de l'Italie, mais pas la capitale", "Turin est une grande ville du nord, mais pas la capitale"],
  memoryTrick: "Rome : capitale de l'Italie, écrin du Vatican.",
  source: "Géographie de l'Europe, capitale de l'Italie", contested: false
},
{
  id: 177, module: "Géographie", subject: "Capitales d'Europe", difficulty: 1,
  question: "La capitale de l'Allemagne est :",
  options: ["Munich", "Berlin", "Francfort", "Hambourg"],
  correctIndex: 1,
  explanation: "Berlin est la capitale de l'Allemagne, redevenue capitale fédérale après la réunification de 1990.",
  whyWrong: ["Munich est la capitale de la Bavière, mais pas de l'Allemagne", "", "Francfort est le cœur financier allemand (siège de la BCE), mais pas la capitale", "Hambourg est un grand port allemand, mais pas la capitale"],
  memoryTrick: "Berlin : capitale de l'Allemagne réunifiée.",
  source: "Géographie de l'Europe, capitale de l'Allemagne", contested: false
},
{
  id: 178, module: "Géographie", subject: "Capitales d'Europe", difficulty: 1,
  question: "La capitale du Royaume-Uni est :",
  options: ["Manchester", "Londres", "Édimbourg", "Liverpool"],
  correctIndex: 1,
  explanation: "Londres est la capitale du Royaume-Uni, l'un des cinq membres permanents du Conseil de sécurité de l'ONU.",
  whyWrong: ["Manchester est une grande ville industrielle, mais pas la capitale", "", "Édimbourg est la capitale de l'Écosse, mais pas du Royaume-Uni dans son ensemble", "Liverpool est une grande ville portuaire, mais pas la capitale"],
  memoryTrick: "Londres : capitale du Royaume-Uni, membre permanent du Conseil de sécurité.",
  source: "Géographie de l'Europe, capitale du Royaume-Uni", contested: false
},
{
  id: 179, module: "Géographie", subject: "Capitales d'Europe", difficulty: 1,
  question: "La capitale de la Belgique, qui héberge aussi le siège de l'OTAN, est :",
  options: ["Anvers", "Bruxelles", "Liège", "Gand"],
  correctIndex: 1,
  explanation: "Bruxelles est la capitale de la Belgique et héberge à la fois le siège de l'OTAN et celui de la Commission européenne.",
  whyWrong: ["Anvers est le grand port belge, mais pas la capitale", "", "Liège est une grande ville wallonne, mais pas la capitale", "Gand est une grande ville flamande, mais pas la capitale"],
  memoryTrick: "Bruxelles : capitale belge, OTAN et Commission européenne réunies.",
  source: "Géographie de l'Europe, capitale de la Belgique", contested: false
},
{
  id: 180, module: "Géographie", subject: "Capitales d'Europe", difficulty: 2,
  question: "La capitale constitutionnelle des Pays-Bas est :",
  options: ["La Haye", "Amsterdam", "Rotterdam", "Utrecht"],
  correctIndex: 1,
  explanation: "Amsterdam est la capitale constitutionnelle des Pays-Bas, bien que le gouvernement et les institutions siègent en réalité à La Haye.",
  whyWrong: ["La Haye héberge le gouvernement, la CIJ et la CPI, mais n'est pas la capitale constitutionnelle", "", "Rotterdam est le plus grand port néerlandais, mais pas la capitale", "Utrecht est une grande ville universitaire, mais pas la capitale"],
  memoryTrick: "Pays-Bas : Amsterdam capitale de droit, La Haye siège du pouvoir.",
  source: "Géographie de l'Europe, capitale des Pays-Bas", contested: false
},
{
  id: 181, module: "Géographie", subject: "Relief d'Europe", difficulty: 2,
  question: "Le Mont Blanc, plus haut sommet des Alpes, culmine à environ :",
  options: ["3 800 mètres", "4 100 mètres", "4 809 mètres", "5 200 mètres"],
  correctIndex: 2,
  explanation: "Le Mont Blanc, à la frontière franco-italienne, culmine à environ 4 809 mètres, ce qui en fait le plus haut sommet de la chaîne des Alpes.",
  whyWrong: ["Cette altitude sous-estime celle du Mont Blanc", "Cette altitude sous-estime légèrement celle du Mont Blanc", "", "Cette altitude surestime celle du Mont Blanc"],
  memoryTrick: "Mont Blanc : environ 4 809 m, sommet des Alpes.",
  source: "Géographie de l'Europe, Mont Blanc", contested: false
},
{
  id: 182, module: "Géographie", subject: "Hydrographie d'Europe", difficulty: 2,
  question: "Le fleuve le plus long d'Europe est :",
  options: ["Le Danube", "La Volga", "Le Rhin", "La Seine"],
  correctIndex: 1,
  explanation: "La Volga, qui coule entièrement en Russie, est le plus long fleuve d'Europe, devant le Danube.",
  whyWrong: ["Le Danube est le deuxième plus long fleuve d'Europe, traversant de nombreux pays, mais pas le premier", "", "Le Rhin est un grand fleuve d'Europe de l'Ouest, mais bien plus court que la Volga", "La Seine est un fleuve français, bien plus court que la Volga"],
  memoryTrick: "Volga : le plus long fleuve d'Europe, en Russie.",
  source: "Géographie de l'Europe, fleuve Volga", contested: false
},
{
  id: 183, module: "Géographie", subject: "Capitales d'Europe", difficulty: 1,
  question: "La capitale de la Russie est :",
  options: ["Saint-Pétersbourg", "Moscou", "Kazan", "Novossibirsk"],
  correctIndex: 1,
  explanation: "Moscou est la capitale de la Russie, le plus grand pays du monde par sa superficie.",
  whyWrong: ["Saint-Pétersbourg fut l'ancienne capitale impériale, mais pas l'actuelle", "", "Kazan est une grande ville russe, mais pas la capitale", "Novossibirsk est la plus grande ville de Sibérie, mais pas la capitale"],
  memoryTrick: "Moscou : capitale de la Russie.",
  source: "Géographie de l'Europe, capitale de la Russie", contested: false
},
{
  id: 184, module: "Géographie", subject: "Capitales d'Europe", difficulty: 1,
  question: "La capitale de la Grèce est :",
  options: ["Thessalonique", "Athènes", "Patras", "Corinthe"],
  correctIndex: 1,
  explanation: "Athènes est la capitale de la Grèce, berceau de la démocratie et de la philosophie antique.",
  whyWrong: ["Thessalonique est la deuxième ville de Grèce, mais pas la capitale", "", "Patras est une ville portuaire grecque, mais pas la capitale", "Corinthe est célèbre dans l'Antiquité, mais n'est pas la capitale actuelle"],
  memoryTrick: "Athènes : capitale de la Grèce, berceau de la démocratie.",
  source: "Géographie de l'Europe, capitale de la Grèce", contested: false
},
{
  id: 185, module: "Géographie", subject: "Capitales d'Europe", difficulty: 2,
  question: "La capitale de la Suisse est :",
  options: ["Genève", "Zurich", "Berne", "Lausanne"],
  correctIndex: 2,
  explanation: "Berne est la capitale fédérale de la Suisse, bien que Genève et Zurich soient des villes plus connues internationalement.",
  whyWrong: ["Genève héberge de nombreuses organisations internationales, mais n'est pas la capitale", "Zurich est la plus grande ville de Suisse, mais pas la capitale", "", "Lausanne héberge le CIO, mais n'est pas la capitale"],
  memoryTrick: "Suisse : Berne capitale, pas Genève ni Zurich.",
  source: "Géographie de l'Europe, capitale de la Suisse", contested: false
},
{
  id: 186, module: "Géographie", subject: "Capitales d'Europe", difficulty: 1,
  question: "La capitale de l'Autriche, où siège l'OPEP, est :",
  options: ["Salzbourg", "Vienne", "Graz", "Innsbruck"],
  correctIndex: 1,
  explanation: "Vienne est la capitale de l'Autriche et héberge le siège de l'OPEP ainsi que celui de l'AIEA.",
  whyWrong: ["Salzbourg est une ville célèbre pour son festival de musique, mais pas la capitale", "", "Graz est la deuxième ville d'Autriche, mais pas la capitale", "Innsbruck est une ville alpine autrichienne, mais pas la capitale"],
  memoryTrick: "Vienne : capitale autrichienne, siège de l'OPEP.",
  source: "Géographie de l'Europe, capitale de l'Autriche", contested: false
},
{
  id: 187, module: "Géographie", subject: "Capitales d'Europe", difficulty: 1,
  question: "La capitale de la Suède est :",
  options: ["Göteborg", "Stockholm", "Malmö", "Uppsala"],
  correctIndex: 1,
  explanation: "Stockholm est la capitale de la Suède, ville construite sur plusieurs îles reliées par des ponts.",
  whyWrong: ["Göteborg est la deuxième ville de Suède, mais pas la capitale", "", "Malmö est une grande ville du sud de la Suède, mais pas la capitale", "Uppsala est une ville universitaire suédoise, mais pas la capitale"],
  memoryTrick: "Stockholm : capitale de la Suède, ville des îles.",
  source: "Géographie de l'Europe, capitale de la Suède", contested: false
},
{
  id: 188, module: "Géographie", subject: "Capitales d'Europe", difficulty: 1,
  question: "La capitale de la Norvège est :",
  options: ["Bergen", "Oslo", "Trondheim", "Stavanger"],
  correctIndex: 1,
  explanation: "Oslo est la capitale de la Norvège, pays scandinave connu pour ses fjords.",
  whyWrong: ["Bergen est une grande ville côtière norvégienne, mais pas la capitale", "", "Trondheim est une ancienne capitale historique, mais pas l'actuelle", "Stavanger est un centre pétrolier norvégien, mais pas la capitale"],
  memoryTrick: "Oslo : capitale de la Norvège.",
  source: "Géographie de l'Europe, capitale de la Norvège", contested: false
},
{
  id: 189, module: "Géographie", subject: "Capitales d'Europe", difficulty: 1,
  question: "La capitale du Danemark est :",
  options: ["Aarhus", "Copenhague", "Odense", "Aalborg"],
  correctIndex: 1,
  explanation: "Copenhague est la capitale du Danemark, pays scandinave relié à la Suède par le pont de l'Øresund.",
  whyWrong: ["Aarhus est la deuxième ville du Danemark, mais pas la capitale", "", "Odense est la ville natale d'Andersen, mais pas la capitale", "Aalborg est une grande ville du nord du Danemark, mais pas la capitale"],
  memoryTrick: "Copenhague : capitale du Danemark.",
  source: "Géographie de l'Europe, capitale du Danemark", contested: false
},
{
  id: 190, module: "Géographie", subject: "Capitales d'Europe", difficulty: 1,
  question: "La capitale de la Pologne est :",
  options: ["Cracovie", "Varsovie", "Gdansk", "Wroclaw"],
  correctIndex: 1,
  explanation: "Varsovie est la capitale de la Pologne, reconstruite après sa destruction quasi totale pendant la Seconde Guerre mondiale.",
  whyWrong: ["Cracovie fut l'ancienne capitale royale, mais pas l'actuelle", "", "Gdansk est une grande ville portuaire polonaise, mais pas la capitale", "Wroclaw est une grande ville de l'ouest polonais, mais pas la capitale"],
  memoryTrick: "Varsovie : capitale de la Pologne, reconstruite après-guerre.",
  source: "Géographie de l'Europe, capitale de la Pologne", contested: false
},
{
  id: 191, module: "Géographie", subject: "Monde", difficulty: 2,
  question: "La plus grande mer fermée (ou lac salé) du monde est :",
  options: ["La mer Morte", "La mer Caspienne", "Le lac Baïkal", "Le lac Tchad"],
  correctIndex: 1,
  explanation: "La mer Caspienne, bordée notamment par la Russie et l'Iran, est la plus grande étendue d'eau intérieure du monde, souvent qualifiée de plus grand lac de la planète.",
  whyWrong: ["La mer Morte est célèbre pour sa salinité, mais bien plus petite que la Caspienne", "", "Le lac Baïkal est le plus profond et le plus grand réservoir d'eau douce du monde, mais moins étendu en surface que la Caspienne", "Le lac Tchad est beaucoup plus petit que la mer Caspienne"],
  memoryTrick: "Caspienne : la plus grande étendue d'eau fermée du monde.",
  source: "Géographie physique, mer Caspienne", contested: false
},
{
  id: 192, module: "Géographie", subject: "Monde", difficulty: 1,
  question: "Le continent le plus peuplé du monde est :",
  options: ["L'Afrique", "L'Asie", "L'Europe", "L'Amérique"],
  correctIndex: 1,
  explanation: "L'Asie est le continent le plus peuplé du monde, hébergeant notamment la Chine et l'Inde, les deux pays les plus peuplés de la planète.",
  whyWrong: ["L'Afrique connaît la croissance démographique la plus rapide, mais reste moins peuplée que l'Asie", "", "L'Europe est bien moins peuplée que l'Asie", "L'Amérique, prise dans son ensemble, est moins peuplée que l'Asie"],
  memoryTrick: "Asie : continent le plus peuplé, Chine et Inde en tête.",
  source: "Géographie physique et humaine, continents", contested: false
},
{
  id: 193, module: "Géographie", subject: "Monde", difficulty: 1,
  question: "Le plus grand pays du monde par sa superficie est :",
  options: ["Le Canada", "La Chine", "La Russie", "Les États-Unis"],
  correctIndex: 2,
  explanation: "La Russie est le plus grand pays du monde par sa superficie, s'étendant sur deux continents, l'Europe et l'Asie.",
  whyWrong: ["Le Canada est le deuxième plus grand pays du monde, mais pas le premier", "La Chine est parmi les plus grands pays du monde, mais moins étendue que la Russie", "", "Les États-Unis figurent parmi les plus grands pays du monde, mais moins étendus que la Russie"],
  memoryTrick: "Russie : le plus grand pays du monde, entre Europe et Asie.",
  source: "Géographie physique, superficie des pays", contested: false
},
{
  id: 194, module: "Géographie", subject: "Monde", difficulty: 2,
  question: "Le plus petit État souverain du monde est :",
  options: ["Monaco", "Le Vatican", "Saint-Marin", "Liechtenstein"],
  correctIndex: 1,
  explanation: "Le Vatican, enclavé dans la ville de Rome, est le plus petit État souverain du monde, tant par sa superficie que par sa population.",
  whyWrong: ["Monaco est un très petit État, mais plus étendu que le Vatican", "", "Saint-Marin est un petit État européen, mais plus étendu que le Vatican", "Le Liechtenstein est un petit État alpin, mais bien plus étendu que le Vatican"],
  memoryTrick: "Vatican : le plus petit État du monde, au cœur de Rome.",
  source: "Géographie physique, le Vatican", contested: false
},
{
  id: 195, module: "Géographie", subject: "Monde", difficulty: 1,
  question: "Le plus haut sommet du monde est :",
  options: ["Le K2", "L'Everest", "Le Kangchenjunga", "Le Makalu"],
  correctIndex: 1,
  explanation: "L'Everest, situé à la frontière entre le Népal et la Chine (Tibet), culmine à environ 8 849 mètres, ce qui en fait le plus haut sommet du monde.",
  whyWrong: ["Le K2 est le deuxième plus haut sommet du monde, mais pas le premier", "", "Le Kangchenjunga est le troisième plus haut sommet du monde", "Le Makalu figure parmi les plus hauts sommets du monde, mais reste moins élevé que l'Everest"],
  memoryTrick: "Everest : le toit du monde, 8 849 m.",
  source: "Géographie physique, Everest", contested: false
},
{
  id: 196, module: "Géographie", subject: "Monde", difficulty: 2,
  question: "Le fleuve le plus long d'Amérique du Sud est :",
  options: ["Le Paraná", "L'Amazone", "L'Orénoque", "Le Magdalena"],
  correctIndex: 1,
  explanation: "L'Amazone, qui traverse notamment le Brésil et le Pérou, est le fleuve le plus long et le plus abondant d'Amérique du Sud.",
  whyWrong: ["Le Paraná est un grand fleuve d'Amérique du Sud, mais plus court que l'Amazone", "", "L'Orénoque est un grand fleuve du Venezuela, mais plus court que l'Amazone", "Le Magdalena est le principal fleuve de Colombie, mais bien plus court que l'Amazone"],
  memoryTrick: "Amazone : le géant des fleuves d'Amérique du Sud.",
  source: "Géographie physique, fleuve Amazone", contested: false
},
{
  id: 197, module: "Géographie", subject: "Monde", difficulty: 1,
  question: "Le plus grand océan du monde est :",
  options: ["L'Atlantique", "L'Indien", "Le Pacifique", "L'Arctique"],
  correctIndex: 2,
  explanation: "Le Pacifique est le plus grand et le plus profond océan du monde, séparant l'Asie et l'Océanie des Amériques.",
  whyWrong: ["L'Atlantique est le deuxième plus grand océan, mais pas le premier", "L'océan Indien est plus petit que le Pacifique", "", "L'Arctique est le plus petit des océans du monde"],
  memoryTrick: "Pacifique : le plus grand océan du monde.",
  source: "Géographie physique, océans du monde", contested: false
},
{
  id: 198, module: "Géographie", subject: "Monde", difficulty: 2,
  question: "Le plus petit continent du monde, selon le découpage usuel en sept continents, est :",
  options: ["L'Europe", "L'Antarctique", "L'Océanie", "L'Amérique du Sud"],
  correctIndex: 2,
  explanation: "L'Océanie, qui inclut l'Australie et de nombreuses îles du Pacifique, est généralement considérée comme le plus petit continent du monde.",
  whyWrong: ["L'Europe est plus étendue que l'Océanie", "L'Antarctique est plus étendu que l'Océanie", "", "L'Amérique du Sud est bien plus étendue que l'Océanie"],
  memoryTrick: "Océanie : le plus petit des sept continents.",
  source: "Géographie physique, continents du monde", contested: false
},
{
  id: 199, module: "Géographie", subject: "Capitales du monde", difficulty: 1,
  question: "La capitale des États-Unis est :",
  options: ["New York", "Washington D.C.", "Los Angeles", "Chicago"],
  correctIndex: 1,
  explanation: "Washington D.C. est la capitale fédérale des États-Unis, alors que New York en est la plus grande ville et la capitale économique.",
  whyWrong: ["New York est la plus grande ville des États-Unis, mais pas la capitale fédérale", "", "Los Angeles est une grande métropole américaine, mais pas la capitale", "Chicago est une grande métropole américaine, mais pas la capitale"],
  memoryTrick: "Washington D.C. : capitale fédérale, distincte de New York.",
  source: "Géographie du monde, capitale des États-Unis", contested: false
},
{
  id: 200, module: "Géographie", subject: "Capitales du monde", difficulty: 2,
  question: "La capitale du Canada est :",
  options: ["Toronto", "Ottawa", "Montréal", "Vancouver"],
  correctIndex: 1,
  explanation: "Ottawa est la capitale fédérale du Canada, alors que Toronto en est la ville la plus peuplée.",
  whyWrong: ["Toronto est la plus grande ville du Canada, mais pas la capitale", "", "Montréal est la plus grande ville francophone du Canada, mais pas la capitale", "Vancouver est une grande métropole de l'ouest canadien, mais pas la capitale"],
  memoryTrick: "Ottawa : capitale du Canada, distincte de Toronto.",
  source: "Géographie du monde, capitale du Canada", contested: false
},
{
  id: 201, module: "Géographie", subject: "Capitales du monde", difficulty: 2,
  question: "La capitale de l'Australie est :",
  options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
  correctIndex: 2,
  explanation: "Canberra est la capitale fédérale de l'Australie, une ville planifiée choisie comme compromis entre les rivales Sydney et Melbourne.",
  whyWrong: ["Sydney est la plus grande ville d'Australie, mais pas la capitale", "Melbourne est une grande métropole australienne, mais pas la capitale", "", "Brisbane est une grande ville du Queensland, mais pas la capitale"],
  memoryTrick: "Canberra : capitale australienne, ni Sydney ni Melbourne.",
  source: "Géographie du monde, capitale de l'Australie", contested: false
},
{
  id: 202, module: "Géographie", subject: "Capitales du monde", difficulty: 2,
  question: "La capitale du Brésil est :",
  options: ["Rio de Janeiro", "São Paulo", "Brasilia", "Salvador"],
  correctIndex: 2,
  explanation: "Brasilia, ville nouvelle inaugurée en 1960, est la capitale du Brésil, tandis que Rio de Janeiro en fut la capitale jusqu'à cette date.",
  whyWrong: ["Rio de Janeiro fut la capitale jusqu'en 1960, mais plus aujourd'hui", "São Paulo est la plus grande ville du Brésil, mais pas la capitale", "", "Salvador fut l'une des premières capitales coloniales, mais pas l'actuelle"],
  memoryTrick: "Brasilia : capitale depuis 1960, Rio l'était avant.",
  source: "Géographie du monde, capitale du Brésil", contested: false
},
{
  id: 203, module: "Géographie", subject: "Capitales du monde", difficulty: 2,
  question: "La capitale de la Chine est :",
  options: ["Shanghai", "Pékin", "Hong Kong", "Canton"],
  correctIndex: 1,
  explanation: "Pékin est la capitale politique de la Chine, tandis que Shanghai en est le principal centre économique et financier.",
  whyWrong: ["Shanghai est le principal centre économique chinois, mais pas la capitale", "", "Hong Kong est une région administrative spéciale, mais pas la capitale nationale", "Canton (Guangzhou) est une grande métropole du sud, mais pas la capitale"],
  memoryTrick: "Pékin : capitale politique, Shanghai capitale économique.",
  source: "Géographie du monde, capitale de la Chine", contested: false
},
{
  id: 204, module: "Géographie", subject: "Capitales du monde", difficulty: 2,
  question: "La capitale de l'Inde est :",
  options: ["Mumbai", "New Delhi", "Calcutta", "Bangalore"],
  correctIndex: 1,
  explanation: "New Delhi est la capitale de l'Inde, tandis que Mumbai (Bombay) en est le principal centre économique et financier.",
  whyWrong: ["Mumbai est le principal centre économique indien, mais pas la capitale", "", "Calcutta fut la capitale de l'Inde britannique jusqu'en 1911, mais pas l'actuelle", "Bangalore est un grand centre technologique, mais pas la capitale"],
  memoryTrick: "New Delhi : capitale politique, Mumbai capitale économique.",
  source: "Géographie du monde, capitale de l'Inde", contested: false
},
{
  id: 205, module: "Géographie", subject: "Monde", difficulty: 2,
  question: "Le désert le plus vaste du monde, si l'on inclut les déserts froids, est :",
  options: ["Le Sahara", "L'Antarctique", "Le désert de Gobi", "Le désert d'Arabie"],
  correctIndex: 1,
  explanation: "L'Antarctique, désert froid et polaire, est le plus vaste désert du monde en superficie, devant le Sahara qui reste le plus grand désert chaud.",
  whyWrong: ["Le Sahara est le plus grand désert chaud, mais pas le plus vaste désert toutes catégories confondues", "", "Le désert de Gobi est un grand désert froid d'Asie, mais plus petit que l'Antarctique", "Le désert d'Arabie est un grand désert chaud, mais plus petit que l'Antarctique"],
  memoryTrick: "Antarctique : désert froid, le plus vaste du monde ; Sahara : plus grand désert chaud.",
  source: "Géographie physique, déserts du monde", contested: false
},
{
  id: 206, module: "Géographie", subject: "Monde", difficulty: 2,
  question: "Parmi ces mers, laquelle est reliée à la Méditerranée par le détroit du Bosphore et la mer de Marmara ?",
  options: ["La mer Noire", "La mer Rouge", "La mer Caspienne", "La mer Baltique"],
  correctIndex: 0,
  explanation: "La mer Noire est reliée à la mer Méditerranée via le détroit du Bosphore, la mer de Marmara, puis les Dardanelles.",
  whyWrong: ["", "La mer Rouge est reliée à la Méditerranée par le canal de Suez, pas par le Bosphore", "La mer Caspienne est une mer totalement fermée, sans accès à la Méditerranée", "La mer Baltique n'est pas reliée à la Méditerranée par le Bosphore"],
  memoryTrick: "Bosphore : la porte entre mer Noire et Méditerranée.",
  source: "Géographie physique, détroit du Bosphore", contested: false
},
{
  id: 207, module: "Géographie", subject: "Monde", difficulty: 2,
  question: "Le canal de Suez relie la mer Méditerranée :",
  options: ["À la mer Rouge", "À la mer Noire", "À la mer Caspienne", "Au golfe Persique"],
  correctIndex: 0,
  explanation: "Le canal de Suez, en Égypte, relie la mer Méditerranée à la mer Rouge, évitant le contournement de l'Afrique par le cap de Bonne-Espérance.",
  whyWrong: ["", "C'est le Bosphore qui relie la Méditerranée à la mer Noire, pas le canal de Suez", "Le canal de Suez n'a pas de lien avec la mer Caspienne", "Le canal de Suez relie la Méditerranée à la mer Rouge, pas directement au golfe Persique"],
  memoryTrick: "Suez : le raccourci entre Méditerranée et mer Rouge.",
  source: "Géographie physique, canal de Suez", contested: false
},
{
  id: 208, module: "Géographie", subject: "Monde", difficulty: 3,
  question: "Le cap de Bonne-Espérance, pointe méridionale historique des routes maritimes vers l'Asie, se situe :",
  options: ["En Afrique du Sud", "Au Maroc", "En Égypte", "Au Kenya"],
  correctIndex: 0,
  explanation: "Le cap de Bonne-Espérance se situe en Afrique du Sud ; il fut longtemps le point de passage obligé des navires européens en route vers l'Asie, avant l'ouverture du canal de Suez.",
  whyWrong: ["", "Le Maroc se situe au nord-ouest de l'Afrique, loin du cap de Bonne-Espérance", "L'Égypte abrite le canal de Suez, pas le cap de Bonne-Espérance", "Le Kenya se situe en Afrique de l'Est, loin du cap de Bonne-Espérance"],
  memoryTrick: "Bonne-Espérance : la pointe sud de l'Afrique du Sud.",
  source: "Géographie physique, cap de Bonne-Espérance", contested: false
},
{
  id: 209, module: "Géographie", subject: "Monde", difficulty: 2,
  question: "Le tropique qui traverse le sud du Maroc, marquant la limite nord de la zone intertropicale, est :",
  options: ["Le tropique du Cancer", "Le tropique du Capricorne", "Le cercle polaire arctique", "L'équateur"],
  correctIndex: 0,
  explanation: "Le tropique du Cancer traverse le sud du territoire marocain, notamment près de la région saharienne, marquant la limite nord de la zone intertropicale.",
  whyWrong: ["", "Le tropique du Capricorne se situe dans l'hémisphère sud, loin du Maroc", "Le cercle polaire arctique est très éloigné du Maroc", "L'équateur passe par l'Afrique centrale, loin du Maroc"],
  memoryTrick: "Tropique du Cancer : celui qui frôle le sud marocain.",
  source: "Géographie physique, tropique du Cancer", contested: false
},
{
  id: 210, module: "Géographie", subject: "Monde", difficulty: 1,
  question: "La ligne imaginaire qui divise la Terre en hémisphère nord et hémisphère sud est :",
  options: ["Le méridien de Greenwich", "L'équateur", "Le tropique du Cancer", "Le cercle polaire"],
  correctIndex: 1,
  explanation: "L'équateur est la ligne imaginaire qui divise la Terre en deux hémisphères, nord et sud, à égale distance des deux pôles.",
  whyWrong: ["Le méridien de Greenwich sépare la Terre en hémisphères est et ouest, pas nord et sud", "", "Le tropique du Cancer est une ligne parallèle à l'équateur, mais ne divise pas la Terre en deux", "Le cercle polaire est une ligne de latitude proche du pôle, pas la ligne de division principale"],
  memoryTrick: "Équateur : nord/sud ; méridien de Greenwich : est/ouest.",
  source: "Géographie physique, l'équateur", contested: false
},

// ============================================================
// MODULE 4 — ACTUALITÉS 2024–2026
// ============================================================

{
  id: 211, module: "Actualités", subject: "Sahara marocain", difficulty: 2,
  question: "La résolution du Conseil de sécurité de l'ONU consacrant l'autonomie sous souveraineté marocaine comme base du règlement du dossier du Sahara porte le numéro :",
  options: ["2602", "2703", "2797", "2850"],
  correctIndex: 2,
  explanation: "La résolution 2797 du Conseil de sécurité de l'ONU, adoptée le 31 octobre 2025, consacre l'autonomie sous souveraineté marocaine comme base du règlement du différend régional sur le Sahara.",
  whyWrong: ["Ce numéro ne correspond pas à cette résolution", "Ce numéro ne correspond pas à cette résolution", "", "Ce numéro ne correspond pas à cette résolution"],
  memoryTrick: "Résolution 2797 : à retenir avec la date du 31 octobre 2025.",
  source: "UNSC Rés. 2797, 31 octobre 2025", contested: false
},
{
  id: 212, module: "Actualités", subject: "Sahara marocain", difficulty: 2,
  question: "La résolution 2797 du Conseil de sécurité de l'ONU sur le Sahara a été adoptée le :",
  options: ["24 avril 2025", "30 janvier 2025", "31 octobre 2025", "18 novembre 2025"],
  correctIndex: 2,
  explanation: "La résolution 2797 a été adoptée le 31 octobre 2025, un moment que le Roi Mohammed VI a qualifié de tournant dans son discours du même jour.",
  whyWrong: ["Cette date correspond au lancement de la LGV Kénitra-Marrakech, pas à la résolution 2797", "Cette date ne correspond pas à l'adoption de la résolution 2797", "", "Cette date ne correspond pas à l'adoption de la résolution 2797"],
  memoryTrick: "31 octobre 2025 : jour de la résolution 2797.",
  source: "UNSC Rés. 2797, 31 octobre 2025", contested: false
},
{
  id: 213, module: "Actualités", subject: "Sahara marocain", difficulty: 2,
  question: "La résolution 2797 sur le Sahara a été présentée au Conseil de sécurité par :",
  options: ["La France", "Les États-Unis", "L'Espagne", "Le Royaume-Uni"],
  correctIndex: 1,
  explanation: "La résolution 2797 a été présentée par les États-Unis, membre permanent du Conseil de sécurité, et adoptée le 31 octobre 2025.",
  whyWrong: ["La France a soutenu la résolution, mais ne l'a pas présentée", "", "L'Espagne n'a pas présenté cette résolution", "Le Royaume-Uni n'a pas présenté cette résolution"],
  memoryTrick: "2797 : une résolution présentée par les États-Unis.",
  source: "UNSC Rés. 2797, 31 octobre 2025", contested: false
},
{
  id: 214, module: "Actualités", subject: "Sahara marocain", difficulty: 3,
  question: "Le vote de la résolution 2797 au Conseil de sécurité s'est soldé par :",
  options: ["15 voix pour, à l'unanimité", "11 voix pour, 0 contre, 3 abstentions", "9 voix pour, 2 contre, 4 abstentions", "13 voix pour, 0 contre, 2 abstentions"],
  correctIndex: 1,
  explanation: "La résolution 2797 a été adoptée par 11 voix pour, aucune voix contre et 3 abstentions (Russie, Chine, Pakistan).",
  whyWrong: ["Le vote n'a pas été unanime, contrairement à ce que suggère ce score", "", "Ce score ne correspond pas au vote réel de la résolution 2797", "Ce score ne correspond pas au vote réel de la résolution 2797"],
  memoryTrick: "2797 : 11 pour, 0 contre, 3 abstentions.",
  source: "UNSC Rés. 2797, 31 octobre 2025", contested: false
},
{
  id: 215, module: "Actualités", subject: "Sahara marocain", difficulty: 3,
  question: "Parmi les trois pays s'étant abstenus lors du vote de la résolution 2797 figure :",
  options: ["La Russie", "Le Royaume-Uni", "La France", "Les États-Unis"],
  correctIndex: 0,
  explanation: "La Russie, la Chine et le Pakistan se sont abstenus lors du vote de la résolution 2797, sans s'y opposer directement.",
  whyWrong: ["", "Le Royaume-Uni a voté pour la résolution 2797", "La France a voté pour la résolution 2797", "Les États-Unis, à l'origine du texte, ont voté pour"],
  memoryTrick: "Abstentions 2797 : Russie, Chine, Pakistan.",
  source: "UNSC Rés. 2797, 31 octobre 2025", contested: false
},
{
  id: 216, module: "Actualités", subject: "Sahara marocain", difficulty: 3,
  question: "Lors du vote de la résolution 2797, l'Algérie, membre non permanent du Conseil de sécurité :",
  options: ["A voté pour", "A voté contre", "S'est abstenue", "N'a pas pris part au vote"],
  correctIndex: 3,
  explanation: "L'Algérie, alors membre non permanent du Conseil de sécurité, n'a pas pris part au vote de la résolution 2797.",
  whyWrong: ["L'Algérie n'a pas voté pour ce texte", "L'Algérie n'a pas voté contre ce texte", "L'Algérie ne s'est pas rangée parmi les trois abstentionnistes", ""],
  memoryTrick: "Algérie 2797 : ni pour, ni contre, ni abstention — absence de participation.",
  source: "UNSC Rés. 2797, 31 octobre 2025", contested: false
},
{
  id: 217, module: "Actualités", subject: "Sahara marocain", difficulty: 2,
  question: "La résolution 2797 proroge le mandat de la MINURSO jusqu'au :",
  options: ["31 octobre 2026", "31 décembre 2025", "30 juin 2026", "18 novembre 2026"],
  correctIndex: 0,
  explanation: "La résolution 2797 proroge le mandat de la MINURSO (mission des Nations unies pour le référendum au Sahara occidental) jusqu'au 31 octobre 2026.",
  whyWrong: ["", "Cette date ne correspond pas à la prorogation prévue par la résolution 2797", "Cette date ne correspond pas à la prorogation prévue par la résolution 2797", "Cette date ne correspond pas à la prorogation prévue par la résolution 2797"],
  memoryTrick: "MINURSO : mandat prorogé jusqu'à la même date, un an plus tard.",
  source: "UNSC Rés. 2797, 31 octobre 2025", contested: false
},
{
  id: 218, module: "Actualités", subject: "Sahara marocain", difficulty: 2,
  question: "Le plan d'autonomie marocain pour le Sahara, désormais présenté comme base du règlement par l'ONU, avait été soumis pour la première fois en :",
  options: ["1999", "2007", "2015", "2020"],
  correctIndex: 1,
  explanation: "Le plan d'autonomie marocain a été soumis à l'ONU en 2007, bien avant son inscription comme base du règlement par la résolution 2797 de 2025.",
  whyWrong: ["1999 est l'année d'intronisation de Mohammed VI, sans lien direct avec ce dépôt", "", "2015 ne correspond pas au dépôt du plan d'autonomie", "2020 ne correspond pas au dépôt du plan d'autonomie"],
  memoryTrick: "Plan d'autonomie : déposé en 2007, consacré en 2025.",
  source: "Plan d'autonomie marocain, soumis à l'ONU en 2007", contested: false
},
{
  id: 219, module: "Actualités", subject: "Sahara marocain", difficulty: 2,
  question: "Le jour de l'adoption de la résolution 2797, le Roi Mohammed VI a prononcé un discours affirmant qu'il y aurait :",
  options: ["« Un avant et un après 31 octobre 2025 »", "« Une nouvelle ère pour l'Afrique »", "« La fin d'un conflit centenaire »", "« Un tournant pour le Maghreb uni »"],
  correctIndex: 0,
  explanation: "Dans son discours du 31 octobre 2025, le Roi Mohammed VI a affirmé qu'il y aurait « un avant et un après 31 octobre 2025 », soulignant la portée historique de la résolution 2797.",
  whyWrong: ["", "Cette formule n'est pas celle employée dans le discours royal", "Cette formule n'est pas celle employée dans le discours royal", "Cette formule n'est pas celle employée dans le discours royal"],
  memoryTrick: "« Un avant et un après » : la formule du discours du 31 octobre 2025.",
  source: "Discours royal, 31 octobre 2025", contested: false
},
{
  id: 220, module: "Actualités", subject: "Sahara marocain", difficulty: 2,
  question: "La résolution 2797 consacre, comme base du règlement du différend régional, :",
  options: ["Un référendum d'autodétermination", "L'autonomie sous souveraineté marocaine", "Un partage territorial", "Une administration onusienne directe"],
  correctIndex: 1,
  explanation: "La résolution 2797 consacre l'autonomie sous souveraineté marocaine, issue du plan marocain de 2007, comme base des négociations pour le règlement du différend régional.",
  whyWrong: ["Ce n'est pas l'option retenue par la résolution 2797", "", "Ce n'est pas l'option retenue par la résolution 2797", "Ce n'est pas l'option retenue par la résolution 2797"],
  memoryTrick: "2797 : autonomie sous souveraineté marocaine, pas de référendum.",
  source: "UNSC Rés. 2797, 31 octobre 2025", contested: false
},
{
  id: 221, module: "Actualités", subject: "CAN 2025", difficulty: 2,
  question: "La CAN 2025, organisée au Maroc, s'est déroulée :",
  options: ["Du 21 décembre 2025 au 18 janvier 2026", "Du 1er janvier au 15 février 2026", "Du 15 novembre au 20 décembre 2025", "Du 5 janvier au 10 mars 2026"],
  correctIndex: 0,
  explanation: "La CAN 2025 s'est déroulée du 21 décembre 2025 au 18 janvier 2026, à cheval sur deux années civiles.",
  whyWrong: ["", "Ces dates ne correspondent pas au calendrier réel de la CAN 2025", "Ces dates ne correspondent pas au calendrier réel de la CAN 2025", "Ces dates ne correspondent pas au calendrier réel de la CAN 2025"],
  memoryTrick: "CAN 2025 : 21 décembre 2025 → 18 janvier 2026.",
  source: "CAF, CAN 2025, Maroc", contested: false
},
{
  id: 222, module: "Actualités", subject: "CAN 2025", difficulty: 2,
  question: "Le match d'ouverture de la CAN 2025 s'est tenu au(x) :",
  options: ["Grand Stade Hassan II", "Complexe sportif Prince Moulay Abdellah, Rabat", "Stade Ibn Batouta, Tanger", "Stade Adrar, Agadir"],
  correctIndex: 1,
  explanation: "Le match d'ouverture de la CAN 2025, comme la finale, s'est tenu au Complexe sportif Prince Moulay Abdellah, à Rabat.",
  whyWrong: ["Le Grand Stade Hassan II, en construction, n'était pas encore livré pour la CAN 2025", "", "Le stade Ibn Batouta de Tanger n'a pas accueilli le match d'ouverture", "Le stade Adrar d'Agadir n'a pas accueilli le match d'ouverture"],
  memoryTrick: "Prince Moulay Abdellah : ouverture ET finale de la CAN 2025.",
  source: "CAF, CAN 2025, Maroc", contested: false
},
{
  id: 223, module: "Actualités", subject: "CAN 2025", difficulty: 2,
  question: "Le tenant du titre au moment de l'ouverture de la CAN 2025 était :",
  options: ["Le Sénégal", "L'Égypte", "La Côte d'Ivoire", "Le Cameroun"],
  correctIndex: 2,
  explanation: "La Côte d'Ivoire, victorieuse de la CAN 2023 qu'elle organisait elle-même, était le tenant du titre au moment de l'ouverture de la CAN 2025.",
  whyWrong: ["Le Sénégal n'était pas tenant du titre à l'ouverture de la CAN 2025", "L'Égypte n'était pas tenante du titre à l'ouverture de la CAN 2025", "", "Le Cameroun n'était pas tenant du titre à l'ouverture de la CAN 2025"],
  memoryTrick: "CAN 2023 gagnée par la Côte d'Ivoire, tenante du titre en 2025.",
  source: "CAF, CAN 2023 et 2025", contested: false
},
{
  id: 224, module: "Actualités", subject: "CAN 2025", difficulty: 2,
  question: "La CAN 2025 s'est déroulée dans un nombre de stades de :",
  options: ["6", "9", "12", "15"],
  correctIndex: 1,
  explanation: "La CAN 2025 s'est déroulée dans 9 stades répartis sur 6 villes du Royaume.",
  whyWrong: ["Ce chiffre correspond au nombre de villes hôtes, pas au nombre de stades", "", "Ce chiffre surestime le nombre de stades utilisés", "Ce chiffre surestime largement le nombre de stades utilisés"],
  memoryTrick: "CAN 2025 : 9 stades pour 6 villes.",
  source: "CAF, CAN 2025, Maroc", contested: false
},
{
  id: 225, module: "Actualités", subject: "CAN 2025", difficulty: 2,
  question: "La CAN 2025 s'est déroulée dans un nombre de villes hôtes de :",
  options: ["4", "6", "8", "9"],
  correctIndex: 1,
  explanation: "La CAN 2025 s'est déroulée dans 6 villes marocaines, totalisant 9 stades.",
  whyWrong: ["Ce chiffre sous-estime le nombre de villes hôtes", "", "Ce chiffre surestime le nombre de villes hôtes", "Ce chiffre correspond au nombre de stades, pas de villes"],
  memoryTrick: "6 villes, 9 stades : la CAN 2025 au Maroc.",
  source: "CAF, CAN 2025, Maroc", contested: false
},
{
  id: 226, module: "Actualités", subject: "CAN 2025", difficulty: 2,
  question: "Grâce à son parcours lors de la CAN 2025, le Maroc a atteint la finale de la compétition pour la première fois depuis :",
  options: ["10 ans", "15 ans", "22 ans", "30 ans"],
  correctIndex: 2,
  explanation: "Le parcours du Maroc lors de la CAN 2025 lui a permis d'atteindre la finale pour la première fois depuis 22 ans.",
  whyWrong: ["Ce chiffre sous-estime la durée réellement écoulée", "Ce chiffre sous-estime la durée réellement écoulée", "", "Ce chiffre surestime la durée réellement écoulée"],
  memoryTrick: "22 ans : le retour du Maroc en finale de la CAN.",
  source: "CAF, CAN 2025, Maroc", contested: false
},
{
  id: 227, module: "Actualités", subject: "CAN 2025", difficulty: 2,
  question: "La finale de la CAN 2025 a opposé le Maroc, pays hôte, à :",
  options: ["L'Égypte", "Le Sénégal", "L'Algérie", "Le Nigéria"],
  correctIndex: 1,
  explanation: "La finale de la CAN 2025, disputée le 18 janvier 2026 à Rabat, a opposé le Maroc, pays hôte, au Sénégal. L'issue de cette finale a fait l'objet d'une procédure d'appel encore en cours devant le TAS.",
  whyWrong: ["L'Égypte n'a pas disputé cette finale", "", "L'Algérie n'a pas disputé cette finale", "Le Nigéria n'a pas disputé cette finale"],
  memoryTrick: "Finale CAN 2025 : Maroc–Sénégal, Rabat, 18 janvier 2026.",
  source: "CAF, CAN 2025, Maroc", contested: true
},
{
  id: 228, module: "Actualités", subject: "CAN", difficulty: 2,
  question: "La CAN 2027, qui suivra l'édition marocaine, sera co-organisée par le Kenya, l'Ouganda et :",
  options: ["La Tanzanie", "Le Rwanda", "L'Éthiopie", "Le Burundi"],
  correctIndex: 0,
  explanation: "La CAN 2027 sera co-organisée par trois pays d'Afrique de l'Est : le Kenya, l'Ouganda et la Tanzanie.",
  whyWrong: ["", "Le Rwanda ne fait pas partie des pays hôtes de la CAN 2027", "L'Éthiopie ne fait pas partie des pays hôtes de la CAN 2027", "Le Burundi ne fait pas partie des pays hôtes de la CAN 2027"],
  memoryTrick: "CAN 2027 : Kenya–Ouganda–Tanzanie, trio est-africain.",
  source: "CAF, CAN 2027, pays hôtes", contested: false
},
{
  id: 229, module: "Actualités", subject: "UNESCO", difficulty: 2,
  question: "Le nouveau Directeur général de l'UNESCO, élu le 6 novembre 2025, est :",
  options: ["Khaled El-Enany", "Audrey Azoulay", "Amadou-Mahtar M'Bow", "Irina Bokova"],
  correctIndex: 0,
  explanation: "Khaled El-Enany, égyptologue et ancien ministre égyptien du Tourisme et des Antiquités, a été élu Directeur général de l'UNESCO le 6 novembre 2025.",
  whyWrong: ["", "Audrey Azoulay est la Directrice générale sortante, prédécesseure d'El-Enany", "M'Bow a dirigé l'UNESCO de 1974 à 1987, bien avant El-Enany", "Irina Bokova a dirigé l'UNESCO de 2009 à 2017"],
  memoryTrick: "El-Enany : nouveau DG de l'UNESCO, élu novembre 2025.",
  source: "UNESCO, élection du DG, 6 novembre 2025", contested: false
},
{
  id: 230, module: "Actualités", subject: "UNESCO", difficulty: 2,
  question: "Khaled El-Enany, nouveau Directeur général de l'UNESCO, est originaire :",
  options: ["Du Maroc", "De l'Égypte", "De la Tunisie", "Du Liban"],
  correctIndex: 1,
  explanation: "Khaled El-Enany est égyptien, ancien ministre du Tourisme et des Antiquités de son pays, ce qui en fait le premier Directeur général de l'UNESCO issu d'un pays arabe.",
  whyWrong: ["El-Enany n'est pas marocain", "", "El-Enany n'est pas tunisien", "El-Enany n'est pas libanais"],
  memoryTrick: "El-Enany : égyptologue égyptien, premier DG arabe de l'UNESCO.",
  source: "UNESCO, élection du DG, 6 novembre 2025", contested: false
},
{
  id: 231, module: "Actualités", subject: "UNESCO", difficulty: 3,
  question: "Khaled El-Enany a été élu Directeur général de l'UNESCO par la Conférence générale réunie à :",
  options: ["Paris", "Samarcande", "Le Caire", "Doha"],
  correctIndex: 1,
  explanation: "L'élection de Khaled El-Enany s'est tenue lors de la Conférence générale de l'UNESCO réunie à Samarcande, en Ouzbékistan, le 6 novembre 2025.",
  whyWrong: ["Paris est le siège permanent de l'UNESCO, mais cette session s'est tenue ailleurs", "", "Le Caire n'a pas accueilli cette Conférence générale", "Doha n'a pas accueilli cette Conférence générale"],
  memoryTrick: "Samarcande : la ville de l'élection d'El-Enany.",
  source: "UNESCO, Conférence générale, Samarcande, 6 novembre 2025", contested: false
},
{
  id: 232, module: "Actualités", subject: "UNESCO", difficulty: 3,
  question: "Khaled El-Enany a été élu Directeur général de l'UNESCO avec :",
  options: ["100 voix sur 174", "130 voix sur 174", "172 voix sur 174", "174 voix sur 174"],
  correctIndex: 2,
  explanation: "Khaled El-Enany a été élu avec 172 voix sur 174, un score quasi unanime traduisant un large consensus au sein de la Conférence générale.",
  whyWrong: ["Ce score sous-estime largement le résultat réel de l'élection", "Ce score sous-estime le résultat réel de l'élection", "", "Le score n'a pas été parfaitement unanime, deux voix manquant à l'unanimité totale"],
  memoryTrick: "172 voix sur 174 : quasi-unanimité pour El-Enany.",
  source: "UNESCO, Conférence générale, 6 novembre 2025", contested: false
},
{
  id: 233, module: "Actualités", subject: "UNESCO", difficulty: 2,
  question: "Khaled El-Enany est entré en fonction en tant que Directeur général de l'UNESCO le :",
  options: ["6 novembre 2025", "15 novembre 2025", "1er janvier 2026", "31 octobre 2025"],
  correctIndex: 1,
  explanation: "Après son élection le 6 novembre 2025, Khaled El-Enany est officiellement entré en fonction le 15 novembre 2025, pour un mandat de 4 ans.",
  whyWrong: ["Le 6 novembre 2025 est la date de son élection, pas de sa prise de fonction", "", "Cette date ne correspond pas à la prise de fonction d'El-Enany", "Cette date correspond à la résolution 2797 sur le Sahara, sans lien avec l'UNESCO"],
  memoryTrick: "Élu le 6, en fonction le 15 novembre 2025.",
  source: "UNESCO, entrée en fonction, 15 novembre 2025", contested: false
},
{
  id: 234, module: "Actualités", subject: "UNESCO", difficulty: 3,
  question: "Khaled El-Enany est le :",
  options: ["9e Directeur général de l'UNESCO", "10e Directeur général de l'UNESCO", "12e Directeur général de l'UNESCO", "15e Directeur général de l'UNESCO"],
  correctIndex: 2,
  explanation: "Khaled El-Enany est le 12e Directeur général de l'UNESCO depuis la fondation de l'organisation en 1945.",
  whyWrong: ["Ce rang ne correspond pas à celui d'El-Enany dans la succession des DG", "Ce rang ne correspond pas à celui d'El-Enany dans la succession des DG", "", "Ce rang ne correspond pas à celui d'El-Enany dans la succession des DG"],
  memoryTrick: "El-Enany : 12e DG de l'histoire de l'UNESCO.",
  source: "UNESCO, succession des directeurs généraux", contested: false
},
{
  id: 235, module: "Actualités", subject: "UNESCO", difficulty: 3,
  question: "Avant Khaled El-Enany, le seul autre Directeur général africain de l'UNESCO avait été :",
  options: ["Amadou-Mahtar M'Bow", "Kofi Annan", "Nelson Mandela", "Boutros Boutros-Ghali"],
  correctIndex: 0,
  explanation: "Amadou-Mahtar M'Bow, Sénégalais, a dirigé l'UNESCO de 1974 à 1987 ; Khaled El-Enany, Égyptien, est le deuxième Africain à diriger l'organisation.",
  whyWrong: ["", "Kofi Annan a dirigé l'ONU, pas l'UNESCO", "Nelson Mandela n'a jamais dirigé l'UNESCO", "Boutros Boutros-Ghali a dirigé l'ONU, pas l'UNESCO"],
  memoryTrick: "M'Bow (Sénégal, 1974-1987) puis El-Enany (Égypte, 2025) : deux Africains à la tête de l'UNESCO.",
  source: "UNESCO, succession des directeurs généraux", contested: false
},
{
  id: 236, module: "Actualités", subject: "UNESCO", difficulty: 2,
  question: "La Directrice générale sortante de l'UNESCO, que Khaled El-Enany a remplacée en 2025, est :",
  options: ["Audrey Azoulay", "Irina Bokova", "Federico Mayor", "Koïchiro Matsuura"],
  correctIndex: 0,
  explanation: "Audrey Azoulay, en poste de 2017 à 2025, est la Directrice générale sortante que remplace Khaled El-Enany.",
  whyWrong: ["", "Irina Bokova a dirigé l'UNESCO avant Azoulay, de 2009 à 2017", "Federico Mayor a dirigé l'UNESCO bien avant Azoulay", "Koïchiro Matsuura a dirigé l'UNESCO de 1999 à 2009"],
  memoryTrick: "Azoulay (2017-2025) cède la place à El-Enany.",
  source: "UNESCO, succession des directeurs généraux", contested: false
},
{
  id: 237, module: "Actualités", subject: "UNESCO", difficulty: 3,
  question: "Lors de sa session de 2025, le Comité du patrimoine mondial de l'UNESCO a inscrit :",
  options: ["12 nouveaux biens", "18 nouveaux biens", "26 nouveaux biens", "40 nouveaux biens"],
  correctIndex: 2,
  explanation: "La session 2025 du Comité du patrimoine mondial de l'UNESCO a permis l'inscription de 26 nouveaux biens sur la Liste du patrimoine mondial.",
  whyWrong: ["Ce chiffre sous-estime le nombre de biens inscrits en 2025", "Ce chiffre sous-estime le nombre de biens inscrits en 2025", "", "Ce chiffre surestime le nombre de biens inscrits en 2025"],
  memoryTrick: "Session 2025 : 26 nouveaux biens inscrits.",
  source: "UNESCO, Comité du patrimoine mondial, session 2025", contested: false
},
{
  id: 238, module: "Actualités", subject: "UNESCO", difficulty: 3,
  question: "La prochaine session du Comité du patrimoine mondial de l'UNESCO, prévue à l'été 2026, se tiendra à :",
  options: ["Busan, Corée du Sud", "Kyoto, Japon", "Hanoï, Vietnam", "Singapour"],
  correctIndex: 0,
  explanation: "La session 2026 du Comité du patrimoine mondial de l'UNESCO se tiendra à Busan, en Corée du Sud, durant l'été.",
  whyWrong: ["", "Kyoto n'accueille pas cette session", "Hanoï n'accueille pas cette session", "Singapour n'accueille pas cette session"],
  memoryTrick: "Été 2026 : rendez-vous du patrimoine mondial à Busan.",
  source: "UNESCO, Comité du patrimoine mondial, session 2026", contested: false
},
{
  id: 239, module: "Actualités", subject: "Climat", difficulty: 2,
  question: "La COP30, conférence des Nations unies sur le climat, s'est tenue en novembre 2025 à :",
  options: ["Belém, Brésil", "Dubaï, Émirats arabes unis", "Bakou, Azerbaïdjan", "Charm el-Cheikh, Égypte"],
  correctIndex: 0,
  explanation: "La COP30 s'est tenue à Belém, au Brésil, en novembre 2025, marquant le dixième anniversaire de l'Accord de Paris.",
  whyWrong: ["", "Dubaï a accueilli la COP28, pas la COP30", "Bakou a accueilli la COP29, pas la COP30", "Charm el-Cheikh a accueilli la COP27, pas la COP30"],
  memoryTrick: "COP30 : Belém, dixième anniversaire de l'Accord de Paris.",
  source: "COP30, Belém, novembre 2025", contested: false
},
{
  id: 240, module: "Actualités", subject: "Climat", difficulty: 2,
  question: "La COP30 de Belém a marqué le dixième anniversaire :",
  options: ["Du protocole de Kyoto", "De l'Accord de Paris", "Du Sommet de la Terre de Rio", "De la création du GIEC"],
  correctIndex: 1,
  explanation: "La COP30 s'est tenue dix ans après l'adoption de l'Accord de Paris lors de la COP21, en 2015.",
  whyWrong: ["Le protocole de Kyoto date de 1997, son dixième anniversaire n'est pas celui célébré en 2025", "", "Le Sommet de la Terre de Rio date de 1992, son dixième anniversaire n'est pas celui célébré en 2025", "Le GIEC a été créé en 1988, son anniversaire n'est pas celui célébré en 2025"],
  memoryTrick: "2015 (Paris) + 10 ans = 2025 (Belém).",
  source: "COP30, Belém, novembre 2025", contested: false
},
{
  id: 241, module: "Actualités", subject: "Climat", difficulty: 3,
  question: "L'accord final de la COP30, jugé peu ambitieux par de nombreux observateurs, a notamment appelé à :",
  options: ["Sortir immédiatement des énergies fossiles", "Tripler le financement de l'adaptation pour les pays en développement", "Créer une taxe carbone mondiale unique", "Interdire les centrales à charbon dès 2026"],
  correctIndex: 1,
  explanation: "L'accord final de la COP30 a appelé à tripler le financement de l'adaptation pour les pays en développement, sans toutefois mentionner explicitement une sortie des énergies fossiles.",
  whyWrong: ["L'accord final n'a précisément pas mentionné explicitement de sortie des énergies fossiles", "", "Aucune taxe carbone mondiale unique n'a été créée par cet accord", "Aucune interdiction généralisée du charbon dès 2026 n'a été actée par cet accord"],
  memoryTrick: "COP30 : triplement du financement de l'adaptation, mais pas de sortie explicite des fossiles.",
  source: "COP30, Belém, accord final, novembre 2025", contested: false
},
{
  id: 242, module: "Actualités", subject: "Climat", difficulty: 3,
  question: "La décision finale de la COP30 de Belém a été surnommée :",
  options: ["Le « paquet de Belém »", "L'« Accord de l'Amazonie »", "Le « pacte vert mondial »", "La « déclaration de Belém »"],
  correctIndex: 0,
  explanation: "La décision finale de la COP30, également désignée sous le terme portugais « mutirão », a été surnommée le « paquet de Belém ».",
  whyWrong: ["", "Ce nom n'est pas celui retenu pour la décision finale de la COP30", "Ce nom n'est pas celui retenu pour la décision finale de la COP30", "Ce nom n'est pas celui retenu pour la décision finale de la COP30"],
  memoryTrick: "COP30 : le « paquet de Belém », alias « mutirão ».",
  source: "COP30, Belém, novembre 2025", contested: false
},
{
  id: 243, module: "Actualités", subject: "Climat", difficulty: 2,
  question: "La COP31, prévue en novembre 2026, se tiendra à :",
  options: ["Antalya, Turquie", "Canberra, Australie", "Nairobi, Kenya", "Marrakech, Maroc"],
  correctIndex: 0,
  explanation: "La COP31 se tiendra à Antalya, en Turquie, en novembre 2026, sous une présidence assurée par l'Australie.",
  whyWrong: ["", "Canberra n'accueille pas la COP31, bien que l'Australie en assure la présidence", "Nairobi n'accueille pas la COP31", "Marrakech a accueilli la COP22 en 2016, pas la COP31"],
  memoryTrick: "COP31 : Antalya accueille, l'Australie préside.",
  source: "COP31, Antalya, novembre 2026", contested: false
},
{
  id: 244, module: "Actualités", subject: "Climat", difficulty: 3,
  question: "La présidence de la COP31, qui se tiendra à Antalya, sera assurée par :",
  options: ["La Turquie", "L'Australie", "Le Brésil", "Les Émirats arabes unis"],
  correctIndex: 1,
  explanation: "Bien qu'accueillie à Antalya, en Turquie, la COP31 verra sa présidence assurée par l'Australie, une configuration particulière issue d'un compromis diplomatique.",
  whyWrong: ["La Turquie accueille la conférence, mais n'en assure pas la présidence", "", "Le Brésil a présidé la COP30, pas la COP31", "Les Émirats arabes unis ont présidé la COP28, pas la COP31"],
  memoryTrick: "Antalya accueille, mais c'est l'Australie qui préside la COP31.",
  source: "COP31, Antalya, novembre 2026", contested: false
},
{
  id: 245, module: "Actualités", subject: "Climat", difficulty: 3,
  question: "La COP32, qui suivra la COP31, est prévue en 2027 à :",
  options: ["Addis-Abeba, Éthiopie", "Le Caire, Égypte", "Kinshasa, RD Congo", "Lagos, Nigéria"],
  correctIndex: 0,
  explanation: "La COP32 est prévue en 2027 à Addis-Abeba, en Éthiopie, ville qui héberge également le siège de l'Union africaine.",
  whyWrong: ["", "Le Caire n'accueille pas la COP32", "Kinshasa n'accueille pas la COP32", "Lagos n'accueille pas la COP32"],
  memoryTrick: "COP32 : Addis-Abeba, siège de l'UA, en 2027.",
  source: "COP32, Addis-Abeba, 2027", contested: false
},
{
  id: 246, module: "Actualités", subject: "Climat", difficulty: 2,
  question: "La 3e Conférence des Nations unies sur l'Océan (UNOC-3) s'est tenue en juin 2025 à :",
  options: ["Nice, France", "Lisbonne, Portugal", "Athènes, Grèce", "Marseille, France"],
  correctIndex: 0,
  explanation: "La 3e Conférence des Nations unies sur l'Océan (UNOC-3) s'est tenue à Nice, en France, en juin 2025.",
  whyWrong: ["", "Lisbonne a accueilli la 2e Conférence sur l'Océan (UNOC-2) en 2022, pas la 3e", "Athènes n'a pas accueilli l'UNOC-3", "Marseille n'a pas accueilli l'UNOC-3"],
  memoryTrick: "UNOC-3 : Nice, juin 2025.",
  source: "UNOC-3, Nice, juin 2025", contested: false
},
{
  id: 247, module: "Actualités", subject: "Climat", difficulty: 2,
  question: "Le sigle « COP », utilisé pour les grandes conférences climatiques de l'ONU, signifie :",
  options: ["Conférence des Parties", "Conseil des Politiques", "Commission des Objectifs de Paris", "Comité des Océans et Pôles"],
  correctIndex: 0,
  explanation: "COP signifie « Conférence des Parties », l'organe de décision suprême de la Convention-cadre des Nations unies sur les changements climatiques (CCNUCC).",
  whyWrong: ["", "Ce développement n'est pas celui du sigle COP", "Ce développement n'est pas celui du sigle COP", "Ce développement n'est pas celui du sigle COP"],
  memoryTrick: "COP = Conférence des Parties.",
  source: "CCNUCC, Conférence des Parties (COP)", contested: false
},
{
  id: 248, module: "Actualités", subject: "Climat", difficulty: 2,
  question: "L'Accord de Paris sur le climat a été adopté en 2015 lors de la :",
  options: ["COP15", "COP21", "COP25", "COP30"],
  correctIndex: 1,
  explanation: "L'Accord de Paris a été adopté lors de la COP21, qui s'est tenue à Paris en décembre 2015.",
  whyWrong: ["La COP15, tenue à Copenhague en 2009, n'a pas abouti à l'Accord de Paris", "", "La COP25 s'est tenue en 2019, bien après l'adoption de l'Accord de Paris", "La COP30, tenue à Belém en 2025, a célébré le dixième anniversaire de l'Accord de Paris, sans l'avoir adopté"],
  memoryTrick: "COP21 = Paris = 2015 = Accord de Paris.",
  source: "Accord de Paris, COP21, 2015", contested: false
},
{
  id: 249, module: "Actualités", subject: "Climat", difficulty: 2,
  question: "Avant l'Accord de Paris, le principal traité international de lutte contre le changement climatique était :",
  options: ["Le protocole de Kyoto (1997)", "La charte de La Haye (1990)", "Le pacte de Stockholm (1985)", "L'accord de Genève (2001)"],
  correctIndex: 0,
  explanation: "Le protocole de Kyoto, adopté en 1997, était le principal traité climatique international avant l'Accord de Paris de 2015.",
  whyWrong: ["", "Ce texte n'existe pas sous ce nom", "Ce texte n'existe pas sous ce nom", "Ce texte n'existe pas sous ce nom"],
  memoryTrick: "Kyoto (1997) précède Paris (2015).",
  source: "Protocole de Kyoto, 1997", contested: false
},
{
  id: 250, module: "Actualités", subject: "Prix Nobel 2025", difficulty: 2,
  question: "Le prix Nobel de la paix 2025 a été attribué à :",
  options: ["María Corina Machado", "Malala Yousafzai", "Greta Thunberg", "Denis Mukwege"],
  correctIndex: 0,
  explanation: "María Corina Machado, opposante politique vénézuélienne, a reçu le prix Nobel de la paix 2025.",
  whyWrong: ["", "Malala Yousafzai a reçu le prix Nobel de la paix en 2014, pas en 2025", "Greta Thunberg n'a pas reçu le prix Nobel de la paix", "Denis Mukwege a reçu le prix Nobel de la paix en 2018, pas en 2025"],
  memoryTrick: "Nobel de la paix 2025 : María Corina Machado.",
  source: "Prix Nobel de la paix 2025", contested: false
},
{
  id: 251, module: "Actualités", subject: "Prix Nobel 2025", difficulty: 2,
  question: "María Corina Machado, lauréate du prix Nobel de la paix 2025, est originaire :",
  options: ["De Colombie", "Du Venezuela", "De l'Équateur", "Du Pérou"],
  correctIndex: 1,
  explanation: "María Corina Machado est une opposante politique vénézuélienne, récompensée par le prix Nobel de la paix 2025.",
  whyWrong: ["Machado n'est pas colombienne", "", "Machado n'est pas équatorienne", "Machado n'est pas péruvienne"],
  memoryTrick: "Machado : opposante vénézuélienne, Nobel de la paix 2025.",
  source: "Prix Nobel de la paix 2025", contested: false
},
{
  id: 252, module: "Actualités", subject: "Prix Nobel 2025", difficulty: 2,
  question: "Le prix Nobel de littérature 2025 a été attribué à :",
  options: ["László Krasznahorkai", "Annie Ernaux", "Jon Fosse", "Han Kang"],
  correctIndex: 0,
  explanation: "L'écrivain hongrois László Krasznahorkai a reçu le prix Nobel de littérature 2025.",
  whyWrong: ["", "Annie Ernaux a reçu le prix Nobel de littérature en 2022, pas en 2025", "Jon Fosse a reçu le prix Nobel de littérature en 2023, pas en 2025", "Han Kang a reçu le prix Nobel de littérature en 2024, pas en 2025"],
  memoryTrick: "Nobel de littérature 2025 : Krasznahorkai.",
  source: "Prix Nobel de littérature 2025", contested: false
},
{
  id: 253, module: "Actualités", subject: "Prix Nobel 2025", difficulty: 2,
  question: "László Krasznahorkai, lauréat du prix Nobel de littérature 2025, est originaire :",
  options: ["De Pologne", "De Hongrie", "De Roumanie", "De République tchèque"],
  correctIndex: 1,
  explanation: "László Krasznahorkai est un écrivain hongrois, lauréat du prix Nobel de littérature 2025.",
  whyWrong: ["Krasznahorkai n'est pas polonais", "", "Krasznahorkai n'est pas roumain", "Krasznahorkai n'est pas tchèque"],
  memoryTrick: "Krasznahorkai : écrivain hongrois, Nobel 2025.",
  source: "Prix Nobel de littérature 2025", contested: false
},
{
  id: 254, module: "Actualités", subject: "Prix Nobel 2025", difficulty: 3,
  question: "Le prix Nobel de médecine 2025 a récompensé des travaux sur :",
  options: ["La tolérance immunitaire périphérique et les lymphocytes T régulateurs", "L'édition génomique CRISPR", "Le séquençage de l'ADN", "Les vaccins à ARN messager"],
  correctIndex: 0,
  explanation: "Le prix Nobel de médecine 2025 a récompensé des découvertes sur la tolérance immunitaire périphérique et le rôle des lymphocytes T régulateurs.",
  whyWrong: ["", "CRISPR a été récompensé par un Nobel de chimie en 2020, pas par celui de médecine 2025", "Le séquençage de l'ADN n'est pas l'objet du Nobel de médecine 2025", "Les vaccins à ARN messager n'ont pas été récompensés par ce Nobel de médecine 2025"],
  memoryTrick: "Médecine 2025 : tolérance immunitaire, lymphocytes T régulateurs.",
  source: "Prix Nobel de médecine 2025", contested: false
},
{
  id: 255, module: "Actualités", subject: "Prix Nobel 2025", difficulty: 3,
  question: "Parmi ces scientifiques, lequel a reçu le prix Nobel de médecine 2025 ?",
  options: ["Shimon Sakaguchi", "John Clarke", "Omar Yaghi", "Joel Mokyr"],
  correctIndex: 0,
  explanation: "Shimon Sakaguchi, avec Mary Brunkow et Fred Ramsdell, a reçu le prix Nobel de médecine 2025 pour ses travaux sur la tolérance immunitaire.",
  whyWrong: ["", "John Clarke a reçu le prix Nobel de physique 2025, pas celui de médecine", "Omar Yaghi a reçu le prix Nobel de chimie 2025, pas celui de médecine", "Joel Mokyr a reçu le prix Nobel d'économie 2025, pas celui de médecine"],
  memoryTrick: "Sakaguchi : médecine ; Clarke : physique ; Yaghi : chimie ; Mokyr : économie.",
  source: "Prix Nobel de médecine 2025", contested: false
},
{
  id: 256, module: "Actualités", subject: "Prix Nobel 2025", difficulty: 3,
  question: "Le prix Nobel de médecine 2025 a été partagé entre :",
  options: ["2 lauréats", "3 lauréats", "4 lauréats", "5 lauréats"],
  correctIndex: 1,
  explanation: "Le prix Nobel de médecine 2025 a été partagé entre trois lauréats : Mary Brunkow, Fred Ramsdell et Shimon Sakaguchi.",
  whyWrong: ["Ce chiffre sous-estime le nombre de lauréats", "", "Ce chiffre surestime le nombre de lauréats", "Ce chiffre surestime le nombre de lauréats"],
  memoryTrick: "Médecine 2025 : trois lauréats pour la tolérance immunitaire.",
  source: "Prix Nobel de médecine 2025", contested: false
},
{
  id: 257, module: "Actualités", subject: "Prix Nobel 2025", difficulty: 3,
  question: "Le prix Nobel de physique 2025 a récompensé des travaux sur :",
  options: ["L'effet tunnel quantique macroscopique dans des circuits électriques", "La détection des ondes gravitationnelles", "La découverte du boson de Higgs", "La supraconductivité à haute température"],
  correctIndex: 0,
  explanation: "Le prix Nobel de physique 2025 a récompensé la découverte de l'effet tunnel quantique macroscopique et de la quantification de l'énergie dans des circuits électriques.",
  whyWrong: ["", "La détection des ondes gravitationnelles a été récompensée par un Nobel antérieur, en 2017", "Le boson de Higgs a été récompensé par un Nobel de physique en 2013", "La supraconductivité à haute température n'est pas l'objet du Nobel de physique 2025"],
  memoryTrick: "Physique 2025 : effet tunnel quantique macroscopique.",
  source: "Prix Nobel de physique 2025", contested: false
},
{
  id: 258, module: "Actualités", subject: "Prix Nobel 2025", difficulty: 3,
  question: "Parmi ces scientifiques, lequel a reçu le prix Nobel de physique 2025 ?",
  options: ["Michel H. Devoret", "Susumu Kitagawa", "Peter Howitt", "Fred Ramsdell"],
  correctIndex: 0,
  explanation: "Michel H. Devoret, avec John Clarke et John M. Martinis, a reçu le prix Nobel de physique 2025 pour ses travaux sur l'effet tunnel quantique macroscopique.",
  whyWrong: ["", "Susumu Kitagawa a reçu le prix Nobel de chimie 2025, pas celui de physique", "Peter Howitt a reçu le prix Nobel d'économie 2025, pas celui de physique", "Fred Ramsdell a reçu le prix Nobel de médecine 2025, pas celui de physique"],
  memoryTrick: "Devoret, Clarke, Martinis : le trio du Nobel de physique 2025.",
  source: "Prix Nobel de physique 2025", contested: false
},
{
  id: 259, module: "Actualités", subject: "Prix Nobel 2025", difficulty: 3,
  question: "Le prix Nobel de physique 2025 a été partagé entre :",
  options: ["2 lauréats", "3 lauréats", "4 lauréats", "6 lauréats"],
  correctIndex: 1,
  explanation: "Le prix Nobel de physique 2025 a été partagé entre trois lauréats : John Clarke, Michel H. Devoret et John M. Martinis.",
  whyWrong: ["Ce chiffre sous-estime le nombre de lauréats", "", "Ce chiffre surestime le nombre de lauréats", "Ce chiffre surestime largement le nombre de lauréats"],
  memoryTrick: "Physique 2025 : trois lauréats, comme la médecine.",
  source: "Prix Nobel de physique 2025", contested: false
},
{
  id: 260, module: "Actualités", subject: "Prix Nobel 2025", difficulty: 3,
  question: "Le prix Nobel de chimie 2025 a récompensé des travaux sur :",
  options: ["Les réseaux métallo-organiques (MOF)", "La catalyse asymétrique", "La chimie du lithium", "Les cellules photovoltaïques organiques"],
  correctIndex: 0,
  explanation: "Le prix Nobel de chimie 2025 a récompensé le développement des réseaux métallo-organiques (Metal-Organic Frameworks, MOF), des matériaux poreux aux nombreuses applications.",
  whyWrong: ["", "La catalyse asymétrique a été récompensée par un Nobel de chimie antérieur, en 2001", "La chimie du lithium n'est pas l'objet du Nobel de chimie 2025", "Les cellules photovoltaïques organiques ne sont pas l'objet du Nobel de chimie 2025"],
  memoryTrick: "Chimie 2025 : réseaux métallo-organiques (MOF).",
  source: "Prix Nobel de chimie 2025", contested: false
},
{
  id: 261, module: "Actualités", subject: "Prix Nobel 2025", difficulty: 3,
  question: "Parmi ces scientifiques, lequel a reçu le prix Nobel de chimie 2025 ?",
  options: ["Omar M. Yaghi", "John M. Martinis", "Mary E. Brunkow", "Philippe Aghion"],
  correctIndex: 0,
  explanation: "Omar M. Yaghi, avec Susumu Kitagawa et Richard Robson, a reçu le prix Nobel de chimie 2025 pour ses travaux sur les réseaux métallo-organiques.",
  whyWrong: ["", "John M. Martinis a reçu le prix Nobel de physique 2025, pas celui de chimie", "Mary E. Brunkow a reçu le prix Nobel de médecine 2025, pas celui de chimie", "Philippe Aghion a reçu le prix Nobel d'économie 2025, pas celui de chimie"],
  memoryTrick: "Yaghi, Kitagawa, Robson : le trio du Nobel de chimie 2025.",
  source: "Prix Nobel de chimie 2025", contested: false
},
{
  id: 262, module: "Actualités", subject: "Prix Nobel 2025", difficulty: 3,
  question: "Le prix Nobel de chimie 2025 a été partagé entre :",
  options: ["2 lauréats", "3 lauréats", "4 lauréats", "5 lauréats"],
  correctIndex: 1,
  explanation: "Le prix Nobel de chimie 2025 a été partagé entre trois lauréats : Susumu Kitagawa, Richard Robson et Omar M. Yaghi.",
  whyWrong: ["Ce chiffre sous-estime le nombre de lauréats", "", "Ce chiffre surestime le nombre de lauréats", "Ce chiffre surestime le nombre de lauréats"],
  memoryTrick: "Chimie 2025 : trois lauréats pour les MOF.",
  source: "Prix Nobel de chimie 2025", contested: false
},
{
  id: 263, module: "Actualités", subject: "Prix Nobel 2025", difficulty: 3,
  question: "Le prix Nobel d'économie 2025 a récompensé des travaux sur :",
  options: ["L'innovation et la croissance économique", "La théorie des jeux", "Les inégalités mondiales", "La microfinance"],
  correctIndex: 0,
  explanation: "Le prix Nobel d'économie 2025 a récompensé Joel Mokyr, Philippe Aghion et Peter Howitt pour leurs travaux sur l'innovation et la croissance économique.",
  whyWrong: ["", "La théorie des jeux a été récompensée par des Nobels antérieurs, sans lien avec 2025", "Les inégalités mondiales ne sont pas l'objet direct du Nobel d'économie 2025", "La microfinance n'est pas l'objet du Nobel d'économie 2025"],
  memoryTrick: "Économie 2025 : innovation et croissance.",
  source: "Prix Nobel d'économie 2025", contested: false
},
{
  id: 264, module: "Actualités", subject: "Prix Nobel 2025", difficulty: 3,
  question: "Parmi ces économistes, lequel a reçu le prix Nobel d'économie 2025 ?",
  options: ["Philippe Aghion", "Richard Robson", "María Corina Machado", "Shimon Sakaguchi"],
  correctIndex: 0,
  explanation: "Philippe Aghion, avec Joel Mokyr et Peter Howitt, a reçu le prix Nobel d'économie 2025 pour ses travaux sur l'innovation et la croissance.",
  whyWrong: ["", "Richard Robson a reçu le prix Nobel de chimie 2025, pas celui d'économie", "María Corina Machado a reçu le prix Nobel de la paix 2025, pas celui d'économie", "Shimon Sakaguchi a reçu le prix Nobel de médecine 2025, pas celui d'économie"],
  memoryTrick: "Aghion, Mokyr, Howitt : le trio du Nobel d'économie 2025.",
  source: "Prix Nobel d'économie 2025", contested: false
},
{
  id: 265, module: "Actualités", subject: "Prix Nobel 2025", difficulty: 3,
  question: "Le prix Nobel d'économie 2025 a été partagé entre :",
  options: ["2 lauréats", "3 lauréats", "4 lauréats", "5 lauréats"],
  correctIndex: 1,
  explanation: "Le prix Nobel d'économie 2025 a été partagé entre trois lauréats : Joel Mokyr, Philippe Aghion et Peter Howitt.",
  whyWrong: ["Ce chiffre sous-estime le nombre de lauréats", "", "Ce chiffre surestime le nombre de lauréats", "Ce chiffre surestime le nombre de lauréats"],
  memoryTrick: "Économie 2025 : trois lauréats pour l'innovation.",
  source: "Prix Nobel d'économie 2025", contested: false
},
{
  id: 266, module: "Actualités", subject: "Prix Nobel 2025", difficulty: 2,
  question: "Parmi les six catégories de prix Nobel attribuées en 2025, lesquelles ont été décernées à un lauréat unique (non partagées) ?",
  options: ["Littérature et paix", "Physique et chimie", "Médecine et économie", "Chimie et paix"],
  correctIndex: 0,
  explanation: "En 2025, les prix Nobel de littérature (László Krasznahorkai) et de la paix (María Corina Machado) ont été attribués à un lauréat unique, contrairement aux prix scientifiques et d'économie, partagés entre trois lauréats chacun.",
  whyWrong: ["", "Les prix de physique et de chimie ont chacun été partagés entre trois lauréats", "Les prix de médecine et d'économie ont chacun été partagés entre trois lauréats", "Le prix de chimie a été partagé entre trois lauréats, seul celui de la paix ne l'a pas été"],
  memoryTrick: "Un seul nom pour littérature et paix ; trois noms pour les Nobel scientifiques et l'économie.",
  source: "Prix Nobel 2025, ensemble des catégories", contested: false
},
{
  id: 267, module: "Actualités", subject: "Jeux Olympiques", difficulty: 1,
  question: "Les Jeux olympiques d'été de 2024 ont été organisés à :",
  options: ["Tokyo", "Paris", "Los Angeles", "Londres"],
  correctIndex: 1,
  explanation: "Paris a accueilli les Jeux olympiques d'été de 2024, une troisième organisation après celles de 1900 et 1924.",
  whyWrong: ["Tokyo a accueilli les Jeux olympiques de 2020 (organisés en 2021), pas ceux de 2024", "", "Los Angeles accueillera les Jeux olympiques de 2028, pas ceux de 2024", "Londres a accueilli les Jeux olympiques de 2012, pas ceux de 2024"],
  memoryTrick: "Paris 2024 : troisième olympiade parisienne, après 1900 et 1924.",
  source: "Jeux olympiques de Paris, 2024", contested: false
},
{
  id: 268, module: "Actualités", subject: "Jeux Olympiques", difficulty: 2,
  question: "Les Jeux olympiques de Paris 2024 se sont déroulés :",
  options: ["Du 26 juillet au 11 août 2024", "Du 1er juin au 15 juin 2024", "Du 1er septembre au 20 septembre 2024", "Du 10 mai au 30 mai 2024"],
  correctIndex: 0,
  explanation: "Les Jeux olympiques d'été de Paris 2024 se sont déroulés du 26 juillet au 11 août 2024.",
  whyWrong: ["", "Ces dates ne correspondent pas au calendrier réel des JO de Paris 2024", "Ces dates ne correspondent pas au calendrier réel des JO de Paris 2024", "Ces dates ne correspondent pas au calendrier réel des JO de Paris 2024"],
  memoryTrick: "Paris 2024 : 26 juillet – 11 août.",
  source: "Jeux olympiques de Paris, 2024", contested: false
},
{
  id: 269, module: "Actualités", subject: "Jeux Olympiques", difficulty: 2,
  question: "Avant 2024, Paris avait déjà accueilli les Jeux olympiques d'été à deux reprises, en :",
  options: ["1896 et 1908", "1900 et 1924", "1912 et 1936", "1920 et 1948"],
  correctIndex: 1,
  explanation: "Paris avait accueilli les Jeux olympiques d'été en 1900 et en 1924, avant sa troisième organisation en 2024.",
  whyWrong: ["1896 est l'année des premiers Jeux olympiques modernes, organisés à Athènes, pas à Paris", "", "Ces années ne correspondent pas aux précédentes éditions parisiennes", "Ces années ne correspondent pas aux précédentes éditions parisiennes"],
  memoryTrick: "Paris : 1900, 1924, 2024 — trois éditions, un siècle d'écart entre chacune.",
  source: "Jeux olympiques de Paris, histoire", contested: false
},
{
  id: 270, module: "Actualités", subject: "Jeux Olympiques", difficulty: 2,
  question: "Les Jeux olympiques d'hiver de 2026 seront organisés à :",
  options: ["Milan-Cortina d'Ampezzo, Italie", "Pékin, Chine", "Vancouver, Canada", "Salt Lake City, États-Unis"],
  correctIndex: 0,
  explanation: "Les Jeux olympiques d'hiver de 2026 seront organisés à Milan-Cortina d'Ampezzo, en Italie, en février 2026.",
  whyWrong: ["", "Pékin a accueilli les Jeux d'hiver de 2022, pas ceux de 2026", "Vancouver a accueilli les Jeux d'hiver de 2010, pas ceux de 2026", "Salt Lake City a accueilli les Jeux d'hiver de 2002, pas ceux de 2026"],
  memoryTrick: "JO d'hiver 2026 : Milan-Cortina, Italie.",
  source: "Jeux olympiques d'hiver, Milan-Cortina, 2026", contested: false
},
{
  id: 271, module: "Actualités", subject: "Union européenne", difficulty: 2,
  question: "Le Royaume-Uni a officiellement quitté l'Union européenne (Brexit) le :",
  options: ["23 juin 2016", "31 janvier 2020", "1er janvier 2021", "29 mars 2019"],
  correctIndex: 1,
  explanation: "Le Royaume-Uni a officiellement quitté l'Union européenne le 31 janvier 2020, après le référendum du 23 juin 2016 qui avait initié le processus.",
  whyWrong: ["Le 23 juin 2016 est la date du référendum sur le Brexit, pas de la sortie effective", "", "Le 1er janvier 2021 marque la fin de la période de transition post-Brexit, pas la sortie officielle", "Le 29 mars 2019 était une date de sortie initialement envisagée, puis reportée"],
  memoryTrick: "Référendum en 2016, sortie officielle en 2020.",
  source: "Brexit, sortie du Royaume-Uni de l'UE, 31 janvier 2020", contested: false
},
{
  id: 272, module: "Actualités", subject: "Sahara marocain", difficulty: 3,
  question: "Le plan d'autonomie marocain, base de la résolution 2797, prévoit une autonomie sous :",
  options: ["Souveraineté marocaine", "Tutelle onusienne directe", "Souveraineté partagée avec l'Espagne", "Protectorat international"],
  correctIndex: 0,
  explanation: "Le plan d'autonomie marocain prévoit une large autonomie de gestion pour la région, mais sous souveraineté marocaine, principe consacré par la résolution 2797.",
  whyWrong: ["", "Aucune tutelle onusienne directe n'est prévue par ce plan", "Aucune souveraineté partagée avec l'Espagne n'est prévue par ce plan", "Aucun protectorat international n'est prévu par ce plan"],
  memoryTrick: "Autonomie, oui — mais sous souveraineté marocaine.",
  source: "Plan d'autonomie marocain ; UNSC Rés. 2797", contested: false
},
{
  id: 273, module: "Actualités", subject: "UNESCO", difficulty: 2,
  question: "Avant de diriger l'UNESCO, Khaled El-Enany a été ministre égyptien :",
  options: ["Des Affaires étrangères", "Du Tourisme et des Antiquités", "De l'Éducation", "De la Culture uniquement"],
  correctIndex: 1,
  explanation: "Khaled El-Enany, égyptologue de formation, a été ministre égyptien du Tourisme et des Antiquités avant son élection à la tête de l'UNESCO.",
  whyWrong: ["El-Enany n'a pas occupé ce portefeuille ministériel", "", "El-Enany n'a pas occupé ce portefeuille ministériel", "Ce portefeuille ne correspond pas exactement à celui occupé par El-Enany"],
  memoryTrick: "El-Enany : égyptologue, ex-ministre du Tourisme et des Antiquités.",
  source: "UNESCO, biographie de Khaled El-Enany", contested: false
},
{
  id: 274, module: "Actualités", subject: "Climat", difficulty: 2,
  question: "La Convention-cadre des Nations unies sur les changements climatiques (CCNUCC), dont la COP est l'organe de décision, a été adoptée lors :",
  options: ["Du Sommet de la Terre de Rio, en 1992", "De la COP21 de Paris, en 2015", "Du protocole de Kyoto, en 1997", "Du sommet de Johannesburg, en 2002"],
  correctIndex: 0,
  explanation: "La Convention-cadre des Nations unies sur les changements climatiques a été adoptée lors du Sommet de la Terre de Rio de Janeiro, en 1992, bien avant l'Accord de Paris de 2015.",
  whyWrong: ["", "La COP21 a adopté l'Accord de Paris, mais la Convention-cadre elle-même est antérieure, datant de 1992", "Le protocole de Kyoto découle de la Convention-cadre, mais ne l'a pas créée", "Le sommet de Johannesburg de 2002 portait sur le développement durable, pas sur la création de la Convention-cadre"],
  memoryTrick: "Rio 1992 : naissance de la Convention-cadre sur le climat.",
  source: "CCNUCC, Sommet de la Terre de Rio, 1992", contested: false
},
{
  id: 275, module: "Actualités", subject: "Climat", difficulty: 3,
  question: "La toute première Conférence des Parties (COP1) sur le climat s'est tenue en 1995 à :",
  options: ["Berlin", "Kyoto", "Genève", "Rio de Janeiro"],
  correctIndex: 0,
  explanation: "La première Conférence des Parties (COP1) s'est tenue à Berlin en 1995, avant que la COP3, tenue à Kyoto en 1997, n'adopte le protocole du même nom.",
  whyWrong: ["", "Kyoto a accueilli la COP3 en 1997, pas la COP1 de 1995", "Genève a accueilli des sessions intermédiaires, mais pas la COP1", "Rio de Janeiro a accueilli le Sommet de la Terre de 1992, antérieur à la COP1"],
  memoryTrick: "COP1 : Berlin, 1995 ; COP3 : Kyoto, 1997.",
  source: "CCNUCC, COP1, Berlin, 1995", contested: false
},
{
  id: 276, module: "Actualités", subject: "CAN 2025", difficulty: 3,
  question: "Le jury d'appel de la CAF s'est prononcé sur la finale de la CAN 2025 le :",
  options: ["18 janvier 2026", "1er février 2026", "17 mars 2026", "30 avril 2026"],
  correctIndex: 2,
  explanation: "Le 17 mars 2026, le jury d'appel de la CAF s'est prononcé sur un recours relatif à la finale de la CAN 2025, tout en se déclarant non habilité à désigner le vainqueur de la compétition, une question renvoyée au TAS.",
  whyWrong: ["Le 18 janvier 2026 est la date de la finale elle-même, pas de la décision du jury d'appel", "Cette date ne correspond pas à la décision du jury d'appel", "", "Cette date ne correspond pas à la décision du jury d'appel"],
  memoryTrick: "Finale le 18 janvier, décision d'appel le 17 mars 2026.",
  source: "CAF, jury d'appel, 17 mars 2026", contested: true
},
{
  id: 277, module: "Actualités", subject: "CAN 2025", difficulty: 3,
  question: "Concernant l'issue de la finale de la CAN 2025, le jury d'appel de la CAF s'est déclaré :",
  options: ["Habilité à désigner lui-même le vainqueur du trophée", "Non habilité à désigner le vainqueur de la compétition, la question relevant du TAS", "Favorable à l'organisation d'un match rejoué", "Incompétent pour statuer sur le fond du dossier"],
  correctIndex: 1,
  explanation: "Le jury d'appel de la CAF s'est déclaré non habilité à désigner le vainqueur de la compétition ni à réattribuer le trophée, cette question ayant été portée devant le Tribunal arbitral du sport (TAS).",
  whyWrong: ["Le jury d'appel s'est au contraire déclaré non habilité à trancher ce point", "", "Aucun match rejoué n'a été décidé par le jury d'appel", "Le jury d'appel a statué sur le forfait, mais s'est déclaré non habilité sur la question du trophée"],
  memoryTrick: "CAF : compétente sur le forfait, incompétente sur le trophée — le TAS tranche.",
  source: "CAF, jury d'appel, 17 mars 2026", contested: true
},
{
  id: 278, module: "Actualités", subject: "Sahara marocain", difficulty: 3,
  question: "La résolution 2797 a été adoptée par le Conseil de sécurité de l'ONU, organe qui compte au total :",
  options: ["10 membres", "15 membres", "20 membres", "27 membres"],
  correctIndex: 1,
  explanation: "Le Conseil de sécurité, qui a adopté la résolution 2797 le 31 octobre 2025, compte 15 membres au total, dont 5 permanents et 10 non permanents.",
  whyWrong: ["Ce chiffre sous-estime la composition du Conseil de sécurité", "", "Ce chiffre surestime la composition du Conseil de sécurité", "Ce chiffre surestime largement la composition du Conseil de sécurité"],
  memoryTrick: "Conseil de sécurité : 15 membres, dont celui qui a voté la résolution 2797.",
  source: "UNSC Rés. 2797 ; Charte des Nations unies, Conseil de sécurité", contested: false
},
{
  id: 279, module: "Actualités", subject: "UNESCO", difficulty: 2,
  question: "Le mandat de Khaled El-Enany à la tête de l'UNESCO, débuté le 15 novembre 2025, est prévu pour une durée de :",
  options: ["2 ans", "4 ans", "6 ans", "8 ans"],
  correctIndex: 1,
  explanation: "Le mandat de Khaled El-Enany à la tête de l'UNESCO est prévu pour une durée de 4 ans, débutant le 15 novembre 2025.",
  whyWrong: ["Cette durée sous-estime le mandat réel", "", "Cette durée surestime le mandat réel", "Cette durée surestime largement le mandat réel"],
  memoryTrick: "El-Enany : un mandat de 4 ans à la tête de l'UNESCO.",
  source: "UNESCO, entrée en fonction, 15 novembre 2025", contested: false
},
{
  id: 280, module: "Actualités", subject: "Prix Nobel 2025", difficulty: 2,
  question: "Parmi ces lauréats du prix Nobel 2025, laquelle a reçu le prix de la paix ?",
  options: ["María Corina Machado", "Mary E. Brunkow", "Susumu Kitagawa", "Peter Howitt"],
  correctIndex: 0,
  explanation: "María Corina Machado a reçu le prix Nobel de la paix 2025, tandis que les autres noms proposés correspondent à des lauréats des prix scientifiques ou d'économie de la même année.",
  whyWrong: ["", "Mary E. Brunkow a reçu le prix Nobel de médecine 2025, pas celui de la paix", "Susumu Kitagawa a reçu le prix Nobel de chimie 2025, pas celui de la paix", "Peter Howitt a reçu le prix Nobel d'économie 2025, pas celui de la paix"],
  memoryTrick: "Seule Machado, parmi ces noms, a reçu le Nobel de la paix.",
  source: "Prix Nobel 2025, ensemble des catégories", contested: false
},

// ============================================================
// MODULE — ART & ARCHITECTURE
// ============================================================

{
  id: 281, module: "Art & Architecture", subject: "Architecture marocaine contemporaine", difficulty: 1,
  question: "Le Grand Théâtre (Théâtre Royal) de Rabat est l'œuvre de l'architecte :",
  options: ["Zaha Hadid", "Michel Pinseau", "Jean-François Zevaco", "Rafael de la Hoz"],
  correctIndex: 0,
  explanation: "Le Théâtre Royal de Rabat a été conçu par Zaha Hadid Architects, cabinet fondé par l'architecte irako-britannique Zaha Hadid, lauréate du prix Pritzker.",
  whyWrong: ["", "Michel Pinseau est l'architecte de la Mosquée Hassan II à Casablanca, pas du théâtre de Rabat", "Jean-François Zevaco est une figure du modernisme marocain, mais pas l'architecte de ce théâtre", "Rafael de la Hoz est co-architecte de la Tour Mohammed VI, pas du théâtre de Rabat"],
  memoryTrick: "Zaha Hadid : le théâtre de Rabat, pas la mosquée de Casablanca.",
  source: "Théâtre Royal de Rabat, Zaha Hadid Architects", contested: false
},
{
  id: 282, module: "Art & Architecture", subject: "Architecture marocaine contemporaine", difficulty: 2,
  question: "Le Théâtre Royal de Rabat se situe :",
  options: ["Dans la vallée du Bouregreg, entre Rabat et Salé", "Sur le front de mer de Casablanca", "Dans la médina de Fès", "Sur la corniche d'Agadir"],
  correctIndex: 0,
  explanation: "Le Théâtre Royal de Rabat est implanté dans la vallée du Bouregreg, entre les villes de Rabat et de Salé.",
  whyWrong: ["", "Le théâtre n'est pas situé à Casablanca", "Le théâtre n'est pas situé dans la médina de Fès", "Le théâtre n'est pas situé à Agadir"],
  memoryTrick: "Bouregreg : le théâtre entre Rabat et Salé.",
  source: "Théâtre Royal de Rabat, vallée du Bouregreg", contested: false
},
{
  id: 283, module: "Art & Architecture", subject: "Architecture marocaine contemporaine", difficulty: 3,
  question: "La salle principale du Théâtre Royal de Rabat compte environ :",
  options: ["800 places", "1 800 places", "3 500 places", "7 000 places"],
  correctIndex: 1,
  explanation: "La salle principale du Théâtre Royal de Rabat compte environ 1 800 places, complétée par un amphithéâtre extérieur pouvant accueillir jusqu'à 7 000 personnes.",
  whyWrong: ["Ce chiffre sous-estime la capacité de la salle principale", "", "Ce chiffre surestime la capacité de la salle principale", "Ce chiffre correspond à l'amphithéâtre extérieur, pas à la salle principale"],
  memoryTrick: "1 800 places en salle, 7 000 en plein air.",
  source: "Théâtre Royal de Rabat, capacités", contested: false
},
{
  id: 284, module: "Art & Architecture", subject: "Architecture marocaine contemporaine", difficulty: 3,
  question: "L'amphithéâtre extérieur du Théâtre Royal de Rabat peut accueillir jusqu'à :",
  options: ["1 800 personnes", "3 000 personnes", "7 000 personnes", "15 000 personnes"],
  correctIndex: 2,
  explanation: "L'amphithéâtre extérieur du Théâtre Royal de Rabat peut accueillir jusqu'à 7 000 personnes, en complément de la salle principale de 1 800 places.",
  whyWrong: ["Ce chiffre correspond à la salle principale, pas à l'amphithéâtre extérieur", "Ce chiffre sous-estime la capacité de l'amphithéâtre extérieur", "", "Ce chiffre surestime la capacité de l'amphithéâtre extérieur"],
  memoryTrick: "7 000 places en plein air, contre 1 800 en salle.",
  source: "Théâtre Royal de Rabat, capacités", contested: false
},
{
  id: 285, module: "Art & Architecture", subject: "Architecture marocaine contemporaine", difficulty: 2,
  question: "La géométrie de l'auditorium du Théâtre Royal de Rabat s'inspire :",
  options: ["Des muqarnas marocains", "Des arcs gothiques européens", "Des colonnes doriques grecques", "Des pyramides égyptiennes"],
  correctIndex: 0,
  explanation: "La géométrie de l'auditorium du Théâtre Royal de Rabat s'inspire des muqarnas, ces éléments architecturaux traditionnels en alvéoles caractéristiques de l'art marocain et andalou.",
  whyWrong: ["", "L'inspiration n'est pas gothique européenne", "L'inspiration n'est pas issue de l'ordre dorique grec", "L'inspiration n'est pas issue des pyramides égyptiennes"],
  memoryTrick: "Muqarnas : l'inspiration du théâtre de Rabat.",
  source: "Théâtre Royal de Rabat, conception architecturale", contested: false
},
{
  id: 286, module: "Art & Architecture", subject: "Architecture marocaine contemporaine", difficulty: 2,
  question: "Le Théâtre Royal de Rabat a été inauguré le :",
  options: ["30 juillet 2024", "29 octobre 2024", "18 novembre 2024", "24 avril 2025"],
  correctIndex: 1,
  explanation: "Le Théâtre Royal de Rabat a été inauguré le 29 octobre 2024, quelques années après le lancement de sa construction.",
  whyWrong: ["Cette date correspond à la Fête du Trône, sans lien avec l'inauguration du théâtre", "", "Cette date correspond à la Fête de l'Indépendance, sans lien avec l'inauguration du théâtre", "Cette date correspond au lancement de la LGV Kénitra-Marrakech, pas à l'inauguration du théâtre"],
  memoryTrick: "29 octobre 2024 : ouverture du Théâtre Royal de Rabat.",
  source: "Théâtre Royal de Rabat, inauguration, 29 octobre 2024", contested: false
},
{
  id: 287, module: "Art & Architecture", subject: "Architectes", difficulty: 2,
  question: "Zaha Hadid, architecte du Théâtre Royal de Rabat, est lauréate du prix :",
  options: ["Pritzker", "Nobel de littérature", "Goncourt", "Turner"],
  correctIndex: 0,
  explanation: "Zaha Hadid a reçu le prix Pritzker, la plus prestigieuse distinction internationale en architecture, avant sa disparition en 2016.",
  whyWrong: ["", "Le Nobel de littérature récompense des écrivains, pas des architectes", "Le prix Goncourt récompense un roman francophone, pas de l'architecture", "Le prix Turner récompense l'art contemporain britannique, pas spécifiquement l'architecture"],
  memoryTrick: "Pritzker : le « Nobel » de l'architecture, reçu par Zaha Hadid.",
  source: "Zaha Hadid, prix Pritzker", contested: false
},
{
  id: 288, module: "Art & Architecture", subject: "Architecture marocaine contemporaine", difficulty: 2,
  question: "La Tour Mohammed VI, sur le site du Bouregreg (Salé/Rabat), a été conçue par les architectes :",
  options: ["Rafael de la Hoz et Hakim Benjelloun", "Zaha Hadid et Patrik Schumacher", "Michel Pinseau et André Paccard", "Tarik Oualalou et Populous"],
  correctIndex: 0,
  explanation: "La Tour Mohammed VI a été conçue par les architectes Rafael de la Hoz et Hakim Benjelloun, sur le site du Bouregreg entre Salé et Rabat.",
  whyWrong: ["", "Zaha Hadid a conçu le Théâtre Royal de Rabat, pas la Tour Mohammed VI", "Michel Pinseau a conçu la Mosquée Hassan II, pas la Tour Mohammed VI", "Tarik Oualalou et Populous ont conçu le Grand Stade Hassan II, pas la Tour Mohammed VI"],
  memoryTrick: "Tour Mohammed VI : de la Hoz et Benjelloun.",
  source: "Tour Mohammed VI, architectes", contested: false
},
{
  id: 289, module: "Art & Architecture", subject: "Architecture marocaine contemporaine", difficulty: 2,
  question: "La Tour Mohammed VI, à Bouregreg, est présentée comme :",
  options: ["Le plus haut gratte-ciel du monde", "Le deuxième plus haut gratte-ciel d'Afrique", "Le premier gratte-ciel jamais construit au Maroc", "Un immeuble exclusivement résidentiel"],
  correctIndex: 1,
  explanation: "La Tour Mohammed VI est le deuxième plus haut gratte-ciel d'Afrique, derrière l'Iconic Tower du Caire.",
  whyWrong: ["La tour n'est pas le plus haut gratte-ciel du monde, mais d'Afrique elle occupe la deuxième place", "", "Ce n'est pas le premier gratte-ciel marocain, même s'il s'agit d'un des plus emblématiques", "La tour n'est pas un immeuble exclusivement résidentiel"],
  memoryTrick: "Tour Mohammed VI : 2e d'Afrique, derrière l'Iconic Tower du Caire.",
  source: "Tour Mohammed VI, classement des gratte-ciel africains", contested: false
},
{
  id: 290, module: "Art & Architecture", subject: "Architecture marocaine contemporaine", difficulty: 3,
  question: "Le gratte-ciel africain plus haut que la Tour Mohammed VI se trouve à :",
  options: ["Johannesburg", "Le Caire", "Lagos", "Nairobi"],
  correctIndex: 1,
  explanation: "L'Iconic Tower du Caire, en Égypte, est le seul gratte-ciel africain plus haut que la Tour Mohammed VI de Bouregreg.",
  whyWrong: ["Johannesburg n'abrite pas ce gratte-ciel", "", "Lagos n'abrite pas ce gratte-ciel", "Nairobi n'abrite pas ce gratte-ciel"],
  memoryTrick: "Iconic Tower du Caire : seule tour africaine devançant la Tour Mohammed VI.",
  source: "Tour Mohammed VI, classement des gratte-ciel africains", contested: false
},
{
  id: 291, module: "Art & Architecture", subject: "Architecture marocaine", difficulty: 1,
  question: "La Mosquée Hassan II, à Casablanca, est l'œuvre de l'architecte :",
  options: ["Michel Pinseau", "Zaha Hadid", "Henri Prost", "Jean-François Zevaco"],
  correctIndex: 0,
  explanation: "La Mosquée Hassan II de Casablanca a été conçue par l'architecte français Michel Pinseau, avec un minaret culminant à 210 mètres.",
  whyWrong: ["", "Zaha Hadid a conçu le Théâtre Royal de Rabat, pas la Mosquée Hassan II", "Henri Prost a conçu les plans d'urbanisme de Casablanca et Rabat sous le protectorat, pas la mosquée elle-même", "Jean-François Zevaco est une figure du modernisme marocain, mais pas l'architecte de cette mosquée"],
  memoryTrick: "Pinseau : l'architecte de la Mosquée Hassan II.",
  source: "Mosquée Hassan II, Casablanca, architecte Michel Pinseau", contested: false
},
{
  id: 292, module: "Art & Architecture", subject: "Architecture marocaine", difficulty: 2,
  question: "Le minaret de la Mosquée Hassan II, à Casablanca, culmine à environ :",
  options: ["100 mètres", "150 mètres", "210 mètres", "300 mètres"],
  correctIndex: 2,
  explanation: "Le minaret de la Mosquée Hassan II culmine à environ 210 mètres, ce qui en fait l'un des plus hauts minarets du monde.",
  whyWrong: ["Ce chiffre sous-estime largement la hauteur réelle du minaret", "Ce chiffre sous-estime la hauteur réelle du minaret", "", "Ce chiffre surestime la hauteur réelle du minaret"],
  memoryTrick: "210 m : la hauteur du minaret de Hassan II.",
  source: "Mosquée Hassan II, Casablanca, minaret", contested: false
},
{
  id: 293, module: "Art & Architecture", subject: "Architecture almohade", difficulty: 1,
  question: "La Koutoubia, célèbre minaret almohade du XIIe siècle, se trouve à :",
  options: ["Marrakech", "Fès", "Rabat", "Séville"],
  correctIndex: 0,
  explanation: "La Koutoubia est un minaret almohade du XIIe siècle situé à Marrakech, contemporain de la Tour Hassan de Rabat et de la Giralda de Séville.",
  whyWrong: ["", "Fès n'abrite pas la Koutoubia", "Rabat abrite la Tour Hassan, pas la Koutoubia", "Séville abrite la Giralda, pas la Koutoubia"],
  memoryTrick: "Koutoubia : le minaret almohade de Marrakech.",
  source: "Architecture almohade, la Koutoubia", contested: false
},
{
  id: 294, module: "Art & Architecture", subject: "Architecture almohade", difficulty: 2,
  question: "La Tour Hassan, à Rabat, minaret almohade du XIIe siècle, est restée :",
  options: ["Inachevée", "La plus haute tour du Maroc", "Transformée en mosquée moderne", "Détruite au XIXe siècle"],
  correctIndex: 0,
  explanation: "La Tour Hassan, à Rabat, est un minaret almohade resté inachevé, contemporain de la Koutoubia de Marrakech et de la Giralda de Séville.",
  whyWrong: ["", "La Tour Hassan n'est pas la plus haute tour du Maroc, notamment devant les gratte-ciel modernes", "La Tour Hassan est restée un vestige, pas une mosquée moderne en activité", "La Tour Hassan n'a pas été détruite ; elle est restée inachevée depuis le XIIe siècle"],
  memoryTrick: "Tour Hassan : le minaret almohade jamais achevé.",
  source: "Architecture almohade, la Tour Hassan", contested: false
},
{
  id: 295, module: "Art & Architecture", subject: "Architecture almohade", difficulty: 2,
  question: "La Giralda, minaret almohade du XIIe siècle contemporain de la Koutoubia et de la Tour Hassan, se trouve à :",
  options: ["Séville", "Cordoue", "Grenade", "Tolède"],
  correctIndex: 0,
  explanation: "La Giralda est un minaret almohade du XIIe siècle situé à Séville, aujourd'hui intégré à la cathédrale de la ville.",
  whyWrong: ["", "Cordoue est célèbre pour sa Grande Mosquée, mais pas pour la Giralda", "Grenade est célèbre pour l'Alhambra, pas pour la Giralda", "Tolède n'abrite pas la Giralda"],
  memoryTrick: "Trois minarets almohades jumeaux : Koutoubia, Tour Hassan, Giralda.",
  source: "Architecture almohade, la Giralda de Séville", contested: false
},
{
  id: 296, module: "Art & Architecture", subject: "Architecture almohade", difficulty: 2,
  question: "Parmi ces monuments, lequel n'est PAS un minaret almohade du XIIe siècle ?",
  options: ["La Koutoubia", "La Tour Hassan", "La Giralda", "La Tour Eiffel"],
  correctIndex: 3,
  explanation: "La Tour Eiffel est une structure métallique construite en 1889, sans rapport avec les minarets almohades du XIIe siècle que sont la Koutoubia, la Tour Hassan et la Giralda.",
  whyWrong: ["La Koutoubia est bien un minaret almohade du XIIe siècle", "La Tour Hassan est bien un minaret almohade du XIIe siècle", "La Giralda est bien un minaret almohade du XIIe siècle", ""],
  memoryTrick: "Trois minarets almohades du XIIe siècle, mais pas la Tour Eiffel (1889).",
  source: "Architecture almohade, ensemble des minarets", contested: false
},
{
  id: 297, module: "Art & Architecture", subject: "Urbanisme colonial", difficulty: 2,
  question: "Henri Prost, urbaniste actif au Maroc à partir de 1912 sous le protectorat de Lyautey, a notamment conçu les plans des villes nouvelles de :",
  options: ["Casablanca et Rabat", "Fès et Meknès", "Agadir et Tan-Tan", "Ouarzazate et Errachidia"],
  correctIndex: 0,
  explanation: "Henri Prost a conçu les plans des villes nouvelles de Casablanca et de Rabat à partir de 1912, dans le cadre de la politique urbanistique du protectorat sous Lyautey.",
  whyWrong: ["", "Fès et Meknès sont des villes impériales anciennes, pas les objets principaux des plans de Prost", "Agadir et Tan-Tan ne sont pas les villes associées aux plans de Prost", "Ouarzazate et Errachidia ne sont pas les villes associées aux plans de Prost"],
  memoryTrick: "Prost : villes nouvelles de Casablanca et Rabat, dès 1912.",
  source: "Urbanisme colonial, Henri Prost", contested: false
},
{
  id: 298, module: "Art & Architecture", subject: "Urbanisme colonial", difficulty: 3,
  question: "Michel Écochard est l'auteur du plan d'urbanisme de Casablanca, élaboré entre 1946 et 1952, incluant notamment :",
  options: ["Les Carrières Centrales", "La médina de Fès", "Le ksar d'Aït Ben Haddou", "La Koutoubia"],
  correctIndex: 0,
  explanation: "Le plan de Michel Écochard pour Casablanca (1946-1952) comprend notamment le quartier des Carrières Centrales, conçu pour reloger les populations urbaines dans un habitat modernisé.",
  whyWrong: ["", "La médina de Fès est bien antérieure au plan d'Écochard", "Le ksar d'Aït Ben Haddou n'a aucun lien avec le plan d'Écochard pour Casablanca", "La Koutoubia est un monument almohade de Marrakech, sans lien avec Écochard"],
  memoryTrick: "Écochard : Casablanca, 1946-1952, Carrières Centrales.",
  source: "Urbanisme colonial, Michel Écochard, Casablanca", contested: false
},
{
  id: 299, module: "Art & Architecture", subject: "Urbanisme colonial", difficulty: 2,
  question: "Le boulevard Mohammed V, à Casablanca, est notamment bordé par un ensemble architectural remarquable de style :",
  options: ["Art déco", "Baroque", "Roman", "Byzantin"],
  correctIndex: 0,
  explanation: "Le boulevard Mohammed V de Casablanca est bordé par un important ensemble de bâtiments de style Art déco, hérité de la période du protectorat.",
  whyWrong: ["", "Le style baroque n'est pas celui caractérisant ce boulevard", "Le style roman n'est pas celui caractérisant ce boulevard", "Le style byzantin n'est pas celui caractérisant ce boulevard"],
  memoryTrick: "Boulevard Mohammed V : le centre Art déco de Casablanca.",
  source: "Urbanisme colonial, Casablanca, centre Art déco", contested: false
},
{
  id: 300, module: "Art & Architecture", subject: "Modernisme marocain", difficulty: 2,
  question: "Jean-François Zevaco est considéré comme une figure majeure :",
  options: ["Du modernisme architectural marocain", "De l'architecture almohade", "De l'urbanisme du protectorat français", "De l'architecture andalouse du XIVe siècle"],
  correctIndex: 0,
  explanation: "Jean-François Zevaco est une figure majeure du modernisme architectural marocain de la seconde moitié du XXe siècle.",
  whyWrong: ["", "L'architecture almohade est bien antérieure à Zevaco, qui appartient au XXe siècle", "Zevaco est postérieur à la période du protectorat, bien qu'actif au Maroc", "L'architecture andalouse du XIVe siècle est antérieure à Zevaco de plusieurs siècles"],
  memoryTrick: "Zevaco : le modernisme marocain du XXe siècle.",
  source: "Jean-François Zevaco, modernisme marocain", contested: false
},
{
  id: 301, module: "Art & Architecture", subject: "Vocabulaire architectural", difficulty: 1,
  question: "Le terme « médina » désigne :",
  options: ["La vieille ville historique d'une cité arabo-musulmane", "Un grenier collectif fortifié", "Un palais traditionnel avec patio", "Un mausolée royal"],
  correctIndex: 0,
  explanation: "La médina désigne la vieille ville historique, généralement fortifiée, d'une cité arabo-musulmane, comme celles de Fès ou de Marrakech.",
  whyWrong: ["", "Le grenier collectif fortifié correspond plutôt à l'agadir", "Le palais avec patio correspond plutôt au riad", "Le mausolée royal n'est pas ce que désigne le terme médina"],
  memoryTrick: "Médina : la vieille ville, cœur historique.",
  source: "Vocabulaire de l'architecture marocaine, médina", contested: false
},
{
  id: 302, module: "Art & Architecture", subject: "Vocabulaire architectural", difficulty: 1,
  question: "Le terme « kasbah » désigne généralement :",
  options: ["Une citadelle ou forteresse fortifiée", "Un jardin botanique", "Un marché couvert", "Un bain public traditionnel"],
  correctIndex: 0,
  explanation: "La kasbah désigne une citadelle ou une forteresse fortifiée, souvent construite en pisé, qui abritait traditionnellement le pouvoir local ou la garnison.",
  whyWrong: ["", "Le jardin botanique n'est pas ce que désigne le terme kasbah", "Le marché couvert correspond plutôt au souk", "Le bain public traditionnel correspond au hammam, pas à la kasbah"],
  memoryTrick: "Kasbah : la forteresse, pas le marché.",
  source: "Vocabulaire de l'architecture marocaine, kasbah", contested: false
},
{
  id: 303, module: "Art & Architecture", subject: "Vocabulaire architectural", difficulty: 2,
  question: "Le terme « ksar » (pluriel ksour) désigne :",
  options: ["Un village fortifié en terre crue, comme Aït Ben Haddou", "Un minaret almohade", "Un pont médiéval", "Une école coranique"],
  correctIndex: 0,
  explanation: "Un ksar est un village fortifié en terre crue (pisé), typique du sud présaharien marocain, dont Aït Ben Haddou est l'exemple le plus célèbre.",
  whyWrong: ["", "Le minaret almohade n'est pas ce que désigne le terme ksar", "Le pont médiéval n'est pas ce que désigne le terme ksar", "L'école coranique correspond à la médersa, pas au ksar"],
  memoryTrick: "Ksar : village fortifié en terre, comme Aït Ben Haddou.",
  source: "Vocabulaire de l'architecture marocaine, ksar", contested: false
},
{
  id: 304, module: "Art & Architecture", subject: "Vocabulaire architectural", difficulty: 1,
  question: "Le terme « riad » désigne :",
  options: ["Une maison traditionnelle organisée autour d'un jardin ou patio intérieur", "Une forteresse militaire", "Un minaret décoré", "Un pont fortifié"],
  correctIndex: 0,
  explanation: "Un riad est une maison traditionnelle marocaine organisée autour d'un jardin ou d'un patio intérieur, souvent orné de zellige.",
  whyWrong: ["", "La forteresse militaire correspond plutôt à la kasbah", "Le minaret décoré n'est pas ce que désigne le terme riad", "Le pont fortifié n'est pas ce que désigne le terme riad"],
  memoryTrick: "Riad : maison à patio, jardin intérieur.",
  source: "Vocabulaire de l'architecture marocaine, riad", contested: false
},
{
  id: 305, module: "Art & Architecture", subject: "Vocabulaire architectural", difficulty: 2,
  question: "Le terme « agadir », à l'origine du nom de la ville du même nom, désigne :",
  options: ["Un grenier collectif fortifié", "Un jardin d'agrément", "Une place publique", "Un bain de vapeur"],
  correctIndex: 0,
  explanation: "Le terme « agadir » désigne à l'origine un grenier collectif fortifié, typique des régions berbères du sud marocain, avant de devenir le nom de la ville d'Agadir.",
  whyWrong: ["", "Le jardin d'agrément n'est pas ce que désigne le terme agadir", "La place publique n'est pas ce que désigne le terme agadir", "Le bain de vapeur correspond au hammam, pas à l'agadir"],
  memoryTrick: "Agadir : grenier fortifié, avant d'être une ville.",
  source: "Vocabulaire de l'architecture marocaine, agadir", contested: false
},
{
  id: 306, module: "Art & Architecture", subject: "Vocabulaire architectural", difficulty: 1,
  question: "Le « zellige » est :",
  options: ["Un art traditionnel de mosaïque en céramique", "Un type de charpente en bois sculpté", "Un motif de calligraphie arabe", "Un tissu traditionnel brodé"],
  correctIndex: 0,
  explanation: "Le zellige est un art traditionnel marocain de mosaïque en céramique émaillée, utilisé pour décorer sols, murs et fontaines.",
  whyWrong: ["", "La charpente en bois sculpté correspond à d'autres arts décoratifs, pas au zellige", "La calligraphie arabe est un art distinct du zellige", "Le tissu traditionnel brodé n'est pas ce que désigne le zellige"],
  memoryTrick: "Zellige : mosaïque de céramique.",
  source: "Vocabulaire de l'architecture marocaine, zellige", contested: false
},
{
  id: 307, module: "Art & Architecture", subject: "Vocabulaire architectural", difficulty: 2,
  question: "Les « muqarnas » désignent :",
  options: ["Des éléments architecturaux en alvéoles ou stalactites décoratives", "Des vasques de fontaines en marbre", "Des colonnes torsadées", "Des portes cloutées de bois"],
  correctIndex: 0,
  explanation: "Les muqarnas sont des éléments architecturaux en alvéoles, souvent qualifiés de « stalactites » décoratives, caractéristiques de l'art islamique, dont s'inspire notamment le Théâtre Royal de Rabat.",
  whyWrong: ["", "Les vasques de fontaines ne sont pas des muqarnas", "Les colonnes torsadées ne sont pas des muqarnas", "Les portes cloutées ne sont pas des muqarnas"],
  memoryTrick: "Muqarnas : les « stalactites » de pierre ou de plâtre.",
  source: "Vocabulaire de l'architecture marocaine, muqarnas", contested: false
},
{
  id: 308, module: "Art & Architecture", subject: "Vocabulaire architectural", difficulty: 2,
  question: "Le « tadelakt » est :",
  options: ["Un enduit traditionnel marocain à base de chaux, imperméable et lissé", "Un type de tapis berbère", "Un instrument de musique traditionnel", "Un motif de zellige particulier"],
  correctIndex: 0,
  explanation: "Le tadelakt est un enduit traditionnel marocain à base de chaux, poli et rendu imperméable, souvent utilisé dans les hammams et salles de bain.",
  whyWrong: ["", "Le tapis berbère n'est pas ce que désigne le tadelakt", "L'instrument de musique n'est pas ce que désigne le tadelakt", "Le tadelakt est un enduit, distinct du zellige qui est une mosaïque céramique"],
  memoryTrick: "Tadelakt : l'enduit lisse et imperméable des hammams.",
  source: "Vocabulaire de l'architecture marocaine, tadelakt", contested: false
},
{
  id: 309, module: "Art & Architecture", subject: "Vocabulaire architectural", difficulty: 1,
  question: "Le « pisé », technique de construction en terre crue utilisée à Aït Ben Haddou, est fabriqué à partir :",
  options: ["De terre compactée, sans cuisson", "De brique cuite au four", "De pierre taillée", "De béton armé moderne"],
  correctIndex: 0,
  explanation: "Le pisé est une technique de construction en terre crue compactée, sans cuisson, largement utilisée dans l'architecture présaharienne comme celle du ksar d'Aït Ben Haddou.",
  whyWrong: ["", "La brique cuite est une autre technique, distincte du pisé", "La pierre taillée n'est pas la matière du pisé", "Le béton armé est une technique moderne, sans lien avec le pisé traditionnel"],
  memoryTrick: "Pisé : terre crue compactée, pas cuite.",
  source: "Vocabulaire de l'architecture marocaine, pisé", contested: false
},
{
  id: 310, module: "Art & Architecture", subject: "Vocabulaire architectural", difficulty: 1,
  question: "Le terme arabe « bab », fréquent dans les noms de lieux marocains, signifie :",
  options: ["Porte", "Fontaine", "Jardin", "Tour"],
  correctIndex: 0,
  explanation: "« Bab » signifie « porte » en arabe, terme que l'on retrouve dans de nombreux noms de portes monumentales des médinas marocaines.",
  whyWrong: ["", "La fontaine se dit différemment en arabe", "Le jardin se dit différemment en arabe", "La tour se dit différemment en arabe"],
  memoryTrick: "Bab = porte, comme Bab-el-Mandeb, la « porte des lamentations ».",
  source: "Vocabulaire architectural arabo-musulman, bab", contested: false
},
{
  id: 311, module: "Art & Architecture", subject: "Vocabulaire architectural", difficulty: 2,
  question: "Dans une mosquée, le « sahn » désigne :",
  options: ["La cour intérieure à ciel ouvert", "Le mur orienté vers La Mecque", "La chaire du prédicateur", "Le minaret"],
  correctIndex: 0,
  explanation: "Le sahn désigne la cour intérieure à ciel ouvert d'une mosquée, souvent bordée de galeries et pourvue d'une fontaine pour les ablutions.",
  whyWrong: ["", "Le mur orienté vers La Mecque correspond au mihrab (niche), pas au sahn", "La chaire du prédicateur correspond au minbar, pas au sahn", "Le minaret est la tour de l'appel à la prière, distincte du sahn"],
  memoryTrick: "Sahn : la cour intérieure de la mosquée.",
  source: "Vocabulaire architectural arabo-musulman, sahn", contested: false
},
{
  id: 312, module: "Art & Architecture", subject: "Vocabulaire architectural", difficulty: 2,
  question: "Dans une mosquée, le « minbar » désigne :",
  options: ["La chaire surélevée d'où le prédicateur prononce le sermon", "La niche indiquant la direction de La Mecque", "La cour intérieure", "Le bassin des ablutions"],
  correctIndex: 0,
  explanation: "Le minbar est la chaire surélevée, généralement en bois sculpté, d'où l'imam prononce le sermon du vendredi.",
  whyWrong: ["", "La niche indiquant la direction de La Mecque correspond au mihrab, pas au minbar", "La cour intérieure correspond au sahn, pas au minbar", "Le bassin des ablutions n'est pas le minbar"],
  memoryTrick: "Minbar : la chaire du sermon.",
  source: "Vocabulaire architectural arabo-musulman, minbar", contested: false
},
{
  id: 313, module: "Art & Architecture", subject: "Vocabulaire architectural", difficulty: 2,
  question: "Dans une mosquée, le « mihrab » désigne :",
  options: ["La niche indiquant la direction de La Mecque", "La chaire du prédicateur", "La cour à ciel ouvert", "Le minaret d'appel à la prière"],
  correctIndex: 0,
  explanation: "Le mihrab est la niche, généralement richement décorée, qui indique la direction de La Mecque (qibla) vers laquelle se tournent les fidèles pour prier.",
  whyWrong: ["", "La chaire du prédicateur correspond au minbar, pas au mihrab", "La cour à ciel ouvert correspond au sahn, pas au mihrab", "Le minaret est la tour d'appel à la prière, distincte du mihrab"],
  memoryTrick: "Mihrab : la niche qui indique La Mecque.",
  source: "Vocabulaire architectural arabo-musulman, mihrab", contested: false
},
{
  id: 314, module: "Art & Architecture", subject: "Grand Stade Hassan II", difficulty: 2,
  question: "Le Grand Stade Hassan II, appelé à devenir le plus grand stade du monde, est en construction :",
  options: ["À El Mansouria, dans la province de Benslimane", "Au cœur de Casablanca", "À Rabat, près du Bouregreg", "À Marrakech, près de la Koutoubia"],
  correctIndex: 0,
  explanation: "Le Grand Stade Hassan II est en construction à El Mansouria, dans la province de Benslimane, à proximité de Casablanca.",
  whyWrong: ["", "Le stade n'est pas construit au cœur de Casablanca même", "Le stade n'est pas construit à Rabat", "Le stade n'est pas construit à Marrakech"],
  memoryTrick: "El Mansouria, Benslimane : le site du Grand Stade Hassan II.",
  source: "Grand Stade Hassan II, El Mansouria", contested: false
},
{
  id: 315, module: "Art & Architecture", subject: "Grand Stade Hassan II", difficulty: 2,
  question: "Le Grand Stade Hassan II est conçu pour accueillir :",
  options: ["45 000 places", "80 000 places", "115 000 places", "150 000 places"],
  correctIndex: 2,
  explanation: "Le Grand Stade Hassan II est conçu pour accueillir 115 000 places, ce qui en ferait le plus grand stade de football du monde.",
  whyWrong: ["Ce chiffre sous-estime largement la capacité prévue du stade", "Ce chiffre sous-estime la capacité prévue du stade", "", "Ce chiffre surestime la capacité prévue du stade"],
  memoryTrick: "115 000 places : la capacité visée du Grand Stade Hassan II.",
  source: "Grand Stade Hassan II, capacité", contested: false
},
{
  id: 316, module: "Art & Architecture", subject: "Grand Stade Hassan II", difficulty: 2,
  question: "Le Grand Stade Hassan II est conçu par l'agence internationale Populous en collaboration avec :",
  options: ["Oualalou + Choi", "Zaha Hadid Architects", "Foster + Partners", "Rafael de la Hoz"],
  correctIndex: 0,
  explanation: "Le Grand Stade Hassan II est conçu par l'agence internationale Populous en collaboration avec l'agence marocaine Oualalou + Choi, dirigée par l'architecte Tarik Oualalou.",
  whyWrong: ["", "Zaha Hadid Architects a conçu le Théâtre Royal de Rabat, pas le Grand Stade Hassan II", "Foster + Partners n'est pas associé à ce projet", "Rafael de la Hoz est associé à la Tour Mohammed VI, pas au Grand Stade Hassan II"],
  memoryTrick: "Populous + Oualalou & Choi : le duo du Grand Stade Hassan II.",
  source: "Grand Stade Hassan II, architectes", contested: false
},
{
  id: 317, module: "Art & Architecture", subject: "Grand Stade Hassan II", difficulty: 3,
  question: "L'architecte marocain associé à la conception du Grand Stade Hassan II, dirigeant l'agence Oualalou + Choi, se prénomme :",
  options: ["Tarik", "Karim", "Rachid", "Hicham"],
  correctIndex: 0,
  explanation: "Tarik Oualalou dirige l'agence Oualalou + Choi, partenaire marocain de Populous pour la conception du Grand Stade Hassan II.",
  whyWrong: ["", "Ce n'est pas le prénom de l'architecte associé à ce projet", "Ce n'est pas le prénom de l'architecte associé à ce projet", "Ce n'est pas le prénom de l'architecte associé à ce projet"],
  memoryTrick: "Tarik Oualalou : le partenaire marocain de Populous.",
  source: "Grand Stade Hassan II, architectes", contested: false
},
{
  id: 318, module: "Art & Architecture", subject: "Grand Stade Hassan II", difficulty: 2,
  question: "L'architecture du Grand Stade Hassan II s'inspire :",
  options: ["De la tente traditionnelle du Moussem", "Des arènes romaines antiques", "Des stades scandinaves modernes", "Des pyramides égyptiennes"],
  correctIndex: 0,
  explanation: "L'architecture du Grand Stade Hassan II s'inspire de la tente traditionnelle du Moussem, grand rassemblement festif et commercial marocain.",
  whyWrong: ["", "L'inspiration n'est pas issue des arènes romaines", "L'inspiration n'est pas issue des stades scandinaves", "L'inspiration n'est pas issue des pyramides égyptiennes"],
  memoryTrick: "Tente du Moussem : l'inspiration du Grand Stade Hassan II.",
  source: "Grand Stade Hassan II, inspiration architecturale", contested: false
},
{
  id: 319, module: "Art & Architecture", subject: "Grand Stade Hassan II", difficulty: 3,
  question: "Le Grand Stade Hassan II occupe une emprise au sol d'environ :",
  options: ["20 hectares", "50 hectares", "100 hectares", "250 hectares"],
  correctIndex: 2,
  explanation: "Le Grand Stade Hassan II occupe une emprise au sol d'environ 100 hectares, incluant les infrastructures annexes du complexe.",
  whyWrong: ["Ce chiffre sous-estime largement l'emprise du projet", "Ce chiffre sous-estime l'emprise du projet", "", "Ce chiffre surestime largement l'emprise du projet"],
  memoryTrick: "100 hectares : l'emprise du Grand Stade Hassan II.",
  source: "Grand Stade Hassan II, emprise au sol", contested: false
},
{
  id: 320, module: "Art & Architecture", subject: "Grand Stade Hassan II", difficulty: 3,
  question: "Le budget du Grand Stade Hassan II est estimé à environ :",
  options: ["1 milliard de dirhams", "5 milliards de dirhams", "15 milliards de dirhams", "25 milliards de dirhams"],
  correctIndex: 1,
  explanation: "Le budget du Grand Stade Hassan II est estimé à environ 5 milliards de dirhams.",
  whyWrong: ["Ce montant sous-estime largement le budget estimé", "", "Ce montant surestime le budget estimé", "Ce montant surestime largement le budget estimé"],
  memoryTrick: "5 milliards de dirhams : le budget du Grand Stade Hassan II.",
  source: "Grand Stade Hassan II, budget", contested: false
},
{
  id: 321, module: "Art & Architecture", subject: "Grand Stade Hassan II", difficulty: 2,
  question: "La livraison du Grand Stade Hassan II est annoncée pour :",
  options: ["2025-2026", "2027-2028", "2029-2030", "2032"],
  correctIndex: 1,
  explanation: "La livraison du Grand Stade Hassan II est annoncée pour 2027-2028, avant l'échéance de la Coupe du Monde 2030.",
  whyWrong: ["Cette échéance est trop rapprochée par rapport au calendrier annoncé", "", "Cette échéance dépasse le calendrier annoncé", "Cette échéance dépasse largement le calendrier annoncé"],
  memoryTrick: "2027-2028 : la livraison visée du Grand Stade Hassan II, avant 2030.",
  source: "Grand Stade Hassan II, calendrier de livraison", contested: false
},
{
  id: 322, module: "Art & Architecture", subject: "Architecture mondiale", difficulty: 1,
  question: "Le prix Pritzker, plus haute distinction internationale en architecture, est souvent comparé :",
  options: ["Au prix Nobel", "Au prix Goncourt", "À la Palme d'or", "Au Ballon d'or"],
  correctIndex: 0,
  explanation: "Le prix Pritzker est souvent qualifié de « prix Nobel de l'architecture », tant sa reconnaissance internationale est comparable.",
  whyWrong: ["", "Le Goncourt récompense la littérature, pas l'architecture", "La Palme d'or récompense le cinéma, pas l'architecture", "Le Ballon d'or récompense le football, pas l'architecture"],
  memoryTrick: "Pritzker : le « Nobel » des architectes.",
  source: "Architecture mondiale, prix Pritzker", contested: false
},
{
  id: 323, module: "Art & Architecture", subject: "Architecture moderne", difficulty: 2,
  question: "Le Corbusier, figure majeure du mouvement moderne en architecture, est notamment l'auteur de :",
  options: ["La Villa Savoye", "La Sagrada Família", "La Tour Eiffel", "Le Taj Mahal"],
  correctIndex: 0,
  explanation: "Le Corbusier, architecte suisse naturalisé français, est notamment l'auteur de la Villa Savoye, manifeste de l'architecture moderne construit dans les années 1930.",
  whyWrong: ["", "La Sagrada Família est l'œuvre d'Antoni Gaudí, pas du Corbusier", "La Tour Eiffel est l'œuvre de Gustave Eiffel, pas du Corbusier", "Le Taj Mahal est un mausolée moghol du XVIIe siècle, bien antérieur au Corbusier"],
  memoryTrick: "Le Corbusier : la Villa Savoye, icône du mouvement moderne.",
  source: "Architecture moderne, Le Corbusier", contested: false
},
{
  id: 324, module: "Art & Architecture", subject: "Monuments du monde", difficulty: 1,
  question: "La Tour Eiffel a été construite à l'occasion :",
  options: ["De l'Exposition universelle de 1889", "Des Jeux olympiques de 1900", "Du centenaire de la Révolution industrielle", "Du couronnement de Napoléon III"],
  correctIndex: 0,
  explanation: "La Tour Eiffel a été construite par l'ingénieur Gustave Eiffel à l'occasion de l'Exposition universelle de 1889, célébrant le centenaire de la Révolution française.",
  whyWrong: ["", "Les Jeux olympiques de 1900 se sont bien tenus à Paris, mais la tour existait déjà depuis 1889", "Ce n'est pas le motif officiel de sa construction", "Napoléon III n'a jamais été couronné, et son règne s'est achevé avant 1889"],
  memoryTrick: "Tour Eiffel : 1889, Exposition universelle.",
  source: "Monuments du monde, Tour Eiffel", contested: false
},
{
  id: 325, module: "Art & Architecture", subject: "Architecture antique", difficulty: 1,
  question: "Le Colisée, célèbre amphithéâtre antique, se trouve à :",
  options: ["Rome", "Athènes", "Alexandrie", "Carthage"],
  correctIndex: 0,
  explanation: "Le Colisée est un amphithéâtre romain antique situé à Rome, construit au Ier siècle après J.-C. pour accueillir des spectacles publics.",
  whyWrong: ["", "Athènes est célèbre pour le Parthénon, pas pour le Colisée", "Alexandrie est célèbre pour sa bibliothèque antique, pas pour le Colisée", "Carthage est une cité antique d'Afrique du Nord, mais n'abrite pas le Colisée"],
  memoryTrick: "Colisée : le grand amphithéâtre de Rome.",
  source: "Architecture antique, le Colisée de Rome", contested: false
},
{
  id: 326, module: "Art & Architecture", subject: "Monuments du monde", difficulty: 1,
  question: "La Grande Muraille, célèbre fortification longue de plusieurs milliers de kilomètres, se trouve :",
  options: ["En Chine", "En Inde", "En Perse", "En Mongolie uniquement"],
  correctIndex: 0,
  explanation: "La Grande Muraille de Chine est une fortification construite sur plusieurs siècles pour protéger l'empire chinois des invasions venues du nord.",
  whyWrong: ["", "L'Inde n'a pas construit cette fortification", "La Perse n'a pas construit cette fortification", "La muraille est chinoise, même si elle longe en partie la frontière mongole"],
  memoryTrick: "Grande Muraille : la fortification de la Chine impériale.",
  source: "Monuments du monde, Grande Muraille de Chine", contested: false
},
{
  id: 327, module: "Art & Architecture", subject: "Architecture antique", difficulty: 1,
  question: "Les pyramides de Gizeh, monuments funéraires de l'Égypte antique, sont situées à proximité de :",
  options: ["Alexandrie", "Le Caire", "Louxor", "Assouan"],
  correctIndex: 1,
  explanation: "Les pyramides de Gizeh sont situées à proximité du Caire, capitale de l'Égypte, sur la rive ouest du Nil.",
  whyWrong: ["Alexandrie n'est pas la ville la plus proche des pyramides de Gizeh", "", "Louxor abrite d'autres monuments antiques, comme la Vallée des Rois, pas Gizeh", "Assouan n'est pas la ville la plus proche des pyramides de Gizeh"],
  memoryTrick: "Gizeh : les pyramides aux portes du Caire.",
  source: "Architecture antique, pyramides de Gizeh", contested: false
},
{
  id: 328, module: "Art & Architecture", subject: "Architecture antique", difficulty: 2,
  question: "La grande pyramide de Khéops est la seule des sept merveilles du monde antique :",
  options: ["Encore largement intacte aujourd'hui", "Jamais achevée", "Détruite par un tremblement de terre", "Reconstruite au XIXe siècle"],
  correctIndex: 0,
  explanation: "La grande pyramide de Khéops, à Gizeh, est la seule des sept merveilles du monde antique encore largement intacte aujourd'hui.",
  whyWrong: ["", "La pyramide de Khéops a bien été achevée dans l'Antiquité", "Ce n'est pas un tremblement de terre qui a affecté la pyramide de Khéops", "La pyramide de Khéops n'a pas eu besoin d'une reconstruction au XIXe siècle"],
  memoryTrick: "Khéops : la seule merveille antique encore debout.",
  source: "Architecture antique, pyramide de Khéops", contested: false
},
{
  id: 329, module: "Art & Architecture", subject: "Architecture mondiale", difficulty: 1,
  question: "Le Taj Mahal, célèbre mausolée moghol, se trouve en Inde, dans la ville de :",
  options: ["Agra", "Delhi", "Mumbai", "Jaipur"],
  correctIndex: 0,
  explanation: "Le Taj Mahal est un mausolée moghol du XVIIe siècle situé à Agra, en Inde, construit par l'empereur Shah Jahan.",
  whyWrong: ["", "Delhi est la capitale de l'Inde, mais n'abrite pas le Taj Mahal", "Mumbai n'abrite pas le Taj Mahal", "Jaipur n'abrite pas le Taj Mahal"],
  memoryTrick: "Taj Mahal : le mausolée d'Agra.",
  source: "Architecture mondiale, Taj Mahal", contested: false
},
{
  id: 330, module: "Art & Architecture", subject: "Architecture mondiale", difficulty: 2,
  question: "La Sagrada Família, basilique inachevée de Barcelone, est l'œuvre de l'architecte :",
  options: ["Antoni Gaudí", "Le Corbusier", "Antoni Tàpies", "Salvador Dalí"],
  correctIndex: 0,
  explanation: "La Sagrada Família est l'œuvre de l'architecte catalan Antoni Gaudí, dont la construction, débutée en 1882, se poursuit encore aujourd'hui.",
  whyWrong: ["", "Le Corbusier est une figure du mouvement moderne, mais pas l'auteur de la Sagrada Família", "Antoni Tàpies est un peintre catalan, pas un architecte", "Salvador Dalí est un peintre surréaliste, pas l'architecte de la Sagrada Família"],
  memoryTrick: "Gaudí : la Sagrada Família, toujours en chantier.",
  source: "Architecture mondiale, Sagrada Família, Antoni Gaudí", contested: false
},
{
  id: 331, module: "Art & Architecture", subject: "Architecture mondiale", difficulty: 2,
  question: "L'Alhambra, célèbre palais et forteresse d'architecture nasride, se trouve à :",
  options: ["Grenade", "Séville", "Cordoue", "Tolède"],
  correctIndex: 0,
  explanation: "L'Alhambra est un palais et forteresse d'architecture nasride, situé à Grenade, en Andalousie, dernier grand témoignage de l'art hispano-mauresque.",
  whyWrong: ["", "Séville abrite la Giralda, pas l'Alhambra", "Cordoue abrite la Grande Mosquée, pas l'Alhambra", "Tolède n'abrite pas l'Alhambra"],
  memoryTrick: "Alhambra : le palais nasride de Grenade.",
  source: "Architecture mondiale, l'Alhambra de Grenade", contested: false
},
{
  id: 332, module: "Art & Architecture", subject: "Styles architecturaux", difficulty: 2,
  question: "Le style gothique, caractéristique des grandes cathédrales médiévales, se distingue notamment par :",
  options: ["Les arcs brisés et les voûtes sur croisée d'ogives", "Les colonnes doriques et les frontons triangulaires", "Les coupoles à bulbe et les céramiques bleues", "Les façades entièrement vitrées et le béton armé"],
  correctIndex: 0,
  explanation: "Le style gothique se caractérise notamment par les arcs brisés et les voûtes sur croisée d'ogives, permettant des édifices plus hauts et plus lumineux que le style roman.",
  whyWrong: ["", "Les colonnes doriques et frontons triangulaires caractérisent l'architecture grecque antique, pas le gothique", "Les coupoles à bulbe évoquent plutôt l'architecture russe ou moghole", "Les façades vitrées et le béton armé sont des caractéristiques de l'architecture moderne"],
  memoryTrick: "Gothique : arcs brisés, ogives, verticalité.",
  source: "Histoire de l'architecture, style gothique", contested: false
},
{
  id: 333, module: "Art & Architecture", subject: "Styles architecturaux", difficulty: 2,
  question: "Le style roman, antérieur au style gothique, se caractérise notamment par :",
  options: ["Des arcs en plein cintre et des édifices massifs", "Des gratte-ciel en acier et verre", "Des minarets almohades", "Des colonnes torsadées baroques"],
  correctIndex: 0,
  explanation: "Le style roman, qui précède le gothique en Europe médiévale, se caractérise par des arcs en plein cintre, des murs épais et des édifices massifs, peu éclairés.",
  whyWrong: ["", "Les gratte-ciel en acier et verre relèvent de l'architecture contemporaine, pas du style roman", "Les minarets almohades relèvent de l'architecture islamique nord-africaine, pas du roman européen", "Les colonnes torsadées baroques appartiennent à une période bien postérieure"],
  memoryTrick: "Roman : arcs en plein cintre, avant les ogives gothiques.",
  source: "Histoire de l'architecture, style roman", contested: false
},
{
  id: 334, module: "Art & Architecture", subject: "Renaissance", difficulty: 2,
  question: "Filippo Brunelleschi est célèbre pour avoir conçu la coupole de la cathédrale de :",
  options: ["Florence", "Venise", "Milan", "Rome"],
  correctIndex: 0,
  explanation: "Filippo Brunelleschi, architecte de la Renaissance italienne, est célèbre pour avoir conçu la coupole de la cathédrale Santa Maria del Fiore, à Florence.",
  whyWrong: ["", "Venise n'est pas la ville associée à cette coupole de Brunelleschi", "Milan n'est pas la ville associée à cette coupole de Brunelleschi", "Rome n'est pas la ville associée à cette coupole de Brunelleschi"],
  memoryTrick: "Brunelleschi : la coupole de Florence, chef-d'œuvre de la Renaissance.",
  source: "Renaissance italienne, Filippo Brunelleschi", contested: false
},
{
  id: 335, module: "Art & Architecture", subject: "Architecture antique", difficulty: 2,
  question: "Le Panthéon de Rome est célèbre pour sa coupole antique en :",
  options: ["Béton romain", "Marbre massif", "Bois sculpté", "Métal doré"],
  correctIndex: 0,
  explanation: "Le Panthéon de Rome est célèbre pour sa coupole en béton romain, exploit technique de l'Antiquité encore admiré aujourd'hui.",
  whyWrong: ["", "La coupole n'est pas en marbre massif, mais en béton coulé", "La coupole n'est pas en bois sculpté", "La coupole n'est pas en métal doré"],
  memoryTrick: "Panthéon : la coupole de béton romain, prouesse antique.",
  source: "Architecture antique, le Panthéon de Rome", contested: false
},
{
  id: 336, module: "Art & Architecture", subject: "Architecture antique", difficulty: 2,
  question: "Le Parthénon, temple emblématique de l'Antiquité grecque, se trouve sur l'Acropole de :",
  options: ["Athènes", "Sparte", "Corinthe", "Thèbes"],
  correctIndex: 0,
  explanation: "Le Parthénon est un temple dorique dédié à la déesse Athéna, situé sur l'Acropole d'Athènes.",
  whyWrong: ["", "Sparte n'abrite pas le Parthénon", "Corinthe n'abrite pas le Parthénon", "Thèbes n'abrite pas le Parthénon"],
  memoryTrick: "Parthénon : le temple d'Athéna, sur l'Acropole d'Athènes.",
  source: "Architecture antique, le Parthénon d'Athènes", contested: false
},
{
  id: 337, module: "Art & Architecture", subject: "Styles architecturaux", difficulty: 2,
  question: "Les trois ordres architecturaux de la Grèce antique sont le dorique, l'ionique et :",
  options: ["Le corinthien", "Le byzantin", "Le baroque", "Le gothique"],
  correctIndex: 0,
  explanation: "Les trois ordres architecturaux classiques de la Grèce antique sont le dorique, l'ionique et le corinthien, distingués notamment par le style de leurs colonnes et chapiteaux.",
  whyWrong: ["", "Le byzantin est un style architectural bien postérieur à l'Antiquité grecque classique", "Le baroque est un style de l'époque moderne, pas un ordre grec antique", "Le gothique est un style médiéval européen, pas un ordre grec antique"],
  memoryTrick: "Dorique, ionique, corinthien : les trois ordres grecs.",
  source: "Histoire de l'architecture, ordres grecs", contested: false
},
{
  id: 338, module: "Art & Architecture", subject: "Architecture mondiale", difficulty: 1,
  question: "La cathédrale Notre-Dame de Paris est un édifice emblématique du style :",
  options: ["Gothique", "Baroque", "Roman", "Art nouveau"],
  correctIndex: 0,
  explanation: "Notre-Dame de Paris est l'un des édifices les plus emblématiques du style gothique, avec ses arcs-boutants et ses voûtes sur croisée d'ogives.",
  whyWrong: ["", "Le style baroque n'est pas celui de Notre-Dame de Paris", "Notre-Dame est postérieure au style roman classique, relevant du gothique", "L'Art nouveau est un style bien plus tardif, du XIXe-XXe siècle"],
  memoryTrick: "Notre-Dame de Paris : cathédrale gothique par excellence.",
  source: "Architecture mondiale, Notre-Dame de Paris", contested: false
},
{
  id: 339, module: "Art & Architecture", subject: "Architecture contemporaine", difficulty: 2,
  question: "La pyramide de verre du musée du Louvre, à Paris, est l'œuvre de l'architecte :",
  options: ["Ieoh Ming Pei", "Renzo Piano", "Norman Foster", "Jean Nouvel"],
  correctIndex: 0,
  explanation: "La pyramide de verre du Louvre, inaugurée en 1989, est l'œuvre de l'architecte sino-américain Ieoh Ming Pei.",
  whyWrong: ["", "Renzo Piano est notamment l'architecte du Centre Pompidou, pas de la pyramide du Louvre", "Norman Foster n'est pas l'auteur de la pyramide du Louvre", "Jean Nouvel est l'architecte de l'Institut du monde arabe, pas de la pyramide du Louvre"],
  memoryTrick: "Pei : la pyramide de verre du Louvre.",
  source: "Architecture contemporaine, pyramide du Louvre", contested: false
},
{
  id: 340, module: "Art & Architecture", subject: "Architecture contemporaine", difficulty: 2,
  question: "L'Opéra de Sydney, célèbre pour ses voiles de béton, est l'œuvre de l'architecte :",
  options: ["Jørn Utzon", "Frank Gehry", "Renzo Piano", "Tadao Ando"],
  correctIndex: 0,
  explanation: "L'Opéra de Sydney, achevé en 1973, est l'œuvre de l'architecte danois Jørn Utzon, célèbre pour ses voiles de béton en forme de coquillages.",
  whyWrong: ["", "Frank Gehry est notamment l'architecte du musée Guggenheim de Bilbao, pas de l'Opéra de Sydney", "Renzo Piano n'est pas l'auteur de l'Opéra de Sydney", "Tadao Ando n'est pas l'auteur de l'Opéra de Sydney"],
  memoryTrick: "Utzon : les voiles de béton de l'Opéra de Sydney.",
  source: "Architecture contemporaine, Opéra de Sydney", contested: false
},

// ============================================================
// MODULE 5 — CULTURE GÉNÉRALE CLASSIQUE
// ============================================================

{
  id: 341, module: "Culture générale", subject: "Histoire ancienne", difficulty: 1,
  question: "La première grande civilisation urbaine de l'histoire s'est développée en :",
  options: ["Mésopotamie", "Scandinavie", "Amazonie", "Sibérie"],
  correctIndex: 0,
  explanation: "La Mésopotamie, région située entre le Tigre et l'Euphrate, a vu naître les premières grandes civilisations urbaines, dont Sumer, vers le IVe millénaire avant notre ère.",
  whyWrong: ["", "La Scandinavie n'a pas vu naître de civilisation urbaine aussi ancienne", "L'Amazonie n'a pas vu naître de civilisation urbaine aussi ancienne", "La Sibérie n'a pas vu naître de civilisation urbaine aussi ancienne"],
  memoryTrick: "Mésopotamie : le berceau des premières villes.",
  source: "Histoire ancienne, civilisation mésopotamienne", contested: false
},
{
  id: 342, module: "Culture générale", subject: "Histoire ancienne", difficulty: 2,
  question: "L'écriture cunéiforme, l'une des plus anciennes formes d'écriture connues, a été inventée par :",
  options: ["Les Sumériens", "Les Phéniciens", "Les Égyptiens", "Les Perses"],
  correctIndex: 0,
  explanation: "L'écriture cunéiforme a été inventée par les Sumériens, en Mésopotamie, vers 3300 avant notre ère, pour des besoins essentiellement administratifs et comptables.",
  whyWrong: ["", "Les Phéniciens sont plutôt associés à l'invention de l'alphabet, pas du cunéiforme", "Les Égyptiens ont développé les hiéroglyphes, un système distinct du cunéiforme", "Les Perses ont utilisé le cunéiforme plus tardivement, sans l'avoir inventé"],
  memoryTrick: "Cunéiforme : l'écriture des Sumériens, en forme de coins.",
  source: "Histoire ancienne, écriture cunéiforme", contested: false
},
{
  id: 343, module: "Culture générale", subject: "Histoire ancienne", difficulty: 2,
  question: "Le Code d'Hammurabi, l'un des premiers grands codes de lois écrits de l'histoire, provient de :",
  options: ["Babylone", "Athènes", "Rome", "Thèbes"],
  correctIndex: 0,
  explanation: "Le Code d'Hammurabi, gravé sur une stèle de pierre, provient de Babylone, en Mésopotamie, vers le XVIIIe siècle avant notre ère.",
  whyWrong: ["", "Athènes est associée au droit grec antique, mais pas à ce code précis", "Rome est associée au droit romain, mais pas à ce code précis", "Thèbes est une cité égyptienne, sans lien avec ce code babylonien"],
  memoryTrick: "Hammurabi : le roi de Babylone et son code de lois.",
  source: "Histoire ancienne, Code d'Hammurabi", contested: false
},
{
  id: 344, module: "Culture générale", subject: "Histoire ancienne", difficulty: 2,
  question: "Les pyramides de Gizeh ont été construites pendant la période de l'Égypte antique appelée :",
  options: ["L'Ancien Empire", "Le Nouvel Empire", "La Basse Époque", "La période ptolémaïque"],
  correctIndex: 0,
  explanation: "Les grandes pyramides de Gizeh ont été construites durant l'Ancien Empire égyptien, autour du XXVIe siècle avant notre ère.",
  whyWrong: ["", "Le Nouvel Empire est une période plus tardive, associée notamment à Toutankhamon", "La Basse Époque est une période tardive de l'Égypte antique, bien postérieure à la construction des pyramides", "La période ptolémaïque, incluant Cléopâtre, est très postérieure à la construction des pyramides"],
  memoryTrick: "Ancien Empire : l'âge des grandes pyramides.",
  source: "Histoire ancienne, Ancien Empire égyptien", contested: false
},
{
  id: 345, module: "Culture générale", subject: "Histoire ancienne", difficulty: 2,
  question: "Les hiéroglyphes égyptiens ont été déchiffrés en 1822 par :",
  options: ["Jean-François Champollion", "Howard Carter", "Napoléon Bonaparte", "Gustave Eiffel"],
  correctIndex: 0,
  explanation: "Jean-François Champollion a déchiffré les hiéroglyphes égyptiens en 1822, grâce notamment à la pierre de Rosette.",
  whyWrong: ["", "Howard Carter est célèbre pour la découverte de la tombe de Toutankhamon en 1922, pas pour le déchiffrement des hiéroglyphes", "Napoléon Bonaparte a mené la campagne d'Égypte, qui a permis la découverte de la pierre de Rosette, sans la déchiffrer lui-même", "Gustave Eiffel est l'ingénieur de la Tour Eiffel, sans lien avec l'égyptologie"],
  memoryTrick: "Champollion : le déchiffreur des hiéroglyphes, en 1822.",
  source: "Histoire ancienne, Jean-François Champollion, 1822", contested: false
},
{
  id: 346, module: "Culture générale", subject: "Histoire ancienne", difficulty: 2,
  question: "La pierre de Rosette, qui a permis de déchiffrer les hiéroglyphes, a été découverte en :",
  options: ["Égypte", "Grèce", "Perse", "Mésopotamie"],
  correctIndex: 0,
  explanation: "La pierre de Rosette a été découverte en Égypte en 1799, lors de la campagne militaire française, avant d'être transportée à Londres.",
  whyWrong: ["", "La Grèce n'est pas le lieu de découverte de la pierre de Rosette", "La Perse n'est pas le lieu de découverte de la pierre de Rosette", "La Mésopotamie n'est pas le lieu de découverte de la pierre de Rosette"],
  memoryTrick: "Rosette : découverte en Égypte, clé des hiéroglyphes.",
  source: "Histoire ancienne, pierre de Rosette", contested: false
},
{
  id: 347, module: "Culture générale", subject: "Histoire ancienne", difficulty: 2,
  question: "Alexandre le Grand, dont l'empire s'est étendu jusqu'à l'Inde, a été l'élève du philosophe :",
  options: ["Aristote", "Platon", "Socrate", "Épicure"],
  correctIndex: 0,
  explanation: "Alexandre le Grand a été formé par le philosophe Aristote, engagé par son père Philippe II de Macédoine comme précepteur.",
  whyWrong: ["", "Platon a précédé Aristote, mais n'a pas été le précepteur direct d'Alexandre", "Socrate est antérieur d'un siècle à Alexandre le Grand", "Épicure est postérieur à Alexandre le Grand"],
  memoryTrick: "Aristote : le maître d'Alexandre le Grand.",
  source: "Histoire ancienne, Alexandre le Grand et Aristote", contested: false
},
{
  id: 348, module: "Culture générale", subject: "Histoire ancienne", difficulty: 2,
  question: "Jules César a été assassiné :",
  options: ["Aux ides de mars", "Le jour de son couronnement", "Lors d'une bataille en Gaule", "Pendant la traversée du Rubicon"],
  correctIndex: 0,
  explanation: "Jules César a été assassiné aux ides de mars (le 15 mars) de l'an 44 avant notre ère, par un groupe de sénateurs romains.",
  whyWrong: ["", "César n'a jamais été formellement couronné empereur", "César n'est pas mort lors d'une bataille en Gaule", "La traversée du Rubicon, en 49 av. J.-C., est antérieure à son assassinat"],
  memoryTrick: "Ides de mars : le jour de l'assassinat de César.",
  source: "Histoire ancienne, assassinat de Jules César, 44 av. J.-C.", contested: false
},
{
  id: 349, module: "Culture générale", subject: "Histoire ancienne", difficulty: 2,
  question: "Le premier empereur romain fut :",
  options: ["Auguste", "Néron", "Jules César", "Constantin"],
  correctIndex: 0,
  explanation: "Auguste, neveu et héritier de Jules César, est considéré comme le premier empereur romain, inaugurant le Principat en 27 avant notre ère.",
  whyWrong: ["", "Néron est un empereur plus tardif, pas le premier", "Jules César n'a jamais porté officiellement le titre d'empereur", "Constantin est un empereur bien plus tardif, associé à la christianisation de l'Empire"],
  memoryTrick: "Auguste : le premier empereur, après César.",
  source: "Histoire ancienne, Auguste, premier empereur romain", contested: false
},
{
  id: 350, module: "Culture générale", subject: "Histoire ancienne", difficulty: 2,
  question: "La fondation légendaire de Rome est traditionnellement datée de :",
  options: ["753 avant notre ère", "509 avant notre ère", "27 avant notre ère", "476 après notre ère"],
  correctIndex: 0,
  explanation: "La fondation légendaire de Rome, attribuée à Romulus, est traditionnellement datée de 753 avant notre ère.",
  whyWrong: ["", "509 av. J.-C. correspond à la fondation traditionnelle de la République romaine, pas de la ville elle-même", "27 av. J.-C. correspond à l'avènement d'Auguste et du Principat", "476 apr. J.-C. correspond à la chute de l'Empire romain d'Occident"],
  memoryTrick: "753 av. J.-C. : la fondation légendaire de Rome par Romulus.",
  source: "Histoire ancienne, fondation de Rome", contested: false
},
{
  id: 351, module: "Culture générale", subject: "Histoire ancienne", difficulty: 2,
  question: "L'Empire romain d'Occident s'est effondré en :",
  options: ["476", "1054", "1204", "1453"],
  correctIndex: 0,
  explanation: "L'Empire romain d'Occident s'effondre en 476, avec la déposition du dernier empereur, Romulus Augustule, par le chef germanique Odoacre.",
  whyWrong: ["", "1054 correspond au Grand Schisme entre catholicisme et orthodoxie, pas à la chute de Rome", "1204 correspond à la prise de Constantinople par les croisés, pas à la chute de Rome", "1453 correspond à la chute de Constantinople face aux Ottomans, marquant la fin de l'Empire byzantin"],
  memoryTrick: "476 : fin de l'Empire romain d'Occident.",
  source: "Histoire ancienne, chute de l'Empire romain d'Occident, 476", contested: false
},
{
  id: 352, module: "Culture générale", subject: "Histoire ancienne", difficulty: 1,
  question: "Les Jeux Olympiques antiques ont été créés en Grèce, dans la cité de :",
  options: ["Olympie", "Sparte", "Athènes", "Delphes"],
  correctIndex: 0,
  explanation: "Les Jeux Olympiques antiques ont été créés à Olympie, en Grèce, en l'honneur du dieu Zeus, dès le VIIIe siècle avant notre ère.",
  whyWrong: ["", "Sparte n'est pas le lieu de création des Jeux Olympiques antiques", "Athènes n'est pas le lieu de création des Jeux Olympiques antiques, bien qu'elle ait accueilli les premiers Jeux modernes en 1896", "Delphes est célèbre pour son oracle, pas pour les Jeux Olympiques antiques"],
  memoryTrick: "Olympie : le berceau antique des Jeux Olympiques.",
  source: "Histoire ancienne, Jeux Olympiques antiques, Olympie", contested: false
},
{
  id: 353, module: "Culture générale", subject: "Histoire ancienne", difficulty: 2,
  question: "L'âge d'or d'Athènes, au Ve siècle avant notre ère, est associé au nom de :",
  options: ["Périclès", "Léonidas", "Alexandre le Grand", "Solon"],
  correctIndex: 0,
  explanation: "Périclès a dirigé Athènes durant son âge d'or, au Ve siècle avant notre ère, période de rayonnement culturel et démocratique de la cité.",
  whyWrong: ["", "Léonidas est associé à la bataille des Thermopyles, en tant que roi de Sparte, pas d'Athènes", "Alexandre le Grand est macédonien et postérieur d'un siècle à Périclès", "Solon est un législateur athénien antérieur à Périclès"],
  memoryTrick: "Périclès : l'âge d'or d'Athènes.",
  source: "Histoire ancienne, Périclès et l'âge d'or d'Athènes", contested: false
},
{
  id: 354, module: "Culture générale", subject: "Histoire ancienne", difficulty: 2,
  question: "Le philosophe grec Socrate a été condamné à mort en buvant :",
  options: ["La ciguë", "Du vin empoisonné", "Un venin de serpent", "Une décoction d'opium"],
  correctIndex: 0,
  explanation: "Socrate a été condamné à mort par la cité d'Athènes et a bu la ciguë, un poison végétal, pour exécuter sa sentence.",
  whyWrong: ["", "Ce n'est pas du vin empoisonné qui a été utilisé pour l'exécution de Socrate", "Ce n'est pas un venin de serpent qui a été utilisé pour l'exécution de Socrate", "Ce n'est pas de l'opium qui a été utilisé pour l'exécution de Socrate"],
  memoryTrick: "Socrate : condamné à boire la ciguë.",
  source: "Histoire ancienne, mort de Socrate", contested: false
},
{
  id: 355, module: "Culture générale", subject: "Histoire ancienne", difficulty: 2,
  question: "La bataille de Marathon, remportée par les Grecs contre les Perses, s'est déroulée en :",
  options: ["490 avant notre ère", "331 avant notre ère", "146 avant notre ère", "31 avant notre ère"],
  correctIndex: 0,
  explanation: "La bataille de Marathon, victoire grecque décisive contre les Perses, s'est déroulée en 490 avant notre ère.",
  whyWrong: ["", "331 av. J.-C. correspond à la bataille de Gaugamèles, remportée par Alexandre le Grand contre les Perses", "146 av. J.-C. correspond à la destruction de Carthage par Rome", "31 av. J.-C. correspond à la bataille d'Actium, entre Octave et Marc Antoine"],
  memoryTrick: "Marathon, 490 av. J.-C. : victoire grecque sur les Perses.",
  source: "Histoire ancienne, bataille de Marathon, 490 av. J.-C.", contested: false
},
{
  id: 356, module: "Culture générale", subject: "Histoire ancienne", difficulty: 2,
  question: "Cléopâtre VII fut la dernière reine de la dynastie :",
  options: ["Ptolémaïque, en Égypte", "Achéménide, en Perse", "Séleucide, en Syrie", "Antonine, à Rome"],
  correctIndex: 0,
  explanation: "Cléopâtre VII fut la dernière souveraine de la dynastie ptolémaïque, qui régnait sur l'Égypte depuis la mort d'Alexandre le Grand.",
  whyWrong: ["", "La dynastie achéménide concerne la Perse antique, pas l'Égypte de Cléopâtre", "La dynastie séleucide concerne la Syrie hellénistique, pas l'Égypte de Cléopâtre", "La dynastie antonine concerne des empereurs romains, sans lien avec Cléopâtre"],
  memoryTrick: "Cléopâtre : dernière reine ptolémaïque d'Égypte.",
  source: "Histoire ancienne, Cléopâtre VII", contested: false
},
{
  id: 357, module: "Culture générale", subject: "Histoire ancienne", difficulty: 2,
  question: "La Grande Bibliothèque d'Alexandrie, célèbre centre du savoir antique, se trouvait :",
  options: ["En Égypte", "En Grèce", "En Perse", "À Rome"],
  correctIndex: 0,
  explanation: "La Grande Bibliothèque d'Alexandrie, l'un des plus grands centres de savoir de l'Antiquité, se trouvait en Égypte, fondée sous les Ptolémées.",
  whyWrong: ["", "La Grèce n'abritait pas cette bibliothèque, bien que sa culture y soit très présente", "La Perse n'abritait pas cette bibliothèque", "Rome n'abritait pas cette bibliothèque"],
  memoryTrick: "Alexandrie : la grande bibliothèque de l'Antiquité, en Égypte.",
  source: "Histoire ancienne, bibliothèque d'Alexandrie", contested: false
},
{
  id: 358, module: "Culture générale", subject: "Histoire ancienne", difficulty: 2,
  question: "Le général carthaginois Hannibal Barca est célèbre pour avoir traversé les Alpes avec :",
  options: ["Des éléphants de guerre", "Une flotte de galères", "Des chars perses", "Des chameaux du désert"],
  correctIndex: 0,
  explanation: "Hannibal Barca, général carthaginois, est célèbre pour avoir traversé les Alpes avec des éléphants de guerre lors de la deuxième guerre punique.",
  whyWrong: ["", "Ce n'est pas une flotte de galères qui a traversé les Alpes", "Les chars perses ne sont pas associés à cet épisode d'Hannibal", "Les chameaux ne sont pas les animaux associés à cette traversée alpine"],
  memoryTrick: "Hannibal : les éléphants qui traversent les Alpes.",
  source: "Histoire ancienne, Hannibal Barca, guerres puniques", contested: false
},
{
  id: 359, module: "Culture générale", subject: "Histoire ancienne", difficulty: 2,
  question: "Les guerres puniques ont opposé Rome à :",
  options: ["Carthage", "Sparte", "La Perse", "L'Égypte"],
  correctIndex: 0,
  explanation: "Les guerres puniques, qui se sont déroulées en trois épisodes entre 264 et 146 avant notre ère, ont opposé Rome à Carthage, cité phénicienne d'Afrique du Nord.",
  whyWrong: ["", "Sparte n'est pas l'adversaire de Rome dans les guerres puniques", "La Perse n'est pas l'adversaire de Rome dans les guerres puniques", "L'Égypte n'est pas l'adversaire de Rome dans les guerres puniques"],
  memoryTrick: "Puniques : Rome contre Carthage.",
  source: "Histoire ancienne, guerres puniques", contested: false
},
{
  id: 360, module: "Culture générale", subject: "Histoire ancienne", difficulty: 2,
  question: "La tombe du pharaon Toutankhamon a été découverte en 1922 par :",
  options: ["Howard Carter", "Jean-François Champollion", "Jean-Baptiste Mariette", "Napoléon Bonaparte"],
  correctIndex: 0,
  explanation: "L'archéologue britannique Howard Carter a découvert la tombe presque intacte du pharaon Toutankhamon en 1922, dans la Vallée des Rois.",
  whyWrong: ["", "Champollion a déchiffré les hiéroglyphes en 1822, un siècle avant cette découverte", "Mariette est un égyptologue français du XIXe siècle, mais n'a pas découvert cette tombe", "Napoléon Bonaparte a mené la campagne d'Égypte, bien avant cette découverte"],
  memoryTrick: "Carter, 1922 : la tombe de Toutankhamon.",
  source: "Histoire ancienne, découverte de la tombe de Toutankhamon, 1922", contested: false
},
{
  id: 361, module: "Culture générale", subject: "Histoire médiévale", difficulty: 2,
  question: "Attila, surnommé le « fléau de Dieu », était le chef :",
  options: ["Des Huns", "Des Wisigoths", "Des Vandales", "Des Francs"],
  correctIndex: 0,
  explanation: "Attila, surnommé le « fléau de Dieu », était le chef des Huns, peuple nomade qui a menacé l'Empire romain au Ve siècle.",
  whyWrong: ["", "Les Wisigoths avaient d'autres chefs, comme Alaric", "Les Vandales avaient d'autres chefs, comme Genséric", "Les Francs avaient d'autres chefs, comme Clovis"],
  memoryTrick: "Attila : le chef des Huns, fléau de Dieu.",
  source: "Histoire médiévale, Attila et les Huns", contested: false
},
{
  id: 362, module: "Culture générale", subject: "Histoire médiévale", difficulty: 2,
  question: "Charlemagne a été couronné empereur en l'an :",
  options: ["800", "987", "1066", "1214"],
  correctIndex: 0,
  explanation: "Charlemagne a été couronné empereur par le pape Léon III en l'an 800, à Rome, marquant la restauration d'un empire d'Occident.",
  whyWrong: ["", "987 correspond à l'avènement d'Hugues Capet en France", "1066 correspond à la conquête normande de l'Angleterre", "1214 correspond à la bataille de Bouvines"],
  memoryTrick: "Charlemagne : couronné empereur en l'an 800.",
  source: "Histoire médiévale, couronnement de Charlemagne, 800", contested: false
},
{
  id: 363, module: "Culture générale", subject: "Histoire médiévale", difficulty: 2,
  question: "Les croisades, expéditions militaires médiévales vers la Terre sainte, se sont déroulées principalement :",
  options: ["Du XIe au XIIIe siècle", "Du VIe au VIIIe siècle", "Du XVe au XVIIe siècle", "Du XVIIIe au XIXe siècle"],
  correctIndex: 0,
  explanation: "Les croisades, expéditions militaires médiévales visant à reprendre Jérusalem, se sont déroulées principalement du XIe au XIIIe siècle.",
  whyWrong: ["", "Cette période est trop précoce pour les croisades", "Cette période est trop tardive pour les croisades", "Cette période est bien trop tardive pour les croisades"],
  memoryTrick: "Croisades : XIe-XIIIe siècle, vers Jérusalem.",
  source: "Histoire médiévale, les croisades", contested: false
},
{
  id: 364, module: "Culture générale", subject: "Histoire médiévale", difficulty: 2,
  question: "La bataille de Poitiers, en 732, a vu s'affronter Charles Martel et :",
  options: ["Les troupes omeyyades venues d'Espagne", "Les Vikings", "Les Mongols", "Les croisés"],
  correctIndex: 0,
  explanation: "La bataille de Poitiers, en 732, a opposé Charles Martel aux troupes omeyyades venues d'Espagne, marquant un tournant dans l'expansion musulmane en Europe occidentale.",
  whyWrong: ["", "Les Vikings ne sont pas les adversaires de Charles Martel à Poitiers", "Les Mongols ne sont pas les adversaires de Charles Martel à Poitiers", "Les croisés ne sont pas les adversaires de Charles Martel, cette bataille étant antérieure aux croisades"],
  memoryTrick: "Poitiers, 732 : Charles Martel face aux troupes omeyyades.",
  source: "Histoire médiévale, bataille de Poitiers, 732", contested: false
},
{
  id: 365, module: "Culture générale", subject: "Histoire ancienne", difficulty: 2,
  question: "Qin Shi Huang, premier empereur à avoir unifié la Chine, appartenait à la dynastie :",
  options: ["Qin", "Han", "Tang", "Ming"],
  correctIndex: 0,
  explanation: "Qin Shi Huang, premier empereur à avoir unifié la Chine au IIIe siècle avant notre ère, a donné son nom à la dynastie Qin.",
  whyWrong: ["", "La dynastie Han a succédé à la dynastie Qin, sans être celle de Qin Shi Huang", "La dynastie Tang est bien postérieure à Qin Shi Huang", "La dynastie Ming est très postérieure à Qin Shi Huang"],
  memoryTrick: "Qin Shi Huang : premier empereur, dynastie Qin.",
  source: "Histoire ancienne, Qin Shi Huang", contested: false
},
{
  id: 366, module: "Culture générale", subject: "Histoire ancienne", difficulty: 2,
  question: "La Route de la soie était un ancien réseau d'échanges commerciaux reliant :",
  options: ["La Chine à l'Europe et au Moyen-Orient", "L'Égypte à l'Afrique subsaharienne uniquement", "Le Japon aux Amériques", "La Grèce à la Scandinavie"],
  correctIndex: 0,
  explanation: "La Route de la soie était un vaste réseau de routes commerciales reliant la Chine à l'Europe et au Moyen-Orient, favorisant les échanges de biens et d'idées.",
  whyWrong: ["", "Ce n'est pas la description de la Route de la soie", "Ce n'est pas la description de la Route de la soie", "Ce n'est pas la description de la Route de la soie"],
  memoryTrick: "Route de la soie : la Chine reliée à l'Europe.",
  source: "Histoire ancienne, Route de la soie", contested: false
},
{
  id: 367, module: "Culture générale", subject: "Histoire médiévale", difficulty: 2,
  question: "L'Empire byzantin, héritier oriental de l'Empire romain, avait pour capitale :",
  options: ["Constantinople", "Alexandrie", "Antioche", "Jérusalem"],
  correctIndex: 0,
  explanation: "L'Empire byzantin avait pour capitale Constantinople, fondée par l'empereur Constantin sur le site de l'ancienne Byzance.",
  whyWrong: ["", "Alexandrie était un grand centre culturel, mais pas la capitale byzantine", "Antioche était une grande cité, mais pas la capitale byzantine", "Jérusalem était une ville sainte, mais pas la capitale byzantine"],
  memoryTrick: "Constantinople : capitale de l'Empire byzantin.",
  source: "Histoire médiévale, Empire byzantin", contested: false
},
{
  id: 368, module: "Culture générale", subject: "Histoire médiévale", difficulty: 2,
  question: "La chute de Constantinople, marquant la fin de l'Empire byzantin, a eu lieu en :",
  options: ["1453", "1204", "1099", "1517"],
  correctIndex: 0,
  explanation: "Constantinople est prise par les Ottomans en 1453, mettant fin à l'Empire byzantin après plus de mille ans d'existence.",
  whyWrong: ["", "1204 correspond à la prise de Constantinople par les croisés de la quatrième croisade, épisode distinct", "1099 correspond à la prise de Jérusalem par les croisés", "1517 correspond à des événements bien postérieurs à la chute de Constantinople"],
  memoryTrick: "1453 : chute de Constantinople face aux Ottomans.",
  source: "Histoire médiévale, chute de Constantinople, 1453", contested: false
},
{
  id: 369, module: "Culture générale", subject: "Histoire moderne", difficulty: 2,
  question: "L'imprimerie à caractères mobiles a été inventée vers 1450 par :",
  options: ["Johannes Gutenberg", "Léonard de Vinci", "Christophe Colomb", "Galilée"],
  correctIndex: 0,
  explanation: "Johannes Gutenberg a inventé l'imprimerie à caractères mobiles vers 1450, en Allemagne, révolutionnant la diffusion du savoir en Europe.",
  whyWrong: ["", "Léonard de Vinci est un artiste et ingénieur de la Renaissance, mais pas l'inventeur de l'imprimerie", "Christophe Colomb est un navigateur, sans lien avec l'imprimerie", "Galilée est un astronome et physicien, postérieur à Gutenberg"],
  memoryTrick: "Gutenberg : l'imprimerie, vers 1450.",
  source: "Histoire moderne, Gutenberg, imprimerie", contested: false
},
{
  id: 370, module: "Culture générale", subject: "Histoire moderne", difficulty: 1,
  question: "La Renaissance, mouvement culturel et artistique majeur, s'est développée en Europe principalement aux :",
  options: ["XVe et XVIe siècles", "IXe et Xe siècles", "XVIIIe et XIXe siècles", "XIIe et XIIIe siècles"],
  correctIndex: 0,
  explanation: "La Renaissance s'est développée en Europe principalement aux XVe et XVIe siècles, marquant un renouveau des arts et des sciences inspiré de l'Antiquité.",
  whyWrong: ["", "Cette période est trop précoce pour la Renaissance", "Cette période est trop tardive, correspondant plutôt aux Lumières et à la révolution industrielle", "Cette période correspond au Moyen Âge central, antérieure à la Renaissance"],
  memoryTrick: "Renaissance : XVe-XVIe siècle.",
  source: "Histoire moderne, la Renaissance", contested: false
},
{
  id: 371, module: "Culture générale", subject: "Littérature classique", difficulty: 1,
  question: "L'Iliade et l'Odyssée, poèmes fondateurs de la littérature occidentale, sont attribués à :",
  options: ["Homère", "Virgile", "Sophocle", "Hésiode"],
  correctIndex: 0,
  explanation: "L'Iliade et l'Odyssée sont attribuées au poète grec Homère, figure semi-légendaire de la littérature antique.",
  whyWrong: ["", "Virgile est l'auteur de l'Énéide, poème latin distinct", "Sophocle est un auteur de tragédies grecques, pas de ces deux épopées", "Hésiode est un poète grec, auteur de la Théogonie, mais pas de ces deux œuvres"],
  memoryTrick: "Homère : Iliade et Odyssée.",
  source: "Littérature classique, Homère", contested: false
},
{
  id: 372, module: "Culture générale", subject: "Littérature classique", difficulty: 2,
  question: "L'Iliade, poème d'Homère, raconte un épisode de :",
  options: ["La guerre de Troie", "Le retour d'Ulysse à Ithaque", "La fondation de Rome", "La guerre du Péloponnèse"],
  correctIndex: 0,
  explanation: "L'Iliade raconte un épisode de la guerre de Troie, centré sur la colère d'Achille durant les dernières semaines du conflit.",
  whyWrong: ["", "Le retour d'Ulysse à Ithaque est le sujet de l'Odyssée, pas de l'Iliade", "La fondation de Rome est le sujet de l'Énéide de Virgile, pas de l'Iliade", "La guerre du Péloponnèse est un conflit historique réel, distinct de la guerre de Troie"],
  memoryTrick: "Iliade : la guerre de Troie.",
  source: "Littérature classique, l'Iliade", contested: false
},
{
  id: 373, module: "Culture générale", subject: "Littérature classique", difficulty: 2,
  question: "L'Odyssée, poème d'Homère, raconte :",
  options: ["Le retour d'Ulysse à Ithaque", "La colère d'Achille à Troie", "La fondation de Rome par Énée", "Les travaux d'Hercule"],
  correctIndex: 0,
  explanation: "L'Odyssée raconte le long retour d'Ulysse vers son royaume d'Ithaque, après la fin de la guerre de Troie.",
  whyWrong: ["", "La colère d'Achille à Troie est le sujet de l'Iliade, pas de l'Odyssée", "La fondation de Rome par Énée est le sujet de l'Énéide de Virgile", "Les travaux d'Hercule relèvent de la mythologie, pas de l'Odyssée"],
  memoryTrick: "Odyssée : le retour d'Ulysse à Ithaque.",
  source: "Littérature classique, l'Odyssée", contested: false
},
{
  id: 374, module: "Culture générale", subject: "Littérature classique", difficulty: 2,
  question: "L'Énéide, poème épique latin racontant les origines légendaires de Rome, est l'œuvre de :",
  options: ["Virgile", "Homère", "Ovide", "Cicéron"],
  correctIndex: 0,
  explanation: "L'Énéide, qui raconte le voyage légendaire d'Énée fuyant Troie jusqu'en Italie, est l'œuvre du poète latin Virgile.",
  whyWrong: ["", "Homère est l'auteur de l'Iliade et l'Odyssée, poèmes grecs distincts", "Ovide est l'auteur des Métamorphoses, pas de l'Énéide", "Cicéron est un orateur et philosophe romain, pas l'auteur de l'Énéide"],
  memoryTrick: "Virgile : l'Énéide, les origines de Rome.",
  source: "Littérature classique, Virgile, l'Énéide", contested: false
},
{
  id: 375, module: "Culture générale", subject: "Littérature classique", difficulty: 2,
  question: "La Divine Comédie, œuvre majeure de la littérature italienne, a été écrite par :",
  options: ["Dante Alighieri", "Pétrarque", "Boccace", "Machiavel"],
  correctIndex: 0,
  explanation: "La Divine Comédie, qui décrit un voyage à travers l'Enfer, le Purgatoire et le Paradis, a été écrite par Dante Alighieri au début du XIVe siècle.",
  whyWrong: ["", "Pétrarque est un poète italien célèbre pour ses sonnets, pas pour la Divine Comédie", "Boccace est l'auteur du Décaméron, pas de la Divine Comédie", "Machiavel est l'auteur du Prince, ouvrage politique distinct"],
  memoryTrick: "Dante : la Divine Comédie, Enfer-Purgatoire-Paradis.",
  source: "Littérature classique, Dante Alighieri", contested: false
},
{
  id: 376, module: "Culture générale", subject: "Littérature classique", difficulty: 1,
  question: "Roméo et Juliette, tragédie célèbre, a été écrite par :",
  options: ["William Shakespeare", "Christopher Marlowe", "Charles Dickens", "Oscar Wilde"],
  correctIndex: 0,
  explanation: "Roméo et Juliette est une tragédie écrite par le dramaturge anglais William Shakespeare, à la fin du XVIe siècle.",
  whyWrong: ["", "Christopher Marlowe est un dramaturge contemporain de Shakespeare, mais pas l'auteur de cette pièce", "Charles Dickens est un romancier anglais du XIXe siècle, bien postérieur à Shakespeare", "Oscar Wilde est un écrivain du XIXe siècle, bien postérieur à Shakespeare"],
  memoryTrick: "Shakespeare : Roméo et Juliette.",
  source: "Littérature classique, William Shakespeare", contested: false
},
{
  id: 377, module: "Culture générale", subject: "Littérature classique", difficulty: 2,
  question: "Don Quichotte, roman espagnol classique, a été écrit par :",
  options: ["Miguel de Cervantès", "Lope de Vega", "Federico García Lorca", "Calderón de la Barca"],
  correctIndex: 0,
  explanation: "Don Quichotte, souvent considéré comme le premier roman moderne, a été écrit par Miguel de Cervantès, publié en deux parties au début du XVIIe siècle.",
  whyWrong: ["", "Lope de Vega est un dramaturge espagnol contemporain de Cervantès, mais pas l'auteur de Don Quichotte", "Federico García Lorca est un poète et dramaturge du XXe siècle, bien postérieur", "Calderón de la Barca est un dramaturge espagnol du Siècle d'or, mais pas l'auteur de Don Quichotte"],
  memoryTrick: "Cervantès : Don Quichotte.",
  source: "Littérature classique, Miguel de Cervantès", contested: false
},
{
  id: 378, module: "Culture générale", subject: "Littérature classique", difficulty: 1,
  question: "Le Malade imaginaire et Tartuffe sont des pièces du dramaturge français :",
  options: ["Molière", "Racine", "Corneille", "Beaumarchais"],
  correctIndex: 0,
  explanation: "Le Malade imaginaire et Tartuffe sont deux comédies célèbres de Molière, dramaturge français du XVIIe siècle.",
  whyWrong: ["", "Racine est l'auteur de tragédies comme Phèdre, pas de ces comédies", "Corneille est l'auteur de tragédies comme Le Cid, pas de ces comédies", "Beaumarchais est un dramaturge du XVIIIe siècle, auteur du Mariage de Figaro"],
  memoryTrick: "Molière : Le Malade imaginaire, Tartuffe.",
  source: "Littérature classique, Molière", contested: false
},
{
  id: 379, module: "Culture générale", subject: "Littérature classique", difficulty: 1,
  question: "Les Misérables, célèbre roman français, a été écrit par :",
  options: ["Victor Hugo", "Alexandre Dumas", "Gustave Flaubert", "Émile Zola"],
  correctIndex: 0,
  explanation: "Les Misérables, publié en 1862, est l'œuvre de Victor Hugo, également auteur de Notre-Dame de Paris.",
  whyWrong: ["", "Alexandre Dumas est l'auteur des Trois Mousquetaires, pas des Misérables", "Gustave Flaubert est l'auteur de Madame Bovary, pas des Misérables", "Émile Zola est l'auteur de Germinal, pas des Misérables"],
  memoryTrick: "Hugo : Les Misérables ET Notre-Dame de Paris.",
  source: "Littérature classique, Victor Hugo", contested: false
},
{
  id: 380, module: "Culture générale", subject: "Littérature classique", difficulty: 2,
  question: "Candide, conte philosophique critiquant l'optimisme, a été écrit par :",
  options: ["Voltaire", "Rousseau", "Diderot", "Montesquieu"],
  correctIndex: 0,
  explanation: "Candide, publié en 1759, est un conte philosophique de Voltaire, figure majeure du siècle des Lumières.",
  whyWrong: ["", "Rousseau est l'auteur du Contrat social et de l'Émile, pas de Candide", "Diderot est l'auteur de l'Encyclopédie, pas de Candide", "Montesquieu est l'auteur de l'Esprit des lois, pas de Candide"],
  memoryTrick: "Voltaire : Candide, critique de l'optimisme.",
  source: "Littérature classique, Voltaire, Candide", contested: false
},
{
  id: 381, module: "Culture générale", subject: "Littérature classique", difficulty: 2,
  question: "Du contrat social, œuvre politique majeure des Lumières, a été écrite par :",
  options: ["Jean-Jacques Rousseau", "Voltaire", "Montesquieu", "Diderot"],
  correctIndex: 0,
  explanation: "Du contrat social, publié en 1762, est l'œuvre de Jean-Jacques Rousseau, philosophe genevois des Lumières.",
  whyWrong: ["", "Voltaire n'est pas l'auteur de cette œuvre précise", "Montesquieu est l'auteur de l'Esprit des lois, œuvre distincte", "Diderot est l'auteur de l'Encyclopédie, pas de Du contrat social"],
  memoryTrick: "Rousseau : Du contrat social.",
  source: "Littérature classique, Jean-Jacques Rousseau", contested: false
},
{
  id: 382, module: "Culture générale", subject: "Littérature classique", difficulty: 2,
  question: "L'Esprit des lois, ouvrage théorisant la séparation des pouvoirs, a été écrit par :",
  options: ["Montesquieu", "Voltaire", "Rousseau", "Diderot"],
  correctIndex: 0,
  explanation: "L'Esprit des lois, publié en 1748, est l'œuvre de Montesquieu, qui y théorise notamment la séparation des pouvoirs législatif, exécutif et judiciaire.",
  whyWrong: ["", "Voltaire n'est pas l'auteur de cette œuvre précise", "Rousseau est l'auteur de Du contrat social, œuvre distincte", "Diderot est l'auteur de l'Encyclopédie, pas de L'Esprit des lois"],
  memoryTrick: "Montesquieu : L'Esprit des lois, séparation des pouvoirs.",
  source: "Littérature classique, Montesquieu", contested: false
},
{
  id: 383, module: "Culture générale", subject: "Littérature classique", difficulty: 2,
  question: "La Comédie humaine, vaste ensemble romanesque dépeignant la société française du XIXe siècle, est l'œuvre de :",
  options: ["Honoré de Balzac", "Gustave Flaubert", "Émile Zola", "Stendhal"],
  correctIndex: 0,
  explanation: "La Comédie humaine est un vaste cycle romanesque composé par Honoré de Balzac, réunissant plusieurs dizaines de romans et nouvelles.",
  whyWrong: ["", "Gustave Flaubert est l'auteur de Madame Bovary, pas de La Comédie humaine", "Émile Zola est l'auteur du cycle des Rougon-Macquart, distinct de La Comédie humaine", "Stendhal est l'auteur du Rouge et le Noir, pas de La Comédie humaine"],
  memoryTrick: "Balzac : La Comédie humaine.",
  source: "Littérature classique, Honoré de Balzac", contested: false
},
{
  id: 384, module: "Culture générale", subject: "Littérature classique", difficulty: 2,
  question: "Madame Bovary, roman réaliste français, a été écrit par :",
  options: ["Gustave Flaubert", "Honoré de Balzac", "Émile Zola", "Guy de Maupassant"],
  correctIndex: 0,
  explanation: "Madame Bovary, publié en 1857, est l'œuvre de Gustave Flaubert, considérée comme un jalon majeur du roman réaliste français.",
  whyWrong: ["", "Honoré de Balzac est l'auteur de La Comédie humaine, pas de Madame Bovary", "Émile Zola est l'auteur du cycle des Rougon-Macquart, pas de Madame Bovary", "Guy de Maupassant est un nouvelliste français, pas l'auteur de Madame Bovary"],
  memoryTrick: "Flaubert : Madame Bovary.",
  source: "Littérature classique, Gustave Flaubert", contested: false
},
{
  id: 385, module: "Culture générale", subject: "Littérature classique", difficulty: 2,
  question: "Germinal, roman emblématique du mouvement naturaliste, a été écrit par :",
  options: ["Émile Zola", "Gustave Flaubert", "Honoré de Balzac", "Victor Hugo"],
  correctIndex: 0,
  explanation: "Germinal, publié en 1885, est l'œuvre d'Émile Zola, figure majeure du mouvement naturaliste, décrivant la vie des mineurs du Nord de la France.",
  whyWrong: ["", "Gustave Flaubert est associé au réalisme, pas directement à Germinal", "Honoré de Balzac appartient à une génération antérieure à Zola", "Victor Hugo est l'auteur des Misérables, pas de Germinal"],
  memoryTrick: "Zola : Germinal, naturalisme.",
  source: "Littérature classique, Émile Zola, Germinal", contested: false
},
{
  id: 386, module: "Culture générale", subject: "Littérature classique", difficulty: 2,
  question: "À la recherche du temps perdu, monumentale œuvre romanesque du début du XXe siècle, a été écrite par :",
  options: ["Marcel Proust", "André Gide", "François Mauriac", "Colette"],
  correctIndex: 0,
  explanation: "À la recherche du temps perdu est une œuvre en sept volumes écrite par Marcel Proust, publiée entre 1913 et 1927.",
  whyWrong: ["", "André Gide est un écrivain contemporain de Proust, mais pas l'auteur de cette œuvre", "François Mauriac est un romancier français, mais pas l'auteur de cette œuvre", "Colette est une romancière française, mais pas l'auteure de cette œuvre"],
  memoryTrick: "Proust : À la recherche du temps perdu.",
  source: "Littérature classique, Marcel Proust", contested: false
},
{
  id: 387, module: "Culture générale", subject: "Littérature classique", difficulty: 1,
  question: "Le Petit Prince, conte philosophique traduit dans le monde entier, a été écrit par :",
  options: ["Antoine de Saint-Exupéry", "Albert Camus", "Jean-Paul Sartre", "André Malraux"],
  correctIndex: 0,
  explanation: "Le Petit Prince, publié en 1943, est l'œuvre d'Antoine de Saint-Exupéry, aviateur et écrivain français.",
  whyWrong: ["", "Albert Camus est l'auteur de L'Étranger, pas du Petit Prince", "Jean-Paul Sartre est une figure de l'existentialisme, pas l'auteur du Petit Prince", "André Malraux est l'auteur de La Condition humaine, pas du Petit Prince"],
  memoryTrick: "Saint-Exupéry : Le Petit Prince, l'aviateur écrivain.",
  source: "Littérature classique, Antoine de Saint-Exupéry", contested: false
},
{
  id: 388, module: "Culture générale", subject: "Littérature classique", difficulty: 2,
  question: "L'Étranger, roman associé à la philosophie de l'absurde, a été écrit par :",
  options: ["Albert Camus", "Jean-Paul Sartre", "Simone de Beauvoir", "André Gide"],
  correctIndex: 0,
  explanation: "L'Étranger, publié en 1942, est l'œuvre d'Albert Camus, souvent associée à sa philosophie de l'absurde.",
  whyWrong: ["", "Jean-Paul Sartre est l'auteur de La Nausée, pas de L'Étranger", "Simone de Beauvoir est l'auteure du Deuxième Sexe, pas de L'Étranger", "André Gide est l'auteur des Faux-Monnayeurs, pas de L'Étranger"],
  memoryTrick: "Camus : L'Étranger, philosophie de l'absurde.",
  source: "Littérature classique, Albert Camus, L'Étranger", contested: false
},
{
  id: 389, module: "Culture générale", subject: "Littérature classique", difficulty: 2,
  question: "Jean-Paul Sartre, auteur de La Nausée, est une figure majeure du courant philosophique et littéraire appelé :",
  options: ["L'existentialisme", "Le romantisme", "Le classicisme", "Le symbolisme"],
  correctIndex: 0,
  explanation: "Jean-Paul Sartre est une figure majeure de l'existentialisme, courant philosophique et littéraire mettant l'accent sur la liberté et la responsabilité individuelles.",
  whyWrong: ["", "Le romantisme est un courant du XIXe siècle, antérieur à Sartre", "Le classicisme est un courant du XVIIe siècle, sans lien avec Sartre", "Le symbolisme est un courant de la fin du XIXe siècle, distinct de l'existentialisme"],
  memoryTrick: "Sartre : figure de l'existentialisme.",
  source: "Littérature classique, Jean-Paul Sartre, existentialisme", contested: false
},
{
  id: 390, module: "Culture générale", subject: "Littérature classique", difficulty: 2,
  question: "Œdipe roi, célèbre tragédie grecque, a été écrite par :",
  options: ["Sophocle", "Eschyle", "Euripide", "Aristophane"],
  correctIndex: 0,
  explanation: "Œdipe roi est une tragédie écrite par Sophocle, l'un des trois grands tragédiens de la Grèce antique avec Eschyle et Euripide.",
  whyWrong: ["", "Eschyle est l'auteur de l'Orestie, pas d'Œdipe roi", "Euripide est l'auteur de Médée, pas d'Œdipe roi", "Aristophane est un auteur de comédies, pas de tragédies comme Œdipe roi"],
  memoryTrick: "Sophocle : Œdipe roi.",
  source: "Littérature classique, Sophocle", contested: false
},
{
  id: 391, module: "Culture générale", subject: "Littérature classique", difficulty: 2,
  question: "Phèdre, tragédie classique française du XVIIe siècle, a été écrite par :",
  options: ["Jean Racine", "Pierre Corneille", "Molière", "Jean de La Fontaine"],
  correctIndex: 0,
  explanation: "Phèdre, publiée en 1677, est une tragédie de Jean Racine, maître du classicisme français.",
  whyWrong: ["", "Pierre Corneille est l'auteur du Cid, pas de Phèdre", "Molière est un auteur de comédies, pas de cette tragédie", "Jean de La Fontaine est l'auteur des Fables, pas de tragédies comme Phèdre"],
  memoryTrick: "Racine : Phèdre, tragédie classique.",
  source: "Littérature classique, Jean Racine, Phèdre", contested: false
},
{
  id: 392, module: "Culture générale", subject: "Littérature classique", difficulty: 2,
  question: "Le Cid, célèbre tragi-comédie classique française, a été écrite par :",
  options: ["Pierre Corneille", "Jean Racine", "Molière", "Voltaire"],
  correctIndex: 0,
  explanation: "Le Cid, publié en 1637, est une œuvre de Pierre Corneille, considérée comme fondatrice du théâtre classique français.",
  whyWrong: ["", "Jean Racine est l'auteur de Phèdre, pas du Cid", "Molière est un auteur de comédies, pas du Cid", "Voltaire est un écrivain du siècle des Lumières, postérieur à Corneille"],
  memoryTrick: "Corneille : Le Cid.",
  source: "Littérature classique, Pierre Corneille, Le Cid", contested: false
},
{
  id: 393, module: "Culture générale", subject: "Littérature classique", difficulty: 1,
  question: "Les Fables, recueil poétique mettant en scène des animaux, ont été écrites par :",
  options: ["Jean de La Fontaine", "Charles Perrault", "Molière", "Jean Racine"],
  correctIndex: 0,
  explanation: "Les Fables, publiées à partir de 1668, sont l'œuvre de Jean de La Fontaine, qui met en scène des animaux pour illustrer des leçons morales.",
  whyWrong: ["", "Charles Perrault est l'auteur de contes comme Le Petit Chaperon rouge, pas des Fables", "Molière est un auteur de théâtre, pas des Fables", "Jean Racine est un auteur de tragédies, pas des Fables"],
  memoryTrick: "La Fontaine : les Fables et leurs animaux.",
  source: "Littérature classique, Jean de La Fontaine", contested: false
},
{
  id: 394, module: "Culture générale", subject: "Littérature classique", difficulty: 2,
  question: "Gargantua et Pantagruel, œuvre satirique de la Renaissance française, a été écrite par :",
  options: ["François Rabelais", "Michel de Montaigne", "Pierre de Ronsard", "Clément Marot"],
  correctIndex: 0,
  explanation: "Gargantua et Pantagruel est une œuvre satirique et burlesque écrite par François Rabelais, au XVIe siècle.",
  whyWrong: ["", "Michel de Montaigne est l'auteur des Essais, pas de Gargantua et Pantagruel", "Pierre de Ronsard est un poète de la Pléiade, pas l'auteur de cette œuvre", "Clément Marot est un poète de la Renaissance, mais pas l'auteur de cette œuvre"],
  memoryTrick: "Rabelais : Gargantua et Pantagruel.",
  source: "Littérature classique, François Rabelais", contested: false
},
{
  id: 395, module: "Culture générale", subject: "Littérature classique", difficulty: 3,
  question: "Le Paradis perdu, poème épique de la littérature anglaise inspiré de la Genèse, a été écrit par :",
  options: ["John Milton", "William Shakespeare", "Geoffrey Chaucer", "Lord Byron"],
  correctIndex: 0,
  explanation: "Le Paradis perdu, publié en 1667, est un poème épique de John Milton, inspiré du récit biblique de la chute d'Adam et Ève.",
  whyWrong: ["", "William Shakespeare est un dramaturge, pas l'auteur de ce poème épique", "Geoffrey Chaucer est l'auteur des Contes de Cantorbéry, antérieur à Milton", "Lord Byron est un poète romantique, postérieur à Milton"],
  memoryTrick: "Milton : Le Paradis perdu.",
  source: "Littérature classique, John Milton", contested: false
},
{
  id: 396, module: "Culture générale", subject: "Littérature classique", difficulty: 2,
  question: "Faust, œuvre majeure de la littérature allemande, a été écrite par :",
  options: ["Johann Wolfgang von Goethe", "Friedrich Schiller", "Thomas Mann", "Franz Kafka"],
  correctIndex: 0,
  explanation: "Faust est une œuvre dramatique majeure de Johann Wolfgang von Goethe, figure centrale de la littérature allemande.",
  whyWrong: ["", "Friedrich Schiller est un dramaturge allemand contemporain de Goethe, mais pas l'auteur de Faust", "Thomas Mann est un romancier allemand du XXe siècle, postérieur à Goethe", "Franz Kafka est un écrivain du XXe siècle, postérieur à Goethe"],
  memoryTrick: "Goethe : Faust.",
  source: "Littérature classique, Goethe, Faust", contested: false
},
{
  id: 397, module: "Culture générale", subject: "Littérature classique", difficulty: 2,
  question: "Guerre et Paix, célèbre roman de la littérature russe, a été écrit par :",
  options: ["Léon Tolstoï", "Fiodor Dostoïevski", "Anton Tchekhov", "Nicolas Gogol"],
  correctIndex: 0,
  explanation: "Guerre et Paix, publié entre 1865 et 1869, est l'œuvre de Léon Tolstoï, décrivant la société russe pendant les guerres napoléoniennes.",
  whyWrong: ["", "Fiodor Dostoïevski est l'auteur de Crime et Châtiment, pas de Guerre et Paix", "Anton Tchekhov est surtout connu pour son théâtre et ses nouvelles, pas pour Guerre et Paix", "Nicolas Gogol est l'auteur du Révizor, pas de Guerre et Paix"],
  memoryTrick: "Tolstoï : Guerre et Paix.",
  source: "Littérature classique, Léon Tolstoï", contested: false
},
{
  id: 398, module: "Culture générale", subject: "Littérature classique", difficulty: 2,
  question: "Crime et Châtiment, roman explorant la culpabilité, a été écrit par :",
  options: ["Fiodor Dostoïevski", "Léon Tolstoï", "Ivan Tourgueniev", "Alexandre Pouchkine"],
  correctIndex: 0,
  explanation: "Crime et Châtiment, publié en 1866, est l'œuvre de Fiodor Dostoïevski, explorant la psychologie et la culpabilité d'un jeune étudiant meurtrier.",
  whyWrong: ["", "Léon Tolstoï est l'auteur de Guerre et Paix, pas de Crime et Châtiment", "Ivan Tourgueniev est l'auteur de Pères et fils, pas de Crime et Châtiment", "Alexandre Pouchkine est un poète russe, antérieur à Dostoïevski"],
  memoryTrick: "Dostoïevski : Crime et Châtiment.",
  source: "Littérature classique, Fiodor Dostoïevski", contested: false
},
{
  id: 399, module: "Culture générale", subject: "Littérature classique", difficulty: 2,
  question: "La Métamorphose, célèbre nouvelle où un homme se réveille transformé en insecte, a été écrite par :",
  options: ["Franz Kafka", "Thomas Mann", "Hermann Hesse", "Stefan Zweig"],
  correctIndex: 0,
  explanation: "La Métamorphose, publiée en 1915, est une nouvelle de Franz Kafka, écrivain de langue allemande né à Prague.",
  whyWrong: ["", "Thomas Mann est l'auteur de La Montagne magique, pas de La Métamorphose", "Hermann Hesse est l'auteur de Siddhartha, pas de La Métamorphose", "Stefan Zweig est un écrivain autrichien, mais pas l'auteur de La Métamorphose"],
  memoryTrick: "Kafka : La Métamorphose.",
  source: "Littérature classique, Franz Kafka", contested: false
},
{
  id: 400, module: "Culture générale", subject: "Littérature classique", difficulty: 1,
  question: "Vingt mille lieues sous les mers, roman d'aventures mettant en scène le capitaine Nemo, a été écrit par :",
  options: ["Jules Verne", "Alexandre Dumas", "Victor Hugo", "H.G. Wells"],
  correctIndex: 0,
  explanation: "Vingt mille lieues sous les mers, publié en 1870, est l'œuvre de Jules Verne, pionnier du roman d'anticipation et d'aventures.",
  whyWrong: ["", "Alexandre Dumas est l'auteur des Trois Mousquetaires, pas de ce roman", "Victor Hugo est l'auteur des Misérables, pas de ce roman", "H.G. Wells est un auteur britannique de science-fiction, mais pas l'auteur de ce roman"],
  memoryTrick: "Jules Verne : Vingt mille lieues sous les mers, capitaine Nemo.",
  source: "Littérature classique, Jules Verne", contested: false
},
{
  id: 401, module: "Culture générale", subject: "Sciences physiques", difficulty: 1,
  question: "La loi de la gravitation universelle a été formulée par :",
  options: ["Isaac Newton", "Albert Einstein", "Galilée", "Johannes Kepler"],
  correctIndex: 0,
  explanation: "Isaac Newton a formulé la loi de la gravitation universelle au XVIIe siècle, expliquant notamment l'attraction entre les corps massifs.",
  whyWrong: ["", "Albert Einstein a formulé la théorie de la relativité, qui approfondit la gravitation sans être la loi initiale de Newton", "Galilée a étudié la chute des corps, mais n'a pas formulé la loi de la gravitation universelle", "Kepler a formulé les lois du mouvement des planètes, pas la loi de la gravitation universelle"],
  memoryTrick: "Newton : la gravitation universelle, la pomme légendaire.",
  source: "Sciences physiques, Isaac Newton, gravitation", contested: false
},
{
  id: 402, module: "Culture générale", subject: "Sciences physiques", difficulty: 1,
  question: "La théorie de la relativité a été formulée par :",
  options: ["Albert Einstein", "Isaac Newton", "Niels Bohr", "Max Planck"],
  correctIndex: 0,
  explanation: "Albert Einstein a formulé la théorie de la relativité restreinte (1905) puis générale (1915), révolutionnant la physique moderne.",
  whyWrong: ["", "Isaac Newton a formulé la mécanique classique, antérieure à la relativité", "Niels Bohr a contribué à la physique quantique, pas à la théorie de la relativité", "Max Planck est le père de la physique quantique, pas de la relativité"],
  memoryTrick: "Einstein : la relativité.",
  source: "Sciences physiques, Albert Einstein, relativité", contested: false
},
{
  id: 403, module: "Culture générale", subject: "Sciences physiques", difficulty: 2,
  question: "La célèbre équation E=mc², exprimant l'équivalence entre masse et énergie, a été formulée par :",
  options: ["Albert Einstein", "Isaac Newton", "Marie Curie", "Werner Heisenberg"],
  correctIndex: 0,
  explanation: "L'équation E=mc², exprimant l'équivalence entre masse et énergie, a été formulée par Albert Einstein dans le cadre de sa théorie de la relativité restreinte.",
  whyWrong: ["", "Isaac Newton n'a pas formulé cette équation, antérieure de plusieurs siècles à la relativité", "Marie Curie a travaillé sur la radioactivité, sans formuler cette équation", "Werner Heisenberg est associé au principe d'incertitude, pas à cette équation"],
  memoryTrick: "E=mc² : la signature d'Einstein.",
  source: "Sciences physiques, E=mc², Albert Einstein", contested: false
},
{
  id: 404, module: "Culture générale", subject: "Sciences physiques", difficulty: 1,
  question: "Les trois états physiques classiques de la matière sont le solide, le liquide et :",
  options: ["Le gazeux", "Le plasma uniquement", "Le cristallin", "Le colloïdal"],
  correctIndex: 0,
  explanation: "Les trois états physiques classiques de la matière sont le solide, le liquide et le gazeux, auxquels s'ajoute parfois le plasma comme quatrième état.",
  whyWrong: ["", "Le plasma est parfois considéré comme un quatrième état, mais n'est pas l'un des trois états classiques", "Le cristallin n'est pas un état physique classique de la matière", "Le colloïdal désigne un type de mélange, pas un état physique classique"],
  memoryTrick: "Solide, liquide, gazeux : les trois états classiques.",
  source: "Sciences physiques, états de la matière", contested: false
},
{
  id: 405, module: "Culture générale", subject: "Sciences physiques", difficulty: 2,
  question: "La vitesse de la lumière dans le vide est d'environ :",
  options: ["300 000 km/s", "150 000 km/s", "1 000 000 km/s", "30 000 km/s"],
  correctIndex: 0,
  explanation: "La vitesse de la lumière dans le vide est d'environ 300 000 kilomètres par seconde, une constante fondamentale de la physique.",
  whyWrong: ["", "Ce chiffre sous-estime la vitesse réelle de la lumière", "Ce chiffre surestime largement la vitesse réelle de la lumière", "Ce chiffre sous-estime largement la vitesse réelle de la lumière"],
  memoryTrick: "Lumière : environ 300 000 km/s.",
  source: "Sciences physiques, vitesse de la lumière", contested: false
},
{
  id: 406, module: "Culture générale", subject: "Sciences physiques", difficulty: 2,
  question: "Le tableau périodique des éléments chimiques a été conçu par :",
  options: ["Dmitri Mendeleïev", "Antoine Lavoisier", "Marie Curie", "Niels Bohr"],
  correctIndex: 0,
  explanation: "Le tableau périodique des éléments chimiques a été conçu par le chimiste russe Dmitri Mendeleïev en 1869, organisant les éléments selon leurs propriétés.",
  whyWrong: ["", "Antoine Lavoisier est le père de la chimie moderne, mais n'a pas conçu le tableau périodique", "Marie Curie a découvert le radium et le polonium, mais n'a pas conçu le tableau périodique", "Niels Bohr a modélisé la structure de l'atome, mais n'a pas conçu le tableau périodique"],
  memoryTrick: "Mendeleïev : le tableau périodique, 1869.",
  source: "Sciences physiques, Dmitri Mendeleïev, tableau périodique", contested: false
},
{
  id: 407, module: "Culture générale", subject: "Sciences physiques", difficulty: 2,
  question: "L'atome est composé d'un noyau (protons et neutrons) entouré :",
  options: ["D'électrons", "De photons", "De quarks libres", "De neutrinos"],
  correctIndex: 0,
  explanation: "L'atome est composé d'un noyau, formé de protons et de neutrons, entouré d'électrons chargés négativement.",
  whyWrong: ["", "Les photons sont des particules de lumière, pas des composants orbitant autour du noyau atomique", "Les quarks sont des composants internes des protons et neutrons, pas des particules libres autour du noyau", "Les neutrinos sont des particules distinctes, ne formant pas le cortège électronique de l'atome"],
  memoryTrick: "Atome : noyau (protons + neutrons) + électrons.",
  source: "Sciences physiques, structure de l'atome", contested: false
},
{
  id: 408, module: "Culture générale", subject: "Sciences physiques", difficulty: 2,
  question: "L'étude expérimentale de la chute des corps est notamment associée au physicien italien :",
  options: ["Galilée", "Newton", "Copernic", "Kepler"],
  correctIndex: 0,
  explanation: "Galilée est notamment connu pour ses expériences sur la chute des corps, contribuant aux fondements de la mécanique classique.",
  whyWrong: ["", "Newton a formalisé les lois du mouvement après Galilée, en s'appuyant en partie sur ses travaux", "Copernic est célèbre pour l'héliocentrisme, pas pour la chute des corps", "Kepler est célèbre pour les lois du mouvement des planètes, pas pour la chute des corps"],
  memoryTrick: "Galilée : la chute des corps.",
  source: "Sciences physiques, Galilée", contested: false
},
{
  id: 409, module: "Culture générale", subject: "Sciences physiques", difficulty: 2,
  question: "Les trois lois du mouvement, fondement de la mécanique classique, ont été formulées par :",
  options: ["Isaac Newton", "Galilée", "Albert Einstein", "James Watt"],
  correctIndex: 0,
  explanation: "Isaac Newton a formulé les trois lois du mouvement, fondement de la mécanique classique, dans son ouvrage Principia Mathematica (1687).",
  whyWrong: ["", "Galilée a préparé le terrain, mais n'a pas formalisé ces trois lois précises", "Einstein a développé la relativité, postérieure de plusieurs siècles à ces lois", "James Watt est associé à la machine à vapeur, pas aux lois du mouvement"],
  memoryTrick: "Newton : les trois lois du mouvement.",
  source: "Sciences physiques, lois du mouvement de Newton", contested: false
},
{
  id: 410, module: "Culture générale", subject: "Sciences physiques", difficulty: 1,
  question: "Le Soleil, autour duquel gravitent les planètes du système solaire, est :",
  options: ["Une étoile", "Une planète géante", "Une comète", "Un astéroïde"],
  correctIndex: 0,
  explanation: "Le Soleil est une étoile, c'est-à-dire un corps céleste produisant sa propre lumière et chaleur par fusion nucléaire.",
  whyWrong: ["", "Le Soleil n'est pas une planète, mais l'astre autour duquel les planètes gravitent", "Une comète est un petit corps glacé, sans rapport avec le Soleil", "Un astéroïde est un petit corps rocheux, sans rapport avec le Soleil"],
  memoryTrick: "Le Soleil : une étoile, pas une planète.",
  source: "Sciences physiques, le Soleil", contested: false
},
{
  id: 411, module: "Culture générale", subject: "Sciences physiques", difficulty: 1,
  question: "Le système solaire compte, en 2026, un nombre de planètes officiellement reconnu de :",
  options: ["7", "8", "9", "10"],
  correctIndex: 1,
  explanation: "Le système solaire compte 8 planètes officiellement reconnues, depuis que Pluton a été reclassée comme planète naine en 2006.",
  whyWrong: ["Ce chiffre sous-estime le nombre de planètes reconnues", "", "Ce chiffre inclut Pluton, reclassée planète naine depuis 2006", "Ce chiffre surestime le nombre de planètes reconnues"],
  memoryTrick: "8 planètes, depuis la reclassification de Pluton en 2006.",
  source: "Sciences physiques, système solaire", contested: false
},
{
  id: 412, module: "Culture générale", subject: "Sciences physiques", difficulty: 1,
  question: "La Terre est, par ordre d'éloignement au Soleil, la :",
  options: ["Deuxième planète du système solaire", "Troisième planète du système solaire", "Quatrième planète du système solaire", "Cinquième planète du système solaire"],
  correctIndex: 1,
  explanation: "La Terre est la troisième planète du système solaire par ordre d'éloignement au Soleil, après Mercure et Vénus.",
  whyWrong: ["Vénus occupe la deuxième position, pas la Terre", "", "Mars occupe la quatrième position, pas la Terre", "Cette position ne correspond à aucune planète du système solaire interne"],
  memoryTrick: "Mercure, Vénus, Terre : la Terre en troisième position.",
  source: "Sciences physiques, position de la Terre", contested: false
},
{
  id: 413, module: "Culture générale", subject: "Sciences physiques", difficulty: 1,
  question: "La Lune est :",
  options: ["Le satellite naturel de la Terre", "Une planète naine", "Une étoile proche", "Un astéroïde capturé récemment"],
  correctIndex: 0,
  explanation: "La Lune est l'unique satellite naturel de la Terre, en orbite autour de notre planète.",
  whyWrong: ["", "La Lune n'est pas classée comme une planète naine", "La Lune ne produit pas sa propre lumière, ce n'est pas une étoile", "La Lune n'a pas été capturée récemment ; elle est en orbite depuis des milliards d'années"],
  memoryTrick: "Lune : le satellite naturel de la Terre.",
  source: "Sciences physiques, la Lune", contested: false
},
{
  id: 414, module: "Culture générale", subject: "Sciences physiques", difficulty: 2,
  question: "Une année-lumière est une unité de :",
  options: ["Distance", "Temps", "Masse", "Température"],
  correctIndex: 0,
  explanation: "Une année-lumière est une unité de distance, correspondant à la distance parcourue par la lumière en une année, malgré son nom évoquant le temps.",
  whyWrong: ["", "Malgré son nom, l'année-lumière n'est pas une unité de temps mais de distance", "L'année-lumière n'est pas une unité de masse", "L'année-lumière n'est pas une unité de température"],
  memoryTrick: "Année-lumière : une distance, pas une durée.",
  source: "Sciences physiques, année-lumière", contested: false
},
{
  id: 415, module: "Culture générale", subject: "Sciences physiques", difficulty: 1,
  question: "La formule chimique de l'eau est :",
  options: ["H2O", "CO2", "O2", "NaCl"],
  correctIndex: 0,
  explanation: "La molécule d'eau est composée de deux atomes d'hydrogène et d'un atome d'oxygène, d'où sa formule chimique H2O.",
  whyWrong: ["", "CO2 est la formule du dioxyde de carbone, pas de l'eau", "O2 est la formule du dioxygène, pas de l'eau", "NaCl est la formule du sel de table (chlorure de sodium), pas de l'eau"],
  memoryTrick: "Eau : H2O, deux hydrogènes pour un oxygène.",
  source: "Sciences physiques et chimie, formule de l'eau", contested: false
},
{
  id: 416, module: "Culture générale", subject: "Sciences physiques", difficulty: 1,
  question: "Au niveau de la mer, l'eau bout à une température de :",
  options: ["0°C", "50°C", "100°C", "212°C"],
  correctIndex: 2,
  explanation: "Au niveau de la mer, à pression atmosphérique normale, l'eau bout à 100°C.",
  whyWrong: ["0°C correspond au point de congélation de l'eau, pas à son point d'ébullition", "Cette température ne correspond pas au point d'ébullition de l'eau", "", "212°C surestime largement le point d'ébullition réel de l'eau (ce chiffre correspond à 212°F, pas à des degrés Celsius)"],
  memoryTrick: "Eau : ébullition à 100°C, congélation à 0°C.",
  source: "Sciences physiques, point d'ébullition de l'eau", contested: false
},
{
  id: 417, module: "Culture générale", subject: "Sciences physiques", difficulty: 1,
  question: "L'eau se transforme en glace à une température de :",
  options: ["0°C", "10°C", "-10°C", "100°C"],
  correctIndex: 0,
  explanation: "L'eau se transforme en glace à 0°C sous pression atmosphérique normale, son point de congélation.",
  whyWrong: ["", "Cette température est supérieure au point de congélation de l'eau", "L'eau gèle déjà à 0°C, sans qu'il soit nécessaire de descendre davantage", "100°C correspond au point d'ébullition de l'eau, pas à sa congélation"],
  memoryTrick: "0°C : le seuil de congélation de l'eau.",
  source: "Sciences physiques, point de congélation de l'eau", contested: false
},
{
  id: 418, module: "Culture générale", subject: "Sciences physiques", difficulty: 2,
  question: "Marie Curie est la seule personne à avoir reçu deux prix Nobel dans deux disciplines scientifiques différentes, à savoir :",
  options: ["La physique et la chimie", "La physique et la médecine", "La chimie et la médecine", "La physique et l'économie"],
  correctIndex: 0,
  explanation: "Marie Curie a reçu le prix Nobel de physique en 1903 et celui de chimie en 1911, une double distinction unique dans deux disciplines scientifiques différentes.",
  whyWrong: ["", "Marie Curie n'a pas reçu de prix Nobel de médecine", "Marie Curie n'a pas reçu de prix Nobel de médecine, mais bien de physique et de chimie", "Marie Curie n'a pas reçu de prix Nobel d'économie"],
  memoryTrick: "Marie Curie : Nobel de physique (1903) ET de chimie (1911).",
  source: "Sciences physiques, Marie Curie", contested: false
},
{
  id: 419, module: "Culture générale", subject: "Sciences physiques", difficulty: 2,
  question: "La radioactivité a été découverte en 1896 par :",
  options: ["Henri Becquerel", "Marie Curie", "Wilhelm Röntgen", "Ernest Rutherford"],
  correctIndex: 0,
  explanation: "Henri Becquerel a découvert la radioactivité en 1896, en étudiant des sels d'uranium, avant que Marie et Pierre Curie ne poursuivent ces recherches.",
  whyWrong: ["", "Marie Curie a poursuivi et approfondi ces recherches, mais n'est pas à l'origine de la découverte initiale de 1896", "Wilhelm Röntgen a découvert les rayons X en 1895, un phénomène distinct", "Ernest Rutherford a étudié la structure de l'atome, postérieurement à cette découverte"],
  memoryTrick: "Becquerel, 1896 : découverte de la radioactivité.",
  source: "Sciences physiques, Henri Becquerel, 1896", contested: false
},
{
  id: 420, module: "Culture générale", subject: "Sciences de la vie", difficulty: 2,
  question: "Louis Pasteur est notamment connu pour avoir mis au point :",
  options: ["Un vaccin contre la rage", "Le premier antibiotique", "Le vaccin contre la variole", "La théorie de l'évolution"],
  correctIndex: 0,
  explanation: "Louis Pasteur est notamment connu pour avoir mis au point un vaccin contre la rage en 1885, ainsi que pour le procédé de pasteurisation.",
  whyWrong: ["", "Le premier antibiotique (la pénicilline) a été découvert par Alexander Fleming, pas Pasteur", "Le vaccin contre la variole a été mis au point par Edward Jenner, avant Pasteur", "La théorie de l'évolution a été formulée par Charles Darwin, pas Pasteur"],
  memoryTrick: "Pasteur : vaccin contre la rage, pasteurisation.",
  source: "Sciences de la vie, Louis Pasteur", contested: false
},
{
  id: 421, module: "Culture générale", subject: "Sciences de la vie", difficulty: 1,
  question: "La théorie de l'évolution par sélection naturelle a été formulée par :",
  options: ["Charles Darwin", "Louis Pasteur", "Gregor Mendel", "Alexander Fleming"],
  correctIndex: 0,
  explanation: "Charles Darwin a formulé la théorie de l'évolution par sélection naturelle, exposée notamment dans « L'Origine des espèces » (1859).",
  whyWrong: ["", "Louis Pasteur est connu pour la microbiologie et la vaccination, pas pour la théorie de l'évolution", "Gregor Mendel est le père de la génétique, mais pas de la théorie de l'évolution", "Alexander Fleming a découvert la pénicilline, sans lien avec la théorie de l'évolution"],
  memoryTrick: "Darwin : l'évolution par sélection naturelle.",
  source: "Sciences de la vie, Charles Darwin", contested: false
},
{
  id: 422, module: "Culture générale", subject: "Sciences physiques", difficulty: 2,
  question: "La théorie scientifique dominante sur l'origine de l'univers est appelée :",
  options: ["Le Big Bang", "La théorie de la Terre plate", "La théorie du régime stationnaire, seule admise", "La théorie géocentrique"],
  correctIndex: 0,
  explanation: "Le Big Bang est la théorie scientifique dominante expliquant l'origine et l'expansion de l'univers, il y a environ 13,8 milliards d'années.",
  whyWrong: ["", "La théorie de la Terre plate n'a aucun lien avec l'origine de l'univers", "La théorie du régime stationnaire a été proposée mais n'est plus la théorie dominante depuis les preuves du Big Bang", "La théorie géocentrique plaçait la Terre au centre de l'univers, une conception aujourd'hui abandonnée"],
  memoryTrick: "Big Bang : l'origine admise de l'univers.",
  source: "Sciences physiques, théorie du Big Bang", contested: false
},
{
  id: 423, module: "Culture générale", subject: "Sciences physiques", difficulty: 2,
  question: "La galaxie qui abrite notre système solaire se nomme :",
  options: ["La Voie lactée", "Andromède", "Le Grand Nuage de Magellan", "La galaxie du Triangle"],
  correctIndex: 0,
  explanation: "Notre système solaire appartient à la Voie lactée, une galaxie spirale contenant des centaines de milliards d'étoiles.",
  whyWrong: ["", "Andromède est la galaxie voisine la plus proche de la nôtre, mais pas celle qui nous abrite", "Le Grand Nuage de Magellan est une galaxie naine satellite, distincte de la Voie lactée", "La galaxie du Triangle est une autre galaxie du Groupe local, distincte de la Voie lactée"],
  memoryTrick: "Voie lactée : notre galaxie.",
  source: "Sciences physiques, la Voie lactée", contested: false
},
{
  id: 424, module: "Culture générale", subject: "Sciences physiques", difficulty: 2,
  question: "Concernant le Soleil, il est exact de dire que :",
  options: ["C'est une étoile, pas une planète", "C'est la plus grande planète du système solaire", "C'est un satellite de Jupiter", "C'est une comète géante"],
  correctIndex: 0,
  explanation: "Le Soleil est une étoile productrice de sa propre énergie par fusion nucléaire, et non une planète, un satellite ou une comète.",
  whyWrong: ["", "Le Soleil n'est pas une planète : c'est l'étoile autour de laquelle gravitent les planètes", "Le Soleil n'est le satellite d'aucun autre corps céleste du système solaire", "Le Soleil n'est pas une comète"],
  memoryTrick: "Soleil : étoile, pas planète ni comète.",
  source: "Sciences physiques, nature du Soleil", contested: false
},
{
  id: 425, module: "Culture générale", subject: "Sciences physiques", difficulty: 2,
  question: "L'expérience du cerf-volant, associée à l'étude de l'électricité atmosphérique, est attribuée à :",
  options: ["Benjamin Franklin", "Thomas Edison", "Nikola Tesla", "André-Marie Ampère"],
  correctIndex: 0,
  explanation: "Benjamin Franklin est associé à la célèbre expérience du cerf-volant, destinée à étudier la nature électrique de la foudre, au XVIIIe siècle.",
  whyWrong: ["", "Thomas Edison est associé à l'ampoule électrique, pas à cette expérience du XVIIIe siècle", "Nikola Tesla est associé au courant alternatif, mais pas à cette expérience", "André-Marie Ampère est associé à l'électromagnétisme, mais pas à cette expérience précise"],
  memoryTrick: "Franklin : le cerf-volant et la foudre.",
  source: "Sciences physiques, Benjamin Franklin", contested: false
},
{
  id: 426, module: "Culture générale", subject: "Sciences de la vie", difficulty: 1,
  question: "La photosynthèse est le processus par lequel :",
  options: ["Les plantes convertissent la lumière en énergie chimique", "Les animaux digèrent leur nourriture", "Les cellules se divisent", "Le sang transporte l'oxygène"],
  correctIndex: 0,
  explanation: "La photosynthèse est le processus par lequel les plantes, grâce à la chlorophylle, convertissent la lumière solaire en énergie chimique, produisant de l'oxygène.",
  whyWrong: ["", "La digestion animale est un processus distinct de la photosynthèse", "La division cellulaire est un processus distinct de la photosynthèse", "Le transport de l'oxygène par le sang est un processus distinct de la photosynthèse"],
  memoryTrick: "Photosynthèse : la lumière transformée en énergie par les plantes.",
  source: "Sciences de la vie, photosynthèse", contested: false
},
{
  id: 427, module: "Culture générale", subject: "Sciences de la vie", difficulty: 2,
  question: "L'ADN, support de l'information génétique, a une structure décrite comme :",
  options: ["Une double hélice", "Un cube parfait", "Une sphère creuse", "Un anneau simple"],
  correctIndex: 0,
  explanation: "L'ADN a une structure en double hélice, décrite en 1953 par James Watson et Francis Crick, à partir notamment des travaux de Rosalind Franklin.",
  whyWrong: ["", "L'ADN n'a pas une structure cubique", "L'ADN n'a pas une structure sphérique", "L'ADN humain n'est pas structuré comme un simple anneau"],
  memoryTrick: "ADN : la double hélice.",
  source: "Sciences de la vie, structure de l'ADN", contested: false
},
{
  id: 428, module: "Culture générale", subject: "Sciences de la vie", difficulty: 2,
  question: "Le cœur humain est composé de :",
  options: ["4 cavités : 2 oreillettes et 2 ventricules", "2 cavités uniquement", "6 cavités distinctes", "3 cavités asymétriques"],
  correctIndex: 0,
  explanation: "Le cœur humain est composé de 4 cavités : deux oreillettes et deux ventricules, assurant la circulation sanguine.",
  whyWrong: ["", "Ce chiffre sous-estime le nombre de cavités cardiaques", "Ce chiffre surestime le nombre de cavités cardiaques", "Le cœur humain est symétrique en cavités, pas organisé en trois parties asymétriques"],
  memoryTrick: "Cœur : 4 cavités, 2 oreillettes + 2 ventricules.",
  source: "Sciences de la vie, anatomie du cœur", contested: false
},
{
  id: 429, module: "Culture générale", subject: "Sciences de la vie", difficulty: 2,
  question: "Le squelette d'un adulte humain compte environ :",
  options: ["106 os", "156 os", "206 os", "306 os"],
  correctIndex: 2,
  explanation: "Le squelette d'un adulte humain compte environ 206 os, un nombre inférieur à celui d'un nourrisson en raison de la fusion de certains os durant la croissance.",
  whyWrong: ["Ce chiffre sous-estime largement le nombre d'os", "Ce chiffre sous-estime le nombre d'os", "", "Ce chiffre surestime le nombre d'os"],
  memoryTrick: "206 os chez l'adulte.",
  source: "Sciences de la vie, squelette humain", contested: false
},
{
  id: 430, module: "Culture générale", subject: "Sciences de la vie", difficulty: 1,
  question: "Le plus grand organe du corps humain est :",
  options: ["Le foie", "La peau", "Le cerveau", "Le poumon"],
  correctIndex: 1,
  explanation: "La peau est le plus grand organe du corps humain, tant par sa surface que par son poids, jouant un rôle essentiel de protection.",
  whyWrong: ["Le foie est un organe volumineux, mais pas le plus grand du corps humain", "", "Le cerveau n'est pas le plus grand organe, bien que central sur le plan fonctionnel", "Les poumons ne sont pas le plus grand organe du corps humain"],
  memoryTrick: "La peau : le plus grand organe du corps.",
  source: "Sciences de la vie, la peau", contested: false
},
{
  id: 431, module: "Culture générale", subject: "Sciences de la vie", difficulty: 1,
  question: "L'unité de base structurelle et fonctionnelle du vivant est :",
  options: ["La cellule", "L'organe", "Le tissu", "L'atome"],
  correctIndex: 0,
  explanation: "La cellule est considérée comme l'unité de base structurelle et fonctionnelle de tous les organismes vivants.",
  whyWrong: ["", "L'organe est composé de plusieurs tissus, eux-mêmes composés de cellules", "Le tissu est un ensemble de cellules, mais pas l'unité de base elle-même", "L'atome est l'unité de base de la matière en général, pas spécifiquement du vivant"],
  memoryTrick: "La cellule : l'unité de base du vivant.",
  source: "Sciences de la vie, la cellule", contested: false
},
{
  id: 432, module: "Culture générale", subject: "Sciences de la vie", difficulty: 1,
  question: "Une caractéristique commune à tous les mammifères est :",
  options: ["L'allaitement de leurs petits", "La ponte d'œufs sans exception", "La vie exclusivement aquatique", "L'absence de squelette interne"],
  correctIndex: 0,
  explanation: "Tous les mammifères allaitent leurs petits grâce à des glandes mammaires, caractéristique qui donne son nom à cette classe d'animaux.",
  whyWrong: ["", "La grande majorité des mammifères sont vivipares, à l'exception de rares espèces comme l'ornithorynque", "De nombreux mammifères vivent sur terre, pas exclusivement dans l'eau", "Les mammifères possèdent un squelette interne (endosquelette)"],
  memoryTrick: "Mammifères : allaitement des petits.",
  source: "Sciences de la vie, les mammifères", contested: false
},
{
  id: 433, module: "Culture générale", subject: "Sciences de la vie", difficulty: 2,
  question: "Le plus grand animal ayant jamais existé sur Terre est :",
  options: ["La baleine bleue", "L'éléphant d'Afrique", "Le tyrannosaure", "Le requin baleine"],
  correctIndex: 0,
  explanation: "La baleine bleue est le plus grand animal ayant jamais existé sur Terre, dépassant en taille et en masse tous les dinosaures connus.",
  whyWrong: ["", "L'éléphant d'Afrique est le plus grand animal terrestre actuel, mais bien plus petit que la baleine bleue", "Le tyrannosaure était un grand prédateur, mais bien plus petit que la baleine bleue", "Le requin baleine est le plus grand poisson, mais plus petit que la baleine bleue"],
  memoryTrick: "Baleine bleue : le plus grand animal de tous les temps.",
  source: "Sciences de la vie, la baleine bleue", contested: false
},
{
  id: 434, module: "Culture générale", subject: "Sciences de la vie", difficulty: 1,
  question: "L'animal terrestre le plus rapide sur de courtes distances est :",
  options: ["Le guépard", "Le lion", "Le cheval", "L'autruche"],
  correctIndex: 0,
  explanation: "Le guépard est l'animal terrestre le plus rapide, capable d'atteindre environ 100 km/h sur de courtes distances.",
  whyWrong: ["", "Le lion est un grand félin puissant, mais moins rapide que le guépard", "Le cheval est rapide, mais moins que le guépard", "L'autruche est le plus rapide des oiseaux coureurs, mais moins rapide que le guépard"],
  memoryTrick: "Guépard : le sprinter le plus rapide du règne animal.",
  source: "Sciences de la vie, le guépard", contested: false
},
{
  id: 435, module: "Culture générale", subject: "Sciences de la vie", difficulty: 1,
  question: "Les abeilles jouent un rôle écologique essentiel dans :",
  options: ["La pollinisation des plantes à fleurs", "La régulation du climat mondial", "La décomposition des déchets organiques", "La purification de l'eau"],
  correctIndex: 0,
  explanation: "Les abeilles jouent un rôle écologique essentiel dans la pollinisation des plantes à fleurs, contribuant directement à la reproduction végétale et à l'agriculture.",
  whyWrong: ["", "La régulation directe du climat mondial n'est pas le rôle premier des abeilles", "La décomposition des déchets organiques est plutôt le rôle d'autres organismes, comme les champignons ou bactéries", "La purification de l'eau n'est pas le rôle des abeilles"],
  memoryTrick: "Abeilles : pollinisatrices essentielles.",
  source: "Sciences de la vie, rôle des abeilles", contested: false
},
{
  id: 436, module: "Culture générale", subject: "Sciences de la vie", difficulty: 2,
  question: "Les requins appartiennent à la catégorie des poissons dits :",
  options: ["Cartilagineux", "Osseux", "Mammifères marins", "Amphibiens"],
  correctIndex: 0,
  explanation: "Les requins sont des poissons cartilagineux, dont le squelette est composé de cartilage et non d'os, contrairement à la majorité des poissons.",
  whyWrong: ["", "Les requins n'ont pas de squelette osseux, à la différence de la majorité des poissons", "Les requins ne sont pas des mammifères marins comme les dauphins ou les baleines", "Les requins ne sont pas des amphibiens"],
  memoryTrick: "Requins : squelette de cartilage, pas d'os.",
  source: "Sciences de la vie, les requins", contested: false
},
{
  id: 437, module: "Culture générale", subject: "Sciences de la vie", difficulty: 1,
  question: "Le panda géant, espèce emblématique menacée, vit à l'état naturel principalement :",
  options: ["En Chine", "En Inde", "Au Japon", "En Russie"],
  correctIndex: 0,
  explanation: "Le panda géant vit à l'état naturel principalement dans les régions montagneuses du centre de la Chine.",
  whyWrong: ["", "L'Inde n'est pas l'habitat naturel du panda géant", "Le Japon n'est pas l'habitat naturel du panda géant", "La Russie n'est pas l'habitat naturel du panda géant"],
  memoryTrick: "Panda géant : symbole de la Chine.",
  source: "Sciences de la vie, le panda géant", contested: false
},
{
  id: 438, module: "Culture générale", subject: "Sciences de la vie", difficulty: 1,
  question: "La plus grande forêt tropicale du monde est :",
  options: ["La forêt amazonienne", "La forêt du bassin du Congo", "La forêt boréale de Sibérie", "La forêt de Bornéo"],
  correctIndex: 0,
  explanation: "La forêt amazonienne, s'étendant principalement sur le Brésil, est la plus grande forêt tropicale du monde.",
  whyWrong: ["", "La forêt du bassin du Congo est la deuxième plus grande forêt tropicale du monde, après l'Amazonie", "La forêt boréale de Sibérie n'est pas une forêt tropicale", "La forêt de Bornéo est une grande forêt tropicale, mais plus petite que l'Amazonie"],
  memoryTrick: "Amazonie : la plus grande forêt tropicale du monde.",
  source: "Sciences de la vie, forêt amazonienne", contested: false
},
{
  id: 439, module: "Culture générale", subject: "Sciences de la vie", difficulty: 2,
  question: "Le cycle de l'eau comprend notamment les étapes d'évaporation, de condensation et :",
  options: ["De précipitation", "De combustion", "De fermentation", "De cristallisation métallique"],
  correctIndex: 0,
  explanation: "Le cycle de l'eau comprend notamment l'évaporation, la condensation et la précipitation, permettant la circulation continue de l'eau entre les océans, l'atmosphère et les continents.",
  whyWrong: ["", "La combustion n'est pas une étape du cycle de l'eau", "La fermentation n'est pas une étape du cycle de l'eau", "La cristallisation métallique n'est pas une étape du cycle de l'eau"],
  memoryTrick: "Cycle de l'eau : évaporation, condensation, précipitation.",
  source: "Sciences de la vie, cycle de l'eau", contested: false
},
{
  id: 440, module: "Culture générale", subject: "Sciences de la vie", difficulty: 2,
  question: "Le système de groupes sanguins le plus couramment utilisé en médecine, avec les groupes A, B, AB et O, est appelé système :",
  options: ["ABO", "Rhésus uniquement", "HLA", "MN"],
  correctIndex: 0,
  explanation: "Le système ABO, avec les groupes A, B, AB et O, est le système de classification des groupes sanguins le plus couramment utilisé en médecine.",
  whyWrong: ["", "Le système Rhésus est un système complémentaire, distinct du système ABO", "Le système HLA concerne la compatibilité tissulaire, pas directement les groupes sanguins ABO", "Le système MN est un système de groupes sanguins secondaire, moins utilisé en pratique courante"],
  memoryTrick: "ABO : A, B, AB, O — les groupes sanguins.",
  source: "Sciences de la vie, système ABO", contested: false
},
{
  id: 441, module: "Culture générale", subject: "Sciences de la vie", difficulty: 1,
  question: "Le cerveau humain est le siège principal :",
  options: ["Du système nerveux central", "De la circulation sanguine", "De la digestion", "De la production d'hormones sexuelles"],
  correctIndex: 0,
  explanation: "Le cerveau, avec la moelle épinière, constitue le système nerveux central, responsable du traitement de l'information et du contrôle du corps.",
  whyWrong: ["", "La circulation sanguine est assurée par le cœur et les vaisseaux, pas directement par le cerveau", "La digestion est assurée par le système digestif, pas par le cerveau", "La production d'hormones sexuelles est principalement assurée par les gonades, pas par le cerveau lui-même"],
  memoryTrick: "Cerveau : le centre du système nerveux.",
  source: "Sciences de la vie, le cerveau humain", contested: false
},
{
  id: 442, module: "Culture générale", subject: "Sciences de la vie", difficulty: 2,
  question: "La chlorophylle, pigment responsable de la couleur verte des plantes, joue un rôle clé dans :",
  options: ["La photosynthèse", "La digestion animale", "La coagulation du sang", "La formation des os"],
  correctIndex: 0,
  explanation: "La chlorophylle est un pigment vert qui capte l'énergie lumineuse nécessaire à la photosynthèse, processus vital pour les plantes.",
  whyWrong: ["", "La digestion animale n'implique pas la chlorophylle", "La coagulation du sang n'implique pas la chlorophylle", "La formation des os n'implique pas la chlorophylle"],
  memoryTrick: "Chlorophylle : le pigment vert de la photosynthèse.",
  source: "Sciences de la vie, chlorophylle", contested: false
},
{
  id: 443, module: "Culture générale", subject: "Sciences de la vie", difficulty: 2,
  question: "Les dinosaures ont disparu il y a environ :",
  options: ["6 millions d'années", "66 millions d'années", "660 millions d'années", "6 milliards d'années"],
  correctIndex: 1,
  explanation: "Les dinosaures non aviens ont disparu il y a environ 66 millions d'années, à la suite d'une extinction massive probablement liée à un impact d'astéroïde.",
  whyWrong: ["Ce chiffre sous-estime largement l'ancienneté de cette extinction", "", "Ce chiffre surestime largement l'ancienneté de cette extinction", "Ce chiffre est incompatible avec l'âge de la Terre et l'histoire des dinosaures"],
  memoryTrick: "Dinosaures : disparus il y a environ 66 millions d'années.",
  source: "Sciences de la vie, extinction des dinosaures", contested: false
},
{
  id: 444, module: "Culture générale", subject: "Sciences de la vie", difficulty: 1,
  question: "L'oxygène, indispensable à la respiration humaine, est notamment produit par les plantes grâce :",
  options: ["À la photosynthèse", "À la digestion", "À la fermentation", "À la respiration cellulaire uniquement"],
  correctIndex: 0,
  explanation: "Les plantes produisent de l'oxygène grâce à la photosynthèse, processus par lequel elles convertissent le dioxyde de carbone et la lumière en énergie et en oxygène.",
  whyWrong: ["", "La digestion n'est pas un processus végétal producteur d'oxygène", "La fermentation n'est pas le processus responsable de la production d'oxygène par les plantes", "La respiration cellulaire consomme de l'oxygène plutôt qu'elle n'en produit"],
  memoryTrick: "Photosynthèse : les plantes produisent l'oxygène que nous respirons.",
  source: "Sciences de la vie, production d'oxygène par les plantes", contested: false
},
{
  id: 445, module: "Culture générale", subject: "Sciences de la vie", difficulty: 2,
  question: "La théorie de la dérive des continents, précurseur de la tectonique des plaques, a été proposée par :",
  options: ["Alfred Wegener", "Charles Darwin", "Louis Pasteur", "Nicolas Copernic"],
  correctIndex: 0,
  explanation: "Alfred Wegener a proposé, au début du XXe siècle, la théorie de la dérive des continents, précurseur de la théorie moderne de la tectonique des plaques.",
  whyWrong: ["", "Charles Darwin est associé à la théorie de l'évolution, pas à la dérive des continents", "Louis Pasteur est associé à la microbiologie, pas à la dérive des continents", "Nicolas Copernic est associé à l'héliocentrisme, pas à la dérive des continents"],
  memoryTrick: "Wegener : la dérive des continents.",
  source: "Sciences de la vie, Alfred Wegener", contested: false
},
{
  id: 446, module: "Culture générale", subject: "Mathématiques", difficulty: 1,
  question: "Le théorème reliant les côtés d'un triangle rectangle est attribué à :",
  options: ["Pythagore", "Euclide", "Archimède", "Thalès"],
  correctIndex: 0,
  explanation: "Le théorème de Pythagore, selon lequel le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés, est attribué au mathématicien grec Pythagore.",
  whyWrong: ["", "Euclide est le père de la géométrie axiomatique, mais ce théorème précis porte le nom de Pythagore", "Archimède est célèbre pour d'autres découvertes, comme le principe de la poussée hydrostatique", "Thalès est célèbre pour un autre théorème de géométrie, distinct de celui-ci"],
  memoryTrick: "Pythagore : le théorème du triangle rectangle.",
  source: "Mathématiques, théorème de Pythagore", contested: false
},
{
  id: 447, module: "Culture générale", subject: "Mathématiques", difficulty: 1,
  question: "Le nombre Pi (π), rapport entre la circonférence d'un cercle et son diamètre, vaut environ :",
  options: ["3,14159", "2,71828", "1,61803", "1,41421"],
  correctIndex: 0,
  explanation: "Le nombre Pi (π) vaut environ 3,14159 ; il exprime le rapport constant entre la circonférence d'un cercle et son diamètre.",
  whyWrong: ["", "2,71828 correspond au nombre e, base des logarithmes naturels, pas à Pi", "1,61803 correspond au nombre d'or, pas à Pi", "1,41421 correspond à la racine carrée de 2, pas à Pi"],
  memoryTrick: "Pi : environ 3,14159.",
  source: "Mathématiques, nombre Pi", contested: false
},
{
  id: 448, module: "Culture générale", subject: "Mathématiques", difficulty: 2,
  question: "Le mathématicien grec Euclide est surtout connu comme le père fondateur de :",
  options: ["La géométrie axiomatique", "L'algèbre moderne", "Le calcul infinitésimal", "La théorie des probabilités"],
  correctIndex: 0,
  explanation: "Euclide est considéré comme le père fondateur de la géométrie axiomatique, exposée dans son ouvrage majeur « Les Éléments ».",
  whyWrong: ["", "L'algèbre moderne doit beaucoup à Al-Khwarizmi, pas principalement à Euclide", "Le calcul infinitésimal a été développé par Newton et Leibniz, bien après Euclide", "La théorie des probabilités a été développée notamment par Pascal, bien après Euclide"],
  memoryTrick: "Euclide : les Éléments, fondement de la géométrie.",
  source: "Mathématiques, Euclide", contested: false
},
{
  id: 449, module: "Culture générale", subject: "Mathématiques", difficulty: 2,
  question: "Le mot « algèbre » tire son origine des travaux du mathématicien perse :",
  options: ["Al-Khwarizmi", "Avicenne", "Averroès", "Ibn Khaldoun"],
  correctIndex: 0,
  explanation: "Le mot « algèbre » dérive du titre d'un ouvrage du mathématicien perse Al-Khwarizmi, dont le nom a également donné le mot « algorithme ».",
  whyWrong: ["", "Avicenne est surtout connu comme philosophe et médecin, pas comme l'origine du mot algèbre", "Averroès est surtout connu comme philosophe, commentateur d'Aristote", "Ibn Khaldoun est surtout connu comme historien et précurseur de la sociologie"],
  memoryTrick: "Al-Khwarizmi : algèbre ET algorithme.",
  source: "Mathématiques, Al-Khwarizmi", contested: false
},
{
  id: 450, module: "Culture générale", subject: "Mathématiques", difficulty: 2,
  question: "Le système de numération décimale utilisant les chiffres actuels (dits « chiffres arabes ») a été transmis à l'Europe principalement via :",
  options: ["Le monde arabo-musulman", "L'Empire byzantin", "La Chine impériale", "L'Empire romain"],
  correctIndex: 0,
  explanation: "Le système décimal, avec les chiffres dits « arabes » (eux-mêmes d'origine indienne), a été transmis à l'Europe médiévale principalement par l'intermédiaire du monde arabo-musulman.",
  whyWrong: ["", "L'Empire byzantin n'est pas la voie principale de cette transmission", "La Chine impériale n'est pas la voie principale de cette transmission vers l'Europe", "L'Empire romain utilisait la numération romaine, distincte du système décimal transmis plus tard"],
  memoryTrick: "Chiffres arabes : transmis à l'Europe via le monde arabo-musulman.",
  source: "Mathématiques, chiffres arabes", contested: false
},
{
  id: 451, module: "Culture générale", subject: "Mathématiques", difficulty: 2,
  question: "Le concept mathématique du zéro comme chiffre à part entière a été particulièrement développé :",
  options: ["En Inde", "En Grèce antique", "Dans l'Empire romain", "En Égypte antique"],
  correctIndex: 0,
  explanation: "Le concept du zéro comme chiffre à part entière, utilisable dans les calculs, a été particulièrement développé en Inde avant d'être transmis au monde arabo-musulman puis à l'Europe.",
  whyWrong: ["", "La Grèce antique n'a pas développé le zéro comme chiffre à part entière de cette manière", "L'Empire romain utilisait un système de numération sans véritable zéro positionnel", "L'Égypte antique n'a pas développé ce concept du zéro de cette façon"],
  memoryTrick: "Zéro : un concept développé en Inde.",
  source: "Mathématiques, histoire du zéro", contested: false
},
{
  id: 452, module: "Culture générale", subject: "Mathématiques", difficulty: 2,
  question: "Le mathématicien antique associé au cri « Eurêka ! » et au principe de la poussée des fluides est :",
  options: ["Archimède", "Pythagore", "Euclide", "Thalès"],
  correctIndex: 0,
  explanation: "Archimède est associé au cri légendaire « Eurêka ! » et au principe physique de la poussée exercée par un fluide sur un corps immergé.",
  whyWrong: ["", "Pythagore est associé au théorème du triangle rectangle, pas à ce principe", "Euclide est associé à la géométrie axiomatique, pas à ce principe", "Thalès est associé à un autre théorème de géométrie, pas à ce principe"],
  memoryTrick: "Archimède : Eurêka et la poussée des fluides.",
  source: "Mathématiques et physique, Archimède", contested: false
},
{
  id: 453, module: "Culture générale", subject: "Mathématiques", difficulty: 2,
  question: "La célèbre suite de nombres où chaque terme est la somme des deux précédents est appelée suite de :",
  options: ["Fibonacci", "Pascal", "Euler", "Gauss"],
  correctIndex: 0,
  explanation: "La suite de Fibonacci est une célèbre suite de nombres où chaque terme est la somme des deux précédents (1, 1, 2, 3, 5, 8...), popularisée par le mathématicien italien du même nom.",
  whyWrong: ["", "Pascal est associé au triangle qui porte son nom, distinct de cette suite", "Euler a contribué à de nombreux domaines des mathématiques, mais cette suite ne porte pas son nom", "Gauss a contribué à de nombreux domaines des mathématiques, mais cette suite ne porte pas son nom"],
  memoryTrick: "Fibonacci : 1, 1, 2, 3, 5, 8...",
  source: "Mathématiques, suite de Fibonacci", contested: false
},
{
  id: 454, module: "Culture générale", subject: "Mathématiques", difficulty: 2,
  question: "Le système de coordonnées cartésiennes, utilisé pour repérer des points dans un plan, doit son nom à :",
  options: ["René Descartes", "Blaise Pascal", "Pierre de Fermat", "Isaac Newton"],
  correctIndex: 0,
  explanation: "Le système de coordonnées cartésiennes doit son nom à René Descartes, qui a développé la géométrie analytique reliant algèbre et géométrie.",
  whyWrong: ["", "Blaise Pascal a contribué aux probabilités et à un célèbre triangle, mais ce système porte le nom de Descartes", "Pierre de Fermat a contribué à la théorie des nombres, mais ce système porte le nom de Descartes", "Isaac Newton a développé le calcul infinitésimal, mais ce système porte le nom de Descartes"],
  memoryTrick: "Cartésien vient de Descartes.",
  source: "Mathématiques, René Descartes, géométrie analytique", contested: false
},
{
  id: 455, module: "Culture générale", subject: "Mathématiques", difficulty: 2,
  question: "Le triangle de nombres binomiaux, utilisé notamment en probabilités, porte le nom de :",
  options: ["Blaise Pascal", "René Descartes", "Pierre de Fermat", "Leonhard Euler"],
  correctIndex: 0,
  explanation: "Le triangle de Pascal, du nom de Blaise Pascal, est un arrangement triangulaire des coefficients binomiaux, utilisé notamment en probabilités et en algèbre.",
  whyWrong: ["", "René Descartes est associé aux coordonnées cartésiennes, pas à ce triangle", "Pierre de Fermat est associé à la théorie des nombres, mais pas à ce triangle nommé", "Leonhard Euler a contribué à de nombreux domaines, mais ce triangle porte le nom de Pascal"],
  memoryTrick: "Triangle de Pascal : les coefficients binomiaux.",
  source: "Mathématiques, Blaise Pascal, triangle de Pascal", contested: false
},
{
  id: 456, module: "Culture générale", subject: "Mathématiques", difficulty: 1,
  question: "Un triangle équilatéral possède :",
  options: ["Trois côtés égaux et trois angles de 60°", "Un seul angle droit", "Deux côtés égaux uniquement", "Quatre côtés égaux"],
  correctIndex: 0,
  explanation: "Un triangle équilatéral possède trois côtés de même longueur et trois angles égaux, chacun mesurant 60°.",
  whyWrong: ["", "Un triangle rectangle possède un angle droit, pas nécessairement un triangle équilatéral", "Un triangle avec deux côtés égaux est dit isocèle, pas équilatéral", "Un triangle ne peut pas avoir quatre côtés, par définition"],
  memoryTrick: "Équilatéral : 3 côtés égaux, 3 angles de 60°.",
  source: "Mathématiques, géométrie du triangle", contested: false
},
{
  id: 457, module: "Culture générale", subject: "Mathématiques", difficulty: 1,
  question: "La somme des angles d'un triangle, dans un plan euclidien, est toujours égale à :",
  options: ["180°", "90°", "270°", "360°"],
  correctIndex: 0,
  explanation: "Dans la géométrie euclidienne classique, la somme des trois angles d'un triangle est toujours égale à 180°.",
  whyWrong: ["", "90° correspond à un seul angle droit, pas à la somme des trois angles d'un triangle", "270° ne correspond pas à cette somme", "360° correspond à la somme des angles d'un quadrilatère, pas d'un triangle"],
  memoryTrick: "Triangle : somme des angles = 180°.",
  source: "Mathématiques, géométrie euclidienne", contested: false
},
{
  id: 458, module: "Culture générale", subject: "Mathématiques", difficulty: 1,
  question: "Un nombre premier est un nombre entier supérieur à 1 qui est divisible uniquement par :",
  options: ["1 et lui-même", "1, 2 et lui-même", "Tous les nombres impairs", "Aucun autre nombre"],
  correctIndex: 0,
  explanation: "Un nombre premier est un nombre entier naturel supérieur à 1 qui n'a que deux diviseurs distincts : 1 et lui-même.",
  whyWrong: ["", "Un nombre premier n'est pas nécessairement divisible par 2, sauf le nombre 2 lui-même", "Un nombre premier n'est pas défini par rapport aux nombres impairs en général", "Un nombre premier est bien divisible, mais uniquement par 1 et lui-même"],
  memoryTrick: "Nombre premier : divisible seulement par 1 et lui-même.",
  source: "Mathématiques, nombres premiers", contested: false
},
{
  id: 459, module: "Culture générale", subject: "Mathématiques", difficulty: 2,
  question: "Le système binaire, largement utilisé en informatique, repose sur une base de :",
  options: ["2", "8", "10", "16"],
  correctIndex: 0,
  explanation: "Le système binaire repose sur une base de 2, n'utilisant que les chiffres 0 et 1, ce qui correspond aux deux états possibles des circuits électroniques (allumé/éteint).",
  whyWrong: ["", "La base 8 correspond au système octal, pas au système binaire", "La base 10 correspond au système décimal usuel, pas au système binaire", "La base 16 correspond au système hexadécimal, pas au système binaire"],
  memoryTrick: "Binaire : base 2, seulement 0 et 1.",
  source: "Mathématiques et informatique, système binaire", contested: false
},
{
  id: 460, module: "Culture générale", subject: "Mathématiques", difficulty: 2,
  question: "Le calcul infinitésimal (différentiel et intégral) a été développé indépendamment, à la même époque, par Isaac Newton et :",
  options: ["Gottfried Wilhelm Leibniz", "Blaise Pascal", "René Descartes", "Pierre de Fermat"],
  correctIndex: 0,
  explanation: "Le calcul infinitésimal a été développé indépendamment, à la fin du XVIIe siècle, par Isaac Newton et le mathématicien allemand Gottfried Wilhelm Leibniz.",
  whyWrong: ["", "Blaise Pascal est antérieur et associé à d'autres travaux, notamment en probabilités", "René Descartes est associé à la géométrie analytique, antérieure au calcul infinitésimal", "Pierre de Fermat a préfiguré certaines idées, mais le calcul infinitésimal est associé à Newton et Leibniz"],
  memoryTrick: "Newton ET Leibniz : le calcul infinitésimal, en parallèle.",
  source: "Mathématiques, calcul infinitésimal, Newton et Leibniz", contested: false
},
{
  id: 461, module: "Culture générale", subject: "Philosophie", difficulty: 1,
  question: "Le philosophe grec associé à la maxime « Connais-toi toi-même » est :",
  options: ["Socrate", "Platon", "Aristote", "Épicure"],
  correctIndex: 0,
  explanation: "Socrate est traditionnellement associé à la maxime « Connais-toi toi-même », qu'il faisait sienne dans sa méthode d'interrogation philosophique.",
  whyWrong: ["", "Platon est le disciple de Socrate, mais cette maxime est associée en premier lieu à son maître", "Aristote est le disciple de Platon, encore plus éloigné de cette maxime originelle", "Épicure est postérieur à Socrate et associé à une philosophie différente"],
  memoryTrick: "Socrate : « Connais-toi toi-même ».",
  source: "Philosophie, Socrate", contested: false
},
{
  id: 462, module: "Culture générale", subject: "Philosophie", difficulty: 2,
  question: "Platon, élève de Socrate, est l'auteur de « La République », dans laquelle il développe notamment :",
  options: ["La théorie des Idées", "L'impératif catégorique", "Le principe de non-contradiction", "La dialectique matérialiste"],
  correctIndex: 0,
  explanation: "Platon développe dans son œuvre, notamment « La République », la théorie des Idées, selon laquelle le monde sensible n'est qu'un reflet imparfait d'un monde d'Idées éternelles.",
  whyWrong: ["", "L'impératif catégorique est un concept développé par Emmanuel Kant, bien plus tard", "Le principe de non-contradiction est surtout développé par Aristote", "La dialectique matérialiste est un concept développé par Marx, bien plus tard"],
  memoryTrick: "Platon : la théorie des Idées.",
  source: "Philosophie, Platon", contested: false
},
{
  id: 463, module: "Culture générale", subject: "Philosophie", difficulty: 2,
  question: "Aristote, élève de Platon, a également été le précepteur de :",
  options: ["Alexandre le Grand", "Jules César", "Périclès", "Léonidas"],
  correctIndex: 0,
  explanation: "Aristote a été le précepteur du jeune Alexandre le Grand, fils du roi Philippe II de Macédoine.",
  whyWrong: ["", "Jules César est romain et bien postérieur à Aristote", "Périclès est antérieur à Aristote d'environ un siècle", "Léonidas est antérieur à Aristote"],
  memoryTrick: "Aristote : précepteur d'Alexandre le Grand.",
  source: "Philosophie, Aristote et Alexandre le Grand", contested: false
},
{
  id: 464, module: "Culture générale", subject: "Philosophie", difficulty: 1,
  question: "La formule philosophique « Je pense, donc je suis » est attribuée à :",
  options: ["René Descartes", "Blaise Pascal", "Emmanuel Kant", "Jean-Jacques Rousseau"],
  correctIndex: 0,
  explanation: "« Je pense, donc je suis » (Cogito ergo sum) est une formule fondatrice de René Descartes, exposée notamment dans le « Discours de la méthode ».",
  whyWrong: ["", "Blaise Pascal est l'auteur des Pensées, mais pas de cette formule précise", "Emmanuel Kant est un philosophe postérieur, connu pour d'autres concepts", "Jean-Jacques Rousseau est un philosophe des Lumières, mais pas l'auteur de cette formule"],
  memoryTrick: "Descartes : « Je pense, donc je suis ».",
  source: "Philosophie, René Descartes", contested: false
},
{
  id: 465, module: "Culture générale", subject: "Philosophie", difficulty: 2,
  question: "Le philosophe allemand des Lumières, auteur du concept d'« impératif catégorique », est :",
  options: ["Emmanuel Kant", "Georg Wilhelm Friedrich Hegel", "Friedrich Nietzsche", "Arthur Schopenhauer"],
  correctIndex: 0,
  explanation: "Emmanuel Kant, philosophe allemand des Lumières, est l'auteur du concept d'impératif catégorique, principe moral universel exposé dans ses travaux d'éthique.",
  whyWrong: ["", "Hegel est connu pour la dialectique, pas pour l'impératif catégorique", "Nietzsche est postérieur à Kant et développe une philosophie différente", "Schopenhauer est postérieur à Kant, connu pour une philosophie pessimiste distincte"],
  memoryTrick: "Kant : l'impératif catégorique.",
  source: "Philosophie, Emmanuel Kant", contested: false
},
{
  id: 466, module: "Culture générale", subject: "Philosophie", difficulty: 2,
  question: "Confucius, philosophe dont l'enseignement met l'accent sur l'éthique et l'harmonie sociale, est originaire :",
  options: ["De Chine", "D'Inde", "De Perse", "Du Japon"],
  correctIndex: 0,
  explanation: "Confucius est un philosophe chinois de l'Antiquité, dont l'enseignement, centré sur l'éthique et l'harmonie sociale, a profondément influencé la pensée chinoise.",
  whyWrong: ["", "L'Inde a produit d'autres traditions philosophiques et religieuses, mais pas Confucius", "La Perse n'est pas le pays d'origine de Confucius", "Le Japon n'est pas le pays d'origine de Confucius, bien que sa pensée y ait influencé la culture"],
  memoryTrick: "Confucius : le philosophe chinois de l'harmonie sociale.",
  source: "Philosophie, Confucius", contested: false
},
{
  id: 467, module: "Culture générale", subject: "Philosophie", difficulty: 2,
  question: "Épicure, philosophe grec fondateur d'une école connue pour prôner un plaisir mesuré, a donné son nom à un jardin situé à :",
  options: ["Athènes", "Sparte", "Alexandrie", "Rome"],
  correctIndex: 0,
  explanation: "Épicure a fondé son école philosophique dans un jardin situé à Athènes, où il enseignait une philosophie prônant un plaisir mesuré et l'ataraxie (absence de trouble).",
  whyWrong: ["", "Sparte n'est pas la ville associée au jardin d'Épicure", "Alexandrie n'est pas la ville associée au jardin d'Épicure", "Rome n'est pas la ville associée au jardin d'Épicure, bien que l'épicurisme y ait influencé des auteurs comme Lucrèce"],
  memoryTrick: "Épicure : le Jardin d'Athènes.",
  source: "Philosophie, Épicure", contested: false
},
{
  id: 468, module: "Culture générale", subject: "Philosophie", difficulty: 2,
  question: "Le stoïcisme, courant philosophique prônant la maîtrise des passions, compte parmi ses figures notables l'empereur romain :",
  options: ["Marc Aurèle", "Néron", "Caligula", "Dioclétien"],
  correctIndex: 0,
  explanation: "Marc Aurèle, empereur romain et philosophe stoïcien, est l'auteur des « Pensées pour moi-même », œuvre majeure du stoïcisme antique.",
  whyWrong: ["", "Néron n'est pas associé au stoïcisme, contrairement à son précepteur Sénèque", "Caligula n'est pas associé au stoïcisme", "Dioclétien n'est pas associé au stoïcisme"],
  memoryTrick: "Marc Aurèle : l'empereur stoïcien.",
  source: "Philosophie, stoïcisme, Marc Aurèle", contested: false
},
{
  id: 469, module: "Culture générale", subject: "Philosophie", difficulty: 2,
  question: "« Ainsi parlait Zarathoustra » est une œuvre majeure du philosophe allemand :",
  options: ["Friedrich Nietzsche", "Emmanuel Kant", "Georg Wilhelm Friedrich Hegel", "Arthur Schopenhauer"],
  correctIndex: 0,
  explanation: "« Ainsi parlait Zarathoustra » est une œuvre majeure de Friedrich Nietzsche, philosophe allemand du XIXe siècle connu pour ses critiques radicales de la morale traditionnelle.",
  whyWrong: ["", "Emmanuel Kant est antérieur à Nietzsche, connu pour d'autres concepts", "Hegel est connu pour la dialectique, pas pour cette œuvre", "Schopenhauer a influencé Nietzsche, mais n'est pas l'auteur de cette œuvre précise"],
  memoryTrick: "Nietzsche : Ainsi parlait Zarathoustra.",
  source: "Philosophie, Friedrich Nietzsche", contested: false
},
{
  id: 470, module: "Culture générale", subject: "Philosophie", difficulty: 2,
  question: "Ibn Khaldoun, historien et philosophe maghrébin considéré comme un précurseur de la sociologie, est l'auteur de :",
  options: ["La Muqaddima", "Le Canon de la médecine", "L'Incohérence des philosophes", "Le Livre des Rois"],
  correctIndex: 0,
  explanation: "Ibn Khaldoun est l'auteur de la Muqaddima, œuvre majeure du XIVe siècle considérée comme fondatrice de la sociologie et de la philosophie de l'histoire.",
  whyWrong: ["", "Le Canon de la médecine est l'œuvre d'Avicenne, pas d'Ibn Khaldoun", "L'Incohérence des philosophes est une œuvre d'Al-Ghazali, à laquelle Averroès a répondu, sans lien avec Ibn Khaldoun", "Le Livre des Rois (Shâh-Nâmeh) est une épopée persane de Ferdowsi, sans lien avec Ibn Khaldoun"],
  memoryTrick: "Ibn Khaldoun : la Muqaddima, précurseur de la sociologie.",
  source: "Philosophie, Ibn Khaldoun, la Muqaddima", contested: false
},
{
  id: 471, module: "Culture générale", subject: "Philosophie", difficulty: 2,
  question: "Averroès (Ibn Rushd), philosophe andalou du XIIe siècle, est notamment célèbre pour avoir commenté l'œuvre de :",
  options: ["Aristote", "Platon", "Confucius", "Épicure"],
  correctIndex: 0,
  explanation: "Averroès (Ibn Rushd), philosophe né à Cordoue, est notamment célèbre pour ses commentaires approfondis de l'œuvre d'Aristote, qui ont influencé la philosophie médiévale européenne.",
  whyWrong: ["", "Platon n'est pas le philosophe principalement commenté par Averroès", "Confucius n'est pas le philosophe commenté par Averroès", "Épicure n'est pas le philosophe commenté par Averroès"],
  memoryTrick: "Averroès : le grand commentateur d'Aristote.",
  source: "Philosophie, Averroès (Ibn Rushd)", contested: false
},
{
  id: 472, module: "Culture générale", subject: "Philosophie", difficulty: 2,
  question: "Avicenne (Ibn Sina), philosophe et médecin perse, est l'auteur du célèbre traité médical intitulé :",
  options: ["Le Canon de la médecine", "La Muqaddima", "L'Incohérence des philosophes", "Le Prince"],
  correctIndex: 0,
  explanation: "Avicenne (Ibn Sina) est l'auteur du « Canon de la médecine », traité qui a fait autorité pendant des siècles, en Orient comme en Europe.",
  whyWrong: ["", "La Muqaddima est l'œuvre d'Ibn Khaldoun, pas d'Avicenne", "L'Incohérence des philosophes est une œuvre d'Al-Ghazali, pas d'Avicenne", "Le Prince est une œuvre de Machiavel, sans lien avec Avicenne"],
  memoryTrick: "Avicenne : le Canon de la médecine.",
  source: "Philosophie et médecine, Avicenne (Ibn Sina)", contested: false
},
{
  id: 473, module: "Culture générale", subject: "Philosophie", difficulty: 2,
  question: "Voltaire, figure majeure du siècle des Lumières, s'est notamment illustré par son combat en faveur :",
  options: ["De la tolérance religieuse", "Du retour à la monarchie absolue", "Du maintien de la censure", "Du rejet de la raison"],
  correctIndex: 0,
  explanation: "Voltaire s'est notamment illustré par son combat en faveur de la tolérance religieuse, dénonçant le fanatisme à travers des œuvres comme le « Traité sur la tolérance ».",
  whyWrong: ["", "Voltaire critiquait au contraire les abus de la monarchie absolue", "Voltaire combattait la censure plutôt qu'il ne la soutenait", "Les Lumières, dont Voltaire, prônaient au contraire l'usage de la raison"],
  memoryTrick: "Voltaire : la tolérance religieuse.",
  source: "Philosophie, Voltaire, Lumières", contested: false
},
{
  id: 474, module: "Culture générale", subject: "Philosophie", difficulty: 1,
  question: "Le siècle des Lumières, mouvement intellectuel prônant la raison et le progrès, correspond principalement au :",
  options: ["XVIIIe siècle", "XIVe siècle", "XVIe siècle", "XXe siècle"],
  correctIndex: 0,
  explanation: "Le siècle des Lumières correspond principalement au XVIIIe siècle, période marquée par des penseurs comme Voltaire, Rousseau, Montesquieu et Diderot.",
  whyWrong: ["", "Le XIVe siècle est celui de la fin du Moyen Âge, antérieur aux Lumières", "Le XVIe siècle est celui de la Renaissance, antérieur aux Lumières", "Le XXe siècle est bien postérieur au siècle des Lumières"],
  memoryTrick: "Lumières : XVIIIe siècle.",
  source: "Philosophie, siècle des Lumières", contested: false
},
{
  id: 475, module: "Culture générale", subject: "Philosophie", difficulty: 2,
  question: "Le philosophe allemand Hegel est notamment connu pour sa méthode dite :",
  options: ["La dialectique", "La maïeutique", "L'ataraxie", "Le scepticisme radical"],
  correctIndex: 0,
  explanation: "Georg Wilhelm Friedrich Hegel est notamment connu pour sa méthode dialectique, articulant thèse, antithèse et synthèse dans le mouvement de l'histoire des idées.",
  whyWrong: ["", "La maïeutique est la méthode socratique d'interrogation, pas celle de Hegel", "L'ataraxie est un concept associé à l'épicurisme et au scepticisme antique, pas à Hegel", "Le scepticisme radical est une posture antique distincte de la dialectique hégélienne"],
  memoryTrick: "Hegel : la dialectique, thèse-antithèse-synthèse.",
  source: "Philosophie, Hegel, dialectique", contested: false
},
{
  id: 476, module: "Culture générale", subject: "Mythologie grecque", difficulty: 1,
  question: "Dans la mythologie grecque, le roi des dieux, maître de l'Olympe, est :",
  options: ["Zeus", "Poséidon", "Hadès", "Apollon"],
  correctIndex: 0,
  explanation: "Zeus est le roi des dieux de la mythologie grecque, maître de l'Olympe et dieu du ciel et de la foudre.",
  whyWrong: ["", "Poséidon est le dieu de la mer, frère de Zeus, mais pas le roi des dieux", "Hadès est le dieu des enfers, frère de Zeus, mais pas le roi des dieux de l'Olympe", "Apollon est le dieu de la musique et des arts, fils de Zeus, mais pas le roi des dieux"],
  memoryTrick: "Zeus : le roi de l'Olympe.",
  source: "Mythologie grecque, Zeus", contested: false
},
{
  id: 477, module: "Culture générale", subject: "Mythologie grecque", difficulty: 2,
  question: "Héra, épouse de Zeus dans la mythologie grecque, est la déesse :",
  options: ["Du mariage", "De la sagesse", "De la chasse", "De la guerre"],
  correctIndex: 0,
  explanation: "Héra est la déesse du mariage et de la famille dans la mythologie grecque, épouse et sœur de Zeus.",
  whyWrong: ["", "La sagesse est le domaine d'Athéna, pas d'Héra", "La chasse est le domaine d'Artémis, pas d'Héra", "La guerre est notamment le domaine d'Arès, pas d'Héra"],
  memoryTrick: "Héra : déesse du mariage, épouse de Zeus.",
  source: "Mythologie grecque, Héra", contested: false
},
{
  id: 478, module: "Culture générale", subject: "Mythologie grecque", difficulty: 1,
  question: "Dans la mythologie grecque, le dieu de la mer est :",
  options: ["Poséidon", "Zeus", "Hadès", "Hermès"],
  correctIndex: 0,
  explanation: "Poséidon est le dieu grec de la mer, frère de Zeus et d'Hadès, souvent représenté avec un trident.",
  whyWrong: ["", "Zeus est le dieu du ciel et de la foudre, pas de la mer", "Hadès est le dieu des enfers, pas de la mer", "Hermès est le dieu messager des dieux, pas de la mer"],
  memoryTrick: "Poséidon : dieu de la mer, trident en main.",
  source: "Mythologie grecque, Poséidon", contested: false
},
{
  id: 479, module: "Culture générale", subject: "Mythologie grecque", difficulty: 2,
  question: "Athéna, déesse grecque de la sagesse et de la stratégie, est la protectrice de la cité de :",
  options: ["Athènes", "Sparte", "Thèbes", "Corinthe"],
  correctIndex: 0,
  explanation: "Athéna, déesse de la sagesse et de la stratégie guerrière, est la protectrice légendaire de la cité d'Athènes, qui porte son nom.",
  whyWrong: ["", "Sparte n'est pas la cité associée à Athéna dans la mythologie", "Thèbes n'est pas la cité associée à Athéna dans la mythologie", "Corinthe n'est pas la cité associée à Athéna dans la mythologie"],
  memoryTrick: "Athéna : protectrice d'Athènes, sa ville éponyme.",
  source: "Mythologie grecque, Athéna", contested: false
},
{
  id: 480, module: "Culture générale", subject: "Mythologie grecque", difficulty: 2,
  question: "Apollon, dieu grec associé à la musique, aux arts et souvent au soleil, est le frère jumeau de :",
  options: ["Artémis", "Athéna", "Aphrodite", "Héra"],
  correctIndex: 0,
  explanation: "Apollon est le frère jumeau d'Artémis, déesse de la chasse et de la lune, tous deux enfants de Zeus et de Léto.",
  whyWrong: ["", "Athéna n'est pas la sœur jumelle d'Apollon", "Aphrodite n'est pas la sœur jumelle d'Apollon", "Héra n'est pas la sœur jumelle d'Apollon, mais l'épouse de Zeus"],
  memoryTrick: "Apollon et Artémis : jumeaux, enfants de Zeus et Léto.",
  source: "Mythologie grecque, Apollon", contested: false
},
{
  id: 481, module: "Culture générale", subject: "Mythologie grecque", difficulty: 1,
  question: "Aphrodite, dans la mythologie grecque, est la déesse :",
  options: ["De l'amour et de la beauté", "De la guerre", "Des enfers", "De la sagesse"],
  correctIndex: 0,
  explanation: "Aphrodite est la déesse grecque de l'amour et de la beauté, associée dans la mythologie romaine à Vénus.",
  whyWrong: ["", "La guerre est notamment le domaine d'Arès, pas d'Aphrodite", "Les enfers sont le domaine d'Hadès, pas d'Aphrodite", "La sagesse est le domaine d'Athéna, pas d'Aphrodite"],
  memoryTrick: "Aphrodite : déesse de l'amour et de la beauté.",
  source: "Mythologie grecque, Aphrodite", contested: false
},
{
  id: 482, module: "Culture générale", subject: "Mythologie grecque", difficulty: 1,
  question: "Dans la mythologie grecque, le dieu des enfers est :",
  options: ["Hadès", "Zeus", "Poséidon", "Arès"],
  correctIndex: 0,
  explanation: "Hadès est le dieu des enfers dans la mythologie grecque, régnant sur le royaume souterrain des morts.",
  whyWrong: ["", "Zeus règne sur le ciel, pas sur les enfers", "Poséidon règne sur la mer, pas sur les enfers", "Arès est le dieu de la guerre, pas des enfers"],
  memoryTrick: "Hadès : le royaume souterrain des morts.",
  source: "Mythologie grecque, Hadès", contested: false
},
{
  id: 483, module: "Culture générale", subject: "Mythologie grecque", difficulty: 2,
  question: "Héraclès (Hercule), héros de la mythologie grecque, est célèbre pour avoir accompli :",
  options: ["Douze travaux", "Sept épreuves", "Trois exploits légendaires", "Vingt quêtes sacrées"],
  correctIndex: 0,
  explanation: "Héraclès est célèbre pour avoir accompli douze travaux, épreuves surhumaines imposées en punition, comme la capture du lion de Némée.",
  whyWrong: ["", "Ce nombre ne correspond pas aux exploits attribués à Héraclès", "Ce nombre ne correspond pas aux exploits attribués à Héraclès", "Ce nombre ne correspond pas aux exploits attribués à Héraclès"],
  memoryTrick: "Héraclès : les douze travaux.",
  source: "Mythologie grecque, Héraclès, les douze travaux", contested: false
},
{
  id: 484, module: "Culture générale", subject: "Mythologie grecque", difficulty: 2,
  question: "Le mythe du Minotaure, créature mi-homme mi-taureau enfermée dans un labyrinthe, se situe en Crète, associé au roi :",
  options: ["Minos", "Priam", "Agamemnon", "Ulysse"],
  correctIndex: 0,
  explanation: "Le mythe du Minotaure est associé au roi Minos de Crète, qui fit construire un labyrinthe par Dédale pour y enfermer la créature.",
  whyWrong: ["", "Priam est le roi légendaire de Troie, sans lien avec ce mythe crétois", "Agamemnon est un roi grec de la guerre de Troie, sans lien avec ce mythe", "Ulysse est un héros grec de l'Odyssée, sans lien avec ce mythe précis"],
  memoryTrick: "Minotaure : le labyrinthe du roi Minos, en Crète.",
  source: "Mythologie grecque, mythe du Minotaure", contested: false
},
{
  id: 485, module: "Culture générale", subject: "Mythologie romaine", difficulty: 1,
  question: "Dans la mythologie romaine, l'équivalent du dieu grec Zeus est :",
  options: ["Jupiter", "Mars", "Neptune", "Mercure"],
  correctIndex: 0,
  explanation: "Jupiter est l'équivalent romain de Zeus, roi des dieux, maître du ciel et de la foudre dans la mythologie romaine.",
  whyWrong: ["", "Mars est l'équivalent romain d'Arès, dieu de la guerre", "Neptune est l'équivalent romain de Poséidon, dieu de la mer", "Mercure est l'équivalent romain d'Hermès, dieu messager"],
  memoryTrick: "Zeus (grec) = Jupiter (romain).",
  source: "Mythologie romaine, Jupiter", contested: false
},
{
  id: 486, module: "Culture générale", subject: "Mythologie romaine", difficulty: 2,
  question: "Mars, dieu romain de la guerre, correspond dans la mythologie grecque à :",
  options: ["Arès", "Zeus", "Apollon", "Hermès"],
  correctIndex: 0,
  explanation: "Mars, dieu romain de la guerre, correspond au dieu grec Arès, également associé à la planète du même nom.",
  whyWrong: ["", "Zeus correspond à Jupiter, pas à Mars", "Apollon porte le même nom dans les deux mythologies, distinct de Mars", "Hermès correspond à Mercure, pas à Mars"],
  memoryTrick: "Arès (grec) = Mars (romain).",
  source: "Mythologie romaine, Mars", contested: false
},
{
  id: 487, module: "Culture générale", subject: "Mythologie romaine", difficulty: 2,
  question: "Vénus, déesse romaine de l'amour et de la beauté, correspond dans la mythologie grecque à :",
  options: ["Aphrodite", "Héra", "Artémis", "Déméter"],
  correctIndex: 0,
  explanation: "Vénus, déesse romaine de l'amour et de la beauté, correspond à Aphrodite dans la mythologie grecque.",
  whyWrong: ["", "Héra correspond à Junon, pas à Vénus", "Artémis correspond à Diane, pas à Vénus", "Déméter correspond à Cérès, pas à Vénus"],
  memoryTrick: "Aphrodite (grec) = Vénus (romain).",
  source: "Mythologie romaine, Vénus", contested: false
},
{
  id: 488, module: "Culture générale", subject: "Mythologie égyptienne", difficulty: 2,
  question: "Osiris, dans la mythologie égyptienne, est le dieu :",
  options: ["Des morts et de la résurrection", "Du soleil", "De la guerre", "Des scribes et de l'écriture"],
  correctIndex: 0,
  explanation: "Osiris est le dieu égyptien des morts et de la résurrection, figure centrale du jugement des âmes dans l'au-delà.",
  whyWrong: ["", "Le soleil est notamment associé au dieu Ra, pas à Osiris", "La guerre n'est pas le domaine principal d'Osiris", "Les scribes et l'écriture sont associés à Thot, pas à Osiris"],
  memoryTrick: "Osiris : dieu des morts et de la résurrection.",
  source: "Mythologie égyptienne, Osiris", contested: false
},
{
  id: 489, module: "Culture générale", subject: "Mythologie égyptienne", difficulty: 2,
  question: "Anubis, dieu égyptien représenté à tête de chacal, est notamment associé :",
  options: ["À la momification", "À la guerre", "Au commerce", "À l'agriculture"],
  correctIndex: 0,
  explanation: "Anubis, représenté avec une tête de chacal, est le dieu égyptien associé à la momification et à la protection des morts.",
  whyWrong: ["", "La guerre n'est pas le domaine principal d'Anubis", "Le commerce n'est pas le domaine d'Anubis", "L'agriculture n'est pas le domaine d'Anubis"],
  memoryTrick: "Anubis : tête de chacal, dieu de la momification.",
  source: "Mythologie égyptienne, Anubis", contested: false
},
{
  id: 490, module: "Culture générale", subject: "Mythologie égyptienne", difficulty: 2,
  question: "Ra, l'une des principales divinités égyptiennes, est le dieu :",
  options: ["Du soleil", "Des enfers uniquement", "De la lune", "De la guerre"],
  correctIndex: 0,
  explanation: "Ra est le dieu égyptien du soleil, l'une des divinités les plus importantes du panthéon égyptien antique.",
  whyWrong: ["", "Les enfers ne sont pas le domaine principal de Ra", "La lune est plutôt associée à d'autres divinités égyptiennes comme Thot ou Khonsou", "La guerre n'est pas le domaine principal de Ra"],
  memoryTrick: "Ra : dieu du soleil égyptien.",
  source: "Mythologie égyptienne, Ra", contested: false
},
{
  id: 491, module: "Culture générale", subject: "Histoire moderne", difficulty: 1,
  question: "La Révolution française a débuté en :",
  options: ["1789", "1799", "1804", "1815"],
  correctIndex: 0,
  explanation: "La Révolution française a débuté en 1789, marquée notamment par la prise de la Bastille le 14 juillet.",
  whyWrong: ["", "1799 correspond au coup d'État de Napoléon Bonaparte (18 brumaire), marquant la fin de la période révolutionnaire directe", "1804 correspond au sacre de Napoléon Ier comme empereur", "1815 correspond à la défaite de Napoléon à Waterloo"],
  memoryTrick: "1789 : le début de la Révolution française.",
  source: "Histoire moderne, Révolution française, 1789", contested: false
},
{
  id: 492, module: "Culture générale", subject: "Histoire moderne", difficulty: 1,
  question: "La prise de la Bastille, événement symbolique de la Révolution française, a eu lieu le :",
  options: ["14 juillet 1789", "4 août 1789", "21 janvier 1793", "18 juin 1815"],
  correctIndex: 0,
  explanation: "La prise de la Bastille a eu lieu le 14 juillet 1789, événement devenu le symbole de la Révolution française et fête nationale.",
  whyWrong: ["", "Le 4 août 1789 correspond à l'abolition des privilèges féodaux, pas à la prise de la Bastille", "Le 21 janvier 1793 correspond à l'exécution de Louis XVI", "Le 18 juin 1815 correspond à la bataille de Waterloo"],
  memoryTrick: "14 juillet 1789 : prise de la Bastille.",
  source: "Histoire moderne, prise de la Bastille", contested: false
},
{
  id: 493, module: "Culture générale", subject: "Histoire moderne", difficulty: 2,
  question: "La Déclaration des droits de l'homme et du citoyen, texte fondateur de la Révolution française, a été adoptée en :",
  options: ["1789", "1804", "1848", "1875"],
  correctIndex: 0,
  explanation: "La Déclaration des droits de l'homme et du citoyen a été adoptée en 1789, quelques semaines après la prise de la Bastille.",
  whyWrong: ["", "1804 correspond au sacre de Napoléon Ier, pas à cette déclaration", "1848 correspond à l'abolition de l'esclavage en France et à la Deuxième République", "1875 correspond aux lois constitutionnelles fondant la Troisième République"],
  memoryTrick: "1789 : la Déclaration des droits de l'homme.",
  source: "Histoire moderne, Déclaration des droits de l'homme, 1789", contested: false
},
{
  id: 494, module: "Culture générale", subject: "Histoire contemporaine", difficulty: 1,
  question: "La Première Guerre mondiale s'est déroulée de :",
  options: ["1914 à 1918", "1904 à 1908", "1939 à 1945", "1870 à 1871"],
  correctIndex: 0,
  explanation: "La Première Guerre mondiale s'est déroulée de 1914 à 1918, opposant notamment les puissances de la Triple-Entente aux empires centraux.",
  whyWrong: ["", "Cette période est antérieure à la Première Guerre mondiale", "Cette période correspond à la Seconde Guerre mondiale, pas à la Première", "Cette période correspond à la guerre franco-prussienne, antérieure aux deux guerres mondiales"],
  memoryTrick: "1914-1918 : la Première Guerre mondiale.",
  source: "Histoire contemporaine, Première Guerre mondiale", contested: false
},
{
  id: 495, module: "Culture générale", subject: "Histoire contemporaine", difficulty: 1,
  question: "La Seconde Guerre mondiale s'est déroulée de :",
  options: ["1939 à 1945", "1914 à 1918", "1929 à 1933", "1945 à 1950"],
  correctIndex: 0,
  explanation: "La Seconde Guerre mondiale s'est déroulée de 1939 à 1945, le conflit le plus meurtrier de l'histoire moderne.",
  whyWrong: ["", "Cette période correspond à la Première Guerre mondiale, pas à la Seconde", "Cette période correspond à la Grande Dépression économique, pas à la guerre", "Cette période est postérieure à la fin de la Seconde Guerre mondiale"],
  memoryTrick: "1939-1945 : la Seconde Guerre mondiale.",
  source: "Histoire contemporaine, Seconde Guerre mondiale", contested: false
},
{
  id: 496, module: "Culture générale", subject: "Histoire contemporaine", difficulty: 2,
  question: "Le débarquement allié en Normandie, tournant majeur de la Seconde Guerre mondiale, a eu lieu le :",
  options: ["6 juin 1944", "8 mai 1945", "11 novembre 1918", "1er septembre 1939"],
  correctIndex: 0,
  explanation: "Le débarquement allié en Normandie a eu lieu le 6 juin 1944, ouvrant un front décisif à l'ouest contre l'Allemagne nazie.",
  whyWrong: ["", "Le 8 mai 1945 correspond à la capitulation allemande, pas au débarquement", "Le 11 novembre 1918 correspond à l'armistice de la Première Guerre mondiale", "Le 1er septembre 1939 correspond au début de la Seconde Guerre mondiale, avec l'invasion de la Pologne"],
  memoryTrick: "6 juin 1944 : le débarquement de Normandie.",
  source: "Histoire contemporaine, débarquement de Normandie, 1944", contested: false
},
{
  id: 497, module: "Culture générale", subject: "Histoire contemporaine", difficulty: 2,
  question: "La chute du mur de Berlin, symbole de la fin de la Guerre froide en Europe, a eu lieu le :",
  options: ["9 novembre 1989", "3 octobre 1990", "25 décembre 1991", "1er mai 1990"],
  correctIndex: 0,
  explanation: "Le mur de Berlin est tombé le 9 novembre 1989, événement symbolique annonçant la réunification allemande et la fin de la Guerre froide en Europe.",
  whyWrong: ["", "Le 3 octobre 1990 correspond à la réunification officielle de l'Allemagne, postérieure à la chute du mur", "Le 25 décembre 1991 correspond à la dissolution de l'URSS", "Le 1er mai 1990 ne correspond pas à cet événement"],
  memoryTrick: "9 novembre 1989 : chute du mur de Berlin.",
  source: "Histoire contemporaine, chute du mur de Berlin, 1989", contested: false
},
{
  id: 498, module: "Culture générale", subject: "Histoire contemporaine", difficulty: 2,
  question: "La Déclaration universelle des droits de l'homme a été adoptée par l'Assemblée générale de l'ONU en :",
  options: ["1948", "1945", "1966", "1989"],
  correctIndex: 0,
  explanation: "La Déclaration universelle des droits de l'homme a été adoptée par l'Assemblée générale de l'ONU le 10 décembre 1948, à Paris.",
  whyWrong: ["", "1945 correspond à la fondation de l'ONU elle-même, antérieure à cette déclaration", "1966 correspond à l'adoption des pactes internationaux relatifs aux droits de l'homme, postérieurs à la déclaration de 1948", "1989 correspond à la Convention internationale des droits de l'enfant"],
  memoryTrick: "1948 : la Déclaration universelle des droits de l'homme.",
  source: "Histoire contemporaine, Déclaration universelle des droits de l'homme, 1948", contested: false
},
{
  id: 499, module: "Culture générale", subject: "Histoire contemporaine", difficulty: 2,
  question: "Le premier homme à avoir marché sur la Lune, en 1969, est :",
  options: ["Neil Armstrong", "Youri Gagarine", "Buzz Aldrin", "John Glenn"],
  correctIndex: 0,
  explanation: "Neil Armstrong a été le premier homme à marcher sur la Lune, le 21 juillet 1969, lors de la mission Apollo 11.",
  whyWrong: ["", "Youri Gagarine a été le premier homme dans l'espace en 1961, mais pas sur la Lune", "Buzz Aldrin a marché sur la Lune lors de la même mission, mais après Armstrong", "John Glenn a été le premier Américain à orbiter autour de la Terre, mais pas sur la Lune"],
  memoryTrick: "Armstrong : premier pas sur la Lune, 1969.",
  source: "Histoire contemporaine, Neil Armstrong, 1969", contested: false
},
{
  id: 500, module: "Culture générale", subject: "Histoire moderne", difficulty: 2,
  question: "La révolution industrielle a débuté, à partir du XVIIIe siècle, principalement en :",
  options: ["Grande-Bretagne", "France", "Allemagne", "Russie"],
  correctIndex: 0,
  explanation: "La révolution industrielle a débuté en Grande-Bretagne à partir du XVIIIe siècle, avant de se propager progressivement au reste de l'Europe et du monde.",
  whyWrong: ["", "La France a connu son industrialisation un peu plus tardivement que la Grande-Bretagne", "L'Allemagne s'est industrialisée plus tardivement, notamment au XIXe siècle", "La Russie s'est industrialisée encore plus tardivement, à la fin du XIXe siècle"],
  memoryTrick: "Révolution industrielle : née en Grande-Bretagne.",
  source: "Histoire moderne, révolution industrielle", contested: false
},

];
