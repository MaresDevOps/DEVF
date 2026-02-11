
//Objetos Anidados
const empresa={
    nombre:"Tech Solutions",
    empleados:{
        jefe:"Carlos",
    }
}

console.log(`la empresa se llama: ${empresa.nombre} y el jefe se llama ${empresa.empleados.jefe}`); ;
//Destructuración de objetos anidados
const {nombre}=empresa;
console.log(nombre); // Imprime "Tech Solutions"


