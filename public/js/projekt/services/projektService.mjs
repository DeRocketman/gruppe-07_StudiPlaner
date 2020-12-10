/*
    Baut Projekte ins Frontend ein.
 */
import {Projekt} from "../domain/projekt.mjs";

export class ProjektService {
    _projekt;
    constructor(projekt = new Projekt()) {
        this._projekt = projekt;
    }

    fillWindow = () => {
        document.getElementById("projektName").innerHTML = this._projekt._name;

        const teilnehmerListe = this._projekt._teilnehmerListe;
        for(let i = 1; i <= teilnehmerListe.length; i++) {
            document.getElementById('tn' + i).innerHTML = teilnehmerListe[i - 1]._name;
        }

        const literaturListe = this._projekt._literaturVerzeichnis._verzeichnis;
        for(let i = 1; i <= literaturListe.length; i++) {
            document.getElementById('lit' + i).innerHTML = literaturListe[i-1]._titel;
        }

        const links = this._projekt._links._verzeichnis;
        for(let i = 1; i <= links.length; i++) {
            document.getElementById('link' + i).firstChild.href = links[i - 1]._url;
            document.getElementById('link' + i).firstChild.innerHTML = links[i - 1]._beschreibung;
        }
        document.getElementById('notizen').value = this._projekt._notizen;

        const aufgaben = this._projekt._aufgaben;
        for(let i = 1; i <= aufgaben.length; i++) {
            document.getElementById('aufgabe_' + i).value = aufgaben[i - 1]._beschreibung;
            document.getElementById('checkbox' + i).checked = aufgaben[i - 1]._istErledigt;
        }
    };
}
