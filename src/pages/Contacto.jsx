import styles from "./styles/Contacto.module.css";
import BlockText from "../components/BlockText";

export default function Contacto() {
  return (
    <section className={styles.block}>
      <BlockText
        title="Contáctanos"
        text="¿Tienes dudas, sugerencias o simplemente quieres hablar de guitarras? ¡Escríbenos!"
        background="linear-gradient(135deg, #591C86, #821844)"
      />
    </section>
  );
}
