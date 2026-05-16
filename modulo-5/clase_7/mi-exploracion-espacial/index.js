const planetas = require('./planetas');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "¡Iniciando reporte de exploración espacial!",
    e : "oO",
    T : "U "
}));

console.log("\n=================================================");
console.log("             REPORTE PLANETARIO                  ");
console.log("=================================================\n");

planetas.forEach(planeta => {
  console.log(`¡Planeta ${planeta.nombre} descubierto!`);
  console.log(`Descripción: ${planeta.descripcion}`);
  console.log(`Descubierto en: ${planeta.descubiertoEn}`);
  console.log('---');
});
