// Extraemos "z" desde Zod que importamos por CDN
const { z } = window.Zod;

// Definimos el esquema de validación
const registerSchema = z.object({
  // El nombre debe ser una cadena, mínimo 2 caracteres
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  
  // El correo debe tener un formato de email válido
  email: z.string().email({ message: "El formato del correo electrónico no es válido." }),
  
  // La contraseña debe tener al menos 6 caracteres
  password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres." })
});

const form = document.getElementById("registerForm");
const errorsBox = document.getElementById("errors");
const errorsList = document.getElementById("errors-list");
const successMsg = document.getElementById("success-msg");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  // Limpiar mensajes previos
  errorsList.innerHTML = "";
  errorsBox.style.display = "none";
  successMsg.style.display = "none";
  
  // Capturamos los valores
  const formData = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    password: document.getElementById("password").value.trim(),
  };

  try {
    // .parse() revisa el objeto formData contra el esquema.
    // Si no cumple las reglas, lanza un error y detiene la ejecución aquí.
    registerSchema.parse(formData);
    
    // Si pasa la validación sin lanzar error:
    successMsg.style.display = "block";
    form.reset(); // Limpia el formulario
  } catch (error) {
    // Si falla la validación, Zod nos regresa un objeto con todos los errores
    if (error instanceof z.ZodError) {
      errorsBox.style.display = "block";
      error.errors.forEach(e => {
        const li = document.createElement("li");
        li.textContent = e.message;
        errorsList.appendChild(li);
      });
    } else {
        console.error("Ocurrió un error inesperado", error);
    }
  }
});
