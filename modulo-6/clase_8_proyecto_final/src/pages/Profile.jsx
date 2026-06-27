import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";

const Profile = ({ user }) => {
  const [userTweets, setUserTweets] = useState([]);

  useEffect(() => {
    const savedTweets = localStorage.getItem("tweets");
    if (savedTweets) {
      const parsedTweets = JSON.parse(savedTweets);
      setUserTweets(parsedTweets.filter(t => t.author === user.username));
    }
  }, [user.username]);

  return (
    <div className="main-content">
      <header className="page-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link to="/" style={{ color: 'var(--text-primary)' }}>
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h2>{user.username}</h2>
            <div style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>
              {userTweets.length} posts
            </div>
          </div>
        </div>
      </header>

      <div className="profile-header">
        <div className="profile-banner"></div>
        <div className="profile-info">
          <div className="profile-actions">
            <button className="btn-outline">Editar perfil</button>
          </div>
          <div className="profile-avatar">
            {user.username.charAt(0).toUpperCase()}
          </div>
          
          <div className="profile-details">
            <h1 className="profile-name">{user.username}</h1>
            <p className="profile-handle">@{user.username.toLowerCase().replace(/\s/g, '')}</p>
            
            <p className="profile-bio">
              Desarrollador Web 🚀 | Aprendiendo React en DEVF | Amante del código
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '12px' }}>
              <Calendar size={16} />
              <span>Se unió en {new Date().toLocaleString('es-ES', { month: 'long', year: 'numeric' })}</span>
            </div>

            <div className="profile-stats">
              <div><span className="stat-value">124</span> <span className="stat-label">Siguiendo</span></div>
              <div><span className="stat-value">3,542</span> <span className="stat-label">Seguidores</span></div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderBottom: '1px solid var(--border-color)', display: 'flex' }}>
        <div style={{ padding: '16px', fontWeight: '700', borderBottom: '4px solid var(--accent-color)', color: 'var(--text-primary)' }}>
          Posts
        </div>
      </div>

      <div className="timeline">
        {userTweets.length === 0 ? (
          <div style={{ padding: '32px', textAlign: 'center', color: 'var(--text-secondary)' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>No hay posts aún</h3>
            <p>Cuando {user.username} postee, aparecerán aquí.</p>
          </div>
        ) : (
          userTweets.map(tweet => (
            <div key={tweet.id} className="tweet">
              <div className="avatar">
                {tweet.author.charAt(0).toUpperCase()}
              </div>
              <div className="tweet-content">
                <div className="tweet-header">
                  <span className="tweet-author">{tweet.author}</span>
                  <span className="tweet-handle">@{tweet.author.toLowerCase().replace(/\s/g, '')}</span>
                  <span className="tweet-time">· {tweet.time}</span>
                </div>
                <p className="tweet-text">{tweet.text}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Profile;
