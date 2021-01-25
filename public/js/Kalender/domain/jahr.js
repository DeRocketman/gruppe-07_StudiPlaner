/*
    Ein Kalender Jahr, aggregat aller Monate und entsprechender Termine

    Man kann sich die einzelnen Monatsobjekte und die Jahreszahl anzeigen lassen.
    Ursprünglich gedacht um größere Terminübersichten einfach darstellen zu können.
    Aus Zeitgründen nicht mehr zum Einsatz gekommen.

    Author: Benjamin Ansohn McDougall
 */
import {Monat} from "./monat.js";

export class Jahr {
    constructor(jahreszahl = new Date().getUTCFullYear(), listeDerMonate = [new Monat()]) {
        this.jahr = jahreszahl;
        this.monate = listeDerMonate;
    }
}
