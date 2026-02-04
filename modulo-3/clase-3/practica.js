// Clasificación de Frutas
// Solución usando ciclo for y ciclo while

//  Declarar un arreglo de frutas con emojis
const frutas = ['🍎', '🍌', '🍊', '🍎', '🍐', '🍌', '🍎', '🍇', '🍊', '🍐', '🍌'];

//  Crear un objeto para almacenar la cantidad de cada tipo de fruta
const conteoFrutas = {};

//  Usar un ciclo for para contar las frutas
for (let i = 0; i < frutas.length; i++) {
    const fruta = frutas[i];
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        conteoFrutas[fruta] = 1;
    }
}


console.log('Conteo de frutas usando for:');
console.log(conteoFrutas);

const conteoFrutasWhile = {};
let j = 0;
while (j < frutas.length) {
    const fruta = frutas[j];
    if (conteoFrutasWhile[fruta]) {
        conteoFrutasWhile[fruta]++;
    } else {
        conteoFrutasWhile[fruta] = 1;
    }
    j++;
}


console.log('Conteo de frutas usando while:');
console.log(conteoFrutasWhile);