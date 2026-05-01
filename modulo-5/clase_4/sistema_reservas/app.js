// Simulando una base de datos de mesas
const mesasDisponibles = 5;  // Número de mesas disponibles para reservar

// Función que simula la verificación de disponibilidad de mesas
const verificarDisponibilidad = (mesasSolicitadas) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Si hay suficientes mesas disponibles, resuelve la promesa
      if (mesasSolicitadas <= mesasDisponibles) {
        resolve(`✅ Disponibilidad confirmada: Se han apartado ${mesasSolicitadas} mesas.`);
      } else {
        // de lo contrario, recházala con un mensaje de error.
        reject(`❌ No hay suficientes mesas disponibles. (Disponibles: ${mesasDisponibles}, Solicitadas: ${mesasSolicitadas})`);
      }
    }, 2000);  // Simula un retraso en la verificación (2 segundos)
  });
};

// Función que simula el envío de un correo de confirmación
const enviarConfirmacionReserva = (nombreCliente) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Usa Math.random() para simular si el correo se envió correctamente (70% éxito)
      const correoEnviado = Math.random() > 0.3; 
      
      if (correoEnviado) {
        resolve(`📧 Correo de confirmación enviado exitosamente a ${nombreCliente}.`);
      } else {
        reject(`⚠️ Fallo en el servidor de correos al enviar la confirmación a ${nombreCliente}.`);
      }
    }, 1500);  // Simula el envío de un correo (1.5 segundos)
  });
};

// Función principal para manejar una reserva
const hacerReserva = async (nombreCliente, mesasSolicitadas) => {
  try {
    console.log(`\n--- Nueva Solicitud de Reserva ---`);
    console.log(`👤 Cliente: ${nombreCliente} | Mesas solicitadas: ${mesasSolicitadas}`);
    console.log("Verificando disponibilidad de mesas...");
    
    // 1. Esperamos la promesa de disponibilidad
    const resultadoDisponibilidad = await verificarDisponibilidad(mesasSolicitadas);
    console.log(resultadoDisponibilidad);
    
    // 2. Si no hay error en el paso 1, enviamos el correo
    console.log("Enviando correo de confirmación...");
    const resultadoCorreo = await enviarConfirmacionReserva(nombreCliente);
    console.log(resultadoCorreo);
    
    console.log("🎉 ¡Reserva procesada exitosamente!");

  } catch (error) {
    // 3. Capturamos el error si no hay mesas O si falla el correo
    console.error("⛔ Error:", error);
  }
};

// ==========================================
// PRUEBAS DE LA SOLUCIÓN
// ==========================================

// Usamos una función async para ejecutar las pruebas una tras otra
// y evitar que los console.log se mezclen en la pantalla
const correrPruebas = async () => {
    // Prueba 1: Reserva normal que debería pasar la verificación de mesas
    await hacerReserva("Juan Pérez", 3);
    
    // Prueba 2: Reserva que excede las mesas disponibles (Rechazo inmediato)
    await hacerReserva("María López", 10);
    
    // Prueba 3: Otra reserva válida para ver la aletoriedad del correo
    await hacerReserva("Carlos García", 2);
};

// Ejecutamos las pruebas
correrPruebas();
