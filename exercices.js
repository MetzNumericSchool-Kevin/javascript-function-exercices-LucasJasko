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
let inventaire = [
  ["potion de magie", 4, 50],
  ["potion de soin", 2, 70],
  ["potion de endurance", 6, 20],
];

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
        inventaire[i][1] = parseInt(prompt("Quel est le nouveau prix de la potion?"));
        inventaire[i][2] += parseInt(prompt("Quel est la quantité de potion à ajouter?"));
      }
    }
  }
  inventaire = inventaire.sort((a, b) => b[1] - a[1]);
}

// ajouterPotion(inventaire, "potion de soin");
console.log(inventaire);

// Cherche moi les potions qui...
function listeStock(inventaire) {
  let result;
  for (let i = 0; i < inventaire.length; i++) {
    result = inventaire.filter((item) => item[2] != 0);
  }
  return result;
}

function listeStockVide(inventaire) {
  let result;
  for (let i = 0; i < inventaire.length; i++) {
    result = inventaire.filter((item) => item[2] == 0);
  }
  return result;
}

console.log(inventaire);
console.log(listeStock(inventaire));
console.log(listeStockVide(inventaire));
console.log(inventaire);

// Allons faire de la cueillette, nous avons besoin de plus de potions !

function creerPotionV2(idPotion, ingredients, prix = 10, stock = 1) {
  const manuelDeFabrication = ["Champignons", "Branche", "Blé"];

  if (JSON.stringify(ingredients) == JSON.stringify(manuelDeFabrication)) {
    return {
      id: idPotion,
      prix: prix,
      stock: stock,
    };
  } else {
    return new Error("Il manque des ingrédients à cette potion");
  }
}
const ingredients = ["Champignons", "Branche", "Blé"];

console.log(creerPotionV2("Potion de soin", ingredients));

// Une potion n'est jamais fabriquée en retard, ni en avance d'ailleurs. Elle est fabriquée précisément à l'heure prévue !
const nomPotion = "potion de soin";

function creerPotionV3(idPotion, ingredients, delay = null, prix = 10, stock = 1) {
  const manuelDeFabrication = ["Champignons", "Branche", "Blé"];
  if (JSON.stringify(ingredients) == JSON.stringify(manuelDeFabrication)) {
    const potion = {
      id: idPotion,
      prix: prix,
      stock: stock,
    };
    if (delay) {
      console.log("Fabrication en cours...");
      setTimeout(() => {
        console.log(`Fabircation de ${potion.id} terminé ! Son prix est de ${potion.prix} pièces etnous en stockons ${potion.stock}.`);
        return potion;
      }, delay);
    } else {
      return {
        id: idPotion,
        prix: prix,
        stock: stock,
      };
    }
  } else {
    return new Error("Il manque des ingrédients à cette potion");
  }
}
creerPotionV3(nomPotion, ingredients, 2000);
