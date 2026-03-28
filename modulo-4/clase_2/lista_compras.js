let listaDeCompras = [];

const agregarProducto = (producto) => {
    const productoMinusculas = producto.toLowerCase();
    let yaExiste = listaDeCompras.some(item => item.toLowerCase() === productoMinusculas);

    if (yaExiste) {
        console.log(`El producto "${producto}" ya está en la lista.`);
    } else {
        listaDeCompras.push(producto);
        console.log(`Producto "${producto}" agregado.`);
    }
};

const eliminarProducto = (producto) => {
    const productoMinusculas = producto.toLowerCase();
    let indice = listaDeCompras.findIndex(item => item.toLowerCase() === productoMinusculas);

    if (indice !== -1) {
        listaDeCompras.splice(indice, 1);
        console.log(`Producto "${producto}" eliminado.`);
    } else {
        console.log(`El producto "${producto}" no existe.`);
    }
};

const mostrarLista = () => {
    if (listaDeCompras.length === 0) {
        console.log("Lista vacía.");
    } else {
        listaDeCompras.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
};

mostrarLista();
agregarProducto("Huevos");
agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("pan"); 

mostrarLista();

eliminarProducto("Leche");
eliminarProducto("Queso"); 

mostrarLista();
