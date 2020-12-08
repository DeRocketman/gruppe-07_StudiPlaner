    let pie = document.getElementById('canvasPie');

    pie.width = 500;
    pie.height = 300;

    let ctx = pie.getContext('2d');


    let pieData = [
        {name:'Done', piecesize:500,color: '#AB63A0' },
        {name:'Doing', piecesize:400, color: '#C3F7F4'},
        {name:'To-Do', piecesize:300, color: '#F5D5F0'}
        ];

    function start(){

    let total = pieData.reduce(function (together, pieceOfCake) {
        return together + pieceOfCake.piecesize
    },0);
    let startAngle = 0;
    let radius = 120;
    let centerX = pie.width/2;
    let centerY = pie.height/2;

    pieData.forEach( function(pieceOfCake) {

        //Styleeinstellung
        ctx.fillStyle = pieceOfCake.color;
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#333';
        ctx.beginPath();

        // Einzelnen Teile des Diagramms "malen"
        let endAngle = ((pieceOfCake.piecesize / total) * Math.PI * 2) + startAngle;
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
        ctx.lineTo(centerX, centerY);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        // Beschriftung hinzufügen
        ctx.beginPath();
        ctx.textAlign = 'center';
        ctx.fillStyle = 'black';
        // Mittelpunkt der Winkel
        // 1.2 * radius ist der Abstand der Beschriftung
        let theta = (startAngle + endAngle) / 2;
        let labelPosY = Math.sin(theta) * 1.2 * radius;
        let labelPosX = Math.cos(theta) * 1.2 * radius;
        
        ctx.fillText(pieceOfCake.name, labelPosX+centerX, labelPosY+centerY);
        ctx.closePath();

        startAngle = endAngle;

    })
}
start();