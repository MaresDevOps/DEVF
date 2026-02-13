
let formulario = document.getElementById('comentario-form');
let campoComentario = document.getElementById('comentario-input');
let listaComentarios = document.getElementById('comentarios-lista');

formulario.onsubmit = function(evento) {
    evento.preventDefault();
    let texto = campoComentario.value;
    if (texto.trim() === "") {
        return;
    }
    let nuevoComentario = document.createElement('div');
    nuevoComentario.className = 'comentario';
    let parrafo = document.createElement('p');
    parrafo.textContent = texto;
    nuevoComentario.appendChild(parrafo);
    let fecha = document.createElement('span');
    fecha.className = 'fecha';
    fecha.textContent = new Date().toLocaleString();
    nuevoComentario.appendChild(fecha);
    let botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.onclick = function() {
        listaComentarios.removeChild(nuevoComentario);
    };
    nuevoComentario.appendChild(botonEliminar);
    listaComentarios.insertBefore(nuevoComentario, listaComentarios.firstChild);
    campoComentario.value = "";
};