// Arreglo para la lista de compras
let listaDeCompras = [];

// Función para agregar un producto
const agregarProducto = (producto) => {
    const productoMinusculas = producto.toLowerCase();
    let yaExiste = listaDeCompras.some(item => item.toLowerCase() === productoMinusculas);

    if (yaExiste) {
        console.log(`El producto "${producto}" ya está en la lista. No se agregó.`);
    } else {
        listaDeCompras.push(producto);
        console.log(`Producto "${producto}" agregado correctamente.`);
    }
};

// Función para eliminar un producto
const eliminarProducto = (producto) => {
    const productoMinusculas = producto.toLowerCase();
    let indice = listaDeCompras.findIndex(item => item.toLowerCase() === productoMinusculas);

    if (indice !== -1) {
        listaDeCompras.splice(indice, 1);
        console.log(`Producto "${producto}" eliminado de la lista.`);
    } else {
        console.log(`El producto "${producto}" no existe en la lista de compras.`);
    }
};

// Función para mostrar toda la lista
const mostrarLista = () => {
    if (listaDeCompras.length === 0) {
        console.log("La lista de compras está vacía en este momento.");
    } else {
        console.log("--- MI LISTA DE COMPRAS ---");
        listaDeCompras.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
        console.log("---------------------------");
    }
};

// Pruebas
console.log("== Iniciando pruebas ==");
mostrarLista();

agregarProducto("Huevos");
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("pan"); 

mostrarLista();

eliminarProducto("Leche");
eliminarProducto("Queso"); 

mostrarLista();
