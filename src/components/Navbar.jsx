// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import styles from "./styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <img className={styles.logo} src="/imgs/logonar.png" alt="Logo colmenares" />
      <ul className={styles.navLinks}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}
