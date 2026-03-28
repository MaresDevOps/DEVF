function encontrarPalabraMasLarga(texto) {
    const palabras = texto.split(' ');
    let longestWord = "";

    for (let i = 0; i < palabras.length; i++) {
        let palabraActual = palabras[i];
        
        if (palabraActual.length > longestWord.length) {
            longestWord = palabraActual;
        }
    }

    return longestWord;
}

const parrafoPrueba = "Aprender programación y algoritmos es verdaderamente extraordinario";
const resultado = encontrarPalabraMasLarga(parrafoPrueba);

console.log(resultado);
