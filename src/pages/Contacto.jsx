import styles from "./styles/Contacto.module.css";

export default function Contacto() {
  return (
    <section className={styles.contacto}>
      <h2 className={styles.title}>Contáctanos 📞</h2>
      <p className={styles.text}>
        ¿Tienes dudas, sugerencias o simplemente quieres hablar de guitarras? ¡Escríbenos!
      </p>
    </section>
  );
}

