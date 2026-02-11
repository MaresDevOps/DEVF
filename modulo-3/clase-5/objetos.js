//Objetos 

//Sintaxis de un objeto

let obj={
    llave1:"valor1",
    llave2:"valor2",
}

//Ejemplo
let persona = {

    nombre: "Juan",
    edad: 30,   
    ocupacion:"Desarrollador",
}

console.log(persona);

//ACCEDER A LAS PROPIEDADES DE UN OBJETO

//1. Notación de punto
console.log(persona.nombre); // Imprime "Juan"
console.log(persona.edad); // Imprime 30
console.log(persona.ocupacion); // Imprime "Desarrollador"

//Otra forma de acceder a las propiedad es por []
console.log(persona["nombre"]); // Imprime "Juan"
console.log(persona["edad"]); // Imprime 30
console.log(persona["ocupacion"]); // Imprime "Desarrollador"

//Metodos
//Funciones especificas de los objetos 

let libro = {
    titulo:"1984",
    autor:"George Orwell",
    info(){
        console.log(`El libro ${this.titulo} fue escrito por ${this.autor}`);
    }
}

libro.info(); // Imprime "El libro 1984 fue escrito por George Orwell"

let libro2 = {
    titulo:"Cumbres Borrascosas",
    autor:"Emily Brontë",
    info(){
        console.log(`El libro ${this.titulo} fue escrito por ${this.autor}`);
    }
}

