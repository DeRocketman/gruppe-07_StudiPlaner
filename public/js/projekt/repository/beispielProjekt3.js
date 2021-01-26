import {Teilnehmerin} from "../domain/teilnehmerin.js";
import {Literatur} from "../domain/literatur.js";
import {Link} from "../domain/link.js";
import {Aufgabe} from "../domain/aufgabe.js";
import {Projekt} from "../domain/projekt.js";

/*
    Repository Klasse mit einem BeispielProjekt
    Autoren im Pair: Dirk Stricker, Benjamin Ansohn McDougall
 */
export const BeispielProjekt3 = () => {
    const teilnehmerListe = [4];
    teilnehmerListe[0] = new Teilnehmerin('Stirk Dicker', 'sd@web.de');
    teilnehmerListe[1] = new Teilnehmerin('Fara Lim Keller', 'flk@gmail.de');
    teilnehmerListe[2] = new Teilnehmerin('Grouis Lümmer', 'gl@bing-mail.de');
    teilnehmerListe[3] = new Teilnehmerin('Men Cansohn Bougall', 'mcb@yahoo.ws');


    const l1 = new Literatur('Fachjargon leicht gemacht');
    const l2 = new Literatur('Alles ist nicht unbedingt Gold');
    const l3 = new Literatur('ECMAScript 14');

    const literaturVerzeichnis = [l1, l2, l3];

    const link1 = new Link("https://juice-shop.com", "Hacking the web for fun and non-profit");
    const link2 = new Link('https://regendwal.com', 'Viele Baums machen eine Regenwal');

    const linkVerzeichnis = [link1, link2];

    const aufgabe1 = new Aufgabe('Fachjargon lernen', false,
        new Date('2020-12-21'), teilnehmerListe);
    const aufgabe2 = new Aufgabe('Einkaufen', false,
        new Date('2020-12-17'), teilnehmerListe);
    const aufgabe3 = new Aufgabe('ES 14 erledigen', false,
        new Date('2020-12-13'), teilnehmerListe);

    const aufgaben = [aufgabe1, aufgabe2, aufgabe3];

    const piechartSize = [42,23,3];

    return new Projekt(3, true, 'DemoProjekt3',
        teilnehmerListe, literaturVerzeichnis, linkVerzeichnis,
        'Hier kommen Notizen hin', aufgaben, piechartSize);
};
