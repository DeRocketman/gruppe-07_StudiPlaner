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
document.getElementById("mainLogo").addEventListener('dblclick', dblclickfunction);
    function dblclickfunction() {
        document.getElementById("projektName").innerHTML = "JA MAN EY, ENDLICH";
        document.getElementById("mailsettings").className = "settingON";
}

