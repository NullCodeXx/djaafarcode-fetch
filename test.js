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