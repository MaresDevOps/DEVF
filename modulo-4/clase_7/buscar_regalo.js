const listaDeRegalos = ["Bicicleta", "Videojuego", "Libro de Programación", "Ropa", "Pelota", "Reloj Inteligente"];

function buscarRegalo(gifts, giftName, index = 0) {
    if (index === gifts.length) {
        return false;
    }

    if (gifts[index] === giftName) {
        return index;
    }

    return buscarRegalo(gifts, giftName, index + 1);
}

console.log(buscarRegalo(listaDeRegalos, "Videojuego"));
console.log(buscarRegalo(listaDeRegalos, "Patineta Voladora"));
