/*
    Ein Kalender Jahr, aggregat aller Monate und entsprechender Termine
    Author: Benjamin Ansohn McDougall
 */
import {Monat} from "./monat.js";

export class Jahr {
    constructor(jahreszahl = new Date().getUTCFullYear(), listeDerMonate = [new Monat()]) {
        this.jahr = jahreszahl;
        this.monate = listeDerMonate;
    }
}
