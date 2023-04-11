
function addCursorPointer(event) {
  event.target.style.cursor = "help";
}

function removeCursorPointer(event) {
  event.target.style.cursor = "";
}

let counter = 0;
// Mettre tous les mots à remplacer et leurs correspondances dans un objet
let replacedWords = {
  "Plan social"     : "Plan de licenciement",
  "charges sociales": "cotisations sociales",
  "inflation"       : "hausse des prix",
  "taux d'intérêt"  : "coût du crédit"
};

/**
 * This function replaces certain words in the HTML body with their corresponding replacements.
 */
function replaceWords() {
  let body = document.body.innerHTML;
  for (let [key, value] of Object.entries(replacedWords)) {
    let replacedBody = body.replace(new RegExp(key, "gi"), function(match) {
      counter++;
      return "<span style='text-decoration: underline dotted;' title='" + match + "'>" + value + "</span>";
    });
    document.body.innerHTML = replacedBody;
  }
  updateIcon(counter);
}

function updateIcon(count) {
  // Mettre à jour l'icône de l'extension avec le nombre de remplacements effectués
}

// Vérifie si la classe "gdpr-lmd-wall__content" est absente de la page, wall du site lemonde 
if (!document.querySelector('.gdpr-lmd-wall__content')) {
    // Active le script ici
    replaceWords();
    console.log('La classe est absente, le script est activé.');
  } else {
    // La classe est présente, ne rien faire
    console.log('La classe est présente, le script est désactivé.');
  }

// Ajoute les événements de survol pour les mots remplacés
let replacedSpans = document.querySelectorAll("span[style='text-decoration: underline dotted;']");
replacedSpans.forEach(function(replacedSpan) {
  replacedSpan.addEventListener("mouseenter", addCursorPointer);
  replacedSpan.addEventListener("mouseleave", removeCursorPointer);
});
