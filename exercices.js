// Salutation Aventurier
function salutations(nomSorcier) {
  console.log(`Salutation Aventurier ! Je menomme ${nomSorcier} pour vous servir.`);
}

salutations("Lucas");

// Quel est le tarif d'une potion ?
function tarifPotion(qté = 1, prixPotion) {
  return prixPotion * qté;
}

console.log(tarifPotion(3, 10));

// Fabrication de potion
function creerPotion(idPotion, prix = 10, stock = 1) {
  return {
    id: idPotion,
    prix: prix,
    stock: stock,
  };
}
console.log(creerPotion("Potion de soin"));
console.log(creerPotion("Potion de magie", 8, 5));
