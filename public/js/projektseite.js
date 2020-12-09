//Listenelemente auswählen zum ein- bzw. ausblenden
let toggle = document.getElementsByClassName('caret');
let i;
for (i = 0; i < toggle.length; i++) {
    toggle[i].addEventListener('click', function() {
        this.parentElement.querySelector(".nested").classList.toggle('active');
        this.classList.toggle('caret-down');
    });
}
//Fuer die Beta der Seite eine festgelegte maximale Anzahl von Projekten (5)
//  @TODO array für projekt? Wenn ja -> erübrigt sich begrenzte anzahl
/*
    Projektvorlage ist ein Objekt mit Anfangswerten für ein neues oder gelöschtes Projekt (Werte
    sollen dabei einfach überschrieben werden und Ansicht zurück gesetzt werden)
 */
let projektvorlage = {
    //Ausgangswerte für zurückgesetzte/gelöschte Projekte
    //Grunddaten
    "aktiviert"          : false,
    "projektbezeichnung" : null,
    //Teilnehmerdaten <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "teilnehmer1name"    : "Unbesetzt",
    "teilnehmer1email"   : null,
    "teilnehmer2name"    : "Unbesetzt",
    "teilnehmer2email"   : null,
    "teilnehmer3name"    : "Unbesetzt",
    "teilnehmer3email"   : null,
    "teilnehmer4name"    : "Unbesetzt",
    "teilnehmer4email"   : null,
    "teilnehmer5name"    : "Unbesetzt",
    "teilnehmer5email"   : null,
    "teilnehmer6name"    : "Unbesetzt",
    "teilnehmer6email"   : null,
    "teilnehmer7name"    : "Unbesetzt",
    "teilnehmer7email"   : null,
    "teilnehmer8name"    : "Unbesetzt",
    "teilnehmer8email"   : null,
    "teilnehmer9name"    : "Unbesetzt",
    "teilnehmer9email"   : null,
    //PieChart
    "piechartdone" : 0,
    "piechartdo"   : 0,
    "piecharttodo" : 0,
    //Literatur <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "literatur1" : "Keine Angabe",
    "literatur2" : "Keine Angabe",
    "literatur3" : "Keine Angabe",
    // Links    <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "link1href" : null,
    "link1text" : "Keine Angabe",
    "link2href" : null,
    "link2text" : "Keine Angabe",
    "link3href" : null,
    "link3text" : "Keine Angabe",
    //Notizen
    "notizen"   : null,
    // Aufgaben <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "aufgabe1value" : null,
    "aufgabe1box"   : false,
    "aufgabe2value" : null,
    "aufgabe2box"   : false,
    "aufgabe3value" : null,
    "aufgabe3box"   : false,
    "mailperson1"   : "Person A",
    "mailperson2"   : "Person B",
    "mailperson3"   : "Person C",
    // @TODO Eingabeaufforderung der Mailaddressen (3 Favorieten aus Teilnehmerliste!) implementieren
    personAmail : null,
    personBmail : null,
    personCmail : null,
}
//Pseudoprojekte 1 und 2
let projekt1 = {
    //Grunddaten
    "projektnummer" : 1,
    "aktiviert" : true,
    "projektbezeichnung" : "Webprogrammierung (PP1)",
    //Teilnehmerdaten <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "teilnehmer1name"    : "Benjamin Ansohn McDoughall",
    "teilnehmer1email"   : "benjamim.ansohn.mcdougall@stud.th-luebeck.de",
    "teilnehmer2name"    : "Kim Lara Feller",
    "teilnehmer2email"   : "kim.lara.feller@stud.th-luebeck.de",
    "teilnehmer3name"    : "Louis Grümmer",
    "teilnehmer3email"   : "louis.gruemmer@stud.th-luebeck.de",
    "teilnehmer4name"    : "Unbesetzt",
    "teilnehmer4email"   : null,
    "teilnehmer5name"    : "Unbesetzt",
    "teilnehmer5email"   : null,
    "teilnehmer6name"    : "Unbesetzt",
    "teilnehmer6email"   : null,
    "teilnehmer7name"    : "Unbesetzt",
    "teilnehmer7email"   : null,
    "teilnehmer8name"    : "Unbesetzt",
    "teilnehmer8email"   : null,
    "teilnehmer9name"    : "Unbesetzt",
    "teilnehmer9email"   : null,
    //PieChart
    "piechartdone" : 100,
    "piechartdo"   : 100,
    "piecharttodo" : 200,
    //Literatur <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "literatur1" : "HTML 5 und CSS3, Rheinwerk",
    "literatur2" : "JavaScript for Dummies",
    "literatur3" : "Ist kopierter Code wirklich gestohlen?!, Ratgeber",
    // Links    <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "link1href" : "http://www.gidf.de/",
    "link1text" : "Google ist dein Freund",
    "link2href" : "http://www.fc-hansa.de/",
    "link2text" : "eis.de",
    //Notizen
    "notizen"   : "Tritratralala \nDer Placeholder war lustiger",
    // Aufgaben <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "aufgabe1value" : "Projektseite abschließen",
    "aufgabe1box"   : true,
    "aufgabe1boxtext" : "DO: 08.12.2020",
    "aufgabe2value" : "Impressum abschließen",
    "aufgabe2box"   : false,
    "aufgabe2boxtext" : "DL: 31.12.2020",
    "aufgabe3value" : null,
    "aufgabe3box"   : false,
    "mailperson1"   : "Person A",
    "mailperson2"   : "Person B",
    "mailperson3"   : "Person C",
}
let projekt2 = {
    //Grunddaten
    "projektnummer" : 2,
    "aktiviert" : true,
    "projektbezeichnung" : "Aufstieg 2021 (PP2)",
    //Teilnehmerdaten <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "teilnehmer1vorname" : "Hans A. Rostock",
    "teilnehmer1email"   : "info@hansa.de",
    "teilnehmer2name"    : "Mike Werner",
    "teilnehmer2email"   : "mike.werner@fukhuhila.de",
    "teilnehmer3name"    : "Beinhart",
    "teilnehmer3email"   : "dasmusskesseln@boelkstoff.de",
    "teilnehmer4name"    : "Piekenhagen",
    "teilnehmer4email"   : "Martin.Piekenhagen@hansa.de",
    "teilnehmer5name"    : "Unbesetzt",
    "teilnehmer5email"   : null,
    "teilnehmer6name"    : "Unbesetzt",
    "teilnehmer6email"   : null,
    "teilnehmer7name"    : "Unbesetzt",
    "teilnehmer7email"   : null,
    "teilnehmer8name"    : "Unbesetzt",
    "teilnehmer8email"   : null,
    "teilnehmer9name"    : "Unbesetzt",
    "teilnehmer9email"   : null,
    //PieChart
    "piechartdone" : 100,
    "piechartdo"   : 100,
    "piecharttodo" : 200,
    //Literatur <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "literatur1" : "Bundesligaaufsteiger leicht gemacht",
    "literatur2" : "11 Freunde",
    "literatur3" : "Erfolgreich im Sport",
    // Links    <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "link1href" : "http://www.hansa.de",
    "link1text" : "FC HANSA",
    "link2href" : "https://www.youtube.com/watch?v=fCZVL_8D048",
    "link2text" : "Jerusalema",
    "link3href" : null,
    "link3text" : null,
    //Notizen
    "notizen"   : null,
    // Aufgaben <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "aufgabe1value" : "Tabellenerster nach Hinrunde",
    "aufgabe1box"   : false,
    "aufgabe1boxtext" : "DL: 23.12.2020",
    "aufgabe2value" : "Tabellenerster nach Rückrunde",
    "aufgabe2box"   : false,
    "aufgabe2boxtext" : "DL: 30.07.2021",
    "aufgabe3value" : "Party auf dem Rathausbalkon",
    "aufgabe3box"   : true,
    "aufgabe3boxtext" : "01.12.2012",
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
    document.getElementById("projektName").innerHTML = projektloader.projektbezeichnung;
    //Connection zu Teilnehmer
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
    //Connection zu Links
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
var projectClickCounter = 0;
var projektnummer;
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
                dataViewConnector(projektnummer=1);
                projectClickCounter++;
                break;
            }
        case 2:
            projektnummer = 2;
            let aktivloader2 = JSON.parse(window.localStorage.getItem('savedprojekt2'))
            if (aktivloader2.aktiviert===true) {
                projectClickCounter++;
                dataViewConnector(projektnummer=2);
                break;
            }
        case 3:
            projektnummer = 3;
            let aktivloader3 = JSON.parse(window.localStorage.getItem('savedprojekt3'))
            if (aktivloader3.aktiviert===true) {
                dataViewConnector(projektnummer=3)
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
    if (projektAnzahl <= 5){
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
* und settingeinstellung deaktivieren (invisible machen)
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
//Mit dieser Funktion wird der Tooltip beim hovern ausgelöst DS: Tooltiptext in HTML zu finden (gut oder schlecht?)
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

