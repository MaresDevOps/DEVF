import { useState } from "react";
import { Hash } from "lucide-react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    onLogin(username);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <Hash size={40} />
          <h1>Únete a Twitter hoy</h1>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-primary login-btn">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
