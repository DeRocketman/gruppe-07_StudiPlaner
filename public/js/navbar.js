/*
    Autor: Louis Grümmer
    Inspiration: https://www.youtube.com/watch?v=gXkqy0b4M5g
    https://www.youtube.com/watch?v=wHFflWvii3M&t=880s

 */

const navbarAction = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navPoints');
    const navLinks = document.querySelectorAll('.navPoints_li')


    burger.addEventListener('click',() =>{
        //Navigationsleiste anschalten
        nav.classList.toggle('navbarActive');

        //Navpunkte einblenden lassen
        navLinks.forEach((link, index)=>{
            if(link.style.animation) {
                link.style.animation = ''
            }else{
                link.style.animation =  link.style.animation = `navbarFadeIn 0.3s ease forwards ${index / 2}s`;
            }
        });
        //Animation für das Burgermenü
        burger.classList.toggle('burgerToX');
    });

}

navbarAction();