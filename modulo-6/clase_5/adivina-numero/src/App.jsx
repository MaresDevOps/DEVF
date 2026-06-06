import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import './App.css';

// --- Subcomponentes para Composición ---

function GameHeader({ lives, attempts }) {
  return (
    <header className="game-header">
      <div className="stats">
        <span className="lives">
          VIDAS: {Array(lives).fill('❤️').join('')}
        </span>
        <span className="attempts">
          INTENTOS: {attempts}
        </span>
      </div>
      <h1 className="title neon-text">ADIVINA EL NÚMERO</h1>
    </header>
  );
}

function FeedbackScreen({ gameState, feedback }) {
  // Renderizado Condicional
  if (gameState === 'playing') {
    return <div className="feedback-screen neutral">{feedback || 'INGRESA UN NÚMERO DEL 1 AL 100'}</div>;
  }
  
  if (gameState === 'won') {
    return (
      <div className="feedback-screen success neon-box-success">
        <h2>¡GANASTE! 🎉</h2>
        <p>Has adivinado el código secreto.</p>
      </div>
    );
  }

  if (gameState === 'lost') {
    return (
      <div className="feedback-screen error neon-box-error">
        <h2>GAME OVER 💀</h2>
        <p>Te quedaste sin vidas.</p>
      </div>
    );
  }

  return null;
}

function Controls({ onGuess, gameState, onReset, shake }) {
  const [guess, setGuess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!guess || isNaN(guess)) return;
    onGuess(parseInt(guess, 10));
    setGuess('');
  };

  // Renderizado Condicional: Mostrar el input solo si estamos jugando
  if (gameState !== 'playing') {
    return (
      <div className="controls">
        <button className="btn neon-btn" onClick={onReset}>
          NUEVA PARTIDA
        </button>
      </div>
    );
  }

  return (
    <form className={`controls ${shake ? 'shake' : ''}`} onSubmit={handleSubmit}>
      <input 
        type="number" 
        className="game-input"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Escribe aquí..."
        min="1"
        max="100"
        autoFocus
      />
      <button type="submit" className="btn neon-btn">ADIVINAR</button>
    </form>
  );
}


// --- Componente Principal ---

function App() {
  const [targetNumber, setTargetNumber] = useState(generateNumber());
  const [lives, setLives] = useState(5);
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [gameState, setGameState] = useState('playing'); // playing | won | lost
  const [shake, setShake] = useState(false);

  function generateNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuess = (guess) => {
    setAttempts(a => a + 1);

    if (guess === targetNumber) {
      setGameState('won');
      triggerConfetti();
    } else {
      setLives(l => l - 1);
      triggerShake();
      
      if (lives - 1 === 0) {
        setGameState('lost');
      } else {
        if (guess < targetNumber) {
          setFeedback(`EL NÚMERO ES MAYOR QUE ${guess} 🔼`);
        } else {
          setFeedback(`EL NÚMERO ES MENOR QUE ${guess} 🔽`);
        }
      }
    }
  };

  const resetGame = () => {
    setTargetNumber(generateNumber());
    setLives(5);
    setAttempts(0);
    setFeedback('');
    setGameState('playing');
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00ff00', '#ff00ff', '#00ffff']
    });
  };

  return (
    <div className="arcade-cabinet">
      <div className="screen-bezel">
        <div className="game-screen">
          <GameHeader lives={lives} attempts={attempts} />
          
          <main className="game-content">
            <FeedbackScreen gameState={gameState} feedback={feedback} />
            <Controls 
              onGuess={handleGuess} 
              gameState={gameState} 
              onReset={resetGame}
              shake={shake}
            />
          </main>
          
          <footer className="scanline"></footer>
        </div>
      </div>
      <div className="cabinet-controls">
        <div className="coin-slot">INSERT COIN</div>
      </div>
    </div>
  );
}

export default App;
