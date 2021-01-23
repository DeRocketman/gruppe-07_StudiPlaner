
/*
    Datei wurde implementiert, um den Umgang mit Canvas zu lernen und die Weissraeume der Seite zu verschönern.
    Autor: Louis Grümmer
    Quelle: https://www.youtube.com/watch?v=vxljFhP2krI&t=1275s
 */


    const background = document.querySelector('canvas');

    background.width = window.innerWidth;
    background.height = window.innerHeight;

    const cnvs = background.getContext('2d')

    const mouse ={
    x: undefined,
    y: undefined
}

    const maxRadius = 30;
    const minRadius = 2;
    const circleCount = 300;
    /*
      Farbschema:
      cookieCrema: #ABA27D
      navBlau: #C3F7F4
      sandGeld: #F8EFC8
      zartRosé: #F5D5F0
      dunkelRosa: #AB63A0
     */
    const colorArray =['#ABA27D', '#C3F7F4', '#F8EFC8', '#F5D5F0', '#AB63A0'];


window.addEventListener('mousemove',function (event){
    mouse.x = event.x;
    mouse.y = event.y;
})

function Circle(x, y, velociraptorX, velociraptorY, radius){
    this.x = x;
    this.y = y;
    this.velociraptorX = velociraptorX;
    this.velociraptorY = velociraptorY;
    this.radius = radius;
    this.minRadius = minRadius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    //erzeugt einen Kreis auf dem Bildschirm
    this.generate = () => {
        cnvs.beginPath();
        cnvs.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        cnvs.fillStyle = this.color;
        cnvs.fill();
    }

    this.movement = () =>{
        //damit die Kreise im Bild bleiben
        //(+/-this.radius damit der Rand des Kreises vom Bildschirmrand abprallt und nicht der Mittelpunkt)
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.velociraptorX = -this.velociraptorX;
        }
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.velociraptorY = -this.velociraptorY;
        }
        //zufällige Geschwindigkeit mit der sich die Kreise in x und y Richtung bewegen
        this.x += this.velociraptorX/3;
        this.y += this.velociraptorY/3;

        //Interaktivität mit der Maus
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50
            && mouse.y -this.y < 50 && mouse.y - this.y > -50
            ){
            if(this.radius < maxRadius){
                this.radius += 0.5;
            }
        } else if (this.radius > this.minRadius) {
            this.radius -= 1;
        }
        this.generate();
    }
}
    const circleArray = [];

    //erzeugt die angegebene Anzahl an Kreisen mit einer zufälligen Größe, Bewegungsgeschwindigkeit
    //und Position und speichert sie in einem Array.

    for (let i = 0; i < circleCount; i++){
        const radius = Math.random() * 3 +1;
        //damit die Kreise nicht am Bildschirmrand "steckenbleiben"
        const x = Math.random() * (innerWidth - radius * 2) + radius;
        const y = Math.random() * (innerHeight - radius * 2) + radius;
        const velociraptorX = (Math.random() - 0.5); //*höchster Wert Math.random=1-0.5=0.5, kleinster Wert Math.random=0-0.5=-0.5
        const velociraptorY = (Math.random() - 0.5);
        //die zufälligen Werte werden übergeben um bei jedem For-Loop ein neues Circle Objekt zu erzeugen
        circleArray.push(new Circle(x, y, velociraptorX, velociraptorY, radius));
    }


    function circlemovement() {
        requestAnimationFrame(circlemovement);
        //damit die Kreise sich "nur" bewegen und keine Striche erzeugen
        cnvs.clearRect(0, 0, innerWidth, innerHeight);

        for (let i = 0; i < circleArray.length; i++){
            circleArray[i].movement();
        }

    }

    circlemovement();



    //Velociraptor wegen velocity^^