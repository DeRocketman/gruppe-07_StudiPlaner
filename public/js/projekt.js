


/* Listenelemente auswählen zum ein- bzw. ausblenden */
let toggle = document.getElementsByClassName('caret');
let i;

for (i = 0; i < toggle.length; i++) {
    toggle[i].addEventListener('click', function() {
        this.parentElement.querySelector(".nested").classList.toggle('active');
        this.classList.toggle('caret-down');
    });
}
    var personAmail = "person.A@trashmail.com";
    var personBmail = "person.B@trashmail.com";
    var personCmail = "person.C@trashmail.com";
/*
* Projektwechseln inkl. Pseudobearbeitungssstand!
*/
document.getElementById("projektName").addEventListener('click', clickfunction1);
let projectClickCounter = 0;
function clickfunction1(){
    projectClickCounter +=1;
        switch (projectClickCounter) {
            case 1:
                document.getElementById("projektName").innerHTML = "Kurs Webdesign IIa";
                /*
                    @TODO Hier sollen Teilnehmer, Piechart, Literaturverweise, links, Notizen, Mailkontakte, Aufgaben wechseln
                 */
                break;
            case 2:
                document.getElementById("projektName").innerHTML = "Kurs Datenbanken";
            /*
                @TODO Hier sollen Teilnehmer, Piechart, Literaturverweise, links, Notizen, Mailkontakte, Aufgaben wechseln
             */
                break;
            case 3:
                document.getElementById("projektName").innerHTML = "Projekt Projektseite";
            /*
                @TODO Hier sollen Teilnehmer, Piechart, Literaturverweise, links, Notizen, Mailkontakte, Aufgaben wechseln
             */
                break;
            case 4:
                document.getElementById("projektName").innerHTML = "Häkeln mit der Omi";
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
var settingONflag = false;

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

