import styles from "./styles/Productos.module.css";

export default function Productos() {
  return (
    <section className={styles.productos}>
      <h2 className={styles.title}>Catálogo de Instrumentos</h2>
      <p className={styles.text}>Explora nuestros productos cuidadosamente seleccionados.</p>
      {/* Aquí irían los cards de productos */}
    </section>
  );
}
