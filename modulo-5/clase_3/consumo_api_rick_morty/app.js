const btnFetch = document.getElementById('btn-fetch');
const btnAxios = document.getElementById('btn-axios');
const dataContainer = document.getElementById('data-container');

// URL de la API de Rick & Morty para obtener los personajes
const API_URL = 'https://rickandmortyapi.com/api/character';

// Función genérica para mostrar los personajes en la interfaz
const renderCharacters = (characters) => {
    // Limpiamos el contenedor
    dataContainer.innerHTML = ''; 
    
    // Iteramos sobre los personajes para crear su tarjeta en el HTML
    characters.forEach(character => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h3>${character.name}</h3>
            <p>Estado: ${character.status === 'Alive' ? '🟢 Vivo' : character.status === 'Dead' ? '🔴 Muerto' : '⚪ Desconocido'}</p>
        `;
        dataContainer.appendChild(card);
    });
};

// 1. Obtener datos usando FETCH nativo
const getCharactersFetch = async () => {
    try {
        dataContainer.innerHTML = '<p>Cargando datos con Fetch...</p>';
        
        const response = await fetch(API_URL);
        
        // Fetch no lanza error automáticamente si el status HTTP es malo, hay que validarlo
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        
        // Convertimos la respuesta a JSON
        const data = await response.json();
        renderCharacters(data.results);
        
    } catch (error) {
        console.error('Error con Fetch:', error);
        dataContainer.innerHTML = `<p style="color:red">Ocurrió un error con Fetch: ${error.message}</p>`;
    }
};

// 2. Obtener datos usando AXIOS
const getCharactersAxios = async () => {
    try {
        dataContainer.innerHTML = '<p>Cargando datos con Axios...</p>';
        
        // Axios es más directo y ya convierte la respuesta a JSON automáticamente
        // También lanza un error automáticamente si el status HTTP no es 2xx
        const response = await axios.get(API_URL);
        
        // Los datos viven dentro de la propiedad .data
        renderCharacters(response.data.results);
        
    } catch (error) {
        console.error('Error con Axios:', error);
        dataContainer.innerHTML = `<p style="color:red">Ocurrió un error con Axios: ${error.message}</p>`;
    }
};

// Event Listeners para los botones
btnFetch.addEventListener('click', getCharactersFetch);
btnAxios.addEventListener('click', getCharactersAxios);
