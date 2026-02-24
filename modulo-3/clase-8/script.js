window.onload = function() {

    // --- MANEJO DE ESTRELLAS INTERACTIVAS ---
    var estrellasInterfaz = document.querySelectorAll(".estrella");
    var calificacionGuardada = 5;

    estrellasInterfaz.forEach(function(estrella) {
        estrella.onclick = function() {
            calificacionGuardada = parseInt(this.getAttribute("data-valor"));

            // Despintar o pintar estrellas según la calificación elegida
            estrellasInterfaz.forEach(function(e) {
                var valor = parseInt(e.getAttribute("data-valor"));
                
                if (valor <= calificacionGuardada) {
                    e.classList.add("activa");
                } else {
                    e.classList.remove("activa");
                }
            });
        };
    });

    // --- MANEJO DE LA PANTALLA ---
    function agregarComentarioALaPantalla(titulo, cantidadEstrellas, texto) {
        var nuevoDiv = document.createElement("div");
        nuevoDiv.className = "comentario-item";
        
        var parrafoTitulo = document.createElement("p");
        parrafoTitulo.className = "comentario-titulo";
        parrafoTitulo.innerText = "Libro: " + titulo;
        
        var parrafoCalificacion = document.createElement("p");
        parrafoCalificacion.className = "comentario-calificacion";
        
        var estrellasTexto = "";
        for(var i = 0; i < cantidadEstrellas; i++) {
            estrellasTexto += "★";
        }
        parrafoCalificacion.innerText = estrellasTexto;
        
        var parrafoTexto = document.createElement("p");
        parrafoTexto.innerText = texto;
        
        var botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar comentario";
        botonEliminar.className = "boton-eliminar";
        
        // Manejar el borrado del comentario individual
        botonEliminar.onclick = function() {
            nuevoDiv.remove();
            recalcularYGuardarTodosLosComentarios();
        };
        
        nuevoDiv.appendChild(parrafoTitulo);
        nuevoDiv.appendChild(parrafoCalificacion);
        nuevoDiv.appendChild(parrafoTexto);
        nuevoDiv.appendChild(botonEliminar);
        
        document.getElementById("lista-comentarios").appendChild(nuevoDiv);
    }

    // --- MANEJO DE DATOS LOCALES (LocalStorage) ---
    function recalcularYGuardarTodosLosComentarios() {
        var listaDeComentarios = [];
        var comentariosEnPantalla = document.querySelectorAll(".comentario-item");
        
        comentariosEnPantalla.forEach(function(comentarioDiv) {
            var tituloTexto = comentarioDiv.querySelector(".comentario-titulo").innerText.replace("Libro: ", "");
            var estrellasTexto = comentarioDiv.querySelector(".comentario-calificacion").innerText.length;
            var opinionTexto = comentarioDiv.querySelectorAll("p")[2].innerText;
            
            var datos = {
                titulo: tituloTexto,
                estrellas: estrellasTexto,
                texto: opinionTexto
            };
            
            listaDeComentarios.push(datos);
        });
        
        // Guardar para que persista al recargar la página
        localStorage.setItem("misComentariosGuardados", JSON.stringify(listaDeComentarios));
    }

    function cargarComentariosGuardados() {
        var comentariosTexto = localStorage.getItem("misComentariosGuardados");
        
        if (comentariosTexto !== null) {
            var listaDeComentarios = JSON.parse(comentariosTexto);
            
            listaDeComentarios.forEach(function(datos) {
                agregarComentarioALaPantalla(datos.titulo, datos.estrellas, datos.texto);
            });
        }
    }

    // Inicializar la carga al principio
    cargarComentariosGuardados();
    
    // --- MANEJO DEL FORMULARIO PRINCIPAL ---
    var formulario = document.getElementById("formulario-comentario");
    
    formulario.onsubmit = function(evento) {
        evento.preventDefault(); // Evitar refresco por defecto
        
        var titulo = document.getElementById("titulo-libro").value;
        var texto = document.getElementById("texto-comentario").value;
        
        agregarComentarioALaPantalla(titulo, calificacionGuardada, texto);
        recalcularYGuardarTodosLosComentarios();
        
        // Limpiamos los cajones después de enviar
        document.getElementById("titulo-libro").value = "";
        document.getElementById("texto-comentario").value = "";
        
        calificacionGuardada = 5;
        estrellasInterfaz.forEach(function(e) {
            e.classList.add("activa");
        });
    }; 
};
