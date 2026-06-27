import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (username) => {
    const userData = { username };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  if (loading) return null; // Avoid flashing login page if user is already logged in

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login onLogin={login} />} />
          <Route path="/" element={
            user ? <Home user={user} logout={logout} /> : <Navigate to="/login" />
          } />
          <Route
            path="/profile"
            element={user ? <Profile user={user} logout={logout} /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
