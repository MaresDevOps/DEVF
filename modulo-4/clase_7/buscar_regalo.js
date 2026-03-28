// Arreglo con nuestra lista de regalos navideños
const listaDeRegalos = ["Bicicleta", "Videojuego", "Libro de Programación", "Ropa", "Pelota", "Reloj Inteligente"];

// Función recursiva para buscar un regalo usando un índice que inicia en 0 por defecto
function buscarRegalo(gifts, giftName, index = 0) {
    
    // CASO BASE 1: Si el índice alcanza el tamaño del arreglo, significa que ya lo recorrimos todo
    if (index === gifts.length) {
        return `Lo siento, el regalo "${giftName}" no está en la lista. 😢`;
    }

    // CASO BASE 2: Si el regalo en la posición actual es igual al que buscamos
    if (gifts[index] === giftName) {
        return `¡Lo encontré! El regalo "${giftName}" está en la posición número ${index}. 🎁`;
    }

    // PASO RECURSIVO: Si no lo encontramos, nos volvemos a llamar pero sumando +1 al índice
    return buscarRegalo(gifts, giftName, index + 1);
}



console.log("== Búsquedas de Regalos ==\n");

// Buscamos algo que sí está (Videojuego está en la posición 1)
const resultado1 = buscarRegalo(listaDeRegalos, "Videojuego");
console.log(resultado1);

// Buscamos el último elemento
const resultado2 = buscarRegalo(listaDeRegalos, "Reloj Inteligente");
console.log(resultado2);

// Buscamos algo que NO está en la lista
const resultado3 = buscarRegalo(listaDeRegalos, "Patineta Voladora");
console.log(resultado3);
