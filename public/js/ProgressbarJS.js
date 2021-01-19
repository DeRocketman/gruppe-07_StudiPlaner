let progressField = document.querySelector(".progressField");
let fill = document.querySelector(".fill");
let clickA = document.querySelector("#button1ID");
let clickB = document.querySelector("#button2ID");
let clickC = document.querySelector("#button3ID");
let clickD = document.querySelector("#button4ID");
let clickE = document.querySelector("#button5ID");


let progressA = 100;
let progressB = 10;
let progressC = 20;
let progressD = 60;
let progressE = 40;

/*
for (int i = 0; i < document.getElementsByClassName('buttonClass').length ; i++)
 { document.getElementsByClassName('buttonClass')[i].innerHTML = "Knopf " + i; }
 */

clickA.addEventListener('click',()=>{
    clickB.style.backgroundColor='#F5D5F0'
    clickB.style.color='#AB63A0'
    clickC.style.backgroundColor='#F5D5F0'
    clickC.style.color='#AB63A0'
    clickD.style.backgroundColor='#F5D5F0'
    clickD.style.color='#AB63A0'
    clickE.style.backgroundColor='#F5D5F0'
    clickE.style.color='#AB63A0'
    clickA.style.backgroundColor='#AB63A0'
    clickA.style.color= '#fff'
    activateButton(progressA, "Projekt 1")
})



clickB.addEventListener('click',()=>{
    clickA.style.backgroundColor='#F5D5F0'
    clickA.style.color='#AB63A0'
    clickC.style.backgroundColor='#F5D5F0'
    clickC.style.color='#AB63A0'
    clickD.style.backgroundColor='#F5D5F0'
    clickD.style.color='#AB63A0'
    clickE.style.backgroundColor='#F5D5F0'
    clickE.style.color='#AB63A0'
    clickB.style.backgroundColor='#AB63A0'
    clickB.style.color='#fff'
    activateButton(progressB, "Projekt 2")
})

clickC.addEventListener('click',()=>{
    clickA.style.backgroundColor='#F5D5F0'
    clickA.style.color='#AB63A0'
    clickB.style.backgroundColor='#F5D5F0'
    clickB.style.color='#AB63A0'
    clickD.style.backgroundColor='#F5D5F0'
    clickD.style.color='#AB63A0'
    clickE.style.backgroundColor='#F5D5F0'
    clickE.style.color='#AB63A0'
    clickC.style.backgroundColor='#AB63A0'
    clickC.style.color='#fff'
    activateButton(progressC,"Projekt 3")
})

clickD.addEventListener('click',()=>{
    clickA.style.backgroundColor='#F5D5F0'
    clickA.style.color='#AB63A0'
    clickB.style.backgroundColor='#F5D5F0'
    clickB.style.color='#AB63A0'
    clickC.style.backgroundColor='#F5D5F0'
    clickC.style.color='#AB63A0'
    clickE.style.backgroundColor='#F5D5F0'
    clickE.style.color='#AB63A0'
    clickD.style.backgroundColor='#AB63A0'
    clickD.style.color='#fff'
    activateButton(progressD, "Projekt 4")
})

clickE.addEventListener('click',()=>{
    clickA.style.backgroundColor='#F5D5F0'
    clickA.style.color='#AB63A0'
    clickB.style.backgroundColor='#F5D5F0'
    clickB.style.color='#AB63A0'
    clickC.style.backgroundColor='#F5D5F0'
    clickC.style.color='#AB63A0'
    clickD.style.backgroundColor='#F5D5F0'
    clickD.style.color='#AB63A0'
    clickE.style.backgroundColor='#AB63A0'
    clickE.style.color='#fff'
    activateButton(progressE, "Projekt 5")
})
function activateButton(progress, projektname) {
    let a = 0;
    let run = setInterval(frames, 10);

    function frames() {
        a = a + 1;
        if (a == progress + 1) {
            clearInterval(run);
        } else {
            let counter = document.querySelector(".counter");
            counter.textContent = a + "%" + projektname;
            fill.style.width = a + "%";
        }
    }
}