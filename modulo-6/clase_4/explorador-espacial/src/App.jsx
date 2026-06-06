import { useState, useEffect, useMemo } from 'react';
import './App.css';

// Componente hijo que muestra el estado de un sistema
function SystemStatus({ name, status }) {
  // Simular ciclo de vida: montaje y desmontaje
  useEffect(() => {
    console.log(`[Montaje] Sistema ${name} iniciado.`);
    return () => {
      console.log(`[Desmontaje] Sistema ${name} apagado.`);
    };
  }, [name]);

  return (
    <div className={`system-status ${status === 'Crítico' ? 'alert-critical' : 'alert-normal'}`}>
      <span className="system-name">{name}</span>
      <span className="system-state">{status}</span>
    </div>
  );
}

function App() {
  const [distance, setDistance] = useState(0);
  const [fuel, setFuel] = useState(100);
  const [events, setEvents] = useState(['Despegue exitoso. Iniciando viaje intergaláctico.']);
  const [engineActive, setEngineActive] = useState(true);

  // useEffect para simular el vuelo (Actualización continua)
  useEffect(() => {
    let flightInterval;
    if (engineActive && fuel > 0) {
      flightInterval = setInterval(() => {
        setDistance(d => d + 100);
        setFuel(f => Math.max(0, f - 1));
        
        // Evento aleatorio durante el vuelo
        if (Math.random() > 0.95) {
          const possibleEvents = ['Lluvia de meteoritos evadida.', 'Nebulosa detectada a estribor.', 'Señal de radio alienígena interceptada.'];
          const randomEvent = possibleEvents[Math.floor(Math.random() * possibleEvents.length)];
          setEvents(prev => [randomEvent, ...prev].slice(0, 5)); // Guardar los últimos 5
        }
      }, 1000);
    } else if (fuel === 0 && engineActive) {
      setEvents(prev => ['¡Combustible agotado! Nave a la deriva.', ...prev].slice(0, 5));
      setEngineActive(false);
    }

    return () => clearInterval(flightInterval);
  }, [engineActive, fuel]);

  // useMemo para cálculo complejo de eficiencia
  const efficiencyScore = useMemo(() => {
    console.log("Calculando eficiencia de vuelo...");
    // Cálculo simulado pesado: Distancia recorrida por unidad de combustible gastado
    const fuelSpent = 100 - fuel;
    if (fuelSpent === 0) return "100.00";
    return (distance / fuelSpent).toFixed(2);
  }, [distance, fuel]);

  return (
    <div className="space-dashboard">
      <div className="hud-overlay"></div>
      
      <header className="dashboard-header">
        <div className="brand">
          <h1>USS EXPLORER</h1>
          <span className="badge">MISIÓN ALPHA</span>
        </div>
        <div className="controls">
          <button 
            className={`btn-engine ${engineActive ? 'btn-stop' : 'btn-start'}`}
            onClick={() => setEngineActive(!engineActive)}
            disabled={fuel === 0}
          >
            {engineActive ? 'APAGAR MOTORES' : 'ENCENDER MOTORES'}
          </button>
        </div>
      </header>

      <main className="dashboard-grid">
        {/* Panel Izquierdo: Telemetría */}
        <section className="panel telemetry-panel">
          <h2>Telemetría</h2>
          <div className="metric-box">
            <span className="metric-label">DISTANCIA RECORRIDA</span>
            <span className="metric-value">{distance.toLocaleString()} <span className="unit">km</span></span>
          </div>
          <div className="metric-box">
            <span className="metric-label">COMBUSTIBLE</span>
            <div className="fuel-bar-container">
              <div 
                className={`fuel-bar ${fuel < 20 ? 'fuel-critical' : ''}`} 
                style={{ width: `${fuel}%` }}
              ></div>
            </div>
            <span className="metric-value">{fuel}%</span>
          </div>
          <div className="metric-box highlight">
            <span className="metric-label">EFICIENCIA DE VUELO</span>
            <span className="metric-value">{efficiencyScore} <span className="unit">km/u</span></span>
          </div>
        </section>

        {/* Panel Central: Sistemas (Demostración de ciclo de vida) */}
        <section className="panel systems-panel">
          <h2>Sistemas de la Nave</h2>
          <div className="systems-list">
            <SystemStatus name="Soporte Vital" status={fuel > 0 ? 'Óptimo' : 'Crítico'} />
            <SystemStatus name="Escudos Deflectores" status={engineActive ? 'Activo' : 'Inactivo'} />
            {engineActive && <SystemStatus name="Motor de Curvatura" status="Estable" />}
          </div>
        </section>

        {/* Panel Derecho: Log de Eventos */}
        <section className="panel events-panel">
          <h2>Registro del Capitán</h2>
          <ul className="event-log">
            {events.map((ev, index) => (
              <li key={index} className={`event-item ${index === 0 ? 'latest-event' : ''}`}>
                <span className="event-time">T-{distance}</span>
                <span className="event-text">{ev}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
