/*
    Repository Klasse mit einem BeispielProjekt
    Autoren im Pair: Dirk Stricker, Benjamin Ansohn McDougall
 */
import {Teilnehmerin} from "../domain/teilnehmerin.js";
import {Literatur} from "../domain/literatur.js";
import {Link} from "../domain/link.js";
import {Aufgabe} from "../domain/aufgabe.js";
import {Projekt} from "../domain/projekt.js";

export const BeispielProjekt5 = () => {
    const teilnehmerListe = [];
    teilnehmerListe[0] = new Teilnehmerin('Claudia Schmidt-Meier', 'cm@web.de');
    teilnehmerListe[1] = new Teilnehmerin('Maik Osker', 'mschiddy@gmail.de');
    teilnehmerListe[2] = new Teilnehmerin('Fritz Müller', 'f-oMue@stud.th-luebeck.de');


    const l1 = new Literatur('Lustiges Freude');
    const l2 = new Literatur('Esoterik Taschenbuch');
    const l3 = new Literatur('Ist schön');

    const literaturVerzeichnis = [l1, l2, l3];

    const link1 = new Link("https://irgendeinLink.de.de.ws", "Welcome to the irgendwo");
    const link2 = new Link('https://bicycles.com', 'Less cars, more bikes');

    const linkVerzeichnis = [link1, link2];

    const aufgabe1 = new Aufgabe('Raus laufen', false,
        new Date('2021-02-2'), teilnehmerListe);
    const aufgabe2 = new Aufgabe('Coden und schlafen', false,
        new Date('2021-02-7'), teilnehmerListe);
    const aufgabe3 = new Aufgabe('IndexedDb is fun', false,
        new Date('2021-02-3'), teilnehmerListe);

    const aufgaben = [aufgabe1, aufgabe2, aufgabe3];

    const piechartSize = [2,3,14];

    return new Projekt(5, true, 'DemoProjekt5',
        teilnehmerListe, literaturVerzeichnis, linkVerzeichnis,
        'Es wäre auch mal nett wenn hier etwas anderes stehen würde, oder?', aufgaben, piechartSize,
        42);
};
