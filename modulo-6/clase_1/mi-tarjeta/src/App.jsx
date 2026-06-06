import Tarjeta from './Tarjeta';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Mi Tarjeta de Presentación</h1>
        <p className="app-subtitle">Workshop de React - Módulo 6</p>
      </header>
      <main>
        <Tarjeta />
      </main>
    </div>
  );
}

export default App;
