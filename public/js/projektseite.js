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
    deleter ist ein Objekt mit Anfangswerten für ein neues oder gelöschtes Projekt (Werte
    sollen dabei einfach überschrieben werden und Ansicht zurück gesetzt werden)
 */
let deleter = {
    //Anfangswerte für neue Projekte oder nach löschen
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

    anleger(){
        document.getElementById("tn1").className = "elementOFF";
        document.getElementById("tn2").className = "elementOFF";
        document.getElementById("tn3").className = "elementOFF";
        document.getElementById("tn4").className = "elementOFF";
        document.getElementById("tn5").className = "elementOFF";
        document.getElementById("tn6").className = "elementOFF";
        document.getElementById("tn7").className = "elementOFF";
        document.getElementById("tn8").className = "elementOFF";
        document.getElementById("tn9").className = "elementOFF";

        document.getElementById("piechart").className="elementOFF";
        document.getElementById("lit1").className = "elementOFF";
        document.getElementById("lit2").className = "elementOFF";
        document.getElementById("lit3").className = "elementOFF";
        document.getElementById("link1").className = "elementOFF";
        document.getElementById("link2").className = "elementOFF";
        document.getElementById("link3").className = "elementOFF";
        document.getElementById("notizen").value = null;
        document.getElementById("mailP1").innerHTML = "Person A";
        document.getElementById("mailP2").innerHTML = "Person B";
        document.getElementById("mailP3").innerHTML = "Person C";
        document.getElementById("aufgabe_1").className ="elementOFF";
        document.getElementById("aufgabe_2").className ="elementOFF";
        document.getElementById("aufgabe_3").className ="elementOFF";
    }
}
//Projektspeicher 1-5:
let projekt1 = {
    //Grunddaten
    "projektnummer" : 1,
    "aktiviert" : false,
    "projektbezeichnung" : "",

    //Teilnehmerdaten <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "teilnehmer1vorname" : null,
    "teilnehmer1name"    : null,
    "teilnehmer1email"   : null,
    "teilnehmer1favorit" : true,
    "teilnehmer2vorname" : null,
    "teilnehmer2name"    : null,
    "teilnehmer2email"   : null,
    "teilnehmer2favorit" : true,
    "teilnehmer3vorname" : null,
    "teilnehmer3name"    : null,
    "teilnehmer3email"   : null,
    "teilnehmer3favorit" : true,
    "teilnehmer4vorname" : null,
    "teilnehmer4name"    : null,
    "teilnehmer4email"   : null,
    "teilnehmer4favorit" : false,
    "teilnehmer5vorname" : null,
    "teilnehmer5name"    : null,
    "teilnehmer5email"   : null,
    "teilnehmer5favorit" : false,
    "teilnehmer6vorname" : null,
    "teilnehmer6name"    : null,
    "teilnehmer6email"   : null,
    "teilnehmer6favorit" : false,
    "teilnehmer7vorname" : null,
    "teilnehmer7name"    : null,
    "teilnehmer7email"   : null,
    "teilnehmer7favorit" : false,
    "teilnehmer8vorname" : null,
    "teilnehmer8name"    : null,
    "teilnehmer8email"   : null,
    "teilnehmer8favorit" : false,
    "teilnehmer9vorname" : null,
    "teilnehmer9name"    : null,
    "teilnehmer9email"   : null,
    "teilnehmer9favorit" : false,

    //PieChart
    //  @TODO Implementierung von Louis?

    //Literatur <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "literatur1" : null,
    "literatur2" : null,
    "literatur3" : null,

    // Links    <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "link1href" : null,
    "link1text" : null,
    "link2href" : null,
    "link2text" : null,
    "link3href" : null,
    "link3text" : null,

    // Aufgaben <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "aufgabe1value" : null,
    "aufgabe1box"   : false,
    "aufhabe1boxtext" : null,
    "aufgabe2value" : null,
    "aufgabe2box"   : false,
    "aufhabe2boxtext" : null,
    "aufgabe3value" : null,
    "aufgabe3box"   : false,
    "aufhabe3boxtext" : null,

    //  @TODO SPEICHER/LOAD-Funktion implementieren
}
let projekt2 = {
    "projektnummer" : 2,
    "aktiviert" : false,
    "projektbezeichnung" : "",

    //Teilnehmerdaten <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "teilnehmer1vorname" : null,
    "teilnehmer1name"    : null,
    "teilnehmer1email"   : null,
    "teilnehmer1favorit" : true,
    "teilnehmer2vorname" : null,
    "teilnehmer2name"    : null,
    "teilnehmer2email"   : null,
    "teilnehmer2favorit" : true,
    "teilnehmer3vorname" : null,
    "teilnehmer3name"    : null,
    "teilnehmer3email"   : null,
    "teilnehmer3favorit" : true,
    "teilnehmer4vorname" : null,
    "teilnehmer4name"    : null,
    "teilnehmer4email"   : null,
    "teilnehmer4favorit" : false,
    "teilnehmer5vorname" : null,
    "teilnehmer5name"    : null,
    "teilnehmer5email"   : null,
    "teilnehmer5favorit" : false,
    "teilnehmer6vorname" : null,
    "teilnehmer6name"    : null,
    "teilnehmer6email"   : null,
    "teilnehmer6favorit" : false,
    "teilnehmer7vorname" : null,
    "teilnehmer7name"    : null,
    "teilnehmer7email"   : null,
    "teilnehmer7favorit" : false,
    "teilnehmer8vorname" : null,
    "teilnehmer8name"    : null,
    "teilnehmer8email"   : null,
    "teilnehmer8favorit" : false,
    "teilnehmer9vorname" : null,
    "teilnehmer9name"    : null,
    "teilnehmer9email"   : null,
    "teilnehmer9favorit" : false,

    //PieChart
    //  @TODO Implementierung PIECHART von Louis?

    //Literatur <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "literatur1" : null,
    "literatur2" : null,
    "literatur3" : null,

    // Links    <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "link1href" : null,
    "link1text" : null,
    "link2href" : null,
    "link2text" : null,
    "link3href" : null,
    "link3text" : null,

    // Aufgaben <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "aufgabe1value" : null,
    "aufgabe1box"   : false,
    "aufhabe1boxtext" : null,
    "aufgabe2value" : null,
    "aufgabe2box"   : false,
    "aufhabe2boxtext" : null,
    "aufgabe3value" : null,
    "aufgabe3box"   : false,
    "aufhabe3boxtext" : null,
}
let projekt3 = {
    "projektnummer" : 3,
    "aktiviert" : false,
    "projektbezeichnung" : "",

    //Teilnehmerdaten <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "teilnehmer1vorname" : null,
    "teilnehmer1name"    : null,
    "teilnehmer1email"   : null,
    "teilnehmer1favorit" : true,
    "teilnehmer2vorname" : null,
    "teilnehmer2name"    : null,
    "teilnehmer2email"   : null,
    "teilnehmer2favorit" : true,
    "teilnehmer3vorname" : null,
    "teilnehmer3name"    : null,
    "teilnehmer3email"   : null,
    "teilnehmer3favorit" : true,
    "teilnehmer4vorname" : null,
    "teilnehmer4name"    : null,
    "teilnehmer4email"   : null,
    "teilnehmer4favorit" : false,
    "teilnehmer5vorname" : null,
    "teilnehmer5name"    : null,
    "teilnehmer5email"   : null,
    "teilnehmer5favorit" : false,
    "teilnehmer6vorname" : null,
    "teilnehmer6name"    : null,
    "teilnehmer6email"   : null,
    "teilnehmer6favorit" : false,
    "teilnehmer7vorname" : null,
    "teilnehmer7name"    : null,
    "teilnehmer7email"   : null,
    "teilnehmer7favorit" : false,
    "teilnehmer8vorname" : null,
    "teilnehmer8name"    : null,
    "teilnehmer8email"   : null,
    "teilnehmer8favorit" : false,
    "teilnehmer9vorname" : null,
    "teilnehmer9name"    : null,
    "teilnehmer9email"   : null,
    "teilnehmer9favorit" : false,

    //PieChart
    //  @TODO Implementierung PIECHART von Louis?

    //Literatur <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "literatur1" : null,
    "literatur2" : null,
    "literatur3" : null,

    // Links    <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "link1href" : null,
    "link1text" : null,
    "link2href" : null,
    "link2text" : null,
    "link3href" : null,
    "link3text" : null,

    // Aufgaben <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "aufgabe1value" : null,
    "aufgabe1box"   : false,
    "aufhabe1boxtext" : null,
    "aufgabe2value" : null,
    "aufgabe2box"   : false,
    "aufhabe2boxtext" : null,
    "aufgabe3value" : null,
    "aufgabe3box"   : false,
    "aufhabe3boxtext" : null,
}
let projekt4 = {
    "projektnummer" :4,
    "aktiviert" : false,
    "projektbezeichnung" : "",

    //Teilnehmerdaten <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "teilnehmer1vorname" : null,
    "teilnehmer1name"    : null,
    "teilnehmer1email"   : null,
    "teilnehmer1favorit" : true,
    "teilnehmer2vorname" : null,
    "teilnehmer2name"    : null,
    "teilnehmer2email"   : null,
    "teilnehmer2favorit" : true,
    "teilnehmer3vorname" : null,
    "teilnehmer3name"    : null,
    "teilnehmer3email"   : null,
    "teilnehmer3favorit" : true,
    "teilnehmer4vorname" : null,
    "teilnehmer4name"    : null,
    "teilnehmer4email"   : null,
    "teilnehmer4favorit" : false,
    "teilnehmer5vorname" : null,
    "teilnehmer5name"    : null,
    "teilnehmer5email"   : null,
    "teilnehmer5favorit" : false,
    "teilnehmer6vorname" : null,
    "teilnehmer6name"    : null,
    "teilnehmer6email"   : null,
    "teilnehmer6favorit" : false,
    "teilnehmer7vorname" : null,
    "teilnehmer7name"    : null,
    "teilnehmer7email"   : null,
    "teilnehmer7favorit" : false,
    "teilnehmer8vorname" : null,
    "teilnehmer8name"    : null,
    "teilnehmer8email"   : null,
    "teilnehmer8favorit" : false,
    "teilnehmer9vorname" : null,
    "teilnehmer9name"    : null,
    "teilnehmer9email"   : null,
    "teilnehmer9favorit" : false,

    //PieChart
    //  @TODO Implementierung PIECHART von Louis?

    //Literatur <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "literatur1" : null,
    "literatur2" : null,
    "literatur3" : null,

    // Links    <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "link1href" : null,
    "link1text" : null,
    "link2href" : null,
    "link2text" : null,
    "link3href" : null,
    "link3text" : null,

    // Aufgaben <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "aufgabe1value" : null,
    "aufgabe1box"   : false,
    "aufhabe1boxtext" : null,
    "aufgabe2value" : null,
    "aufgabe2box"   : false,
    "aufhabe2boxtext" : null,
    "aufgabe3value" : null,
    "aufgabe3box"   : false,
    "aufhabe3boxtext" : null,
}
let projekt5 = {
    "projektnummer" : 5,
    "aktiviert" : false,
    "projektbezeichnung" : "",

    //Teilnehmerdaten <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "teilnehmer1vorname" : null,
    "teilnehmer1name"    : null,
    "teilnehmer1email"   : null,
    "teilnehmer1favorit" : true,
    "teilnehmer2vorname" : null,
    "teilnehmer2name"    : null,
    "teilnehmer2email"   : null,
    "teilnehmer2favorit" : true,
    "teilnehmer3vorname" : null,
    "teilnehmer3name"    : null,
    "teilnehmer3email"   : null,
    "teilnehmer3favorit" : true,
    "teilnehmer4vorname" : null,
    "teilnehmer4name"    : null,
    "teilnehmer4email"   : null,
    "teilnehmer4favorit" : false,
    "teilnehmer5vorname" : null,
    "teilnehmer5name"    : null,
    "teilnehmer5email"   : null,
    "teilnehmer5favorit" : false,
    "teilnehmer6vorname" : null,
    "teilnehmer6name"    : null,
    "teilnehmer6email"   : null,
    "teilnehmer6favorit" : false,
    "teilnehmer7vorname" : null,
    "teilnehmer7name"    : null,
    "teilnehmer7email"   : null,
    "teilnehmer7favorit" : false,
    "teilnehmer8vorname" : null,
    "teilnehmer8name"    : null,
    "teilnehmer8email"   : null,
    "teilnehmer8favorit" : false,
    "teilnehmer9vorname" : null,
    "teilnehmer9name"    : null,
    "teilnehmer9email"   : null,
    "teilnehmer9favorit" : false,

    //PieChart
    //  @TODO Implementierung PIECHART von Louis?

    //Literatur <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "literatur1" : null,
    "literatur2" : null,
    "literatur3" : null,

    // Links    <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "link1href" : null,
    "link1text" : null,
    "link2href" : null,
    "link2text" : null,
    "link3href" : null,
    "link3text" : null,

    // Aufgaben <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "aufgabe1value" : null,
    "aufgabe1box"   : false,
    "aufhabe1boxtext" : null,
    "aufgabe2value" : null,
    "aufgabe2box"   : false,
    "aufhabe2boxtext" : null,
    "aufgabe3value" : null,
    "aufgabe3box"   : false,
    "aufhabe3boxtext" : null,
}

//Mailfunktionen
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






document.getElementById("projektName").addEventListener('click', projektSwitchFunktion);
function projektSwitchFunktion(){
   var projectClickCounter = 0;
    document.getElementById("projektName").innerHTML = "Neues Projekt anlegen?";
    document.getElementById("neuesProjekt").className = "elementON";
        if (projektAnzahl >0) {
            projectClickCounter++
            switch (projectClickCounter){
                case 1:
                    if (projekt1.aktiviert===true) {
                        document.getElementById("projektName").innerHTML = projekt1.projektbezeichnung;
                    }
                    break;
            }
        } else {
            document.getElementById("projektName").innerHTML = "Neues Projekt anlegen?";
            document.getElementById("neuesProjekt").className = "elementON";
        }
}
//Diese Funktion schaltet Option zum Anlegen eines Projekts frei
document.getElementById("neuesProjekt").addEventListener("click", SchalteFreiFunktion);
function SchalteFreiFunktion() {
    document.getElementById("inputFeld").className = "elementON";
    document.getElementById("projektuebernahme").className = "settingON";
    document.getElementById("projektabrruch").className = "settingON";
}
//Diese Funktion erstellt ein neues Projekt (Usersicht)\intern werden Projekte vorerst lediglich visible
var projektAnzahl = 0;
document.getElementById("projektuebernahme").addEventListener("click", projektAnlegeFunktion);
function projektAnlegeFunktion(){
    projektAnzahl++;
    if (projektAnzahl <= 5){
        switch (projektAnzahl) {
            case 1:
                projekt1.aktiviert = true;
                projekt1.projektname = document.getElementById("inputFeld").value;
                deleter.anleger();
                break;
            case 2:
                projekt2.aktiviert = true;
                projekt2.projektname = document.getElementById("inputFeld").value;
                deleter.anleger();
            case 3:
                projekt3.aktiviert = true;
                projekt3.projektname = document.getElementById("inputFeld").value;
                deleter.anleger();
            case 4:
                projekt4.aktiviert = true;
                projekt4.projektname = document.getElementById("inputFeld").value;
                deleter.anleger();
            case 5:
                projekt5.aktiviert = true;
                projekt5.projektname = document.getElementById("inputFeld").value;
                deleter.anleger();
        }
    }
    //nach Anlegen des Projekts bzw. Abbruch wird alles wieder invisible -> Rückkehr zur normalen Ansicht
    document.getElementById("inputFeld").value = null;
    document.getElementById("inputFeld").className = "elementOFF";
    document.getElementById("projektuebernahme").className = "setting";
    document.getElementById("projektabrruch").className = "setting";
    document.getElementById("neuesProjekt").className = "elementOFF";
}
//Diese Funktion ist der wird bei click des Abbruchbuttons ausgelöst
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
//Mit dieser Funktion wird der Tooltip beim hovern ausgelöst DS: Tooltiptext in HTML zu finden (gut oder schlecht?)
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

