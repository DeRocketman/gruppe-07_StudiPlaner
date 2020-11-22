let x = 0;
let y = 0;

document.addEventListener('DOMContentLoaded', function() {

    //Takt mit setInterval erzeugen, um die Funktion zu wiederholen
    takt = window.setInterval(taktung, 300);

    let spielfeld = document.getElementById('spielflaeche');
    spiel = spielfeld.getContext('2d');

    let papierflieger = new Image();
    papierflieger.src='images/papierflieger.png';

    //Papierflieger wird an der angegeben Position gezeichnet: x,y ist die obere rechte Ecke davon
    papierflieger.onload = function() {
        spiel.drawImage(papierflieger,x,y);
    }

    //Methode dient zum Löschen und Neuzeichnen der Position des Papierfliegers
    //Wird anhand des Taktes wiederholt aufgerufen
    function taktung() {
        console.log('Taktung funktioniert');
        spiel.clearRect(0, 0, spielflaeche.width, spielflaeche.height);
        spiel.beginPath();
        spiel.drawImage(papierflieger,x,y);

    }

    document.addEventListener('keydown', (evt) => {

        let key = evt.key;

        //Abfrage der Tasten in der Konsole
        console.log('Tastaturcode: ' + evt.key);

       //Switch/Case, Zahlen beziehen sich auf die Pfeiltasten

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