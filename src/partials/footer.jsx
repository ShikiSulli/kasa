import './headerfooter.css';
import logo from'../images/logo.png';
import { Link } from "react-router-dom";
function Footer() {
    
    return (
      <footer>
        <Link to="/"><img src={logo} alt="logo" className='logo-footer'/></Link>
        <p>© 2023 - Tous droits réservés</p>
      </footer>
  )};
  export default Footer;