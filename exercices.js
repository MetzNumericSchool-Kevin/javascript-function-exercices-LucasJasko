// Salutation Aventurier
function salutations(nomSorcier) {
  console.log(`Salutation Aventurier ! Je menomme ${nomSorcier} pour vous servir.`);
}

salutations("Lucas");

// Quel est le tarif d'une potion ?
function tarifPotion(qté, prixPotion) {
  return prixPotion * qté;
}

console.log(tarifPotion(3, 10));
