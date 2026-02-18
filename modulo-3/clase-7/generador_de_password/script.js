

// Elementos básicos
const passwordOutput = document.querySelector("#password");
const generateBtn = document.querySelector("#generate-btn");
const lengthSlider = document.querySelector("#length");
const lengthValue = document.querySelector("#length-value");
const uppercaseCB = document.querySelector("#uppercase");
const lowercaseCB = document.querySelector("#lowercase");
const numbersCB = document.querySelector("#numbers");
const symbolsCB = document.querySelector("#symbols");

// Mostrar el valor del slider
lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
});


// Función aún más simple para generar contraseña
function generatePassword() {
  let chars = "";
  // Sumar caracteres según los checkboxes (sin ifs avanzados)
  if (document.getElementById("uppercase").checked) {
    chars = chars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (document.getElementById("lowercase").checked) {
    chars = chars + "abcdefghijklmnopqrstuvwxyz";
  }
  if (document.getElementById("numbers").checked) {
    chars = chars + "0123456789";
  }
  if (document.getElementById("symbols").checked) {
    chars = chars + "!@#$%^&*()_+-=[]{},.<>?/";
  }
  if (chars.length === 0) {
    return "";
  }
  let password = "";
  for (let i = 0; i < lengthSlider.value; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password = password + chars[randomIndex];
  }
  return password;
}

// Evento para generar y mostrar la contraseña
generateBtn.addEventListener("click", () => {
  passwordOutput.value = generatePassword();
});

// Inicializar el valor del slider
lengthValue.textContent = lengthSlider.value;
