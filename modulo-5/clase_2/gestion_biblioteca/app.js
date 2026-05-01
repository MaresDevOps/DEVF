// Datos iniciales de libros simulando un objeto JSON
const biblioteca = {
    "libros": [
        { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true }
    ]
};

// Función para simular la lectura de datos con un callback
const leerDatos = (callback) => {
    setTimeout(() => {
        // Simulamos un pequeño retraso de lectura
        callback(biblioteca);
    }, 1000);
};

// Función para simular la escritura de datos con un callback
const escribirDatos = (nuevosDatos, callback) => {
    setTimeout(() => {
        // En una app real, aquí escribiríamos en el archivo JSON.
        // Aquí simplemente actualizamos el objeto en memoria.
        biblioteca.libros = nuevosDatos.libros;
        callback();
    }, 1000);
};

// Función para mostrar todos los libros en consola
const mostrarLibros = () => {
    leerDatos((datos) => {
        console.log("\n--- Inventario de libros ---");
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
        console.log("----------------------------\n");
    });
};

// Función para agregar un nuevo libro usando callbacks
const agregarLibro = (titulo, autor, genero, disponible, callback) => {
    console.log(`Guardando el libro: "${titulo}"...`);
    
    // Primero leemos los datos actuales
    leerDatos((datos) => {
        const nuevoLibro = { titulo, autor, genero, disponible };
        datos.libros.push(nuevoLibro);
        
        // Luego simulamos escribir los nuevos datos
        escribirDatos(datos, () => {
            console.log(`✅ Libro "${titulo}" agregado con éxito.`);
            if(callback) callback(); // Llamamos al callback si existe
        });
    });
};

// Función para cambiar la disponibilidad de un libro
const actualizarDisponibilidad = (titulo, nuevoEstado, callback) => {
    console.log(`Actualizando disponibilidad de "${titulo}" a: ${nuevoEstado ? 'Disponible' : 'Prestado'}...`);
    
    // Leemos los datos actuales
    leerDatos((datos) => {
        const libro = datos.libros.find(l => l.titulo === titulo);
        
        if (libro) {
            libro.disponible = nuevoEstado;
            // Escribimos los datos actualizados
            escribirDatos(datos, () => {
                console.log(`✅ Disponibilidad de "${titulo}" actualizada.`);
                if(callback) callback();
            });
        } else {
            console.log(`❌ Error: El libro "${titulo}" no se encontró.`);
            if(callback) callback();
        }
    });
};

// ==========================================
// EJECUCIÓN DE LA APLICACIÓN
// ==========================================
console.log("Iniciando sistema de gestión de biblioteca...");

// 1. Mostrar libros iniciales
mostrarLibros();

// 2. Usamos setTimeout para esperar a que termine el primer mostrarLibros y no mezclar la consola,
// y luego anidamos las funciones usando callbacks para que se ejecuten en orden.
setTimeout(() => {
    agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true, () => {
        actualizarDisponibilidad("1984", false, () => {
            console.log("\n[Operaciones finalizadas. Mostrando inventario final]");
            mostrarLibros();
        });
    });
}, 1500);
