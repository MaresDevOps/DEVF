const nombre=document.querySelector('.nombre');
const enviarBtn=document.querySelector('.enviar_btn');
const mensaje=document.querySelector('.saludo_p');

enviarBtn.addEventListener('click', () => {
    mensaje.innerHTML=`Hola ${nombre.value}`;
});