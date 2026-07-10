import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Citas from './pages/Citas';
import CitaDetalle from './pages/CitaDetalle';
import NotFound from './pages/NotFound';
import './App.css';

// Componente para resaltar el link activo
function NavLinks() {
  const location = useLocation();
  const getStyle = (path) => ({
    marginRight: '15px',
    padding: '8px 12px',
    textDecoration: 'none',
    color: location.pathname === path ? '#fff' : '#007bff',
    backgroundColor: location.pathname === path ? '#007bff' : 'transparent',
    borderRadius: '4px',
    fontWeight: 'bold'
  });

  return (
    <nav style={{ padding: '15px', borderBottom: '2px solid #eee', marginBottom: '20px', display: 'flex', gap: '10px' }}>
      <Link to="/" style={getStyle('/')}>Inicio</Link>
      <Link to="/citas" style={getStyle('/citas')}>Ver Citas</Link>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
        <NavLinks />
        <main style={{ padding: '0 15px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/citas" element={<Citas />} />
            <Route path="/cita/:id" element={<CitaDetalle />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
