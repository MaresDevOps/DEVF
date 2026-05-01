const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; // Para identificar los pedidos

// Event listener para agregar un nuevo pedido
addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
});

// Función para agregar el pedido a la interfaz visualmente
const addOrder = (order) => {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.innerHTML = `<span>Pedido #${order.id}</span> <span class="en-proceso">${order.status}</span>`;
    orderList.appendChild(listItem);
};

// Función para actualizar visualmente el estado del pedido en la interfaz
const updateOrderStatus = (order, status) => {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        const className = status === 'Completado' ? 'completado' : 'en-proceso';
        listItem.innerHTML = `<span>Pedido #${order.id}</span> <span class="${className}">${status}</span>`;
    }
};

// Simulación de la preparación usando Promise y setTimeout
const simulatePreparation = () => {
    return new Promise((resolve) => {
        // Genera un tiempo de preparación aleatorio entre 2 y 5 segundos (2000 a 5000 ms)
        const preparationTime = Math.floor(Math.random() * 3000) + 2000;
        setTimeout(() => {
            resolve();
        }, preparationTime);
    });
};

// Función asíncrona para procesar el pedido (esperar preparación y actualizar estado)
const processOrder = async (order) => {
    try {
        // Esperamos a que la promesa de preparación se resuelva
        await simulatePreparation();
        
        // Una vez resuelta, actualizamos el estado a 'Completado'
        updateOrderStatus(order, 'Completado');
    } catch (error) {
        console.error('Error al procesar el pedido:', error);
    }
};
