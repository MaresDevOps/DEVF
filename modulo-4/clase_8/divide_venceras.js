// Función para encontrar el número máximo usando el paradigma "Divide y Vencerás"
function encontrarMaximo(arreglo) {
    
    // Si el arreglo está vacío, no hay máximo que encontrar
    if (arreglo.length === 0) {
        return null;
    }
    // Si el arreglo tiene solo un elemento, ese será el máximo por lógica
    if (arreglo.length === 1) {
        return arreglo[0];
    }
    
    // Calculamos el índice que está exactamente a la mitad del arreglo
    const mitad = Math.floor(arreglo.length / 2);
    
    // Usamos el método slice() para cortar el arreglo en un lado izquierdo y otro derecho
    const mitadIzquierda = arreglo.slice(0, mitad);
    const mitadDerecha = arreglo.slice(mitad);
    
    // Llamamos a la misma función pero enviándole solo la mitad que corresponde
    const maximoIzquierdo = encontrarMaximo(mitadIzquierda);
    const maximoDerecho = encontrarMaximo(mitadDerecha);
    
    // Comparamos el "campeón" de la izquierda contra el "campeón" de la derecha
    if (maximoIzquierdo > maximoDerecho) {
        return maximoIzquierdo;
    } else {
        return maximoDerecho;
    }
}

const misNumeros = [14, 5, 27, 8, 99, 12, 3, 45, 1];

console.log("Buscando el máximo en el arreglo:", misNumeros);

const resultadoFinal = encontrarMaximo(misNumeros);

console.log(`\n¡El número máximo encontrado en toda la lista es el: ${resultadoFinal}!`);
