let nombres=["Ana","Luis","Carlos","Mariana","Sofía"];

console.log(nombres[0]);
console.log(nombres);
//metodos de los arreglos 


//push()
nombres.push("Valeria");
console.log(nombres);

//pop()
nombres.pop();
console.log(nombres);

//unshift Agrega al inicio del arreglo
nombres.unshift("Valeria");
console.log(nombres);

//shift() Elimina el primer elemento del arreglo
nombres.shift();
console.log(nombres);

//sort()
let numeros=[3,5,1,4,2];
numeros.sort();
console.log(numeros);

//ordenar de forma numerica 
numeros.sort((a,b)=> a-b);
console.log(numeros);

//mapo() modifica todos los primeros