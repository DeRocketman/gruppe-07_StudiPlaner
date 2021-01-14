import { ProjektService} from "./projekt/services/projektService.js";
import {Projekt} from "./projekt/domain/projekt.js";
import {BeispielProjekt} from "./projekt/beispielProjekt.js";
import {BeispielProjekt2} from "./projekt/beispielProjekt2.js";

//Listenelemente auswählen zum ein- bzw. ausblenden
let toggle = document.getElementsByClassName('caret');
let i;
for (i = 0; i < toggle.length; i++) {
    toggle[i].addEventListener('click', function() {
        this.parentElement.querySelector(".nested").classList.toggle('active');
        this.classList.toggle('caret-down');
    });
}

//Diese Funktion verbindet Daten der Projekte mit der Ansicht
//TODO code den/die Connector
function dataViewConnector(){
    let projektloader;
    switch (projektnummer){
        case 1:
            projektloader = JSON.parse(window.localStorage.getItem('savedprojekt1'));
            break;
        case 2:
            projektloader = JSON.parse(window.localStorage.getItem('savedprojekt2'));
            break;
        case 3:
            projektloader = JSON.parse(window.localStorage.getItem('savedprojekt3'));
            break;
        case 4:
            projektloader = JSON.parse(window.localStorage.getItem('savedprojekt4'));
            break;
        case 5:
            projektloader = JSON.parse(window.localStorage.getItem('savedprojekt5'));
            break;
        default:
            alert("projekloader hat ein Problem")
    }
    //Connection zu Projektbezeichnung

    // document.getElementById("projektName").innerHTML = projektloader.projektbezeichnung;
    //Connection zu Teilnehmern
    document.getElementById("tn1").innerHTML = projektloader.teilnehmer1name;
    document.getElementById("tn2").innerHTML = projektloader.teilnehmer2name;
    document.getElementById("tn3").innerHTML = projektloader.teilnehmer3name;
    document.getElementById("tn4").innerHTML = projektloader.teilnehmer4name;
    document.getElementById("tn5").innerHTML = projektloader.teilnehmer5name;
    document.getElementById("tn6").innerHTML = projektloader.teilnehmer6name;
    document.getElementById("tn7").innerHTML = projektloader.teilnehmer7name;
    document.getElementById("tn8").innerHTML = projektloader.teilnehmer8name;
    document.getElementById("tn9").innerHTML = projektloader.teilnehmer9name;
    //TODO Piechart abgreifen und hier mit Daten verbinden (vielleicht automatisiert und verknüpft mit Aufgaben)
    //Piechartdatenconnection
    //Connection zu Literatur
    document.getElementById("lit1").innerHTML = projektloader.literatur1;
    document.getElementById("lit2").innerHTML = projektloader.literatur2;
    document.getElementById("lit3").innerHTML = projektloader.literatur3;
    //Connection zu Link
    document.getElementById("link1").firstChild.href = projektloader.link1href;
    document.getElementById("link1").firstChild.innerHTML = projektloader.link1text;
    document.getElementById("link2").firstChild.href = projektloader.link2href;
    document.getElementById("link2").firstChild.innerHTML = projektloader.link2text;
    //Notizen
    document.getElementById("notizen").value = projektloader.notizen;
    //Connection zu Aufgaben
    document.getElementById("aufgabe_1").value = projektloader.aufgabe1value;
    document.getElementById("checkbox1").checked = projektloader.aufgabe1box;
    //document.getElementById("labelchkbox1").innerHTML= projektloader.aufgabe1boxtext;
    document.getElementById("aufgabe_2").value = projektloader.aufgabe2value;
    document.getElementById("checkbox2").checked = projektloader.aufgabe2box;
    //document.getElementById("labelchkbox2").innerHTML=projektloader.aufgabe2boxtext;
    document.getElementById("aufgabe_3").value = projektloader.aufgabe3value;
    document.getElementById("checkbox3").checked = projektloader.aufgabe3box;
    //document.getElementById("labelchkbox3").innerHTML = projektloader.aufgabe3boxtext;
    //Connection zu mail
    personAmail = projektloader.teilnehmer1email;
    personBmail = projektloader.teilnehmer2email;
    personCmail = projektloader.teilnehmer3email;
    //Verborgene Attribute
}
//Mailfunktionenen
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
//Mit dieser Funktion wird durch die einzelnen Projekte gewechselt
//  @TODO Loaderfunktion implemtieren!
document.getElementById("projektName").addEventListener('click', projektSwitchFunktion);
let projectClickCounter = 0;
let projektnummer;
function projektSwitchFunktion(){
    switch (projectClickCounter){
        case 0:
            if (projektAnzahl <=5) {
                document.getElementById("projektName").innerHTML = "Neues Projekt anlegen?";
                document.getElementById("neuesProjekt").className = "elementON";
            } else {
                document.getElementById("projektName").innerHTML = "Max Anzahl Projekte erreicht"
                document.getElementById("infoH2").innerHTML = "Projekte löschen?"
            }
            projectClickCounter++
            break;
        case 1:
            projektnummer = 1;
            let aktivloader = JSON.parse(window.localStorage.getItem('savedprojekt1'))
            if (aktivloader.aktiviert===true) {
                document.getElementById("neuesProjekt").className = "elementOFF";
                dataViewConnector(projektnummer);
                projectClickCounter++;
                break;
            }
        case 2:
            projektnummer = 2;
            let aktivloader2 = JSON.parse(window.localStorage.getItem('savedprojekt2'))
            if (aktivloader2.aktiviert===true) {
                projectClickCounter++;
                dataViewConnector(projektnummer);
                break;
            }
        case 3:
            projektnummer = 3;
            let aktivloader3 = JSON.parse(window.localStorage.getItem('savedprojekt3'))
            if (aktivloader3.aktiviert===true) {
                dataViewConnector(projektnummer)
                projectClickCounter++;
                break;
            }
        case 4:
            projektnummer = 4;
            let aktivloader4 = JSON.parse(window.localStorage.getItem('savedprojekt4'))
            if (aktivloader4.aktiviert===true) {
                dataViewConnector(projektnummer=4);
                projectClickCounter++;
                break;
            }
        case 5:
            projektnummer = 5;
            projectClickCounter=0;
            let aktivloader5 = JSON.parse(window.localStorage.getItem('savedprojekt5'))
            if (aktivloader5.aktiviert===true) {
                dataViewConnector(projektnummer=5);
                break;
            }
    }
}
//1. Diese Funktion schafft die Vorrausetzung zum Anlegen eines neuen Projekts
function frageNachProjektFunktion(){
    document.getElementById("projektName").innerHTML = "Neues Projekt anlegen?";
    document.getElementById("neuesProjekt").className = "elementON";
}
//2. Diese Funktion schaltet Option zum Anlegen eines Projekts frei
document.getElementById("neuesProjekt").addEventListener("click", SchalteFreiFunktion);
function SchalteFreiFunktion() {
    document.getElementById("inputFeld").className = "elementON";
    document.getElementById("projektuebernahme").className = "settingON";
    document.getElementById("projektabrruch").className = "settingON";
}
//3. Diese Funktion erstellt ein neues Projekt (Usersicht)\intern werden Projekte vorerst lediglich visible
var projektAnzahl = 0;
document.getElementById("projektuebernahme").addEventListener("click", projektAnlegeFunktion);
function projektAnlegeFunktion(){
    projektAnzahl++;
    if (projektAnzahl <= 5) {
        switch (projektAnzahl) {
            case 1:
                projekt1.aktiviert = true;
                //projekt1.projektbezeichnung = document.getElementById("inputFeld").value;
                window.localStorage.setItem('savedprojekt1', JSON.stringify(projekt1));
                document.getElementById("projektName").innerHTML = projekt1.projektbezeichnung;
                break;
            case 2:
                projekt2.aktiviert = true;
                //projekt2.projektbezeichnung = document.getElementById("inputFeld").value;
                document.getElementById("projektName").innerHTML = projekt2.projektbezeichnung;
                window.localStorage.setItem('savedprojekt2', JSON.stringify(projekt2));
                break;
            case 3:
                projektvorlage.aktiviert = true;
                projektvorlage.projektbezeichnung = document.getElementById("inputFeld").value;
                document.getElementById("projektName").innerHTML = projektvorlage.projektbezeichnung;
                window.localStorage.setItem('savedprojekt3', JSON.stringify(projektvorlage));
                break;
            case 4:
                projektvorlage.aktiviert = true;
                projektvorlage.projektbezeichnung = document.getElementById("inputFeld").value;
                document.getElementById("projektName").innerHTML = projektvorlage.projektbezeichnung;
                window.localStorage.setItem('savedprojekt4', JSON.stringify(projektvorlage));
                break;
            case 5:
                projektvorlage.aktiviert = true;
                projektvorlage.projektbezeichnung = document.getElementById("inputFeld").value;
                document.getElementById("projektName").innerHTML = projektvorlage.projektbezeichnung;
                window.localStorage.setItem('savedprojekt5', JSON.stringify(projektvorlage));
                break;
        }
    }
    //nach Anlegen des Projekts bzw. Abbruch wird alles wieder invisible -> Rückkehr zur normalen Ansicht
    document.getElementById("inputFeld").value = null;
    document.getElementById("inputFeld").className = "elementOFF";
    document.getElementById("projektuebernahme").className = "setting";
    document.getElementById("projektabrruch").className = "setting";
    document.getElementById("neuesProjekt").className = "elementOFF";
}
//3. Alternativ: Diese Funktion ist der wird bei click des Abbruchbuttons ausgelöst
document.getElementById("projektabrruch").addEventListener("click", projektAbbruchFunktion);
function projektAbbruchFunktion(){
    document.getElementById("inputFeld").className = "elementOFF";
    document.getElementById("projektuebernahme").className = "setting";
    document.getElementById("projektabrruch").className = "setting";
    document.getElementById("neuesProjekt").className = "elementOFF";
    alert('Projekt wurde nicht angelegt');
}
//Diese Funktion soll bei Projekwechseln die Funktionen wieder reseten
function projectswitcher(){
        let classpart = document.getElementsByClassName("elementOFF");
    for (let i = 0; i < document.getElementsByClassName("elementOFF").length ;i++){
                classpart[i].className = "elementON";
    }
}
//Diese Funktionen sollen die Einstellungsmöglichkeiten freischalten (visible machen)
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
* Setting von Mailadressen direkt
* und setting einstellung deaktivieren (invisible machen)
* Vermutlich über Teilnehmerfavoriten gelöst.
*/
let settingONflag = false;
document.getElementById("mailsettings").addEventListener('click', mailsetfunction);
function mailsetfunction(){
    document.getElementById("mailsettingsoki").className = "settingON";
    settingONflag = true;
    if (settingONflag !== false) {
        document.getElementById("mail1").addEventListener('click', setmailname1);
        function setmailname1() {
            //  @TODO Implementieren, wie Name und E Mail von Person1 gesetzt werden
        }
    }
}
document.getElementById("mailsettingsoki").addEventListener('click', mailsetokifunction);
function mailsetokifunction() {
    document.getElementById("mailsettingsoki").className = "setting";
    document.getElementById("mailsettings").className = "setting";
    settingONflag = false;
}


// TODO!: für das Projekt die IndexedDB am besten WP01 nennen, siehe Video zu IndexDB.!
const projektService = new ProjektService();
projektService.fillWindow();
const projektService1 = new ProjektService(new Projekt(2, true, 'Projekt 10000'));
const projektService2 = new ProjektService(BeispielProjekt());
const projektService3 = new ProjektService(BeispielProjekt2());
const projektVerzeichnis = [projektService, projektService1, projektService2, projektService3];


// TODO: REFACTOR THIS AFTER CRUNCH
let counter = 0;

function toggleProjekt() {
    counter++;
    if(counter >= projektVerzeichnis.length) {
        counter = 0;
    }
    projektVerzeichnis[counter].fillWindow();
}

document.getElementById("projektName").addEventListener('click', toggleProjekt);


document.addEventListener('keydown', (evt) => {
    let key = evt.key;

    if (key === "ArrowLeft") {
        counter--;
        if (counter <= 0) {
            counter = projektVerzeichnis.length - 1;
        }
        projektVerzeichnis[counter].fillWindow();
    }

    if (key === "ArrowRight") {
        counter++;
        if(counter >= projektVerzeichnis.length) {
            counter = 0;
        }
        projektVerzeichnis[counter].fillWindow();
    }
});

//Funktion zum Aufruf des Anlegeformulars
document.getElementById("projektAnlegen").addEventListener('click', projektAnlegen);
function projektAnlegen() {
    document.getElementById("projektformular").className = "elementON";
}

//Funktion zum Schließen des Formulars
document.getElementById("projektAbbrechen").addEventListener('click', projektAbbrechen);
function projektAbbrechen() {
    document.getElementById("projektformular").className = "elementOFF";
}

//Funktion zum Loeschen eines Projekts
document.getElementById("projektLoeschen").addEventListener('click', projektLoeschen);
function projektLoeschen() {
    //@TODO: Funktion zum loeschen des aktuell angezeigten Projekts
}


//Funktion zum speichern der eingegebenen Formulardaten fuer das Projekt
document.getElementById("projektSpeichern").addEventListener('click', () => {
    projektEingabenValidieren();
    projektSpeichern();
});


function projektSpeichern() {

    var email = document.getElementById("tn1mail").value;

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

}

/* https://stackoverflow.com/questions/940577/javascript-regular-expression-email-validation
    einfacher regulärer Ausdruck zum Überprüfen des Formats einer E-Mail (patternMail)

    https://regexr.com/37i6s
    regulärer Ausdruck zum Überprüfen des Formats einer URL, in dem Fall mit https (patternLink)

    test() Methode sucht nach einem Pattern, also Muster, in einem String.
    Liefert true zurück, wenn eine Übereinstimmung da ist.
 */
function projektEingabenValidieren() {

    let projektbezeichnung = document.getElementById("projektbezeichnung");
    let tn1mail = document.getElementById("tn1mail");
    let patternMail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    let patternLink = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    let link1ref = document.getElementById("link1ref");

    if(projektbezeichnung.value === ""){
        alert("Dein Projekt braucht einen Namen!")
        return false
    } else if(!(patternMail.test(tn1mail.value))){
        alert("Ups! Das war keine Emailadresse.")
        return false
    } else if(!(patternLink.test(link1ref.value))){
        alert("Der Link bringt dir nichts. Inkorrektes Format!")
        return false
    } else {
        return true
    }
}
