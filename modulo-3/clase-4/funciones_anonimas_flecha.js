//funcion normal
function suma() {
   
}
//funcion como variable 
let funcion_como_variable=function(a,b){
    return a+b;
}



//funcion flecha
let funcion_flecha=(a,b)=>{
    return a+b;
}

//Funcion con una sola linea
let funcion_flecha_corta=(a,b)=> a+b;

//funciones con un solo parametro non necesitan parentesis
let funcion_flecha_un_parametro=a=> a*2;

console.log(funcion_como_variable(2,3));
console.log(funcion_flecha(2,3));
console.log(funcion_flecha_corta(2,3));
console.log(funcion_flecha_un_parametro(5));