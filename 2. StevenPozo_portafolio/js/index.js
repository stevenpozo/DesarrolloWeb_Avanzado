
/*cargar htmls*/

function cargarContactos() {
  // Utilizamos fetch para obtener el contenido de inicio.html
  fetch('html/Contactos.html')
    .then(response => response.text())
    .then(data => {
      // Insertamos el contenido en el div del index.html
      document.getElementById('index').innerHTML = data;

      // Ocultamos el div "index"
      //document.getElementById('index').classList.add('hidden');
    })
    .catch(error => console.log(error));
}

function cargarInicio() {
  // Utilizamos fetch para obtener el contenido de inicio.html
  fetch('html/Inicio.html')
    .then(response => response.text())
    .then(data => {
      // Insertamos el contenido en el div del index.html
      document.getElementById('index').innerHTML = data;

      // Ocultamos el div "index"
      //document.getElementById('index').classList.add('hidden');
    })
    .catch(error => console.log(error));
}


function cargarSobreMi() {
  // Utilizamos fetch para obtener el contenido de inicio.html
  fetch('html/sobreMi.html')
    .then(response => response.text())
    .then(data => {
      // Insertamos el contenido en el div del index.html
      document.getElementById('index').innerHTML = data;

      // Ocultamos el div "index"
      //document.getElementById('index').classList.add('hidden');
    })
    .catch(error => console.log(error));
}


function cargarHabilidades() {
  // Utilizamos fetch para obtener el contenido de inicio.html
  fetch('html/habilidades.html')
    .then(response => response.text())
    .then(data => {
      // Insertamos el contenido en el div del index.html
      document.getElementById('index').innerHTML = data;

      // Ocultamos el div "index"
      //document.getElementById('index').classList.add('hidden');
    })
    .catch(error => console.log(error));
}

function cargarProyectos() {
  // Utilizamos fetch para obtener el contenido de inicio.html
  fetch('html/proyectos.html')
    .then(response => response.text())
    .then(data => {
      // Insertamos el contenido en el div del index.html
      document.getElementById('index').innerHTML = data;

      // Ocultamos el div "index"
      //document.getElementById('index').classList.add('hidden');
    })
    .catch(error => console.log(error));
}


