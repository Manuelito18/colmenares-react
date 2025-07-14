import styles from "./styles/Contacto.module.css";
import BlockText from "../components/BlockText";

export default function Contacto() {
  return (
    <section className={styles.section}>
      <BlockText
        title="Contáctanos"
        text="¿Tienes dudas, sugerencias o simplemente quieres hablar de guitarras? ¡Escríbenos!"
        background="linear-gradient(135deg, #591C86, #821844)"
      />
      <div className={styles.container}>
        <div className={styles.contact}>
          <div className={styles.infoBlock}>
            <h4>📞 Teléfono</h4>
            <p>+34 912 345 678</p>
          </div>
          <div className={styles.infoBlock}>
            <h4>📧 Email</h4>
            <p>contacto@guitarrasrock.com</p>
          </div>
          <div className={styles.infoBlock}>
            <h4>📍 Dirección</h4>
            <p>Direccion todavia no se construye pipol</p>
          </div>
          <div className={styles.infoBlock}>
            <h4>⏰ Horario</h4>
            <p>Lunes a Viernes: 10:00 - 18:00</p>
          </div>
        </div>
        <form className={styles.form}>
          <label>
            Nombre:
            <input type="text" name="nombre" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Asunto:
            <input type="text" name="asunto" required />
          </label>
          <label>
            Mensaje:
            <textarea name="mensaje" rows="5" required></textarea>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className={styles.ubication}>
        <p>Nuestra Ubicación</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.9937762537547!2d-79.84284262656787!3d-6.770610266206784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904ceed7fae8046b%3A0xc8a297480972a329!2sInstrumentos%20Musicales%20%22COLMENARES%22!5e0!3m2!1ses-419!2spe!4v1752184328958!5m2!1ses-419!2spe"
          width="100%"
          height="300"
          /* allowFullscreen="" */
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className={styles.questions}>
        <div className={styles.faqBlock}>
          <h4>¿Hacen envíos internacionales?</h4>
          <p>
            Sí, enviamos a la mayoría de países del mundo. Consulta los detalles
            en nuestra sección de envíos.
          </p>
        </div>
        <div className={styles.faqBlock}>
          <h4>¿Puedo devolver una guitarra si no me convence?</h4>
          <p>
            Claro, tienes 7 días para realizar una devolución bajo revisión.
          </p>
        </div>
        <div className={styles.faqBlock}>
          <h4>¿Ofrecen servicio técnico?</h4>
          <p>
            Sí, contamos con un taller especializado para mantenimiento y
            reparaciones.
          </p>
        </div>
        <div className={styles.faqBlock}>
          <h4>¿Ofrecen financiamiento?</h4>
          <p>
            Tenemos planes de financiamiento flexibles para la compra de
            instrumentos. Consulta nuestras opciones de pago.
          </p>
        </div>
      </div>
    </section>
  );
}
