const navbarAction = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navPoints');
    const navLinks = document.querySelectorAll('.navPoints li')


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