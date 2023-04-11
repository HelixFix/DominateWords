
function addCursorPointer(event) {
  event.target.style.cursor = "help";
}

function removeCursorPointer(event) {
  event.target.style.cursor = "";
}

// Mettre tous les mots à remplacer et leurs correspondances dans un objet
const wordsToReplace = {
  "Plan social"     : "Plan de licenciement",
  "charges sociales": "cotisations sociales",
  "inflation"       : "hausse des prix",
  "taux d'intérêt"  : "coût du crédit"
};

let counter = 0;

/**
 * Cette fonction remplace certains mots dans le corps HTML avec leurs correspondances.
 */
function replaceWords() {
  let body = document.body.innerHTML;

  for (const word in wordsToReplace) {
    const regex = new RegExp(word, "gi");
    body = body.replace(regex, function(match) {
      counter++;
      return `<span style="text-decoration: underline dotted;" title="${match}">${wordsToReplace[word]}</span>`;
    });
  }

  document.body.innerHTML = body;
  updateIcon(counter);
}

function updateIcon(count) {
  // Mettre à jour l'icône de l'extension avec le nombre de remplacements effectués
}

// Vérifie l'absense de wall 
if (!document.querySelector('.gdpr-lmd-wall__content') || !document.querySelector('#didomi-popup')) {
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