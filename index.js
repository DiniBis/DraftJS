/* import data from './yugioh-cube.json' 

console.log(data) */


/* //Requête à l'API de YGOPro
async function loadData() {
    try {
        let jsonDataRequest = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php')
        let jsonData = await jsonDataRequest.json()
        return jsonData
    } catch (err) {
        console.log(`Une erreur s'est produite`, err)
    }
} */

//Exemple de requête avec l'id du Golem de Lave
async function loadData() {
    try {
        let jsonDataRequest = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?id=102380&language=fr') //id remplaçable selon la carte
        let jsonData = await jsonDataRequest.json()
        return jsonData
    } catch (err) {
        console.log(`Une erreur s'est produite`, err)
    }
}
//Je remplace l'image 1 par celle à l'id du golem de lave
const setupImg1 = document.getElementById('carte1Image')
setupImg1.addEventListener('click', async () => {
    let imageTest = await loadData()
    console.log(imageTest)
    const monimageTest = document.getElementById('carte1Image')
    monimageTest.setAttribute("src", (imageTest.data[0].card_images[0].image_url))
})

//Je remplace le texte 1 par celle à l'id du golem de lave
const setupDesc1 = document.getElementById('carte1Description')
setupDesc1.addEventListener('click', async () => {
    let descTest = await loadData()
    console.log(descTest.data[0].desc)
    setupDesc1.textContent=(descTest.data[0].desc)
})

//Exemple de requête dans MON json


const setupNom1 = document.getElementById('carte1Nom')



//Ancien exemples à adapter
/* const setupDogPic = document.getElementById('ex_02_btn')
setupDogPic.addEventListener('click', async () => {
    let imagedeChien = await loadData()
    const monImageDeChien = document.getElementById('ex_02_img')
    monImageDeChien.setAttribute("src", imagedeChien["message"])
}) */


/* async function setupSwapi() {
    const response = await fetch(src="https://swapi.dev/")
    const data = await response.json()
    let persoName = document.querySelector('h3');
    persoName.textContent=data.name;
} */
