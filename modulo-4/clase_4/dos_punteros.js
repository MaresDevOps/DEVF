const invitados = [
    "Ana",
    "Beatriz",
    "Carlos",
    "Cesar",
    "Daniel",
    "Elena"
];

function encontrarPareja(arreglo) {
    let puntero1 = 0;
    let puntero2 = 1;

    while (puntero2 < arreglo.length) {
        let inicial_1 = arreglo[puntero1][0].toLowerCase();
        let inicial_2 = arreglo[puntero2][0].toLowerCase();

        if (inicial_1 === inicial_2) {
            return [arreglo[puntero1], arreglo[puntero2]];
        }

        puntero1++;
        puntero2++;
    }

    return null;
}

const resultado = encontrarPareja(invitados);

if (resultado !== null) {
    console.log(`${resultado[0]} y ${resultado[1]} pueden sentarse juntos.`);
} else {
    console.log("No se encontraron coincidencias.");
}
