const animado = document.getElementById('animacion');
const animado1 = document.getElementById('animacion2');
const animado2 = document.getElementById('animacion3');
const animado3 = document.getElementById('animacion4');
const animado4 = document.getElementById('animacion5');
const animado5 = document.getElementById('animacion6');
const animado6 = document.getElementById('animacion7');
const animado7 = document.getElementById('animacion8');

function animar (entradas, observador){
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting){
          entrada.target.classList.add('visible');
      }  
    });
}

const observador = new IntersectionObserver(animar, {
    root: null,
    rootMargin: '0px',
    threshold: 0.9
});

observador.observe(animado);
observador.observe(animado1);
observador.observe(animado2);
observador.observe(animado3);
observador.observe(animado4);
observador.observe(animado5);
observador.observe(animado6);
observador.observe(animado7);

var buttonResponsive = document.getElementById('responsive');
var menu = document.querySelector('.nav');
var menuDesplegado = false;

buttonResponsive.addEventListener('click', function clickk(){
    if (menuDesplegado == false){
        menu.style.top = '50px'
        menuDesplegado = true;
    }else{
        menu.style.top = '-700px';
        menuDesplegado = false;
    }
})
