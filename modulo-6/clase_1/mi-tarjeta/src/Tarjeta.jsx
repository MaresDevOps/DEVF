import profilePic from './assets/profile_pic.png';
import './Tarjeta.css';

function Tarjeta() {
  const nombre = "Mauricio Mares";
  const profesion = "Desarrollador de Software | DevOps";
  const mensaje = "Apasionado por la tecnología, el desarrollo web moderno y la cultura DevOps. Siempre buscando aprender y optimizar procesos.";

  return (
    <div className="tarjeta-container">
      <div className="tarjeta-glass">
        <div className="tarjeta-image-container">
          <img src={profilePic} alt={`Perfil de ${nombre}`} className="tarjeta-image" />
        </div>
        <div className="tarjeta-content">
          <h2 className="tarjeta-name">{nombre}</h2>
          <h4 className="tarjeta-profession">{profesion}</h4>
          <p className="tarjeta-message">{mensaje}</p>
        </div>
        <div className="tarjeta-footer">
          <button className="tarjeta-btn primary-btn">Contactar</button>
          <button className="tarjeta-btn secondary-btn">Portafolio</button>
        </div>
      </div>
    </div>
  );
}

export default Tarjeta;
