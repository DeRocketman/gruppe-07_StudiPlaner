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
    //Ausgangswerte für zurückgesetzte/gelöschte Projekte
    //Grunddaten
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
    "piechartdone" : 0,
    "piechartdo"   : 0,
    "piecharttodo" : 0,
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
    "aufgabe1boxtext" : null,
    "aufgabe2value" : null,
    "aufgabe2box"   : false,
    "aufgabe2boxtext" : null,
    "aufgabe3value" : null,
    "aufgabe3box"   : false,
    "aufgabe3boxtext" : null,
    "tn1klasse"     : "elementOFF",
    "tn2klasse"     : "elementOFF",
    "tn3klasse"     : "elementOFF",
    "tn4klasse"     : "elementOFF",
    "tn5klasse"     : "elementOFF",
    "tn6klasse"     : "elementOFF",
    "tn7klasse"     : "elementOFF",
    "tn8klasse"     : "elementOFF",
    "tn9klasse"     : "elementOFF",
    //Piechart
    "piechartklasse": "elementOFF",
    //Literatur
    "lit1klasse"    : "elementOFF",
    "lit2klasse"    : "elementOFF",
    "lit3klasse"    : "elementOFF",
    //Links
    "link1klasse"   : "elementOFF",
    "link2klasse"   : "elementOFF",
    "link3klasse"   : "elementOFF",
    //
    "aufgabe1klasse"      : "elementOFF",
    "aufgabe1boxklasse"   : "elementOFF",
    "aufgabe2klasse"      : "elementOFF",
    "aufgabe2boxklasse"   : "elementOFF",
    "aufgabe3klasse"      : "elementOFF",
    "aufgabe3boxklasse"   : "elementOFF",
    // @TODO Eingabeaufforderung der Mailaddressen (3 Favorieten aus Teilnehmerliste!) implementieren
    personAmail : null,
    personBmail : null,
    personCmail : null,

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
//Projekte 1-5 JASON:
let projekt1 = {
    //Grunddaten
    "projektnummer" : 1,
    "aktiviert" : true,
    "projektbezeichnung" : "PP1: Webprogrammierung",

    //Teilnehmerdaten <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "teilnehmer1vorname" : "Benjamin",
    "teilnehmer1name"    : "Ansohn McDoughall",
    "teilnehmer1email"   : "benjamim.ansohn.mcdougall@stud.th-luebeck.de",
    "teilnehmer1favorit" : true,
    "teilnehmer2vorname" : "Kim Lara",
    "teilnehmer2name"    : "Feller",
    "teilnehmer2email"   : "kim.lara.feller@stud.th-luebeck.de",
    "teilnehmer2favorit" : true,
    "teilnehmer3vorname" : "Louis",
    "teilnehmer3name"    : "Grümmer",
    "teilnehmer3email"   : "louis.gruemmer@stud.th-luebeck.de",
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
    "link3href" : null,
    "link3text" : null,
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
    "aufgabe3boxtext" : null,
    // Visible-Elements (Bedingt durch Klassen)
    //Teilnehmer
    "tn1klasse"     : "elementON",
    "tn2klasse"     : "elementON",
    "tn3klasse"     : "elementON",
    "tn4klasse"     : "elementOFF",
    "tn5klasse"     : "elementOFF",
    "tn6klasse"     : "elementOFF",
    "tn7klasse"     : "elementOFF",
    "tn8klasse"     : "elementOFF",
    "tn9klasse"     : "elementOFF",
    //Piechart
    "piechartklasse": "elementON",
    //Literatur
    "lit1klasse"    : "elementON",
    "lit2klasse"    : "elementON",
    "lit3klasse"    : "elementON",
    //Links
    "link1klasse"   : "elementON",
    "link2klasse"   : "elementON",
    "link3klasse"   : "elementOFF",
    //
    "aufgabe1klasse"      : "elementON",
    "aufgabe1boxklasse"   : "elementON",
    "aufgabe2klasse"      : "elementON",
    "aufgabe2boxklasse"   : "elementON",
    "aufgabe3klasse"      : "elementOFF",
    "aufgabe3boxklasse"   : "elementOFF",
}
let projekt2 = {
    //Grunddaten
    "projektnummer" : 2,
    "aktiviert" : true,
    "projektbezeichnung" : "PP2: Aufstieg 2020",
    //Teilnehmerdaten <-Sammlung, eventuell in einem bzw. mehreren Arrays zusammenfassen
    "teilnehmer1vorname" : "Hans A.",
    "teilnehmer1name"    : "Rostock",
    "teilnehmer1email"   : "info@hansa.de",
    "teilnehmer1favorit" : true,
    "teilnehmer2vorname" : "Mike",
    "teilnehmer2name"    : "Werner",
    "teilnehmer2email"   : "mike.werner@fukhuhila.de",
    "teilnehmer2favorit" : true,
    "teilnehmer3vorname" : "Werner",
    "teilnehmer3name"    : "Beinhart",
    "teilnehmer3email"   : "dasmusskesseln@boelkstoff.de",
    "teilnehmer3favorit" : true,
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
    // Visible-Elements (Bedingt durch Klassen)
    //Teilnehmer
    "tn1klasse"     : "elementON",
    "tn2klasse"     : "elementON",
    "tn3klasse"     : "elementON",
    "tn4klasse"     : "elementON",
    "tn5klasse"     : "elementOFF",
    "tn6klasse"     : "elementOFF",
    "tn7klasse"     : "elementOFF",
    "tn8klasse"     : "elementOFF",
    "tn9klasse"     : "elementOFF",
    //Piechart
    "piechartklasse": "elementON",
    //Literatur
    "lit1klasse"    : "elementON",
    "lit2klasse"    : "elementON",
    "lit3klasse"    : "elementON",
    //Links
    "link1klasse"   : "elementON",
    "link2klasse"   : "elementON",
    "link3klasse"   : "elementOFF",
    //
    "aufgabe1klasse"      : "elementON",
    "aufgabe1boxklasse"   : "elementON",
    "aufgabe2klasse"      : "elementON",
    "aufgabe2boxklasse"   : "elementON",
    "aufgabe3klasse"      : "elementON",
    "aufgabe3boxklasse"   : "elementON",
}
let projekt3 = {
    //Grunddaten
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
    "piechartdone" : 0,
    "piechartdo"   : 0,
    "piecharttodo" : 0,
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
    "aufgabe1boxtext" : null,
    "aufgabe2value" : null,
    "aufgabe2box"   : false,
    "aufgabe2boxtext" : null,
    "aufgabe3value" : null,
    "aufgabe3box"   : false,
    "aufgabe3boxtext" : null,
    // Visible-Elements (Bedingt durch Klassen)
    //Teilnehmer
    "tn1klasse"     : "elementOFF",
    "tn2klasse"     : "elementOFF",
    "tn3klasse"     : "elementOFF",
    "tn4klasse"     : "elementOFF",
    "tn5klasse"     : "elementOFF",
    "tn6klasse"     : "elementOFF",
    "tn7klasse"     : "elementOFF",
    "tn8klasse"     : "elementOFF",
    "tn9klasse"     : "elementOFF",
    //Piechart
    "piechartklasse": "elementOFF",
    //Literatur
    "lit1klasse"    : "elementOFF",
    "lit2klasse"    : "elementOFF",
    "lit3klasse"    : "elementOFF",
    //Links
    "link1klasse"   : "elementOFF",
    "link2klasse"   : "elementOFF",
    "link3klasse"   : "elementOFF",
    //
    "aufgabe1klasse"      : "elementOFF",
    "aufgabe1boxklasse"   : "elementOFF",
    "aufgabe2klasse"      : "elementOFF",
    "aufgabe2boxklasse"   : "elementOFF",
    "aufgabe3klasse"      : "elementOFF",
    "aufgabe3boxklasse"   : "elementOFF",
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
    "piechartdone" : 0,
    "piechartdo"   : 0,
    "piecharttodo" : 0,
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
    "aufgabe3boxtext" : null,
    "tn1klasse"     : "elementOFF",
    "tn2klasse"     : "elementOFF",
    "tn3klasse"     : "elementOFF",
    "tn4klasse"     : "elementOFF",
    "tn5klasse"     : "elementOFF",
    "tn6klasse"     : "elementOFF",
    "tn7klasse"     : "elementOFF",
    "tn8klasse"     : "elementOFF",
    "tn9klasse"     : "elementOFF",
    //Piechart
    "piechartklasse": "elementOFF",
    //Literatur
    "lit1klasse"    : "elementOFF",
    "lit2klasse"    : "elementOFF",
    "lit3klasse"    : "elementOFF",
    //Links
    "link1klasse"   : "elementOFF",
    "link2klasse"   : "elementOFF",
    "link3klasse"   : "elementOFF",
    //
    "aufgabe1klasse"      : "elementOFF",
    "aufgabe1boxklasse"   : "elementOFF",
    "aufgabe2klasse"      : "elementOFF",
    "aufgabe2boxklasse"   : "elementOFF",
    "aufgabe3klasse"      : "elementOFF",
    "aufgabe3boxklasse"   : "elementOFF",
}
let projekt5 = {
    //Grunddaten
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
    "piechartdone" : 0,
    "piechartdo"   : 0,
    "piecharttodo" : 0,
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
    "aufgabe1boxtext" : null,
    "aufgabe2value" : null,
    "aufgabe2box"   : false,
    "aufgabe2boxtext" : null,
    "aufgabe3value" : null,
    "aufgabe3box"   : false,
    "aufgabe3boxtext" : null,
    "tn1klasse"     : "elementOFF",
    "tn2klasse"     : "elementOFF",
    "tn3klasse"     : "elementOFF",
    "tn4klasse"     : "elementOFF",
    "tn5klasse"     : "elementOFF",
    "tn6klasse"     : "elementOFF",
    "tn7klasse"     : "elementOFF",
    "tn8klasse"     : "elementOFF",
    "tn9klasse"     : "elementOFF",
    //Piechart
    "piechartklasse": "elementOFF",
    //Literatur
    "lit1klasse"    : "elementOFF",
    "lit2klasse"    : "elementOFF",
    "lit3klasse"    : "elementOFF",
    //Links
    "link1klasse"   : "elementOFF",
    "link2klasse"   : "elementOFF",
    "link3klasse"   : "elementOFF",
    //
    "aufgabe1klasse"      : "elementOFF",
    "aufgabe1boxklasse"   : "elementOFF",
    "aufgabe2klasse"      : "elementOFF",
    "aufgabe2boxklasse"   : "elementOFF",
    "aufgabe3klasse"      : "elementOFF",
    "aufgabe3boxklasse"   : "elementOFF",
}
//Speicherfunktionen der Projekte in localStorage
function saveMEall() {
    window.localStorage.setItem('projekt1', JSON.stringify(projekt1));
    window.localStorage.setItem('projekt2', JSON.stringify(projekt2));
    window.localStorage.setItem('projekt3', JSON.stringify(projekt3));
    window.localStorage.setItem('projekt4', JSON.stringify(projekt4));
    window.localStorage.setItem('projekt5', JSON.stringify(projekt5));
}
//Diese Funktion verbindet Daten der Projekte mit der Ansicht
//TODO code den/die Connector
function dataViewConnector1(){
    //Klassenconnections
    document.getElementById("tn1").className = projekt1.tn1klasse;
    document.getElementById("tn2").className = projekt1.tn2klasse;
    document.getElementById("tn3").className = projekt1.tn3klasse;
    document.getElementById("tn4").className = projekt1.tn4klasse;
    document.getElementById("tn5").className = projekt1.tn5klasse;
    document.getElementById("tn6").className = projekt1.tn6klasse;
    document.getElementById("tn7").className = projekt1.tn7klasse;
    document.getElementById("tn8").className = projekt1.tn8klasse;
    document.getElementById("tn9").className = projekt1.tn9klasse;
    document.getElementById("piechart").className = projekt1.piechartklasse;
    document.getElementById("lit1").className = projekt1.lit1klasse;
    document.getElementById("lit2").className = projekt1.lit2klasse;
    document.getElementById("lit3").className = projekt1.lit3klasse;
    document.getElementById("link1").className = projekt1.link1klasse;
    document.getElementById("link2").className = projekt1.link2klasse;
    document.getElementById("link3").className = projekt1.link3klasse;
    document.getElementById("aufgabe_1").className = projekt1.aufgabe1klasse;
    document.getElementById("checkbox1").className = projekt1.aufgabe1boxklasse;
    document.getElementById("aufgabe_2").className = projekt1.aufgabe2klasse;
    document.getElementById("checkbox2").className = projekt1.aufgabe2boxklasse;
    document.getElementById("aufgabe_3").className = projekt1.aufgabe3klasse
    document.getElementById("checkbox3").className = projekt1.aufgabe3boxklasse;
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
    //Connection zu Aufgaben
    document.getElementById("aufgabe_1").value = projekt1.aufgabe1value;
    document.getElementById("checkbox1").checked = projekt1.aufgabe1box;
    document.getElementById("labelchkbox1").innerHTML= projekt1.aufgabe1boxtext;
    document.getElementById("aufgabe_2").value = projekt1.aufgabe2value;
    document.getElementById("checkbox2").checked = projekt1.aufgabe2box;
    document.getElementById("labelchkbox2").innerHTML=projekt1.aufgabe2boxtext;
    document.getElementById("aufgabe_3").value = projekt1.aufgabe3value;
    document.getElementById("checkbox3").checked = projekt1.aufgabe3box;
    document.getElementById("labelchkbox3").innerHTML = projekt1.aufgabe3boxtext;
    //Connection zu mail
    personAmail = projekt1.teilnehmer1email;
    personBmail = projekt1.teilnehmer2email;
    personCmail = projekt1.teilnehmer3email;
}
/*
    "aufgabe1klasse"      : "elementON",
    "aufgabe1boxklasse"   : "elementON",
    "aufgabe2klasse"      : "elementON",
    "aufgabe2boxklasse"   : "elementON",
    "aufgabe3klasse"      : "elementOFF",
    "aufgabe3boxklasse"   : "elementOFF",
 */
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
    //Connection zu Aufgaben
    document.getElementById("aufgabe_1").value = projekt2.aufgabe1value;
    document.getElementById("checkbox1").checked = projekt2.aufgabe1box;
    document.getElementById("labelchkbox1").innerHTML=projekt2.aufgabe1boxtext;
    document.getElementById("aufgabe_2").value = projekt2.aufgabe2value;
    document.getElementById("checkbox2").checked = projekt2.aufgabe2box;
    document.getElementById("labelchkbox2").innerHTML=projekt2.aufgabe2boxtext;
    document.getElementById("aufgabe_3").value = projekt2.aufgabe3value;
    document.getElementById("checkbox3").checked = projekt2.aufgabe3box;
    document.getElementById("labelchkbox3").innerHTML=projekt2.aufgabe3boxtext;
    //Connection zu mail
    personAmail = projekt2.teilnehmer1email;
    personBmail = projekt2.teilnehmer2email;
    personCmail = projekt2.teilnehmer3email;
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
                projectClickCounter++;
                break;
            }
        case 2:
            if (projekt2.aktiviert===true) {
                dataViewConnector2();
                projectClickCounter++;
                break;
            }
        case 3:
            if (projekt3.aktiviert===true) {
                document.getElementById("neuesProjekt").className = "elementOFF";
                document.getElementById("projektName").innerHTML = projekt3.projektbezeichnung;
                projectClickCounter++;
                break;
            }
        case 4:
            if (projekt4.aktiviert===true) {
                document.getElementById("neuesProjekt").className = "elementOFF";
                document.getElementById("projektName").innerHTML = projekt4.projektbezeichnung;
                projectClickCounter++;
                break;
            }
        case 5:
            projectClickCounter=0;
            if (projekt5.aktiviert===true) {
                document.getElementById("neuesProjekt").className = "elementOFF";
                document.getElementById("projektName").innerHTML = projekt5.projektbezeichnung;
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
                projekt1.aktiviert = true;
                projekt1.projektbezeichnung = document.getElementById("inputFeld").value;
                //deleter.anleger(); Pseudoprojekt 1
                break;
            case 2:
                projekt2.aktiviert = true;
                projekt2.projektbezeichnung = document.getElementById("inputFeld").value;
                //deleter.anleger(); Pseudoprojekt 2
                break;
            case 3:
                projekt3.aktiviert = false;
                projekt3.projektbezeichnung = document.getElementById("inputFeld").value;
                //deleter.anleger();
                break;
            case 4:
                projekt4.aktiviert = false;
                projekt4.projektbezeichnung = document.getElementById("inputFeld").value;
                //deleter.anleger();
                break;
            case 5:
                projekt5.aktiviert = false;
                projekt5.projektbezeichnung = document.getElementById("inputFeld").value;
                //deleter.anleger();
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
$(document).ready(JSON.parse(window.localStorage.getItem('projekt1')));
$(document).ready(JSON.parse(window.localStorage.getItem('projekt2')));
$(document).ready(JSON.parse(window.localStorage.getItem('projekt3')));
$(document).ready(JSON.parse(window.localStorage.getItem('projekt4')));
$(document).ready(JSON.parse(window.localStorage.getItem('projekt5')));
