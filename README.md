# YGO DRAFT JS
![Beautiful Headhuntress](/media/logo.jpg)

## Entrée: Fichier .csv
[source de fichiers csv de boite de draft](https://ygoprodeck.com/cube/)
(sûrement converti en .json pour simplifier)
[convertisseur CSV->JSON](https://csvjson.com/csv2json)

## Boucle de jeu
- [API ygopro](https://ygoprodeck.com/api-guide/) pour trouver par exemple la description d'une carte via son id et l'afficher sur l'html
- Entrée du *nombre de joueurs* (entre 1 et 3)
- Tant que !condition de fin :
    - Affichage et sélection des *nombre de joueurs* cartes au dessus de la boîte (selection aléatoire)
    - Le joueur du tour choisit une carte (modification de son .json)
    - Modification du joueur du tour

### Affichage:
- L'html doit afficher le nombre de carte de chaque types pour chaque joueurs
(ex: *J1: 3 Magies / 5 Monstres / 1 Pièges*)
- Affichage des cartes selectionnables: Nom + Description/Effet + Caractéristiques propres à chaque type de carte:
    - Seulement pour les monstres: ATK/DEF + Niveau + Type + Attribut
    - Seulement pour les magies: Jeu-rapide/Continu/Equipement/Base
    - Seulement pour les pièges: Contre-piège/Continu/Base
- Afficher le joueur du tour qui selectionnera la carte

## Sortie: .ydk
Renvoie *nombre de joueur* fichiers en .ydk pour être lue sur EDOPro

### Ressources
[prendre des clés aléatoires](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
[API ygopro](https://ygoprodeck.com/api-guide/)
Exemple de fichier ydk, format à reprendre pour la sortie dans une balise texte html:
![Exemple de fichier ydk](/media/ydk.png)
[Exemple d'un fichier complet](https://github.com/Larikk/ygo-ydk-files/blob/main/deck/STA03%20Joey.ydk)
### Fonctions:

Actualiser l'affichage carte 1: (requêtes à l'API à partir des ID du json local en entrée)
- Actualise l'image
- Actualise le nom
- Actualise le niveau/race/ ATK/DEF /attribut
- Actualise la description
- Actualise le type

Tirage de cartes:
- Renvoie les id de *nombre de joueurs* cartes du json local aléatoirement

Selection de cartes:
- Quand le bouton correspondant à la carte est cliqué
    - Copier l'id de la carte dans une liste sous forme .ydk
    - Supprimer les cartes du json local pour ne pas les tirer à nouveau

### Note, ajout de cette ligne dans le csv originel pour que la conversion en JSON l'utilise comme clé
> "id", "name", "type", "number"
ex: pour *Big Eye*
{
    "id": 16768387,
    "name": "Big Eye",
    "type": "Flip Effect Monster",
    "number": 1
}


![Maquette du rendu final](/media/figma.png)
