
/* Listenelemente auswählen zum ein- bzw. ausblenden */
let toggle = document.getElementsByClassName('caret');
let i;

for (i = 0; i < toggle.length; i++) {
    toggle[i].addEventListener('click', function() {
        this.parentElement.querySelector(".nested").classList.toggle('active');
        this.classList.toggle('caret-down');
    });
}
/*
Fuer die Beta der Seite eine festgelegte maximale Anzahl von Projekten (5)
@TODO array für projekt? Wenn ja -> erübrigt sich begrenzte anzahl
 */
var projektarray = [projekt1];
let projekt1 = {
    //Anfangswerte für Projekte
    "aktiviert" : false,
    "projektname" : "", //
    "teilnehmer1" : "",
    "teilnehmer2" : "",
    "teilnehmer3" : "",
    "teilnehmer4" : "",
    "teilnehmer5" : "",
    "teilnehmer6" : "",
    "teilnehmer7" : "",
    "teilnehmer8" : "",
    "teilnehmer9" : "",
    "literatur1"  : "",
    "literatur2"  : "",
    "literatur3"  : "",
    "notizen"     : "",
    "aufgabe1text": "",
    "aufgabe1box" : false,
    "aufgabe2text": "",
    "aufgabe2box" : false,
    "aufgabe3text": "",
    "aufgabe3box" : false,

    // @TODO Eingabeaufforderung der Mailaddressen (3 Favorieten aus Teilnehmerliste!) implementieren
    personAmail : "",
    personBmail : "",
    personCmail : "",

}

/*
        Mailfunktion
*/
let personAmail;
let personBmail;
let personCmail;
let mailbetreff = "?subject=" + document.getElementById("projektName").innerHTML;
function mailsender1() {
    location.href = "mailto:" + personAmail+mailbetreff;
}
function mailsender2() {
    location.href = "mailto:" + personBmail+mailbetreff;
}
function mailsender3() {
    location.href = "mailto:" + personCmail+mailbetreff;
}
/*
* Projektwechseln
*/
document.getElementById("projektName").addEventListener('click', projektSwitchFunktion);
document.getElementById("projektuebernahme").addEventListener("click", projektAnlegeFunktion);
document.getElementById("projektabrruch").addEventListener("click", projektAbbruchFunktion);
document.getElementById("neuesProjekt").addEventListener("click", neuesProjektFunktion);

var projectClickCounter = 0;
var projektAnzahl = 0;
function projektSwitchFunktion(){
    document.getElementById("projektName").innerHTML = "Neues Projekt anlegen?";
    document.getElementById("neuesProjekt").className = "elementON";
    projectClickCounter++
        if (projektAnzahl >0) {
            document.getElementById("projektName").innerHTML = projekt1.projektname;

        }
}
function neuesProjektFunktion() {
    document.getElementById("inputFeld").className = "elementON";
    document.getElementById("projektuebernahme").className = "settingON";
    document.getElementById("projektabrruch").className = "settingON";
}
function projektAnlegeFunktion(){
    projektAnzahl++;
    if (projektAnzahl <= 5){
        switch (projektAnzahl) {
            case 1:
                projekt1.aktiviert = true;
                projekt1.projektname = document.getElementById("inputFeld").value;
        }
    }
    document.getElementById("inputFeld").className = "elementOFF";
    document.getElementById("projektuebernahme").className = "setting";
    document.getElementById("projektabrruch").className = "setting";
}
function projektAbbruchFunktion(){
    alert('Projekt wurde nicht angelegt');
}
function projectswitcher(){
        let classpart = document.getElementsByClassName("elementOFF");
    for (let i = 0; i < document.getElementsByClassName("elementOFF").length ;i++){
                classpart[i].className = "elementON";
    }
}
/*
* Settingsbuttons visible machen
*/
document.getElementById("teilnehmer").addEventListener('click', dblclickfunction1);
function dblclickfunction1() {
        document.getElementById("teilnehmersetting").className = "settingON";
}
document.getElementById("piechart").addEventListener('click', dblclickfunction2);
function dblclickfunction2() {
    document.getElementById("piechartsetting").className = "settingON";
}
document.getElementById("aufgaben").addEventListener('click', dblclickfunction3);
function dblclickfunction3() {
    document.getElementById("aufgabensetting").className = "settingON";
}
document.getElementById("erinnerungsmailset").addEventListener('click', dblclickfunction4);
function dblclickfunction4() {
    document.getElementById("mailsettings").className = "settingON";
}
/*
* Setting von Mailadressen
* und settingeinstellung deaktivieren (invisible machen)
*/
let settingONflag = false;

document.getElementById("mailsettings").addEventListener('click', mailsetfunction);
function mailsetfunction(){
    document.getElementById("mailsettingsoki").className = "settingON";
    settingONflag = true;
    if (settingONflag !== false) {
        document.getElementById("mail1").addEventListener('click', setmailname1);
        function setmailname1() {
            /*
               @TODO Implementieren, wie Name und E Mail von Person1 gesetzt werden
             */
            document.getElementById("projektName").innerHTML = personAmail;
        }
    }
}
document.getElementById("mailsettingsoki").addEventListener('click', mailsetokifunction);
function mailsetokifunction() {
    document.getElementById("mailsettingsoki").className = "setting";
    document.getElementById("mailsettings").className = "setting";
    settingONflag = false;
}

/* Tooltip */
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

