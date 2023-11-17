
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


