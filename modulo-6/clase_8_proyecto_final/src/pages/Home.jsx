import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LogOut, User, MessageCircle, Repeat2, Heart, Share } from "lucide-react";

const Home = ({ user, logout }) => {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState("");

  // Load tweets from localStorage on initial render
  useEffect(() => {
    const savedTweets = localStorage.getItem("tweets");
    if (savedTweets) {
      setTweets(JSON.parse(savedTweets));
    } else {
      // Default tweets
      setTweets([
        { id: 1, text: "¡Mi primer tweet en este clon de Twitter! 🚀", author: "devf_sensei", time: "1h" },
        { id: 2, text: "Aprendiendo React y React Router con auth. #DesarrolloWeb", author: "coder_123", time: "2h" }
      ]);
    }
  }, []);

  // Save tweets to localStorage whenever they change
  useEffect(() => {
    if (tweets.length > 0) {
      localStorage.setItem("tweets", JSON.stringify(tweets));
    }
  }, [tweets]);

  const handlePostTweet = () => {
    if (!newTweet.trim()) return;
    
    const tweet = {
      id: Date.now(),
      text: newTweet,
      author: user.username,
      time: "ahora"
    };
    
    setTweets([tweet, ...tweets]);
    setNewTweet("");
  };

  return (
    <div className="main-content">
      <header className="page-header">
        <h2>Inicio</h2>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Link to="/profile" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <User size={18} />
            Perfil
          </Link>
          <button onClick={logout} className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '4px', borderColor: 'var(--error-color)', color: 'var(--error-color)' }}>
            <LogOut size={18} />
            Salir
          </button>
        </div>
      </header>

      <div className="tweet-compose">
        <div className="avatar">
          {user.username.charAt(0).toUpperCase()}
        </div>
        <div className="compose-body">
          <textarea
            className="compose-textarea"
            placeholder="¡Qué está pasando?!"
            value={newTweet}
            onChange={(e) => setNewTweet(e.target.value)}
          />
          <div className="compose-actions">
            <button 
              className="btn-primary" 
              onClick={handlePostTweet}
              disabled={!newTweet.trim()}
              style={{ opacity: !newTweet.trim() ? 0.5 : 1 }}
            >
              Postear
            </button>
          </div>
        </div>
      </div>

      <div className="timeline">
        {tweets.map(tweet => (
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
              <div className="tweet-actions">
                <button className="action-btn"><MessageCircle /></button>
                <button className="action-btn"><Repeat2 /></button>
                <button className="action-btn"><Heart /></button>
                <button className="action-btn"><Share /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
