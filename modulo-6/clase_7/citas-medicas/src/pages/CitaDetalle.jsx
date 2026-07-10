import { useParams, Link, useNavigate } from 'react-router-dom';

function CitaDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();

  // En un caso real esto vendría de una API o un estado global
  const citas = [
    { id: 1, paciente: "Juan Perez", fecha: "2023-11-20", hora: "10:00 AM", doctor: "Dr. Smith", motivo: "Chequeo general", notas: "Paciente sin antecedentes relevantes." },
    { id: 2, paciente: "Maria Gomez", fecha: "2023-11-21", hora: "11:30 AM", doctor: "Dra. Garcia", motivo: "Dolor de cabeza", notas: "Recetar paracetamol." },
    { id: 3, paciente: "Carlos Lopez", fecha: "2023-11-22", hora: "09:00 AM", doctor: "Dr. Smith", motivo: "Resultados de análisis", notas: "Todo en orden." },
  ];

  const cita = citas.find(c => c.id === parseInt(id));

  if (!cita) {
    return (
      <div>
        <h2>Cita no encontrada</h2>
        <p>No se encontró ninguna cita con el ID {id}</p>
        <button onClick={() => navigate('/citas')}>Volver a la lista de citas</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Detalles de la Cita #{id}</h2>
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', backgroundColor: '#f9f9f9', color: '#333' }}>
        <p><strong>Paciente:</strong> {cita.paciente}</p>
        <p><strong>Doctor Asignado:</strong> {cita.doctor}</p>
        <p><strong>Fecha y Hora:</strong> {cita.fecha} a las {cita.hora}</p>
        <p><strong>Motivo:</strong> {cita.motivo}</p>
        <p><strong>Notas:</strong> {cita.notas}</p>
      </div>
      <br />
      <Link to="/citas">
        <button style={{ padding: '8px 15px', cursor: 'pointer' }}>Volver a la lista</button>
      </Link>
    </div>
  );
}

export default CitaDetalle;
