/*
    Autor: Kim Lara Feller

    Verwendete Methoden und die Verwendung von canvas sind an folgenden Quellen orientiert:
    https://wiki.selfhtml.org/wiki/JavaScript/Tutorials/Spiele
    https://wiki.selfhtml.org/wiki/JavaScript/Tutorials/Spiele/Arcade-Spiele
 */

//Variabeln Spiel
let x = 0;
let y = 0;
let xZiel = Math.floor(Math.random()*28)*20+20;
let yZiel = Math.floor(Math.random()*22)*20+20;
//Variabeln Punktestandsanzeige / Zeit
let punkte = 0;
let startzeit = new Date();
const zeit = 30;
let restzeit = 0;

document.addEventListener('DOMContentLoaded', function() {

    //Takt mit setInterval erzeugen, um die Funktion Taktung zu wiederholen
    takt = window.setInterval(taktung, 45);

    let spielfeld = document.getElementById('spielflaeche');
    spiel = spielfeld.getContext('2d');

    let papierflieger = new Image();
    papierflieger.src='images/papierflieger.png';

    papierflieger.onload = function() {
        spiel.drawImage(papierflieger,x,y);
    }

    function zeichneZiel() {
         let ziel = new Image();
         ziel.src='images/notizblock.png';

         ziel.onload = function() {
             spiel.drawImage(ziel,xZiel,yZiel);
         }
    }
    zeichneZiel();

    function zielErreicht() {
        if (x === xZiel && y === yZiel) {
            console.log('Ziel wurde erreicht.');
            xZiel = Math.floor(Math.random()*28)*20+20;
            yZiel = Math.floor(Math.random()*22)*20+20;

            punkte++;
            document.getElementById('punktestand').innerHTML = 'Punktestand: ' + punkte;
        }
    }
    //Methode dient zum Löschen und Neuzeichnen der Position des Papierfliegers
    //Wird anhand des Taktes wiederholt aufgerufen
    function taktung() {
        console.log('Taktung funktioniert');
        spiel.clearRect(0, 0, spielflaeche.width, spielflaeche.height);
        spiel.beginPath();
        zeichneZiel();
        spiel.drawImage(papierflieger,x,y);
        zielErreicht();

        let zeitAktuell = new Date();
        //Zeit durch 1000 da ms
        restzeit = zeit - Math.floor((zeitAktuell.getTime()-startzeit.getTime())/1000);
        document.getElementById('zeit').innerHTML = 'Zeit: ' + restzeit;

        if (restzeit <=0){
            beendeSpiel();
        }
    }

    function beendeSpiel() {
        clearInterval(takt);
        document.getElementById('spielende').style.display = 'block';
    }

    document.addEventListener('keydown', (evt) => {

        let key = evt.key;

        //Abfrage der Pfeiltasten zum Bewegen der Spielfigur
        console.log('Tastaturcode: ' + evt.key);
        //Pfeiltaste links
        if (key === "ArrowLeft") {
            x -= 20;

            if (x <= 0) {
                x = 0
            }
        }
        //Pfeiltaste oben
        if (key === "ArrowUp") {
            y -= 20;

            if (y <= 0) {
                y = 0;
            }
        }
        //Pfeiltaste rechts
        if (key === "ArrowRight") {
            x += 20;

            if (x >= 600) {
                x = 580;
            }
        }
        //Pfeiltaste unten
        if (key === "ArrowDown") {
               y += 20;

               if (y >= 480) {
                   y = 460;
               }
       }
    })
})