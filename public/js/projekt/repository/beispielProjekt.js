import {Teilnehmerin} from "../domain/teilnehmerin.js";
import {Literatur} from "../domain/literatur.js";
import {Link} from "../domain/link.js";
import {Aufgabe} from "../domain/aufgabe.js";
import {Projekt} from "../domain/projekt.js";

/*
    Repository Klasse mit einem BeispielProjekt
    Autoren im Pair: Dirk Stricker, Benjamin Ansohn McDougall
 */
export const BeispielProjekt = () => {
    const t1 = new Teilnehmerin('Dirk Stricker', 'ds@web.de');
    const t2 = new Teilnehmerin('Kim Lara Feller', 'klf@web.de');
    const t3 = new Teilnehmerin('Louis Grümmer', 'lg@web.de');
    const t4 = new Teilnehmerin('Ben Ansohn McDougall', 'bam@web.de');

    const teilnehmerListe = [t1, t2, t3, t4];

    const l1 = new Literatur('Projektmanagement');
    const l2 = new Literatur('Java ist eine Archipelago');
    const l3 = new Literatur('HTML 9');

    const literaturVerzeichnis = [l1, l2, l3];

    const link1 = new Link();
    const link2 = new Link('https://beispiel.com', 'Hier ist eine andere Beschreibung')

    const linkVerzeichnis = [link1, link2];

    const aufgabe1 = new Aufgabe('Projektmanagement erledigen', false,
        new Date('2020-12-21'), teilnehmerListe);
    const aufgabe2 = new Aufgabe('GDP 2 erledigen', false,
        new Date('2020-12-17'), teilnehmerListe);
    const aufgabe3 = new Aufgabe('Datenbanken erledigen', false,
        new Date('2020-12-13'), teilnehmerListe);

    const aufgaben = [aufgabe1, aufgabe2, aufgabe3];

    const piechartSize = [5,3,1];

    return new Projekt(1, true, 'DemoProjekt1',
        teilnehmerListe, literaturVerzeichnis, linkVerzeichnis,
        'Hier kommen Notizen hin', aufgaben, piechartSize,
        20);
};
