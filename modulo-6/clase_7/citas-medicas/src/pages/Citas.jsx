import { Link } from 'react-router-dom';

function Citas() {
  const citas = [
    { id: 1, paciente: "Juan Perez", fecha: "2023-11-20", hora: "10:00 AM", doctor: "Dr. Smith" },
    { id: 2, paciente: "Maria Gomez", fecha: "2023-11-21", hora: "11:30 AM", doctor: "Dra. Garcia" },
    { id: 3, paciente: "Carlos Lopez", fecha: "2023-11-22", hora: "09:00 AM", doctor: "Dr. Smith" },
  ];

  return (
    <div>
      <h2>Lista de Citas Médicas</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {citas.map(cita => (
          <li key={cita.id} style={{ border: '1px solid #ddd', margin: '10px 0', padding: '15px', borderRadius: '5px' }}>
            <p><strong>Paciente:</strong> {cita.paciente}</p>
            <p><strong>Fecha:</strong> {cita.fecha} a las {cita.hora}</p>
            <Link to={`/cita/${cita.id}`}>
              <button style={{ padding: '5px 10px', marginTop: '10px', cursor: 'pointer' }}>
                Ver Detalles
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Citas;
