import { useEffect, useState } from "react";

import styles from "./styles/PromoCarousel.module.css";

import slider1 from "../assets/imgs/slider1.jpg"
import slider2 from "../assets/imgs/slider2.jpg";
import slider3 from "../assets/imgs/slider3.jpg";

const imagenes = [slider1, slider2, slider3];


export default function PromoCarousel() {
  const [indice, setIndice] = useState(0);
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % imagenes.length);
    }, 10000);
    return () => clearInterval(intervalo);
  }, []); // si te olvidas de este te mueres literal wey, este fue el verdarero motivo por el cual instale linux bro 💀

  const irA = (i) => setIndice(i);
  const anterior = () => setIndice((indice - 1 + imagenes.length) % imagenes.length);
  const siguiente = () => setIndice((indice + 1) % imagenes.length);

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
};
