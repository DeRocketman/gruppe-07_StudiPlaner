/*
Ein Kalender Jahr, aggregat aller Monate und entsprechender Termine
 */
export class Jahr {
    constructor(jahreszahl = new Date().getUTCFullYear(), listeDerMonate = {}) {
        this.jahr = jahreszahl;
        this.monate = listeDerMonate;
    }
}
