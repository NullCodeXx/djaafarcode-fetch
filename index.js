        "use strict";
        
        //Inclure le module xmlhttprequest car nodeJS ne le tient pas en compte.
        let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

        function fetch(url) {
            return new Promise(function(ok, ko) {
                let xhr = new XMLHttpRequest();
                xhr.open("GET", url);
                xhr.onload = function() {
                    if (xhr.status == 200) {
                        ok(xhr.response);
                    } else {
                        ko(xhr.status)
                    }
                };
                xhr.onerror = function(error) {
                    ko(error);
                }
                xhr.send();
            });
        };
       module.exports = fetch;

       /*
       1.Maintenant installer dans le terminal le module : npm install xmlhttprequest
       2.test dans le terminal : node index.js, je dois recetionner : fetch is not defined.
       3.Voir l'erreur, test.
       */