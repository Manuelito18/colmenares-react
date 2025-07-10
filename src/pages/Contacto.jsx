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
      <div className={styles.container}>
        <div className={styles.contact}>
          {/* 4 bloques con informacion de contacto */}
        </div>
        <form className={styles.form}>{/* haz el formulario */}</form>
      </div>
      <div className={styles.ubication}>
        <p>Nuestra Ubicación</p>
        {/* Mapa de google maps */}
      </div>
      <div className={styles.questions}>
        {/* 4 bloques con preguntas frecuentes */}
      </div>
    </section>
  );
}
