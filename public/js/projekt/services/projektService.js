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
        document.getElementById("projektName").innerHTML = this._projekt._name + " &#40Gr-07&#41";

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

    /*
        Füllt die Werte eines bestehenden Projekts in das Formular um Werte korrigieren
        bzw. ändern zu können.
     */
    fillForm = () => {
        document.getElementById("projektbezeichnung").value = this._projekt._name;
        const teilnehmerListe = this._projekt._teilnehmerListe;
        const literaturListe = this._projekt._literaturVerzeichnis;
        const links = this._projekt._links;
        const aufgaben = this._projekt._aufgaben;

        //Laden der Teilnehmerliste des Formulars
        switch (teilnehmerListe.length-1) {
            case 8:
                document.getElementById("tn9name").value = teilnehmerListe[8]._name;
                document.getElementById("tn9mail").value = teilnehmerListe[8]._email;
            case 7:
                document.getElementById("tn8name").value = teilnehmerListe[7]._name;
                document.getElementById("tn8mail").value = teilnehmerListe[7]._email;
            case 6:
                document.getElementById("tn7name").value = teilnehmerListe[6]._name;
                document.getElementById("tn7mail").value = teilnehmerListe[6]._email;
            case 5:
                document.getElementById("tn6name").value = teilnehmerListe[5]._name;
                document.getElementById("tn6mail").value = teilnehmerListe[5]._email;
            case 4:
                document.getElementById("tn5name").value = teilnehmerListe[4]._name;
                document.getElementById("tn5mail").value = teilnehmerListe[4]._email;
            case 3:
                document.getElementById("tn4name").value = teilnehmerListe[3]._name;
                document.getElementById("tn4mail").value = teilnehmerListe[3]._email;
            case 2:
                document.getElementById("tn3name").value = teilnehmerListe[2]._name;
                document.getElementById("tn3mail").value = teilnehmerListe[2]._email;
            case 1:
                document.getElementById("tn2name").value = teilnehmerListe[1]._name;
                document.getElementById("tn2mail").value = teilnehmerListe[1]._email;
            case 0:
                document.getElementById("tn1name").value = teilnehmerListe[0]._name;
                document.getElementById("tn1mail").value = teilnehmerListe[0]._email;
                break;
            default:
                break;
        }
        //Laden des Literaturteils des Formulars
        switch (literaturListe.length-1) {
            case 2:
                document.getElementById("litForm3").value = literaturListe[2]._titel;
            case 1:
                document.getElementById("litForm2").value = literaturListe[1]._titel;
            case 0:
                document.getElementById("litForm1").value = literaturListe[0]._titel;
                break;
            default:
                break;
        }
        //Laden des Linkteils des Formulars
        switch (links.length-1) {
            case 2:
                document.getElementById("link3ref").value = links[2]._url
                document.getElementById("link3text").value = links[2]._beschreibung
            case 1:
                document.getElementById("link2ref").value = links[1]._url
                document.getElementById("link2text").value = links[1]._beschreibung
            case 0:
                document.getElementById("link1ref").value = links[0]._url
                document.getElementById("link1text").value = links[0]._beschreibung;
                break;
            default:
                break;
        }
        //Laden der Aufgaben ins Formular
        switch (aufgaben.length-1){
            case 2:
                document.getElementById("aufgabe3text").value = aufgaben[2]._beschreibung
            case 1:
                document.getElementById("aufgabe2text").value = aufgaben[1]._beschreibung
            case 0:
                document.getElementById("aufgabe1text").value = aufgaben[0]._beschreibung;
                break;
            default:
                break;
        }
    }
}
