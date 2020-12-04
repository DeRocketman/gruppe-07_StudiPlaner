


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
        Mailfunktion
*/
let personAmail = "person.A@trashmail.com";
let personBmail = "person.B@trashmail.com";
let personCmail = "person.C@trashmail.com";

function mailsender1() {
    location.href = "mailto:" + personAmail;
}
function mailsender2() {
    location.href = "mailto:" + personBmail;
}
function mailsender3() {
    location.href = "mailto:" + personCmail;
}
/*
* Projektwechseln inkl. Pseudobearbeitungssstand!
*/
document.getElementById("projektName").addEventListener('click', clickfunction1);
let projectClickCounter = 0;

function clickfunction1(){
    projectClickCounter +=1;
        switch (projectClickCounter) {
            case 1:
                projectswitcher();

                document.getElementById("projektName").innerHTML = "Kurs Webdesign IIa";
                document.getElementById("tn1").innerHTML = "Kim Lara Feller";
                document.getElementById("tn2").innerHTML = "Louis Grümmer";
                document.getElementById("tn3").innerHTML = "Benjamin Ansohn McDougall";
                document.getElementById("tn4").className = "elementOFF";
                document.getElementById("tn5").className = "elementOFF";
                document.getElementById("tn6").className = "elementOFF";
                document.getElementById("tn7").className = "elementOFF";
                document.getElementById("tn8").className = "elementOFF";
                document.getElementById("tn9").className = "elementOFF";

                document.getElementById("notizen").innerHTML = "Skript weiter durcharbeiten \nVideos als Hilfe";

                document.getElementById("mailP1").innerHTML = "K L Feller";
                document.getElementById("mailP2").innerHTML = "L Gruemmer";
                document.getElementById("mailP3").innerHTML = "B Ahnson McDougall";

                let mailbetreff = "?subject=" + document.getElementById("projektName").innerHTML;
                personAmail = "kim.lara.feller@stud.th-luebeck.de"+mailbetreff;
                personBmail = "louis.gruemmer@stud.th-luebeck.de"+mailbetreff;
                personCmail = "benjamim.ansohn.mcdougall@stud.th-luebeck.de"+mailbetreff;

                document.getElementById("aufgabe_1").value = "EA 1a abschließen";
                document.getElementById("aufgabe_2").value = "EA 1b abschließen";
                document.getElementById("aufgabe_3").value = "EA 3  abschließen";

                document.getElementById("checkbox1").checked = true;
                document.getElementById("checkbox2").checked = true;
                document.getElementById("checkbox3").checked = false;
                /*
                    @TODO Piechart, Literaturverweise, links
                 */
                break;
            case 2:
                projectswitcher();
                document.getElementById("projektName").innerHTML = "Kurs Datenbanken";
                document.getElementById("tn1").innerHTML = "Benjamin Ansohn McDougall";
                document.getElementById("tn2").innerHTML = "Hans A. Rostock";
                document.getElementById("tn3").innerHTML = "Dirk Stricker";
                document.getElementById("tn4").className = "elementOFF";
                document.getElementById("tn5").className = "elementOFF";
                document.getElementById("tn6").className = "elementOFF";
                document.getElementById("tn7").className = "elementOFF";
                document.getElementById("tn8").className = "elementOFF";
                document.getElementById("tn9").className = "elementOFF";

                document.getElementById("notizen").innerHTML = "Möglichkeiten von SQL zu NOSQL \nVideos als Hilfe \nnun ist gut";

                document.getElementById("mailP1").innerHTML = "B Ahnson McDougall";
                document.getElementById("mailP2").innerHTML = "H Rostock";
                document.getElementById("mailP3").innerHTML = "D Stricker";

                mailbetreff = "?subject=" + document.getElementById("projektName").innerHTML;
                personAmail = "benjamim.ansohn.mcdougall@stud.th-luebeck.de"+mailbetreff;
                personBmail = "info@fchansa.de"+mailbetreff;
                personCmail = "dirk.stricker@stud.th-luebeck.de"+mailbetreff;

                document.getElementById("aufgabe_1").value = "SQL Abfragen erstellen";
                document.getElementById("aufgabe_2").value = "Anwendung implementieren";
                document.getElementById("aufgabe_3").className= "Durchdrehen, weil nichts klappt!";

                document.getElementById("checkbox1").checked = true;
                document.getElementById("checkbox2").checked = false;
                document.getElementById("checkbox3").checked = false;
            /*
                @TODO Piechart, Literaturverweise, links
             */
                break;
            case 3:
                projectswitcher();
                document.getElementById("projektName").innerHTML = "Projektseite JS";
                document.getElementById("tn1").innerHTML = "Kim Lara Feller";
                document.getElementById("tn2").innerHTML = "Louis Grümmer";
                document.getElementById("tn3").innerHTML = "Dirk Stricker";
                document.getElementById("tn4").innerHTML = "Benjamin Ansohn McDougall";
                document.getElementById("tn5").className = "elementOFF";
                document.getElementById("tn6").className = "elementOFF";
                document.getElementById("tn7").className = "elementOFF";
                document.getElementById("tn8").className = "elementOFF";
                document.getElementById("tn9").className = "elementOFF";

                document.getElementById("notizen").innerHTML = "Skript weiter durcharbeiten \nVideos als Hilfe";

                document.getElementById("mailP1").innerHTML = "K L Feller";
                document.getElementById("mailP2").innerHTML = "L Grümmer";
                document.getElementById("mailP3").innerHTML = "D Stricker";


                mailbetreff = "?subject=" + document.getElementById("projektName").innerHTML;
                personAmail = "Kim.Lara.Feller@stud.th-luebeck.de"+mailbetreff;
                personBmail = "Louis.Gruemmer@stud.th-luebeck.de"+mailbetreff;
                personCmail = "dirk.stricker@stud.th-luebeck.de"+mailbetreff;

                document.getElementById("aufgabe_1").value = "Sachen und Dinge";
                document.getElementById("aufgabe_2").value = "Andere Sachen und Dinge";
                document.getElementById("aufgabe_3").className = "elementOFF";

                document.getElementById("checkbox1").checked = true;
                document.getElementById("checkbox2").checked = false;
                document.getElementById("checkbox3").className= "elementOFF";
            /*
                @TODO Piechart, Literaturverweise, links
             */
                break;
            case 4:
                projectswitcher();
                document.getElementById("projektName").innerHTML = "Häkeln mit der Omi";
                document.getElementById("tn1").className = "elementOFF";
                document.getElementById("tn2").className = "elementOFF";
                document.getElementById("tn3").className = "elementOFF";
                document.getElementById("tn4").className = "elementOFF";
                document.getElementById("tn5").className = "elementOFF";
                document.getElementById("tn6").className = "elementOFF";
                document.getElementById("tn7").className = "elementOFF";
                document.getElementById("tn8").className = "elementOFF";
                document.getElementById("tn9").innerHTML = "Oma Inge";

                document.getElementById("notizen").innerHTML = "Omi hat keine E-Mail";

                document.getElementById("mailP1").className = "elementOFF";
                document.getElementById("mailP2").className = "elementOFF";
                document.getElementById("mailP3").innerHTML = "O Inge";

                mailbetreff = "?subject=" + document.getElementById("projektName").innerHTML;
                personAmail = ""+mailbetreff;
                personBmail = ""+mailbetreff;
                personCmail = ""+mailbetreff;

                document.getElementById("aufgabe_1").value = "Häkeln lernen";
                document.getElementById("aufgabe_2").value = "Tee kochen";
                document.getElementById("aufgabe_3").value = "Häkeln mit Omi";

                document.getElementById("checkbox1").checked = true;
                document.getElementById("checkbox2").checked = true;
                document.getElementById("checkbox3").checked = false;
                /*
                    @TODO Hier sollen Teilnehmer, Piechart, Literaturverweise, links, Notizen, Mailkontakte, Aufgaben wechseln
                 */
                projectClickCounter = 0;
                break;
            default:
                document.getElementById("projektName").innerHTML = "PROJEKTNAME";
                break;
        }
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
* und make settings great (invisible) again
*/
let settingONflag = false;

document.getElementById("mailsettings").addEventListener('click', mailsetfunction);
function mailsetfunction(){
    document.getElementById("mailsettingsoki").className = "settingON";
    settingONflag = true;
    if (settingONflag != false) {
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

