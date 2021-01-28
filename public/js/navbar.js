/*

    Inspiration: https://www.youtube.com/watch?v=gXkqy0b4M5g
    https://www.youtube.com/watch?v=wHFflWvii3M&t=880s

 */

function navbarAction(){
    const navButton = document.querySelector('.navSwitch');
    const navPoint = document.querySelector('.navPoints');
    const navItems = document.querySelectorAll('.navPoints_li')


    navButton.addEventListener('click',() =>{
        //Navigationsleiste anschalten
        navPoint.classList.toggle('navbarActive');

        //Navpunkte einblenden lassen
        navItems.forEach((PointsOfNav, navOrder)=>{
            if(PointsOfNav.style.animation) {
                PointsOfNav.style.animation = ''
            }else{
               PointsOfNav.style.animation = `navbarFadeIn 0.3s ease forwards ${navOrder / 2}s`;
            }
        });
        //Animation für den Navigationsschalter
        navButton.classList.toggle('switchToArrow');
    });

}

navbarAction();
