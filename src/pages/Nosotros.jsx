import styles from "./styles/Nosotros.module.css";
import { useState } from "react";

export default function Nosotros() {
  const [mostrarEasterEgg, setMostrarEasterEgg] = useState(false);

  const quotes = [
    { personaje: "Lelouch Lamperouge", frase: "La única forma de vencer a un poder es con otro poder aún mayor." }
  ];

  return (
    <div className={styles.nosotros}>
      <section className={styles.intro}>
        <h1>Sobre Nosotros</h1>
        <p>
          En <strong>Colmenares Music</strong> combinamos la pasión musical con un toque de locura otaku.
          Somos más que una tienda: somos una comunidad de artistas, soñadores y fans del poder del soundtrack.
        </p>
      </section>

      <section className={styles.misionVision}>
        <div className={styles.card}>
          <h2>🎯 Misión</h2>
          <p>
            Impulsar el talento musical de nuestros clientes con los mejores instrumentos y una atención tan épica como un arco final de temporada.
          </p>
        </div>
        <div className={styles.card}>
          <h2>🚀 Visión</h2>
          <p>
            Ser la tienda musical más confiable y apasionada, acompañando a cada músico como si fuéramos su banda de opening.
          </p>
        </div>
      </section>

      <section className={styles.mapa}>
        <h2>📍 Nuestra Ubicación</h2>
        <iframe
          title="mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d962.3007050706445!2d-79.84061683886948!3d-6.770719284993315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904ceed7fae8046b%3A0xa1d1d01959544637!2sJuan%20Cuglievan%20884%2C%20Chiclayo%2014001!5e0!3m2!1ses-419!2spe!4v1751675624930!5m2!1ses-419!2spe"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      <section className={styles.easterEgg}>
        <button onClick={() => setMostrarEasterEgg(!mostrarEasterEgg)}>
          {mostrarEasterEgg ? "Pinchi Lelouch es un chad broooo 🗿" : "Descubre nuestra inspiración 🎌"}
        </button>

        {mostrarEasterEgg && (
          <div className={styles.quotes}>
            {quotes.map((q, i) => (
              <blockquote key={i}>
                <p>"{q.frase}"</p>
                <footer>– {q.personaje}</footer>
              </blockquote>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
