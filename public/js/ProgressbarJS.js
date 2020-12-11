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
    var a = 0;
    var run = setInterval(frames,10);
    function frames(){
        a = a+1;
        if(a== progressA+1){
            clearInterval(run);
        }
        else{
            var counter = document.querySelector(".counter");
            counter.textContent = a + "%" + " optionaler Projektname";
            fill.style.width = a +"%";
        }
    }
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
    var a = 0;
    var run = setInterval(frames,10);
    function frames(){
        a = a+1;
        if(a== progressB+1){
            clearInterval(run);
        }
        else{
            var counter = document.querySelector(".counter");
            counter.textContent = a + "%" + " Projektname2";
            fill.style.width = a +"%";
        }
    }
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
    var a = 0;
    var run = setInterval(frames,10);
    function frames(){
        a = a+1;
        if(a== progressC+1){
            clearInterval(run);
        }
        else{
            var counter = document.querySelector(".counter");
            counter.textContent = a + "%" + " Projektname3";
            fill.style.width = a +"%";
        }
    }
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
    var a = 0;
    var run = setInterval(frames,10);
    function frames(){
        a = a+1;
        if(a== progressD+1){
            clearInterval(run);
        }
        else{
            var counter = document.querySelector(".counter");
            counter.textContent = a + "%" + " Projektname4";
            fill.style.width = a +"%";
        }
    }
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
    var a = 0;
    var run = setInterval(frames,10);
    function frames(){
        a = a+1;
        if(a== progressE+1){
            clearInterval(run);
        }
        else{
            var counter = document.querySelector(".counter");
            counter.textContent = a + "%" + " Projektname5";
            fill.style.width = a +"%";
        }
    }
})