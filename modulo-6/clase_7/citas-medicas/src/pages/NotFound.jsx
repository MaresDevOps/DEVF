import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <Link to="/">
        <button style={{ padding: '10px 20px', cursor: 'pointer', marginTop: '20px' }}>Volver al Inicio</button>
      </Link>
    </div>
  );
}

export default NotFound;
