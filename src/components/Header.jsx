import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Header.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const manejarScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", manejarScroll);
    return () => window.removeEventListener("scroll", manejarScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <Link to="/">
              <img src="/imgs/icons/logonar.png" alt="Logo Colmenares" />
            </Link>
          </div>
        </div>

        <nav className={`${styles.navbar} ${isMenuOpen ? styles.navOpen : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/productos" onClick={() => setIsMenuOpen(false)}>
              Productos
            </Link>
          </li>
          <li>
            <Link to="/nosotros" onClick={() => setIsMenuOpen(false)}>
              Nosotros
            </Link>
          </li>
          <li>
            <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>
              Contacto
            </Link>
          </li>
        </nav>

        <div className={styles.headerActions}>
          <button className={styles.btnGhost} onClick={toggleSearch}>
            <img
              className={styles.imgSearch}
              src="/imgs/icons/search.svg"
              alt="Buscar"
            />
          </button>
          <button className={styles.btnGhostCartBtn} onClick={toggleCart}>
            <img
              className={styles.imgCart}
              src="/imgs/icons/cart.svg"
              alt="Carrito"
            />
            <span className={styles.cartBadge}>2</span>
          </button>
          <button className={styles.btnGhostMenuBtn} onClick={toggleMenu}>
            <img
              className={styles.imgMenu}
              src="/imgs/icons/menu.svg"
              alt="Menú"
            />
          </button>
        </div>
      </header>

      {isSearchOpen && (
        <div className={styles.searchContainer}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar productos..."
            className={styles.searchInput}
          />
        </div>
      )}

      {isCartOpen && (
        <div className={styles.cartSidebar}>
          <h3>Tu carrito</h3>
          <ul>
            <li>Producto 1</li>
            <li>Producto 2</li>
          </ul>
          <button onClick={toggleCart}>Cerrar</button>
        </div>
      )}
    </>
  );
}
