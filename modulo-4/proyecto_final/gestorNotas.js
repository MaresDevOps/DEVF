const fs = require('fs');

const path = './notas.json';

function leerNotas() {
    try {
        if (!fs.existsSync(path)) {
            return [];
        }
        const notasJSON = fs.readFileSync(path, 'utf8');
        return JSON.parse(notasJSON);
    } catch (error) {
        return [];
    }
}

function guardarNotas(notas) {
    fs.writeFileSync(path, JSON.stringify(notas, null, 2));
}

function agregarNota(titulo, contenido) {
    const notas = leerNotas();
    const existe = notas.find(nota => nota.titulo === titulo);

    if (existe) {
        console.log(`La nota "${titulo}" ya existe.`);
        return;
    }

    notas.push({ titulo, contenido });
    guardarNotas(notas);
    console.log(`Nota "${titulo}" creada exitosamente.`);
}

function listarNotas() {
    const notas = leerNotas();
    
    if (notas.length === 0) {
        console.log("No hay notas guardadas.");
        return;
    }

    console.log("\n--- Tus Notas ---");
    notas.forEach((nota, index) => {
        console.log(`${index + 1}. ${nota.titulo}: ${nota.contenido}`);
    });
    console.log("-----------------\n");
}

function eliminarNota(titulo) {
    let notas = leerNotas();
    const notasRestantes = notas.filter(nota => nota.titulo !== titulo);

    if (notas.length === notasRestantes.length) {
        console.log(`La nota "${titulo}" no se encontró.`);
    } else {
        guardarNotas(notasRestantes);
        console.log(`Nota "${titulo}" eliminada.`);
    }
}

// Agregando múltiples notas
agregarNota("Super", "Pan, huevos, leche y café");
agregarNota("Gimnasio", "Rutina de pierna el martes");
agregarNota("Ideas", "Aprender React la próxima semana");
agregarNota("Dentista", "Cita el viernes a las 4:00 PM");

// Intentando agregar un duplicado intencionalmente
agregarNota("Ideas", "Esta nota duplicada no debería guardarse");

// Listando todas las notas
listarNotas();

// Eliminando un par de notas
eliminarNota("Gimnasio");
eliminarNota("Dentista");

// Intentando eliminar algo que no existe
eliminarNota("Viaje a Cancún");

// Listado final para verificar todo
listarNotas();
