function selectedProject(event, project) {

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

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(project).style.display = "block";
    event.currentTarget.className += " active";
}