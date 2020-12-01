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
* Settingsbuttons visible machen
*/
document.getElementById("teilnehmer").addEventListener('dblclick', dblclickfunction1);
function dblclickfunction1() {
        document.getElementById("projektName").innerHTML = "JA MAN EY, ENDLICH";
        document.getElementById("teilnehmersetting").className = "settingON";
}
document.getElementById("piechart").addEventListener('dblclick', dblclickfunction2);
function dblclickfunction2() {
    document.getElementById("projektName").innerHTML = "JA MAN EY, ENDLICH";
    document.getElementById("piechartsetting").className = "settingON";
}
document.getElementById("aufgaben").addEventListener('dblclick', dblclickfunction3);
function dblclickfunction3() {
    document.getElementById("projektName").innerHTML = "JA MAN EY, ENDLICH";
    document.getElementById("aufgabensetting").className = "settingON";
}
document.getElementById("erinnerungsmailset").addEventListener('dblclick', dblclickfunction4);
function dblclickfunction4() {
    document.getElementById("projektName").innerHTML = "JA MAN EY, ENDLICH";
    document.getElementById("mailsettings").className = "settingON";
}
/*
* Setting von Mailadressen
* und make settings great (invisible) again
*/
var settingONflag = false;

document.getElementById("mailsettings").addEventListener('click', mailsetfunction);
function mailsetfunction(){
    alert("Klicken der Personen für Änderung");
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


