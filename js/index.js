/*cargar htmls*/

function cargarContactos() {
  fetch('html/Contactos.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('index').innerHTML = data;
    })
    .catch(error => console.log(error));
}

function cargarInicio() {
  fetch('html/Inicio.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('index').innerHTML = data;
    })
    .catch(error => console.log(error));
}


function cargarSobreMi() {
  fetch('html/sobreMi.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('index').innerHTML = data;
    })
    .catch(error => console.log(error));
}


function cargarHabilidades() {
  fetch('html/habilidades.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('index').innerHTML = data;
    })
    .catch(error => console.log(error));
}

function cargarProyectos() {
  fetch('html/proyectos.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('index').innerHTML = data;
    })
    .catch(error => console.log(error));
}

// Cambiar color divs index
function cambiarColor(elemento, color) {
  elemento.style.backgroundColor = color;
}

function restaurarColor(elemento, colorOriginal) {
  elemento.style.backgroundColor = colorOriginal;
}

document.addEventListener("DOMContentLoaded", function () {
  var columnaIzquierda = document.querySelector(".columnaIzquierda");
  var columnaDerecha = document.querySelector(".columnaDerecha");
  var columnaCentro = document.querySelector(".columnaCentro");

  var colorOriginalIzquierda = window.getComputedStyle(columnaIzquierda).backgroundColor;
  var colorOriginalDerecha = window.getComputedStyle(columnaDerecha).backgroundColor;
  var colorOriginalCentro = window.getComputedStyle(columnaCentro).backgroundColor;

  columnaIzquierda.addEventListener("mouseover", function () {
    cambiarColor(columnaIzquierda, "rgb(9, 149, 246, 0.3)"); 
  });

  columnaIzquierda.addEventListener("mouseout", function () {
    restaurarColor(columnaIzquierda, colorOriginalIzquierda); 
  });

  columnaDerecha.addEventListener("mouseover", function () {
    cambiarColor(columnaDerecha, "rgb(9, 149, 246, 0.3)"); 
  });

  columnaDerecha.addEventListener("mouseout", function () {
    restaurarColor(columnaDerecha, colorOriginalDerecha); 
  });

  columnaCentro.addEventListener("mouseover", function () {
    cambiarColor(columnaCentro, "rgb(9, 149, 246, 0.3)"); 
  });

  columnaCentro.addEventListener("mouseout", function () {
    restaurarColor(columnaCentro, colorOriginalCentro); 
  });

  });


//FUNCION PARA EL MENU DESPLEGABLE
(function(){
  const listElements = document.querySelectorAll('.menu__item--show');
  const list = document.querySelector('.menu__links');
  const menu = document.querySelector('.menu__hamburguer');

  const addClick = ()=>{
      listElements.forEach(element =>{
          element.addEventListener('click', ()=>{

              
              let subMenu = element.children[1];
              let height = 0;
              element.classList.toggle('menu__item--active');


              if(subMenu.clientHeight === 0){
                  height = subMenu.scrollHeight;
              }

              subMenu.style.height = `${height}px`;

          });
      });
  }

  const deleteStyleHeight = ()=>{
      listElements.forEach(element=>{

          if(element.children[1].getAttribute('style')){
              element.children[1].removeAttribute('style');
              element.classList.remove('menu__item--active');
          }

      });
  }


  window.addEventListener('resize', ()=>{
      if(window.innerWidth > 800){
          deleteStyleHeight();
          if(list.classList.contains('menu__links--show'))
              list.classList.remove('menu__links--show');

      }else{
          addClick();
      }
  });

  if(window.innerWidth <= 800){
      addClick();
  }

  menu.addEventListener('click', ()=> list.classList.toggle('menu__links--show'));



})();




