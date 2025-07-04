// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import styles from "./styles/Navbar.module.css";
import logo_img from "../../public/imgs/logonar.png"


export default function Navbar() {
  return (
    <nav className={styles.navbar}>
{/*       <h1 className={styles.logo}> */}
        <img className={styles.logo} src={logo_img} alt="Logo colmenares" />
{/*       </h1> */}
      <ul className={styles.navLinks}>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}
