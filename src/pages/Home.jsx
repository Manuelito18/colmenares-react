import styles from "./styles/Home.module.css";
import PromoCarousel from "../components/PromoCarousel";
import { imagenesPromo } from "../data/img-carrusel";

export default function Home() {
  return (
    <>
    <section className={styles.home}>
      <h1 className={styles.title}>Bienvenido a Colmenares 🎶</h1>
      <p className={styles.subtitle}>
        Encuentra guitarras, pianos, sintetizadores y más con un estilo que resuena.
      </p>
    </section>
    <section>
      <PromoCarousel imagenes={imagenesPromo}/>
    </section>
    </>
  );
}
