/* Listenelemente auswählen zum ein- bzw. ausblenden */

let toggle = document.getElementsByClassName('caret');
let i;

for (i = 0; i < toggle.length; i++) {
    toggle[i].addEventListener('click', function() {
        this.parentElement.querySelector(".nested").classList.toggle('active');
        this.classList.toggle('caret-down');
    });
}
/* Versuch den Settingsbutton visible zu machen */
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

