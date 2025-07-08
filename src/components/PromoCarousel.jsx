import { useEffect, useState } from "react";
import styles from "./styles/PromoCarousel.module.css";

export default function PromoCarousel({ imagenes = [] }) {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    if (imagenes.length === 0) return;

    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % imagenes.length);
    }, 10000);

    return () => clearInterval(intervalo);
  }, [imagenes]);

  const irA = (i) => setIndice(i);
  const anterior = () => setIndice((indice - 1 + imagenes.length) % imagenes.length);
  const siguiente = () => setIndice((indice + 1) % imagenes.length);

  if (imagenes.length === 0) {
    return (
      <div className={styles.carouselContainer}>
        <p className={styles.error}>⚠️ No hay imágenes mi pana.</p>
      </div>
    );
  }

  return (
    <div className={styles.carouselContainer}>
      <img
        src={imagenes[indice]}
        alt={`Promo ${indice + 1}`}
        className={styles.carouselImage}
      />
      <button className={styles.controlLeft} onClick={anterior}>⬅</button>
      <button className={styles.controlRight} onClick={siguiente}>➡</button>
      <div className={styles.dotsContainer}>
        {imagenes.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === indice ? styles.activeDot : ""}`}
            onClick={() => irA(i)}
          ></button>
        ))}
      </div>
    </div>
  );
}
