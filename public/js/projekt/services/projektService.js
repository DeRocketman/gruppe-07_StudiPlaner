import {Projekt} from "../domain/projekt.js";

/*
    Eine Decorator Klasse die Projektinformationen auf der Projektseite dynamisch hinzufügt.
    Autoren im Pair: Dirk Stricker, Benjamin Ansohn McDougall
 */
export class ProjektService {
    _projekt;
    constructor(projekt = new Projekt()) {
        this._projekt = projekt;
    }

    /*
        Füllt die Werte aus dem Projekt auf die Projektseite.
     */
    fillWindow = () => {
        document.getElementById("projektName").innerHTML = this._projekt._name;

        const teilnehmerListe = this._projekt._teilnehmerListe;
        const parentNode = document.getElementById('teilnehmerliste');
        document.getElementById("mailP1").innerHTML = "Person A";
        document.getElementById("mailP2").innerHTML = "Person B";
        document.getElementById("mailP3").innerHTML = "Person C";
        removeChildren(parentNode);
        for(let i = 1; i <= teilnehmerListe.length; i++) {
            const teilnehmerNode = document.createElement('li');
            teilnehmerNode.innerHTML = teilnehmerListe[i - 1]._name;
            parentNode.appendChild(teilnehmerNode);

            if(teilnehmerListe[i-1]._name !== 'Unbesetzt' || teilnehmerListe[i-1]._email !== '' || teilnehmerListe[i-1] !== null) {
                switch (i - 1) {
                    case 0:
                        const personAmail = teilnehmerListe[i - 1]._email;
                        document.getElementById("mailP1").innerHTML = teilnehmerListe[i - 1]._name;
                        break;
                    case 1:
                        document.getElementById("mailP2").innerHTML = teilnehmerListe[i - 1]._name;
                        const personBmail = teilnehmerListe[i - 1]._email;
                        break;
                    case 2:
                        document.getElementById("mailP3").innerHTML = teilnehmerListe[i - 1]._name;
                        const personCmail = teilnehmerListe[i - 1]._email;
                        break;
                }
            }
        }

        function removeChildren(parentNode) {
            const anzahlKinder = parentNode.children.length;
            if (anzahlKinder !== 0) {
                for (let i = 0; i < anzahlKinder; i++) {
                    parentNode.removeChild(parentNode.children[0]);
                }
            }
        }

        const literaturListe = this._projekt._literaturVerzeichnis;
        for(let i = 1; i <= literaturListe.length; i++) {
            document.getElementById('lit' + i).innerHTML = literaturListe[i-1]._titel;
        }

        const links = this._projekt._links;
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
