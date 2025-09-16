import { Link } from "react-router-dom";
import '../css/NavBar.css';
import { FaGithub } from 'react-icons/fa';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="logo-link">
          <img src="/site-icon.png" alt="Buffering Forever Logo" className="logo-img" />
          <span className="site-name">Movie Box</span>
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/favorites" className="nav-link">Favorites</Link>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link github-link"
          title="GitHub"
        >
          <FaGithub size={26} />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
