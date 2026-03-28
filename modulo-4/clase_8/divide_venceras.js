function encontrarMaximo(arreglo) {
    if (arreglo.length === 0) {
        return null;
    }
    if (arreglo.length === 1) {
        return arreglo[0];
    }
    
    const mitad = Math.floor(arreglo.length / 2);
    
    const mitadIzquierda = arreglo.slice(0, mitad);
    const mitadDerecha = arreglo.slice(mitad);
    
    const maximoIzquierdo = encontrarMaximo(mitadIzquierda);
    const maximoDerecho = encontrarMaximo(mitadDerecha);
    
    if (maximoIzquierdo > maximoDerecho) {
        return maximoIzquierdo;
    } else {
        return maximoDerecho;
    }
}

const misNumeros = [14, 5, 27, 8, 99, 12, 3, 45, 1];
const resultadoFinal = encontrarMaximo(misNumeros);
console.log(resultadoFinal);
