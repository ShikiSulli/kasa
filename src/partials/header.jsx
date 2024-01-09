import './headerfooter.css';
import logo from '../images/logo.png';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="container">
        <ul className='nav-menu row'>
          <div className="logo col-12 col-md-3">
            <li><Link to="/"><img src={logo} alt="Logo" className='logo' /></Link></li>
          </div>
          <div className="menu col-12 col-md-9">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">A Propos</Link></li>
          </div>
        </ul> 
      </nav>
    </header>
  );
}

export default Header;