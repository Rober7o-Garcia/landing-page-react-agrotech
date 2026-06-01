import { Link } from 'react-router-dom';
import logoAgrotech from '../../assets/logo-agrotech.png';

function Header() {
  return (
    <header className="header">
      <nav className="navbar" aria-label="Navegación principal">
        <Link to="/" className="logo">
          <img src={logoAgrotech} alt="Logo de AgroTech Solutions" />
          <span>AgroTech Solutions</span>
        </Link>

        <ul className="nav-links">
          <li><a href="/#beneficios">Beneficios</a></li>
          <li><a href="/#servicios">Servicios</a></li>
          <li><a href="/#contacto">Contacto</a></li>
          <li><Link to="/design-system">Design System</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;