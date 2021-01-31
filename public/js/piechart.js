/*
Erzeugt ein Kreisdiagramm
Autor: Louis Grümmer
Inspiration: https://stackoverflow.com/questions/28067153/html5-and-canvas-to-plot-pie-chart
*/

let pie = document.getElementById('canvasPie');

pie.width = 500;
pie.height = 300;

let pieChart = pie.getContext('2d');


let pieData = [
    {name: 'Done', piecesize: 500, color: '#AB63A0'},
    {name: 'Doing', piecesize: 400, color: '#C3F7F4'},
    {name: 'To-Do', piecesize: 300, color: '#F5D5F0'}
];
let startingpoint = 0;
let pieRadius = 120;
let centerX = pie.width / 2;
let centerY = pie.height / 2;
/*
    Die Funktion bekommt die einzelnen Elemente des pieData-Arrays übergeben und
    zeichnet diese auf das Canvas zu einem Piechart.
    @params pieceOfCake
 */

function drawingPie(pieceOfCake){
    //summiert die Elemente aus pieData miteinander zu einem Wert, startet mit 0
    let wholePie = pieData.reduce(function (passedIn, pieceOfCake)
    {
        return passedIn + pieceOfCake.piecesize
    }, 0);
    //Styleeinstellung
    pieChart.fillStyle = pieceOfCake.color;
    pieChart.lineWidth = 1;
    pieChart.strokeStyle = '#000';

    let shareOfPie = pieceOfCake.piecesize / wholePie;
    let endingpoint = startingpoint + shareOfPie * Math.PI * 2;
    // Einzelnen Teile des Diagramms "malen"
    pieChart.beginPath();
    pieChart.moveTo(centerX, centerY);
    pieChart.arc(centerX, centerY, pieRadius, startingpoint, endingpoint, false);
    pieChart.lineTo(centerX, centerY);
    pieChart.fill();
    pieChart.stroke();

    // Beschriftung hinzufügen
    // Mittelpunkt der Winkel
    let midpoint = (startingpoint + endingpoint) / 2;
    // Abstand der Beschriftung
    let labelPosY = pieRadius * Math.sin(midpoint) * 1.2;
    let labelPosX = pieRadius * Math.cos(midpoint) * 1.2;
        pieChart.beginPath();
        pieChart.textAlign = 'center';
        pieChart.fillStyle = 'black';
        pieChart.fillText(pieceOfCake.name, labelPosX + centerX, labelPosY + centerY);
        pieChart.closePath();

    startingpoint = endingpoint;
}
/*
    Die Funktion aktualisiert das aktuelle Piechart mit den übergebenden Daten
    @params projekt
 */
function start(projekt) {
    pieChart.clearRect(0,0,pie.width,pie.height);
    pieData.forEach((piechart, key) => {
        piechart.piecesize = projekt._pieSize[key];
    });
    pieData.forEach(function (pieceOfCake) {
        drawingPie(pieceOfCake);
    })
}
