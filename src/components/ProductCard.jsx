import styles from "./styles/ProductCard.module.css";

export default function ProductoCard({ nombre, imagen, precio, anio }) {
  return (
    <div className={styles.card}>
      <img src={imagen} alt={nombre} />
      <h2>{nombre}</h2>
      <p>S/. {precio}</p>
      <small>Año: {anio}</small>
    </div>
  );
}
