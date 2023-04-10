// Put all the javascript code here, that you want to execute after page load.
let counter = 0;

/**
 * This function replaces certain words in the HTML body with their corresponding replacements.
 */
function replaceWords() {
  let body         = document.body.innerHTML;
  let replacedBody = body.replace(/Plan social/gi, "Plan de licenciement").replace(/charges sociales/gi, "cotisations sociales");
  document.body.innerHTML = replacedBody;
  counter++;
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
  