import styles from "./styles/Nosotros.module.css";
import BlockText from "../components/BlockText";
import CardPer from "../components/CardPer";

export default function Nosotros() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <BlockText
          title="Sobre Nosotros"
          text="Mas de 25 años compartiendo la pasion por la musica"
          background="linear-gradient(135deg, #591C86, #821844)"
        />
      </div>
      <div className={styles.history}>
        <div className={styles.historyText}>
          <h2>Nuestra Historia</h2>
          <p>
            Instrumentos Musicales COLMENARES nació en 1998 con un sueño simple
            pero poderoso: hacer que la música sea accesible para todos.
            Comenzamos como una pequeña tienda familiar en el corazón de la
            ciudad, con la visión de ofrecer instrumentos de calidad a precios
            justos. A lo largo de los años, hemos crecido junto con nuestra
            comunidad musical, expandiendo nuestro catálogo y servicios, pero
            manteniendo siempre nuestros valores fundamentales: calidad,
            servicio personalizado y pasión por la músic
          </p>
        </div>
        <div className={styles.historyImage}>
          <img src="/imgs/etc/historia.jpg" alt="hombre tocando guitarra" />
        </div>
      </div>
      <div className={styles.team}>
        <h2>Nuestro Equipo</h2>
        <div className={styles.teamUser}>
          <CardPer
            img="https://unavatar.io/github/furry"
            name="Pietro"
            role="Furry"
            des="La vida solo tiene sentido si hay furrys en ella."
          />
          <CardPer
            github="https://github.com/manuelito18/"
            img="https://unavatar.io/github/manuelito18"
            name="Manuel"
            role="Otaku"
            des="Solo se que otaku fui y otaku seré. Kurumi mi Diosa"
          />
          <CardPer
            img="https://unavatar.io/x/lolicon"
            name="Josue"
            role="Lolicon"
            des="La edad es solo un número, lo que realmente importa es que sean lolis"
          />
        </div>
      </div>
      <div className={styles.numbers}>
        <h2>Nuestros Numeros</h2>
        <div className={styles.dats}>
          <BlockText
            title="15+"
            text="Años de experiencia"
            background="linear-gradient(135deg, #F59B0C, #F97416)"
          />
          <BlockText
            title="2000+"
            text="Clientes satisfechos"
            background="linear-gradient(135deg, #F59B0C, #F97416)"
          />
          <BlockText
            title="500+"
            text="Instrumentos en Stock"
            background="linear-gradient(135deg, #F59B0C, #F97416)"
          />
          <BlockText
            title="50+"
            text="Marcas representadas"
            background="linear-gradient(135deg, #F59B0C, #F97416)"
          />
        </div>
      </div>
    </div>
  );
}
