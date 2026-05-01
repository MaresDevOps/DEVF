const form = document.getElementById('registroEvento');
const errorContainer = document.getElementById('mensajesError');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío automático del formulario
  
  // Limpiar errores previos
  errorContainer.style.display = 'none';
  errorContainer.innerHTML = '';
  let errores = [];

  // Capturamos los valores
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const intereses = document.querySelectorAll('input[name="intereses"]:checked');
  const horario = document.querySelector('input[name="horario"]:checked');
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;

  // Validación Básica
  if (!nombre || !correo || !telefono || intereses.length === 0 || !horario || !fecha || !hora) {
    errores.push('Por favor, completa todos los campos obligatorios.');
  }

  // ==========================================
  // 3 VALIDACIONES ADICIONALES (Requisito)
  // ==========================================

  // Validación 1: El nombre debe tener al menos nombre y apellido (2 palabras)
  if (nombre && nombre.split(' ').length < 2) {
      errores.push('El campo "Nombre" debe incluir al menos un apellido (dos palabras).');
  }

  // Validación 2: El teléfono debe ser exactamente de 10 dígitos numéricos
  const regexTelefono = /^\d{10}$/;
  if (telefono && !regexTelefono.test(telefono)) {
      errores.push('El teléfono debe contener exactamente 10 dígitos numéricos.');
  }

  // Validación 3: La fecha seleccionada debe ser en el futuro
  if (fecha) {
      const fechaSeleccionada = new Date(fecha);
      const fechaActual = new Date();
      fechaActual.setHours(0, 0, 0, 0);
      
      // getTime() para comparar, sumando el timezone offset
      const fechaSeleccionadaAjustada = new Date(fechaSeleccionada.getTime() + Math.abs(fechaSeleccionada.getTimezoneOffset() * 60000));
      
      if (fechaSeleccionadaAjustada.getTime() <= fechaActual.getTime()) {
          errores.push('La fecha del evento no puede ser hoy ni en el pasado.');
      }
  }

  // ==========================================
  // MANEJO DEL RESULTADO
  // ==========================================

  if (errores.length > 0) {
      // Si hay errores, los mostramos
      errorContainer.style.display = 'block';
      let htmlErrores = '<strong>Se detectaron los siguientes problemas:</strong><ul>';
      errores.forEach(err => {
          htmlErrores += `<li>${err}</li>`;
      });
      htmlErrores += '</ul>';
      errorContainer.innerHTML = htmlErrores;
  } else {
      // Si pasa todas las validaciones
      alert('¡Registro exitoso! Tus datos han sido validados y guardados correctamente.');
      form.reset(); 
  }
});
