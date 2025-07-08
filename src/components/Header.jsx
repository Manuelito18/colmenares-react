import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Header.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const manejarScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", manejarScroll);
    return () => window.removeEventListener("scroll", manejarScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <img src="/imgs/logonar.png" alt="Logo Colmenares" />
        </div>
      </div>

      <nav className={styles.navbar}>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/nosotros">Nosotros</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </nav>

      <div className={styles.headerActions}>
        <button className={styles.btnGhost}>
          <img
            className={styles.imgSearch}
            src="/imgs/search.svg"
            alt="Buscar"
          />
        </button>
        <button className={styles.btnGhostCartBtn}>
          <img className={styles.imgCart} src="/imgs/cart.svg" alt="Carrito" />
          <span className={styles.cartBadge}></span>
        </button>
        <button className={styles.btnGhostMenuBtn}>
          <img className={styles.imgMenu} src="/imgs/menu.svg" alt="Menú" />
        </button>
      </div>
    </header>
  );
}
