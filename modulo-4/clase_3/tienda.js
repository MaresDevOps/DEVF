const productos = [
    { nombre: "Teclado", precio: 120, categoria: "Electrónica" },
    { nombre: "Raton", precio: 45, categoria: "Electrónica" },
    { nombre: "Alfombrilla", precio: 15, categoria: "Accesorios" },
    { nombre: "Monitor", precio: 250, categoria: "Electrónica" },
    { nombre: "Camara Web", precio: 80, categoria: "Electrónica" }
];

console.log(productos);

const productosBaratos = productos.filter((producto) => producto.precio < 100);
console.log(productosBaratos);

const productosOrdenados = productosBaratos.sort((a, b) => {
    if (a.nombre < b.nombre) {
        return -1;
    } else if (a.nombre > b.nombre) {
        return 1;
    } else {
        return 0;
    }
});
console.log(productosOrdenados);

const nombresDeProductos = productosOrdenados.map((producto) => producto.nombre);
console.log(nombresDeProductos);

const hayAccesorios = productos.some((producto) => producto.categoria === "Accesorios");
console.log(hayAccesorios);
