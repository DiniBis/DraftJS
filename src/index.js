//Connexion au Json local
/* let dataCartes=[] */

async function loadDataLocal() {
  let jsonDataLocalRequest = await fetch('yugioh-cube.json')
  let jsonDataLocal = await jsonDataLocalRequest.json()
  return jsonDataLocal
}

//Lecture du JsonLocal + Appel à l'affichage via l'API + Clique->ydk
document.addEventListener('DOMContentLoaded', async () => {
  let dataCartes2 = await loadDataLocal()
  /* dataCartes.push(dataCartes2) */
  const randomIndex = Math.floor(Math.random() * dataCartes2.length)
  const randomCardId = dataCartes2[randomIndex].id
  await loadData(randomCardId)

  //Au clique de la carte, l'ajoute au ydk du joueur
  const carte1Image = document.getElementById('carte1Image')
  carte1Image.addEventListener('click', () => {
    const ydkJ1 = document.getElementById('ydkJ1')
    const li = document.createElement('li')
    li.textContent = randomCardId
    ydkJ1.appendChild(li)
    })
});

// Affichage via requêtes à l'API selon l'id du json local
async function loadData(carteId) {
  try {
    let jsonDataRequest=await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${carteId}&language=fr`);
    let jsonData=await jsonDataRequest.json();

    // Remplacer l'image
    const monimageTest = document.getElementById('carte1Image');
    monimageTest.setAttribute('src',jsonData.data[0].card_images[0].image_url);

    //Remplacer la description
    const setupDesc1 = document.getElementById('carte1Description')
    setupDesc1.textContent=(jsonData.data[0].desc)

    //Remplacer le nom
    const setupNom1 = document.getElementById('carte1Nom')
    setupNom1.textContent=(jsonData.data[0].name)

    //Remplacer le type
    const setupType1 = document.getElementById('carte1Type')
    setupType1.textContent=('Type: '+jsonData.data[0].type)

    //Remplacer le niveau
    const setupNiveau1 = document.getElementById('carte1Niveau')
    setupNiveau1.textContent=('Niveau: '+jsonData.data[0]?.level)

    //Remplacer ATK/DEF
    const setupATKDEF1 = document.getElementById('carte1ATKDEF')
    setupATKDEF1.textContent=('ATK/ '+jsonData.data[0]?.atk+' DEF/ '+jsonData.data[0]?.def)
  
    //Remplacer l'attribut
    const setupAttribut1 = document.getElementById('carte1Attribut')
    setupAttribut1.textContent=('Attribut: '+jsonData.data[0]?.attribute)

    //Remplacer race
    const setupRace1 = document.getElementById('carte1Race')
    setupRace1.textContent=('Race: '+jsonData.data[0]?.race)

  }

  catch (err) {
    console.error(`Une erreur s'est produite`, err);
  }
}

carte1=getElementById('carte1')
carte1.addEventListener('click')

/*
Boucle de jeu

Début: Selection du [nombre de joueurs]

Prendre [nombre de joueurs] id aléatoire différents depuis le json local
Tous les afficher en utilisant l'API, via leurs id stockés sur [nombre de joueurs] variables
https://db.ygoprodeck.com/api/v7/cardinfo.php?id= MON ID ICI &language=fr'

Quand un joueur clique sur une carte:
    - Elle ne peut plus être selectionnée
    - Elle est grisée
    - Elle est retirée du json local pour ne plus tomber à nouveau
    - Elle est ajoutée au <.ydk> du joueur correspondant
*/
