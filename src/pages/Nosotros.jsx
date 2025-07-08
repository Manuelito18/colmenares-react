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
          <img src="/imgs/historia.jpg" alt="hombre tocando guitarra" />
        </div>
      </div>
      <div className={styles.team}>
        <h2>Nuestro Equipo</h2>
        <div className={styles.teamUser}>
          <CardPer
            img="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            name="José Manuel Fernández Sandoval"
            role="Gerente"
            des="Un buen programador es un otaku fan de Rem y devoto de la Diosa Kurumi Kosaki"
          />
          <CardPer
            img="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            name="José Manuel Fernández Sandoval"
            role="Gerente"
            des="Un buen programador es un otaku fan de Rem y devoto de la Diosa Kurumi Kosaki"
          />
          <CardPer
            img="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            name="José Manuel Fernández Sandoval"
            role="Gerente"
            des="Un buen programador es un otaku fan de Rem y devoto de la Diosa Kurumi Kosaki"
          />
        </div>
      </div>
      <div className={styles.numbers}>
        <h2>Nuestros Numeros</h2>
      </div>
    </div>
  );
}
