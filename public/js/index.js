// Projekt 1 ist als default angeklickt
document.getElementById("defaultSelected").click();

function selectedProject(evt, project) {

    let i, tabcontent, tablink;

    //Alle Elemente (Tabcontent) unsichtbar machen, damit nur ausgewähltes angezeigt wird
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    //Bei allen Elementen (Tablink) die Klasse active löschen. Sicherstellen, dass immer nur das ausgewählte active ist
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
        tablink[i].className = tablink[i].className.replace(" active", "");
    }

    // Angeklicktes Element die Klasse active zuweisen
    document.getElementById(project).style.display = "block";
    evt.classList.add("active");

}