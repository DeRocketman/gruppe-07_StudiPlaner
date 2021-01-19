
//import {Projekt} from "../projekt/domain/projekt.js";

let fill = document.querySelector(".fill");
let clickA = document.getElementById("button1ID");
let clickB = document.getElementById("button2ID");
let clickC = document.getElementById("button3ID");
let clickD = document.getElementById("button4ID");
let clickE = document.getElementById("button5ID");


let clickAll = [clickA, clickB, clickC, clickD, clickE ];

let progressAll = [progressA= 5, progressB= 10, progressC= 20, progressD= 30, progressE= 40];
let projektnameAll = ["Projekt 1", "Projekt 2", "Projekt 3","Projekt 4","Projekt 5",]
/*
for (int i = 0; i < document.getElementsByClassName('buttonClass').length ; i++)
 { document.getElementsByClassName('buttonClass')[i].innerHTML = "Knopf " + i; }
 */

function progressbarStart(){
    for (let i = 0; i <= clickAll.length; i++){
        clickAll[i].addEventListener('click',() =>{
            activateButton(progressAll[i], projektnameAll[i])
            activateClick(clickAll[i])
        })
    }
        }

function activateButton(progress, projektname) {
   /*
    document.getElementById("button1ID").disabled = true;
    document.getElementById("button2ID").disabled = true;
    document.getElementById("button3ID").disabled = true;
    document.getElementById("button4ID").disabled = true;
    document.getElementById("button5ID").disabled = true;
    setTimeout(function(){document.getElementById("button1ID").disabled = false;},800);
    setTimeout(function(){document.getElementById("button2ID").disabled = false;},800);
    setTimeout(function(){document.getElementById("button3ID").disabled = false;},800);
    setTimeout(function(){document.getElementById("button4ID").disabled = false;},800);
    setTimeout(function(){document.getElementById("button5ID").disabled = false;},800);
    */
    let a = 0;
    let run = setInterval(fillBar, 10);

    function fillBar() {
        a = a + 1;
        if (a == progress + 1) {
            clearInterval(run);
        } else {
            let counter = document.querySelector(".counter");
            counter.textContent = a + "%" + " " + projektname;
            fill.style.width = a + "%";
        }
    }
}
function activateClick(click) {
    for (let i = 0; i <= clickAll.length; i++) {
        clickAll[i].style.backgroundColor = '#F5D5F0'
        clickAll[i].style.color = '#AB63A0'
        click.style.backgroundColor = '#AB63A0'
        click.style.color = '#fff'
    }

}
progressbarStart();
/*
clickA.addEventListener('click',()=>{

    //activateButton(progressA, Projekt._name)
    activateButton(progressA, "Projekt 1")
    activateClick(clickA)
})



clickB.addEventListener('click',()=>{
    activateButton(progressB, "Projekt 2")
    activateClick(clickB)
})

clickC.addEventListener('click',()=>{
    activateButton(progressC,"Projekt 3")
    activateClick(clickC)
})

clickD.addEventListener('click',()=>{
    activateButton(progressD, "Projekt 4")
    activateClick(clickD)

})

clickE.addEventListener('click',()=>{
    activateButton(progressE, "Projekt 5")
    activateClick(clickE)

})

 */
