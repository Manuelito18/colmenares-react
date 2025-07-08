import styles from "./styles/Home.module.css";
import HeroSlider from "../components/HeroSlider";
import { promos } from "../data/promos";

export default function Home() {
  return (
    <>
      <section>
        {/* <PromoCarousel imagenes={imagenesPromo}/> */}
        <HeroSlider slides={promos} />
      </section>
      <section className={styles.home}>
        <h1 className={styles.title}>Bienvenido a Colmenares 🎶</h1>
        <p className={styles.subtitle}>
          Encuentra guitarras, pianos, sintetizadores y más con un estilo que
          resuena.
        </p>
      </section>
    </>
  );
}
1;
