//permite al nav cambiar de color al mover el scroll a bajo y superar el carousel
window.onscroll = function () {
  var navPortada = document.getElementById("nav-portada");
  if (window.pageYOffset > (window.innerHeight)) {
    navPortada.style.backgroundColor = "white";
    navPortada.style.color = "black";
    navPortada.style.boxShadow = "-1px -1px 90px 1px black";
  } else {
    navPortada.style.backgroundColor = "transparent";
    navPortada.style.color = "white";
    navPortada.style.boxShadow = "none";
  }
}
document.getElementById("d-software").style.display = "none";
document.getElementById("d-apps").style.display = "none";
document.getElementById("d-out").style.display = "none";
document.getElementById("quienes-somos").style.display = "none";
document.getElementById("contactanos").style.display = "none";
//funcion que oculta o muestra los div ocultos de los servicios
function activar(activar) {
  switch (activar.id) {
    case "somos":
      document.getElementById("d-software").style.display = "none";
      document.getElementById("d-apps").style.display = "none";
      document.getElementById("d-out").style.display = "none";
      document.getElementById("servicios").style.display = "none";
      document.getElementById("quienes-somos").style.display = "block";
      document.getElementById("clientes").style.display = "none";
      document.getElementById("contactanos").style.display = "none";
      document.getElementById("slideportada").style.display = "none";
      break;
    case "contacto":
      document.getElementById("d-software").style.display = "none";
      document.getElementById("d-apps").style.display = "none";
      document.getElementById("d-out").style.display = "none";
      document.getElementById("quienes-somos").style.display = "none";
      document.getElementById("clientes").style.display = "none";
      document.getElementById("servicios").style.display = "none";
      document.getElementById("contactanos").style.display = "block";
      document.getElementById("slideportada").style.display = "none";
      break;
    case "desarrollo_software":
      document.getElementById("d-software").style.display = "block";
      document.getElementById("servicios").style.display = "none";
      document.getElementById("clientes").style.display = "none";
      document.getElementById("clientes").style.display = "block";
      break;
    case "desarrollo_app":
      document.getElementById("d-apps").style.display = "block";
      document.getElementById("servicios").style.display = "none";
      document.getElementById("clientes").style.display = "none";
      document.getElementById("clientes").style.display = "block";
      break;
    case "outsourcing":
      document.getElementById("d-out").style.display = "block";
      document.getElementById("servicios").style.display = "none";
      document.getElementById("clientes").style.display = "none";
      document.getElementById("clientes").style.display = "block";
      break;
    case "inicio":
      document.getElementById("d-software").style.display = "none";
      document.getElementById("d-apps").style.display = "none";
      document.getElementById("d-out").style.display = "none";
      document.getElementById("servicios").style.display = "block";
      document.getElementById("clientes").style.display = "block";
      document.getElementById("quienes-somos").style.display = "none";
      document.getElementById("slideportada").style.display = "block";
      document.getElementById("contactanos").style.display = "none";
      break;
    case "cierra-servicios":
      document.getElementById("d-software").style.display = "none";
      document.getElementById("d-apps").style.display = "none";
      document.getElementById("d-out").style.display = "none";
      document.getElementById("servicios").style.display = "block";
      document.getElementById("clientes").style.display = "block";
      document.getElementById("quienes-somos").style.display = "none";
      document.getElementById("slideportada").style.display = "block";
      document.getElementById("contactanos").style.display = "none";
      break;
    default:
  }

}

//todo esta seccion es para el slide que contiene las imagenes de los servicios
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

function showSlide() {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'block';
}

prevBtn.addEventListener('click', () => {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
});
nextBtn.addEventListener('click', () => {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'block';
});
