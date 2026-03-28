// Función que encuentra la palabra más larga usando la técnica Sliding Window (Ventana deslizante)
function encontrarPalabraMasLarga(texto) {
    
    // 1. Utilizamos .split(' ') para convertir el párrafo en un arreglo de palabras sueltas
    const palabras = texto.split(' ');
    
    // 2. Variable para guardar la palabra más larga encontrada hasta el momento
    let longestWord = "";

    // 3. Deslizamos nuestra ventana recorriendo todas las palabras del arreglo
    for (let i = 0; i < palabras.length; i++) {
        let palabraActual = palabras[i];
        
        // 4. Comparamos si la longitud de la palabra actual es mayor a la que teníamos guardada
        if (palabraActual.length > longestWord.length) {
            // Si encontramos una más grande, actualizamos nuestra variable
            longestWord = palabraActual;
        }
    }

    // 5. Devolvemos el resultado final
    return longestWord;
}

const parrafoPrueba = "Aprender programación y algoritmos es verdaderamente extraordinario";
const resultado = encontrarPalabraMasLarga(parrafoPrueba);

console.log(`Texto original: "${parrafoPrueba}"`);
console.log(`\nLa palabra más larga encontrada es: ---> "${resultado}" <---`);
console.log(`Con una longitud de: ${resultado.length} letras.`);
