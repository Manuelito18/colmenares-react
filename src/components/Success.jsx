import styles from "./styles/Success.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Success() {
  const { clearCart } = useCart();

  return (
    <div className={styles.success}>
      <h2>¡Compra realizada con éxito! 🎉</h2>
      <p>Tu pedido está en proceso y será enviado pronto.</p>
      <Link to="/" onClick={clearCart()}>
        Volver al inicio
      </Link>
    </div>
  );
}
