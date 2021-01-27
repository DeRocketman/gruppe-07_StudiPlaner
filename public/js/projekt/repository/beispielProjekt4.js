import {Teilnehmerin} from "../domain/teilnehmerin.js";
import {Literatur} from "../domain/literatur.js";
import {Link} from "../domain/link.js";
import {Aufgabe} from "../domain/aufgabe.js";
import {Projekt} from "../domain/projekt.js";

/*
    Repository Klasse mit einem BeispielProjekt
    Autoren im Pair: Dirk Stricker, Benjamin Ansohn McDougall
 */
export const BeispielProjekt4 = () => {
    const teilnehmerListe = [];
    teilnehmerListe[0] = new Teilnehmerin('Claudia Meier', 'cm@web.de');
    teilnehmerListe[1] = new Teilnehmerin('Maik Schmidt', 'mschiddy@gmail.de');
    teilnehmerListe[2] = new Teilnehmerin('Fritz-Osker Müller', 'f-oMue@stud.th-luebeck.de');


    const l1 = new Literatur('Esoterik');
    const l2 = new Literatur('Lustiges Taschenbuch');
    const l3 = new Literatur('Freude ist schön');

    const literaturVerzeichnis = [l1, l2, l3];

    const link1 = new Link("https://unicorn.university", "Welcome to the uctf");
    const link2 = new Link('https://waroncars.com', 'Less cars, more bikes');

    const linkVerzeichnis = [link1, link2];

    const aufgabe1 = new Aufgabe('Raus gehen', false,
        new Date('2021-01-21'), teilnehmerListe);
    const aufgabe2 = new Aufgabe('Einkaufen', false,
        new Date('2021-01-17'), teilnehmerListe);
    const aufgabe3 = new Aufgabe('ES 14 erledigen', false,
        new Date('2021-01-13'), teilnehmerListe);

    const aufgaben = [aufgabe1, aufgabe2, aufgabe3];

    const piechartSize = [100,1,3];

    return new Projekt(4, true, 'DemoProjekt4',
        teilnehmerListe, literaturVerzeichnis, linkVerzeichnis,
        'Hier kommen Notizen hin', aufgaben, piechartSize,
        93);
};
