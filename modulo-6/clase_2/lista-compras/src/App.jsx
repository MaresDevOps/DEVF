import { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    
    const newItem = {
      id: Date.now(),
      text: inputValue,
      purchased: false
    };
    
    setItems([...items, newItem]);
    setInputValue('');
  };

  const togglePurchased = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, purchased: !item.purchased } : item
    ));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const pendingCount = items.filter(item => !item.purchased).length;

  return (
    <div className="app-container">
      <div className="shopping-card">
        <header className="card-header">
          <h1>Lista de Compras</h1>
          <p className="subtitle">
            {pendingCount} {pendingCount === 1 ? 'artículo pendiente' : 'artículos pendientes'}
          </p>
        </header>

        <form onSubmit={addItem} className="input-group">
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="¿Qué necesitas comprar?"
            className="modern-input"
          />
          <button type="submit" className="add-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </form>

        <ul className="shopping-list">
          {items.length === 0 ? (
            <li className="empty-state">Tu lista está vacía. ¡Agrega algunos productos!</li>
          ) : (
            items.map(item => (
              <li key={item.id} className={`list-item ${item.purchased ? 'purchased' : ''}`}>
                <div className="item-content" onClick={() => togglePurchased(item.id)}>
                  <div className={`checkbox ${item.purchased ? 'checked' : ''}`}>
                    {item.purchased && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    )}
                  </div>
                  <span className="item-text">{item.text}</span>
                </div>
                <button onClick={() => removeItem(item.id)} className="delete-btn" aria-label="Eliminar">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
