// Select elememt
const selectElement = (element) => {
    return document.querySelector(element);
};

const menuToggler = selectElement('.menu-toggle');
const body = selectElement('body');

menuToggler.addEventListener('click', ()=>{
    body.classList.toggle('open');
});

//Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-left',{
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 50
});
