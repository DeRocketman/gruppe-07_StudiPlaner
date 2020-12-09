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
    "aktivier"           : false,
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
    "link1href" : null
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
//Projekte 1-5 JSON:
let projekt1 = {
    //Grunddaten
    "projektnummer" : 1,
    "aktiviert" : true,
    "projektbezeichnung" : "Webprogrammierung (PP1)",
    //Teilnehmerdaten <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "teilnehmer1vorname" : "Benjamin Ansohn McDoughall",
    "teilnehmer1email"   : "benjamim.ansohn.mcdougall@stud.th-luebeck.de",
    "teilnehmer2vorname" : "Kim Lara Feller",
    "teilnehmer2name"    : "Feller",
    "teilnehmer2email"   : "kim.lara.feller@stud.th-luebeck.de",
    "teilnehmer3vorname" : "Louis Grümmer",
    "teilnehmer3email"   : "louis.gruemmer@stud.th-luebeck.de"
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
}
let projekt2 = {
    //Grunddaten
    "projektnummer" : 2,
    "aktiviert" : true,
    "projektbezeichnung" : "Aufstieg 2021 (PP2)",
    //Teilnehmerdaten <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "teilnehmer1vorname" : "Hans A. Rostock",
    "teilnehmer1email"   : "info@hansa.de",
    "teilnehmer2vorname" : "Mike",
    "teilnehmer2name"    : "Werner",
    "teilnehmer2email"   : "mike.werner@fukhuhila.de",
    "teilnehmer3vorname" : "Werner",
    "teilnehmer3name"    : "Beinhart",
    "teilnehmer3email"   : "dasmusskesseln@boelkstoff.de",
    "teilnehmer4vorname" : "Martin",
    "teilnehmer4name"    : "Piekenhagen",
    "teilnehmer4email"   : "Martin.Piekenhagen@hansa.de",
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
//Speicherfunktionen der Projekte in localStorage
function saveALL() {
    window.localStorage.setItem('savedprojekt1', JSON.stringify(projekt1));
    window.localStorage.setItem('savedprojekt2', JSON.stringify(projekt2));
    window.localStorage.setItem('savedprojekt3', JSON.stringify(projekt3));
    window.localStorage.setItem('savedprojekt4', JSON.stringify(projekt4));
    window.localStorage.setItem('savedprojekt5', JSON.stringify(projekt5));
}
//Diese Funktion verbindet Daten der Projekte mit der Ansicht
//TODO code den/die Connector
function dataViewConnector1(){
    //Connection zu Projektbezeichnung
    document.getElementById("projektName").innerHTML = projekt1.projektbezeichnung;
    //Connection zu Teilnehmer
    document.getElementById("tn1").innerHTML = projekt1.teilnehmer1vorname+" "+projekt1.teilnehmer1name;
    document.getElementById("tn2").innerHTML = projekt1.teilnehmer2vorname+" "+projekt1.teilnehmer2name;
    document.getElementById("tn3").innerHTML = projekt1.teilnehmer3vorname+" "+projekt1.teilnehmer3name;
    document.getElementById("tn4").innerHTML = projekt1.teilnehmer4vorname+" "+projekt1.teilnehmer4name;
    document.getElementById("tn5").innerHTML = projekt1.teilnehmer5vorname+" "+projekt1.teilnehmer5name;
    document.getElementById("tn6").innerHTML = projekt1.teilnehmer6vorname+" "+projekt1.teilnehmer6name;
    document.getElementById("tn7").innerHTML = projekt1.teilnehmer7vorname+" "+projekt1.teilnehmer7name;
    document.getElementById("tn8").innerHTML = projekt1.teilnehmer8vorname+" "+projekt1.teilnehmer8name;
    document.getElementById("tn9").innerHTML = projekt1.teilnehmer9vorname+" "+projekt1.teilnehmer9name;
    //TODO Piechart abgreifen und hier mit Daten verbinden (vielleicht automatisiert und verknüpft mit Aufgaben)
    //Piechartdatenconnection
    //Connection zu Literatur
    document.getElementById("lit1").innerHTML = projekt1.literatur1;
    document.getElementById("lit2").innerHTML = projekt1.literatur2;
    document.getElementById("lit3").innerHTML = projekt1.literatur3;
    //Connection zu Links
    document.getElementById("link1").firstChild.href = projekt1.link1href;
    document.getElementById("link1").firstChild.innerHTML = projekt1.link1text;
    document.getElementById("link2").firstChild.href = projekt1.link2href;
    document.getElementById("link2").firstChild.innerHTML = projekt1.link2text;
    document.getElementById("link3").firstChild.href = projekt1.link3href;
    document.getElementById("link3").firstChild.innerHTML = projekt1.link3text;
    //Notizen
    document.getElementById("notizen").value = projekt1.notizen;
    //Connection zu Aufgaben
    document.getElementById("aufgabe_1").value = projekt1.aufgabe1value;
    document.getElementById("checkbox1").checked = projekt1.aufgabe1box;
    //document.getElementById("labelchkbox1").innerHTML= projekt1.aufgabe1boxtext;
    document.getElementById("aufgabe_2").value = projekt1.aufgabe2value;
    document.getElementById("checkbox2").checked = projekt1.aufgabe2box;
    //document.getElementById("labelchkbox2").innerHTML=projekt1.aufgabe2boxtext;
    document.getElementById("aufgabe_3").value = projekt1.aufgabe3value;
    document.getElementById("checkbox3").checked = projekt1.aufgabe3box;
    //document.getElementById("labelchkbox3").innerHTML = projekt1.aufgabe3boxtext;
    //Connection zu mail
    personAmail = projekt1.teilnehmer1email;
    personBmail = projekt1.teilnehmer2email;
    personCmail = projekt1.teilnehmer3email;
}
function dataViewConnector2(){
    //Connection zu Projektbezeichnung
    document.getElementById("projektName").innerHTML = projekt2.projektbezeichnung;
    //Connection zu Teilnehmer
    document.getElementById("tn1").innerHTML = projekt2.teilnehmer1vorname+" "+projekt2.teilnehmer1name;
    document.getElementById("tn2").innerHTML = projekt2.teilnehmer2vorname+" "+projekt2.teilnehmer2name;
    document.getElementById("tn3").innerHTML = projekt2.teilnehmer3vorname+" "+projekt2.teilnehmer3name;
    document.getElementById("tn4").innerHTML = projekt2.teilnehmer4vorname+" "+projekt2.teilnehmer4name;
    document.getElementById("tn5").innerHTML = projekt2.teilnehmer5vorname+" "+projekt2.teilnehmer5name;
    document.getElementById("tn6").innerHTML = projekt2.teilnehmer6vorname+" "+projekt2.teilnehmer6name;
    document.getElementById("tn7").innerHTML = projekt2.teilnehmer7vorname+" "+projekt2.teilnehmer7name;
    document.getElementById("tn8").innerHTML = projekt2.teilnehmer8vorname+" "+projekt2.teilnehmer8name;
    document.getElementById("tn9").innerHTML = projekt2.teilnehmer9vorname+" "+projekt2.teilnehmer9name;
    //TODO Piechart abgreifen und hier mit Daten verbinden (vielleicht automatisiert und verknüpft mit Aufgaben)
    //Piechartdatenconnection
    //Connection zu Literatur
    document.getElementById("lit1").innerHTML = projekt2.literatur1;
    document.getElementById("lit2").innerHTML = projekt2.literatur2;
    document.getElementById("lit3").innerHTML = projekt2.literatur3;
    //Connection zu Links
    document.getElementById("link1").firstChild.href = projekt2.link1href;
    document.getElementById("link1").firstChild.innerHTML = projekt2.link1text;
    document.getElementById("link2").firstChild.href = projekt2.link2href;
    document.getElementById("link2").firstChild.innerHTML = projekt2.link2text;
    document.getElementById("link3").firstChild.href = projekt2.link3href;
    document.getElementById("link3").firstChild.innerHTML = projekt2.link3text;
    //Notizen
    document.getElementById("notizen").value = projekt2.notizen;
    //Connection zu Aufgaben
    document.getElementById("aufgabe_1").value = projekt2.aufgabe1value;
    document.getElementById("checkbox1").checked = projekt2.aufgabe1box;
    //document.getElementById("labelchkbox1").innerHTML= projekt2.aufgabe1boxtext;
    document.getElementById("aufgabe_2").value = projekt2.aufgabe2value;
    document.getElementById("checkbox2").checked = projekt2.aufgabe2box;
    //document.getElementById("labelchkbox2").innerHTML=projekt2.aufgabe2boxtext;
    document.getElementById("aufgabe_3").value = projekt2.aufgabe3value;
    document.getElementById("checkbox3").checked = projekt2.aufgabe3box;
    //document.getElementById("labelchkbox3").innerHTML = projekt2.aufgabe3boxtext;
    //Connection zu mail
    personAmail = projekt2.teilnehmer1email;
    personBmail = projekt2.teilnehmer2email;
    personCmail = projekt2.teilnehmer3email;
}
function dataViewConnector3(){
    //Connection zu Projektbezeichnung
    document.getElementById("projektName").innerHTML = projekt3.projektbezeichnung;
    //Connection zu Teilnehmer
    document.getElementById("tn1").innerHTML = projekt3.teilnehmer1vorname+" "+projekt3.teilnehmer1name;
    document.getElementById("tn2").innerHTML = projekt3.teilnehmer2vorname+" "+projekt3.teilnehmer2name;
    document.getElementById("tn3").innerHTML = projekt3.teilnehmer3vorname+" "+projekt3.teilnehmer3name;
    document.getElementById("tn4").innerHTML = projekt3.teilnehmer4vorname+" "+projekt3.teilnehmer4name;
    document.getElementById("tn5").innerHTML = projekt3.teilnehmer5vorname+" "+projekt3.teilnehmer5name;
    document.getElementById("tn6").innerHTML = projekt3.teilnehmer6vorname+" "+projekt3.teilnehmer6name;
    document.getElementById("tn7").innerHTML = projekt3.teilnehmer7vorname+" "+projekt3.teilnehmer7name;
    document.getElementById("tn8").innerHTML = projekt3.teilnehmer8vorname+" "+projekt3.teilnehmer8name;
    document.getElementById("tn9").innerHTML = projekt3.teilnehmer9vorname+" "+projekt3.teilnehmer9name;
    //TODO Piechart abgreifen und hier mit Daten verbinden (vielleicht automatisiert und verknüpft mit Aufgaben)
    //Piechartdatenconnection
    //Connection zu Literatur
    document.getElementById("lit1").innerHTML = projekt3.literatur1;
    document.getElementById("lit2").innerHTML = projekt3.literatur2;
    document.getElementById("lit3").innerHTML = projekt3.literatur3;
    //Connection zu Links
    document.getElementById("link1").firstChild.href = projekt3.link1href;
    document.getElementById("link1").firstChild.innerHTML = projekt3.link1text;
    document.getElementById("link2").firstChild.href = projekt3.link2href;
    document.getElementById("link2").firstChild.innerHTML = projekt3.link2text;
    document.getElementById("link3").firstChild.href = projekt3.link3href;
    document.getElementById("link3").firstChild.innerHTML = projekt3.link3text;
    //Notizen
    document.getElementById("notizen").value = projekt3.notizen;
    //Connection zu Aufgaben
    document.getElementById("aufgabe_1").value = projekt3.aufgabe1value;
    document.getElementById("checkbox1").checked = projekt3.aufgabe1box;
    //document.getElementById("labelchkbox1").innerHTML= projekt3.aufgabe3boxtext;
    document.getElementById("aufgabe_2").value = projekt3.aufgabe2value;
    document.getElementById("checkbox2").checked = projekt3.aufgabe2box;
    //document.getElementById("labelchkbox2").innerHTML=projekt3.aufgabe3boxtext;
    document.getElementById("aufgabe_3").value = projekt3.aufgabe3value;
    document.getElementById("checkbox3").checked = projekt3.aufgabe3box;
    //document.getElementById("labelchkbox3").innerHTML = projekt3.aufgabe3boxtext;
    //Connection zu mail
    personAmail = projekt3.teilnehmer1email;
    personBmail = projekt3.teilnehmer2email;
    personCmail = projekt3.teilnehmer3email;
}
function dataViewConnector4(){
    //Connection zu Projektbezeichnung
    document.getElementById("projektName").innerHTML = projekt4.projektbezeichnung;
    //Connection zu Teilnehmer
    document.getElementById("tn1").innerHTML = projekt4.teilnehmer1vorname+" "+projekt4.teilnehmer1name;
    document.getElementById("tn2").innerHTML = projekt4.teilnehmer2vorname+" "+projekt4.teilnehmer2name;
    document.getElementById("tn3").innerHTML = projekt4.teilnehmer3vorname+" "+projekt4.teilnehmer3name;
    document.getElementById("tn4").innerHTML = projekt4.teilnehmer4vorname+" "+projekt4.teilnehmer4name;
    document.getElementById("tn5").innerHTML = projekt4.teilnehmer5vorname+" "+projekt4.teilnehmer5name;
    document.getElementById("tn6").innerHTML = projekt4.teilnehmer6vorname+" "+projekt4.teilnehmer6name;
    document.getElementById("tn7").innerHTML = projekt4.teilnehmer7vorname+" "+projekt4.teilnehmer7name;
    document.getElementById("tn8").innerHTML = projekt4.teilnehmer8vorname+" "+projekt4.teilnehmer8name;
    document.getElementById("tn9").innerHTML = projekt4.teilnehmer9vorname+" "+projekt4.teilnehmer9name;
    //TODO Piechart abgreifen und hier mit Daten verbinden (vielleicht automatisiert und verknüpft mit Aufgaben)
    //Piechartdatenconnection
    //Connection zu Literatur
    document.getElementById("lit1").innerHTML = projekt4.literatur1;
    document.getElementById("lit2").innerHTML = projekt4.literatur2;
    document.getElementById("lit3").innerHTML = projekt4.literatur3;
    //Connection zu Links
    document.getElementById("link1").firstChild.href = projekt4.link1href;
    document.getElementById("link1").firstChild.innerHTML = projekt4.link1text;
    document.getElementById("link2").firstChild.href = projekt4.link2href;
    document.getElementById("link2").firstChild.innerHTML = projekt4.link2text;
    document.getElementById("link3").firstChild.href = projekt4.link3href;
    document.getElementById("link3").firstChild.innerHTML = projekt4.link3text;
    //Notizen
    document.getElementById("notizen").value = projekt4.notizen;
    //Connection zu Aufgaben
    document.getElementById("aufgabe_1").value = projekt4.aufgabe1value;
    document.getElementById("checkbox1").checked = projekt4.aufgabe1box;
    //document.getElementById("labelchkbox1").innerHTML= projekt4.aufgabe1boxtext;
    document.getElementById("aufgabe_2").value = projekt4.aufgabe2value;
    document.getElementById("checkbox2").checked = projekt4.aufgabe2box;
    //document.getElementById("labelchkbox2").innerHTML=projekt4.aufgabe2boxtext;
    document.getElementById("aufgabe_3").value = projekt4.aufgabe3value;
    document.getElementById("checkbox3").checked = projekt4.aufgabe3box;
    //document.getElementById("labelchkbox3").innerHTML = projekt4.aufgabe3boxtext;
    //Connection zu mail
    personAmail = projekt4.teilnehmer1email;
    personBmail = projekt4.teilnehmer2email;
    personCmail = projekt4.teilnehmer3email;
}
function dataViewConnector5(){
    //Connection zu Projektbezeichnung
    document.getElementById("projektName").innerHTML = projekt5.projektbezeichnung;
    //Connection zu Teilnehmer
    document.getElementById("tn1").innerHTML = projekt5.teilnehmer1vorname+" "+projekt5.teilnehmer1name;
    document.getElementById("tn2").innerHTML = projekt5.teilnehmer2vorname+" "+projekt5.teilnehmer2name;
    document.getElementById("tn3").innerHTML = projekt5.teilnehmer3vorname+" "+projekt5.teilnehmer3name;
    document.getElementById("tn4").innerHTML = projekt5.teilnehmer4vorname+" "+projekt5.teilnehmer4name;
    document.getElementById("tn5").innerHTML = projekt5.teilnehmer5vorname+" "+projekt5.teilnehmer5name;
    document.getElementById("tn6").innerHTML = projekt5.teilnehmer6vorname+" "+projekt5.teilnehmer6name;
    document.getElementById("tn7").innerHTML = projekt5.teilnehmer7vorname+" "+projekt5.teilnehmer7name;
    document.getElementById("tn8").innerHTML = projekt5.teilnehmer8vorname+" "+projekt5.teilnehmer8name;
    document.getElementById("tn9").innerHTML = projekt5.teilnehmer9vorname+" "+projekt5.teilnehmer9name;
    //TODO Piechart abgreifen und hier mit Daten verbinden (vielleicht automatisiert und verknüpft mit Aufgaben)
    //Piechartdatenconnection
    //Connection zu Literatur
    document.getElementById("lit1").innerHTML = projekt5.literatur1;
    document.getElementById("lit2").innerHTML = projekt5.literatur2;
    document.getElementById("lit3").innerHTML = projekt5.literatur3;
    //Connection zu Links
    document.getElementById("link1").firstChild.href = projekt5.link1href;
    document.getElementById("link1").firstChild.innerHTML = projekt5.link1text;
    document.getElementById("link2").firstChild.href = projekt5.link2href;
    document.getElementById("link2").firstChild.innerHTML = projekt5.link2text;
    document.getElementById("link3").firstChild.href = projekt5.link3href;
    document.getElementById("link3").firstChild.innerHTML = projekt5.link3text;
    //Notizen
    document.getElementById("notizen").value = projekt5.notizen;
    //Connection zu Aufgaben
    document.getElementById("aufgabe_1").value = projekt5.aufgabe1value;
    document.getElementById("checkbox1").checked = projekt5.aufgabe1box;
    //document.getElementById("labelchkbox1").innerHTML= projekt5.aufgabe1boxtext;
    document.getElementById("aufgabe_2").value = projekt5.aufgabe2value;
    document.getElementById("checkbox2").checked = projekt5.aufgabe2box;
    //document.getElementById("labelchkbox2").innerHTML=projekt5.aufgabe2boxtext;
    document.getElementById("aufgabe_3").value = projekt5.aufgabe3value;
    document.getElementById("checkbox3").checked = projekt5.aufgabe3box;
    //document.getElementById("labelchkbox3").innerHTML = projekt5.aufgabe3boxtext;
    //Connection zu mail
    personAmail = projekt5.teilnehmer1email;
    personBmail = projekt5.teilnehmer2email;
    personCmail = projekt5.teilnehmer3email;
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
            if (projekt1.aktiviert===true) {
                document.getElementById("neuesProjekt").className = "elementOFF";
                dataViewConnector1();
                saveALL();
                projectClickCounter++;
                break;
            }
        case 2:
            if (projekt2.aktiviert===true) {
                //dataViewConnector2();
                var loadproject = JSON.parse(window.localStorage.getItem('savedprojekt2'));
                document.getElementById("notizen").value = loadproject.notizen;
                document.getElementById("projektName").innerHTML = loadproject.projektbezeichnung;
                saveALL();
                projectClickCounter++;
                break;
            }
        case 3:
            if (projekt3.aktiviert===true) {
                //dataViewConnector3();
                loadproject = JSON.parse(window.localStorage.getItem('savedprojekt3'));
                document.getElementById("notizen").value = loadproject.notizen;
                document.getElementById("projektName").innerHTML = loadproject.projektbezeichnung;
                saveALL();
                projectClickCounter++;
                break;
            }
        case 4:
            if (projekt4.aktiviert===true) {
                //dataViewConnector4();
                saveALL();
                projectClickCounter++;
                break;
            }
        case 5:
            projectClickCounter=0;
            if (projekt5.aktiviert===true) {
                saveALL();
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
var projektAnzahl = 2;
document.getElementById("projektuebernahme").addEventListener("click", projektAnlegeFunktion);
function projektAnlegeFunktion(){
    projektAnzahl++;
    if (projektAnzahl <= 5){
        switch (projektAnzahl) {
            case 1:
                dataViewConnector1();
                projekt1.aktiviert = true;
                projekt1.projektbezeichnung = document.getElementById("inputFeld").value;
                window.localStorage.setItem('savedprojekt1', JSON.stringify(projekt1));
                document.getElementById("projektName").innerHTML = projekt1.projektbezeichnung;
                break;
            case 2:
                dataViewConnector2();
                projekt2.aktiviert = true;
                projekt2.projektbezeichnung = document.getElementById("inputFeld").value;
                document.getElementById("projektName").innerHTML = projekt1.projektbezeichnung;
                window.localStorage.setItem('savedprojekt2', JSON.stringify(projekt2));
                break;
            case 3:
                dataViewConnector3();
                projekt3.aktiviert = true;
                projekt3.projektbezeichnung = document.getElementById("inputFeld").value;
                document.getElementById("projektName").innerHTML = projekt1.projektbezeichnung;
                window.localStorage.setItem('savedprojekt3', JSON.stringify(projekt3));
                break;
            case 4:
                dataViewConnector4();
                projekt4.aktiviert = true;
                projekt4.projektbezeichnung = document.getElementById("inputFeld").value;
                document.getElementById("projektName").innerHTML = projekt1.projektbezeichnung;
                window.localStorage.setItem('savedprojekt4', JSON.stringify(projekt4));
                break;
            case 5:
                dataViewConnector5();
                projekt5.aktiviert = true;
                projekt5.projektbezeichnung = document.getElementById("inputFeld").value;
                document.getElementById("projektName").innerHTML = projekt1.projektbezeichnung;
                window.localStorage.setItem('savedprojekt5', JSON.stringify(projekt5));
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
//Loader für Später das wird Mega!
$(document).ready(JSON.parse(window.localStorage.getItem('savedprojekt1')));
$(document).ready(JSON.parse(window.localStorage.getItem('savedprojekt2')));
$(document).ready(JSON.parse(window.localStorage.getItem('savedprojekt3')));
$(document).ready(JSON.parse(window.localStorage.getItem('savedprojekt4')));
$(document).ready(JSON.parse(window.localStorage.getItem('savedprojekt5')));
