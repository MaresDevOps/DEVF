import './style.css';

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
const inputNumero = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const botonReiniciar = document.getElementById('reiniciar');
const mensaje = document.getElementById('mensaje');

botonAdivinar.addEventListener('click', () => {
    const numeroJugador = parseInt(inputNumero.value);

    if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
        mensaje.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
        mensaje.style.color = 'red';
    } else if (numeroJugador === numeroSecreto) {
        mensaje.textContent = '¡Felicidades! ¡Adivinaste el número!';
        mensaje.style.color = 'green';
    } else if (numeroJugador < numeroSecreto) {
        mensaje.textContent = 'El número es más alto.';
        mensaje.style.color = 'blue';
    } else {
        mensaje.textContent = 'El número es más bajo.';
        mensaje.style.color = 'orange';
    }
});

// Funcionalidad adicional: Reiniciar el juego
botonReiniciar.addEventListener('click', () => {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    inputNumero.value = '';
    mensaje.textContent = 'El juego se ha reiniciado. ¡Adivina de nuevo!';
    mensaje.style.color = 'black';
});
