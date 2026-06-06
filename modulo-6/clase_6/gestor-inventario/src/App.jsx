import { useReducer, useRef, useCallback, memo } from 'react';
import './App.css';

// Estado inicial del inventario
const initialState = [
  { id: 1, name: 'Laptop Pro X15', stock: 12, price: 1299 },
  { id: 2, name: 'Monitor 4K Ultra', stock: 5, price: 399 },
  { id: 3, name: 'Teclado Mecánico RGB', stock: 0, price: 129 }
];

// Función reductora para useReducer
function inventoryReducer(state, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [...state, { ...action.payload, id: Date.now() }];
    case 'SELL_PRODUCT':
      return state.map(product => 
        product.id === action.payload.id && product.stock > 0
          ? { ...product, stock: product.stock - 1 }
          : product
      );
    case 'RESTOCK_PRODUCT':
      return state.map(product =>
        product.id === action.payload.id
          ? { ...product, stock: product.stock + action.payload.amount }
          : product
      );
    case 'REMOVE_PRODUCT':
      return state.filter(product => product.id !== action.payload.id);
    default:
      return state;
  }
}

// Componente Memoizado para evitar re-renders innecesarios
const ProductRow = memo(({ product, onSell, onRestock, onRemove }) => {
  // Console log para demostrar que React.memo + useCallback evitan re-renders
  console.log(`Renderizando fila del producto: ${product.name}`);
  
  return (
    <tr className={product.stock === 0 ? 'out-of-stock' : ''}>
      <td>
        <div className="product-info">
          <span className="product-name">{product.name}</span>
          <span className="product-id">ID: #{product.id.toString().slice(-4)}</span>
        </div>
      </td>
      <td>
        <span className={`status-badge ${product.stock > 0 ? 'in-stock' : 'empty'}`}>
          {product.stock > 0 ? `${product.stock} en stock` : 'Agotado'}
        </span>
      </td>
      <td>${product.price}</td>
      <td>
        <div className="actions">
          <button 
            className="btn btn-sell" 
            onClick={() => onSell(product.id)}
            disabled={product.stock === 0}
            title="Vender 1 unidad"
          >
            Vender
          </button>
          <button 
            className="btn btn-restock" 
            onClick={() => onRestock(product.id, 5)}
            title="Reabastecer 5 unidades"
          >
            +5
          </button>
          <button 
            className="btn btn-icon btn-danger" 
            onClick={() => onRemove(product.id)}
            title="Eliminar producto del catálogo"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        </div>
      </td>
    </tr>
  );
});

function App() {
  const [inventory, dispatch] = useReducer(inventoryReducer, initialState);
  
  // useRef para manipular el DOM (Focus)
  const nameInputRef = useRef(null);
  const priceInputRef = useRef(null);

  // Funciones useCallback para pasar a componentes hijos sin romper React.memo
  const handleSell = useCallback((id) => {
    dispatch({ type: 'SELL_PRODUCT', payload: { id } });
  }, []);

  const handleRestock = useCallback((id, amount) => {
    dispatch({ type: 'RESTOCK_PRODUCT', payload: { id, amount } });
  }, []);

  const handleRemove = useCallback((id) => {
    dispatch({ type: 'REMOVE_PRODUCT', payload: { id } });
  }, []);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const name = nameInputRef.current.value;
    const price = parseFloat(priceInputRef.current.value);
    
    if (!name || isNaN(price)) return;

    dispatch({ 
      type: 'ADD_PRODUCT', 
      payload: { name, price, stock: 0 } 
    });

    // Limpiar inputs y mantener el focus
    nameInputRef.current.value = '';
    priceInputRef.current.value = '';
    nameInputRef.current.focus(); // Uso directo de useRef para DOM
  };

  const totalValue = inventory.reduce((total, p) => total + (p.price * p.stock), 0);

  return (
    <div className="admin-dashboard">
      {/* Sidebar simulado */}
      <aside className="sidebar">
        <div className="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
          <span>StoreAdmin</span>
        </div>
        <nav>
          <a href="#" className="active">Inventario</a>
          <a href="#">Ventas</a>
          <a href="#">Clientes</a>
        </nav>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <h1>Gestor de Inventario</h1>
          <div className="user-profile">Admin</div>
        </header>

        <div className="dashboard-grid">
          {/* Formulario de Nuevo Producto */}
          <section className="card new-product-card">
            <h2>Añadir Nuevo Producto</h2>
            <form onSubmit={handleAddProduct} className="add-form">
              <div className="form-group">
                <label>Nombre del Producto</label>
                <input 
                  type="text" 
                  ref={nameInputRef} 
                  placeholder="Ej: Auriculares Inalámbricos"
                />
              </div>
              <div className="form-group">
                <label>Precio Unitario ($)</label>
                <input 
                  type="number" 
                  step="0.01"
                  ref={priceInputRef} 
                  placeholder="0.00"
                />
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Registrar Producto
              </button>
            </form>
          </section>

          {/* Estadísticas */}
          <section className="card stats-card">
            <div className="stat-box">
              <span className="stat-label">Valor Total del Inventario</span>
              <span className="stat-value">${totalValue.toLocaleString()}</span>
            </div>
            <div className="stat-box">
              <span className="stat-label">Total de Productos Distintos</span>
              <span className="stat-value">{inventory.length}</span>
            </div>
            <div className="stat-box">
              <span className="stat-label">Productos Agotados</span>
              <span className="stat-value text-danger">
                {inventory.filter(p => p.stock === 0).length}
              </span>
            </div>
          </section>
        </div>

        {/* Tabla de Inventario */}
        <section className="card table-card">
          <div className="table-header">
            <h2>Catálogo Actual</h2>
          </div>
          <div className="table-responsive">
            <table className="inventory-table">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Estado</th>
                  <th>Precio</th>
                  <th>Acciones Rápidas</th>
                </tr>
              </thead>
              <tbody>
                {inventory.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center empty-msg">No hay productos en el inventario.</td>
                  </tr>
                ) : (
                  inventory.map(product => (
                    <ProductRow 
                      key={product.id} 
                      product={product} 
                      onSell={handleSell}
                      onRestock={handleRestock}
                      onRemove={handleRemove}
                    />
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
