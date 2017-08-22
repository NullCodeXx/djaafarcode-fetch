/*
Fichier de test unitaire.
*/
const fetch = require('./index.js');
//Dog.ceo nous renvois du json.
fetch("https://dog.ceo/api/breeds/list/allsrgrer") //test mauvaise url pour voir l'erreur exit apparaitre, tester node test.js
.then(function(answer) {
    console.log (answer);
    //Vérifier si le chemin est bon ou pas, renvoie une erreur avec exit(0).
    process.exit(0);
}).catch(function(err) {
    console.log(err);
    process.exit(1);
})
/*
Pour tester : npm test
Pour tester côter serveur : node test.js

########## AJOUTER UNE VERSION PATH ##########
1. Faire une commit.
2. Voir sur quel version nous sommes : npm version.
3. Monter d'une version : npm version <patch/minor/major).
4. Envoyer la version : git push --tags.
5. Publier la nouvelle version : npm publish.

*/