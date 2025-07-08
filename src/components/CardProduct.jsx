import styles from "./styles/CardProduct.module.css";
import CartIcon from "../../public/imgs/CartCard.svg";

export default function CardProduct({ producto, onAddToCart }) {
  const { nombre, precio, imagen, rating = 0, stado } = producto;

  const badgeLabel =
    stado === true ? "OFERTA" : stado === false ? "NUEVO" : null;

  const renderStars = () =>
    [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={i < rating ? styles.starFilled : styles.starEmpty}
      >
        ★
      </span>
    ));

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imagen} alt={nombre} className={styles.image} />
        {badgeLabel && <span className={styles.badge}>{badgeLabel}</span>}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{nombre}</h3>
        <div className={styles.rating}>{renderStars()}</div>

        <div className={styles.priceRow}>
          <span className={styles.price}>${precio}</span>
        </div>

        <button
          className={styles.cartBtn}
          onClick={() => onAddToCart(producto)}
          aria-label="Agregar al carrito"
        >
          <img src={CartIcon} alt="Carrito" className={styles.cartIcon} />
        </button>
      </div>
    </div>
  );
}
