import {Teilnehmerin} from "./domain/teilnehmerin.js";
import {Literatur} from "./domain/literatur.js";
import {Link} from "./domain/link.js";
import {Aufgabe} from "./domain/aufgabe.js";
import {Projekt} from "./domain/projekt.js";

export const BeispielProjekt2 = () => {
    const t1 = new Teilnehmerin('Hans A. Rostock', 'info@hansa.de');
    const t2 = new Teilnehmerin('Henriette Acker', 'h.acker@hacker.net');
    const t3 = new Teilnehmerin('H.P.Baxter', 'hyper@scooter.hamburg');
    const t4 = new Teilnehmerin('H.B.Dexter', 'scooter@scooter.hamburg');
    const t5 = new Teilnehmerin('Heribert GrönMayer', 'dingens@web.de');
    const t6 = new Teilnehmerin('Franz Ferdinand', 'Ferdi@web.de');
    const t7 = new Teilnehmerin('Helene Fischer', 'dein@stern.de');

    const teilnehmerListe = [t1, t2, t3, t4, t5, t6, t7];

    const l1 = new Literatur('Patterns in Security');
    const l2 = new Literatur('EcmaScript 8');
    const l3 = new Literatur('Batterien für die Umwelt');

    const literaturVerzeichnis = [l1, l2, l3];

    const link1 = new Link();
    const link2 = new Link('https://beispiel.com', 'Hier ist eine andere Beschreibung');
    const link3 = new Link('https://bible.com', 'Hier ist eine andere Beschreibung');

    const linkVerzeichnis = [link1, link2, link3];

    const aufgabe1 = new Aufgabe('Security Workout', true,
        new Date('2020-12-21'), teilnehmerListe);
    const aufgabe2 = new Aufgabe('MittagsTisch', true,
        new Date('2020-12-17'), teilnehmerListe);
    const aufgabe3 = new Aufgabe('Liegestütze', true,
        new Date('2020-12-13'), teilnehmerListe);

    const aufgaben = [aufgabe1, aufgabe2, aufgabe3];

    return new Projekt(4, true, 'DemoProjekt2',
        teilnehmerListe, literaturVerzeichnis, linkVerzeichnis,
        'Schüler:\n' +
        '\n' +
        'Blitz, wie die wackern Dirnen schreiten!\n' +
        'Herr Bruder, komm! wir müssen sie begleiten.\n' +
        'Ein starkes Bier, ein beizender Toback,\n' +
        'Und eine Magd im Putz, das ist nun mein Geschmack.\n' +
        '\n' +
        'Bürgermädchen:\n' +
        '\n' +
        'Da sieh mir nur die schönen Knaben!\n' +
        'Es ist wahrhaftig eine Schmach:\n' +
        'Gesellschaft könnten sie die allerbeste haben,\n' +
        'Und laufen diesen Mägden nach!\n' +
        '\n' +
        'Zweiter Schüler (zum ersten):\n' +
        '\n' +
        'Nicht so geschwind! dort hinten kommen zwei,\n' +
        'Sie sind gar niedlich angezogen,\n' +
        '\'s ist meine Nachbarin dabei;\n' +
        'Ich bin dem Mädchen sehr gewogen.\n' +
        'Sie gehen ihren stillen Schritt\n' +
        'Und nehmen uns doch auch am Ende mit.', aufgaben);
};
