document.querySelector(".menu-boton").addEventListener("click", ()=>{
    // add solo agrega. Toggle la crea o quita si se clickea
    document.querySelector(".nav-menu").classList.toggle("show")
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards',{delay:500});
ScrollReveal().reveal('.cards-banner-one',{delay:500});
ScrollReveal().reveal('.cards-banner-two',{delay:500});