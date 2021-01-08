# StudienPlaner PROject

Unsere Anwendung PROject ist eine Projektmanagement-Anwendung und dient dazu projektspezifische Aufgaben zu verwalten. Mit ihr können Nutzer Projekte anlegen und verschiedene Tools nutzen, um einen Überblick für ihr Projekt zu schaffen. Zum Beispiel ist es möglich, den Projekten Mitglieder zuzuweisen und Teilaufgaben zu verteilen. Der Fortschritt von Teilprozessen bzw. dem gesamten Projekt wird dem Nutzer optisch dargestellt. Eine Kalenderfunktion bietet unter anderem die Möglichkeit Deadlines festzuhalten. Der Nutzer kann somit visuell an Terminabgaben in Form eines Counters erinnert werden.  

Ein Dashboard bietet eine sinnvolle Übersicht über alle laufenden Projekte. Wahlweise kann sich der Nutzer aber auch nur ein konkretes Projekt oder Inhalte eines angebotenen Tools (wie z.B. offene Aufgaben als to do-Liste) anzeigen lassen.

## Mitglieder

- Kim Lara Feller
- Louis Grümmer
- Dirk Stricker
- Benjamin Ansohn McDougall

## Ordnerstruktur

    |-public    Auf dem Webserver vorliegende Dateien.
    | |-images  Unterordner für Bilddateien
    | |-css     Unterordner für CSS-Dateien
    | |-js      Unterordner für JavaScript-Dateien
    |
    |-doku      Die ausgearbeitete Dokumentation und zugehörige Dateien.

## Build-Prozess und Docker

Sobald an dem master-Branch dieses Repositories Veründerungen vorgenommen bzw. gepusht werden, wird automatisch ein Build-Prozess angestoüen, welcher das [Deployment Ihres Projektes](https://gruppe-07.wp20.mylab.th-luebeck.de) aktualisiert. Die Dateien `Dockerfile` und `.gitlab-ci.yml` steuern diesen Build-Prozess, und sollten von Ihnen in der Regel nicht verändert werden! Bei Interesse finden Sie weitergehende Informationen und Anleitungen zu Docker z.B. [hier](https://doku.mylab.th-luebeck.de/docs/docker/).
