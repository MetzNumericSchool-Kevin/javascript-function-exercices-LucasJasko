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

// Ajout de nouvelles potions dans l'inventaire
let inventaire = [["potion de magie", 4, 50]];

function ajouterPotion(inventaire, nomPotion) {
  if (inventaire.length === 0) {
    const prix = parseInt(prompt("Quel est le prix unitaire de la potion?"));
    const qté = parseInt(prompt(`Quel est la quantité de ${nomPotion} à ajouter au stock?`));
    const potion = [nomPotion, prix, qté];
    inventaire.push(potion);
  } else {
    for (let i = 0; i < inventaire.length; i++) {
      if (inventaire[i][0] != nomPotion) {
        const prix = parseInt(prompt("Quel est le prix unitaire de la potion?"));
        const qté = parseInt(prompt(`Quel est la quantité de ${nomPotion} à ajouter au stock?`));
        const potion = [nomPotion, prix, qté];
        inventaire.push(potion);
        break;
      } else if (inventaire[i][0] === nomPotion) {
        console.log("existe !");
        inventaire[i][1] = parseInt(prompt("Quel est le nouveau prix de la potion?"));
        inventaire[i][2] += parseInt(prompt("Quel est la quantité de potion à ajouter?"));
      }
    }
  }
  inventaire = inventaire.sort((a, b) => b[1] - a[1]);
}

ajouterPotion(inventaire, "potion de soin");
console.log(inventaire);
