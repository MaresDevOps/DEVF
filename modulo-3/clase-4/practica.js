
// Array para guardar los libros leídos
let librosLeidos = [];

// Función para agregar un libro
function agregarLibro(titulo) {
    librosLeidos.push(titulo);
}

// Función para mostrar los libros leídos
function mostrarLibrosLeidos() {
    console.log("Libros leídos:");
    for (let i = 0; i < librosLeidos.length; i++) {
        console.log("- " + librosLeidos[i]);
    }
}

// Ejemplo de uso:
agregarLibro("Cien años de soledad");
agregarLibro("El principito");
mostrarLibrosLeidos();
