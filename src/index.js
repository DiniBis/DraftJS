//Connexion au Json local
fetch('yugioh-cube.json')
    .then(response => response.json())
    .then(data => {
    console.log(data)
    })
    .catch(error =>
        console.error('Erreur json local',error))


//Exemple de requête avec l'id de Head Huntress
async function loadData() {
    try {
        let carteId = 4031928
        let jsonDataRequest = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?id='+carteId+'&language=fr') //id remplaçable selon la carte
        let jsonData = await jsonDataRequest.json()
        console.log(jsonData)
        return jsonData
    } catch (err) {
        console.log(`Une erreur s'est produite`, err)
    }
}

//Remplacer l'image
const setupImg1 = document.getElementById('carte1Image')
document.addEventListener("DOMContentLoaded", async () => {
    let imageTest = await loadData()
    const monimageTest = document.getElementById('carte1Image')
    monimageTest.setAttribute("src", (imageTest.data[0].card_images[0].image_url))
})

//Remplacer la description
const setupDesc1 = document.getElementById('carte1Description')
document.addEventListener("DOMContentLoaded", async () => {
    let descTest = await loadData()
    setupDesc1.textContent=(descTest.data[0].desc)
})

//Remplacer le nom
const setupNom1 = document.getElementById('carte1Nom')
document.addEventListener("DOMContentLoaded", async () => {
    let Test = await loadData()
    setupNom1.textContent=(Test.data[0].name)
})

//Remplacer le type
const setupType1 = document.getElementById('carte1Type')
document.addEventListener("DOMContentLoaded", async () => {
    let Test = await loadData()
    setupType1.textContent=('Type: '+Test.data[0].type)
})

//Remplacer le Niveau
const setupNiveau1 = document.getElementById('carte1Niveau')
document.addEventListener("DOMContentLoaded", async () => {
    let Test = await loadData()
    setupNiveau1.textContent=('Niveau: '+Test.data[0]?.level)
})

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