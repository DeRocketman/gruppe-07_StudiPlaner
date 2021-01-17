/*
    Linkverzeichnis - Link für Projekte, dürfen maximal zwei sein
 */
import {Link} from "../domain/link.js";

export class LinkVerzeichnis {
    _verzeichnis;

    constructor(link = new Link()) {
        this._verzeichnis = new Array(3);
        this._verzeichnis[0] = link;
        this._verzeichnis[1] = new Link('Keine Url hinterlegt', 'Keine Beschreibung');
        this._verzeichnis[2] = new Link('Keine Url hinterlegt', 'Keine Beschreibung');
    }

    // TODO: hier ist nochmal ein Bug
    add = (link) => {
        const istLinkVerzeichnisVoll = this._verzeichnis.length === 3;
        if(istLinkVerzeichnisVoll) {
            this._verzeichnis.pop();
        }
        return this._verzeichnis.push(link);
    }
}
