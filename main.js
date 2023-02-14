let cloud2 = document.querySelector(".nube2");
let cloud1 = document.querySelector(".nube1");
let moon = document.querySelector(".moon");
let nombre = document.querySelector("h1");
let line = document.querySelector(".l1");
let line2 = document.querySelector(".l2");
let developer = document.querySelector(".developer");
const btnSwitch = document.querySelector(".switch");
const switchAfter = document.querySelector('.switch-after')
const btnSun = document.querySelector('.fa-sun');
const btnMoon = document.querySelector('.fa-moon');

const cargarImagen = (entradas, observer) => {
  // console.log(entradas);
  // console.log(observer);

  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      // console.log(entrada)
      entrada.target.classList.add("visible");
    } else {
      // console.log(entrada)
      entrada.target.classList.remove("visible");
    }
  });
};

const observer = new IntersectionObserver(cargarImagen, {
  root: null,
  rootMargin: "800px 0px 0px 800px",
  threshold: 1.0,
});

observer.observe(nombre);
observer.observe(line);
observer.observe(line2);
observer.observe(developer);

document.onmousemove = function (e) {
  // console.log(e)
  let x = -e.clientX;
  let y = -e.clientY;
  let z = 0;

  document.body.style.backgroundPosition = x / 10000 + "px " + y / 50 + "px";
  moon.style.transform =
    "translate3d(" + x / 30 + "px, " + y / 30 + "px, " + z + "px)";
  cloud1.style.transform =
    "translate3d(" + x / 15 + "px, " + y / 10 + "px, " + z + "px)";
  cloud2.style.transform =
    "translate3d(" + x / 20 + "px, " + y / 20 + "px, " + z + "px)";
};

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('light');
    btnSwitch.classList.toggle('active');
    btnSun.classList.toggle('switch-s');
    btnMoon.classList.toggle('switch-m');
    switchAfter.classList.toggle('switch-r');    
});

window.addEventListener("deviceorientation",function(event) {
  alpha = Math.round(event.alpha);
  beta = Math.round(event.beta);
  gamma = Math.round(event.gamma);

  document.body.style.backgroundPosition = beta + "px " + gamma + "px";
  moon.style.transform =
    "translate3d(" + beta / 30 + "px, " + gamma / 30 + "px, " + alpha + "px)";
  cloud1.style.transform =
    "translate3d(" + beta + "px, " + gamma + "px, " + alpha + "px)";
  cloud2.style.transform =
    "translate3d(" + beta / 3 + "px, " + gamma / 3 + "px, " + alpha + "px)";


}, true);
