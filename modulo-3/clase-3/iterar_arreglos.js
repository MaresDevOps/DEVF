const animales = ['🐶', '😺', '🐘', '🐰', '🦁'];

for (let i = 0; i < animales.length; i++) {
    console.log(`El animal en la posición ${i} es ${animales[i]}`);
}

//es equivalente a

let i=0;
if  (i < animales.length) {

    console.log(`El animal en la posición ${i} es ${animales[i]}`);
    i++;
}
