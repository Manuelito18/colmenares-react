import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Navbar.module.css";

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
    <header className={`${styles.navbarWrapper} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navTop}>
        <div className={styles.redes}>
          <a href="https://www.facebook.com/ColmenaresNar" target="_blank" rel="noopener noreferrer">
            <img src="/imgs/facebook.svg" alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/colmenaresnar/" target="_blank" rel="noopener noreferrer">
            <img src="/imgs/instagram.svg" alt="Instagram" />
          </a>
          <a href="https://www.tiktok.com/@colmenaresnar" target="_blank" rel="noopener noreferrer">
            <img src="/imgs/tiktok.svg" alt="TikTok" />
          </a>
          <a href="https://www.youtube.com/@colmenaresnar" target="_blank" rel="noopener noreferrer">
            <img src="/imgs/youtube.svg" alt="YouTube" />
          </a>
        </div>
        <div className={styles.telefono}>
          <a href="https://api.whatsapp.com/send?phone=+51953652634">📞 +51 999 888 777</a>
        </div>
      </div>

      <nav className={styles.navbar}>
        <div className={styles.navInner}>
          <Link to="/">
            <img className={styles.logo} src="/imgs/logonar.png" alt="Logo colmenares" />
          </Link>

          <ul className={styles.navLinks}>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>

          <div className={styles.navIcons}>
            <img className={styles.imgCart} src="/imgs/cart.svg" alt="Carrito" />
            <Link to="/login" className={styles.loginLink}>
              <img className={styles.imgUser} src="/imgs/user.svg" alt="Iniciar sesión" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
