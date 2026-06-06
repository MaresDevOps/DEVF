import { useState, useEffect, useMemo } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Aprender React Hooks', timeSpent: 120 },
    { id: 2, name: 'Diseñar interfaz UI/UX', timeSpent: 90 },
    { id: 3, name: 'Revisar PRs en GitHub', timeSpent: 45 }
  ]);
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskTime, setNewTaskTime] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // useEffect para el reloj
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // useMemo para calcular el total de horas (simulamos carga pesada)
  const totalMinutes = useMemo(() => {
    console.log("Calculando tiempo total..."); // Para demostrar que no se recalcula en cada segundo del reloj
    return tasks.reduce((total, task) => total + task.timeSpent, 0);
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (!newTaskName.trim() || !newTaskTime || isNaN(newTaskTime)) return;

    setTasks([
      ...tasks, 
      { 
        id: Date.now(), 
        name: newTaskName, 
        timeSpent: parseInt(newTaskTime, 10) 
      }
    ]);
    setNewTaskName('');
    setNewTaskTime('');
  };

  const formatTime = (minutes) => {
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hrs}h ${mins}m`;
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-info">
          <h1>Productivity Hub</h1>
          <p className="subtitle">Gestión de Tiempos</p>
        </div>
        <div className="clock-widget">
          <span className="clock-time">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </span>
          <span className="clock-date">
            {currentTime.toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' })}
          </span>
        </div>
      </header>

      <div className="dashboard-content">
        <div className="stats-card">
          <h3>Total Invertido</h3>
          <div className="total-time">
            <span className="time-value">{formatTime(totalMinutes)}</span>
            <span className="time-label">({totalMinutes} minutos)</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${Math.min((totalMinutes / 480) * 100, 100)}%` }}></div>
          </div>
          <p className="progress-text">Objetivo diario: 8 horas (480m)</p>
        </div>

        <div className="tasks-container">
          <form onSubmit={addTask} className="task-form">
            <input 
              type="text" 
              placeholder="Nueva tarea..." 
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
              className="form-input"
            />
            <input 
              type="number" 
              placeholder="Minutos" 
              value={newTaskTime}
              onChange={(e) => setNewTaskTime(e.target.value)}
              className="form-input time-input"
            />
            <button type="submit" className="btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </form>

          <div className="task-list">
            {tasks.map(task => (
              <div key={task.id} className="task-card">
                <div className="task-info">
                  <h4 className="task-name">{task.name}</h4>
                </div>
                <div className="task-meta">
                  <span className="task-duration">{formatTime(task.timeSpent)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
