// Arreglo de productos
const productos = [
    { nombre: "Teclado", precio: 120, categoria: "Electrónica" },
    { nombre: "Raton", precio: 45, categoria: "Electrónica" },
    { nombre: "Alfombrilla", precio: 15, categoria: "Accesorios" },
    { nombre: "Monitor", precio: 250, categoria: "Electrónica" },
    { nombre: "Camara Web", precio: 80, categoria: "Electrónica" }
];

console.log("=== LISTA ORIGINAL ===");
console.log(productos);

// Filtrar productos menores a 100
const productosBaratos = productos.filter((producto) => producto.precio < 100);

console.log("\n=== PRODUCTOS BARATOS ===");
console.log(productosBaratos);

// Ordenar productos alfabéticamente
const productosOrdenados = productosBaratos.sort((a, b) => {
    if (a.nombre < b.nombre) {
        return -1;
    } else if (a.nombre > b.nombre) {
        return 1;
    } else {
        return 0;
    }
});

console.log("\n=== ORDENADOS C/ SORT ===");
console.log(productosOrdenados);

// Obtener solo los nombres
const nombresDeProductos = productosOrdenados.map((producto) => producto.nombre);

console.log("\n=== SOLO NOMBRES ===");
console.log(nombresDeProductos);

// Método opcional: some
const hayAccesorios = productos.some((producto) => producto.categoria === "Accesorios");

console.log("\n=== ¿HAY ACCESORIOS? ===");
console.log(hayAccesorios);
