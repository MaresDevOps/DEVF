// Lista ordenada alfabéticamente de invitados
const invitados = [
    "Ana",
    "Beatriz",
    "Carlos",
    "Cesar",
    "Daniel",
    "Elena"
];

// Función que busca el primer par de invitados que empiezan con la misma letra
function encontrarPareja(arreglo) {
    
    // Nuestro primer puntero en el inicio (posición 0)
    let puntero1 = 0;
    
    // Nuestro segundo puntero en el siguiente elemento (posición 1)
    let puntero2 = 1;

    // Repetimos mientras el segundo puntero no se pase del final de la lista
    while (puntero2 < arreglo.length) {
        
        // Sacamos la primera letra del nombre 1 y del nombre 2
        // Usamos [0] para la primera letra y toLowerCase() para evitar fallos por mayúsculas
        let inicial_1 = arreglo[puntero1][0].toLowerCase();
        let inicial_2 = arreglo[puntero2][0].toLowerCase();

        // Verificamos si las letras son iguales
        if (inicial_1 === inicial_2) {
            // Si coinciden, detenemos todo y regresamos el par en forma de arreglo
            return [arreglo[puntero1], arreglo[puntero2]];
        }

        // Si no coinciden, avanzamos ambos punteros una posición hacia adelante
        puntero1++;
        puntero2++;
    }

    // Si se acaba la lista y no hubo coincidencias cruzadas, devolvemos null
    return null;
}

// Probando nuestro algoritmo
const resultado = encontrarPareja(invitados);

if (resultado !== null) {
    console.log("¡Se encontró una pareja ideal!");
    console.log(`-> ${resultado[0]} y ${resultado[1]} pueden sentarse juntos.`);
} else {
    console.log("No se encontraron dos personas consecutivas con la misma inicial.");
}
