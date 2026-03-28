// Crear un arreglo de objetos 
const contactos = [
  {
    nombre: "Juan Pérez",
    puesto: "Desarrollador Front-end",
    empresa: "DevSolutions",
    correo: "juan@.com",
    telefono: "5551234"
  },
  {
    nombre: "Ana Gómez",
    puesto: "Diseñadora UX/UI",
    empresa: "Diseños",
    correo: "ana@.com",
    telefono: "5555678"
  },
  {
    nombre: "Carlos Ruiz",
    puesto: "Gerente de Proyectos",
    empresa: " Tech",
    correo: "carlos@.com",
    telefono: "5559012"
  }
];

//  Crear una función de flecha 
const generarTarjeta = (contacto) => {
  
  const tarjeta = `
=======================================
Nombre: ${contacto.nombre}
Puesto: ${contacto.puesto}
Empresa: ${contacto.empresa}
Correo Electrónico: ${contacto.correo}
Número de Teléfono: ${contacto.telefono}
=======================================
  `;
  return tarjeta;
};

// Mostrar las tarjetas en la consola
for (let i = 0; i < contactos.length; i++) {
  const tarjetaResultante = generarTarjeta(contactos[i]);
  console.log(tarjetaResultante);
}
