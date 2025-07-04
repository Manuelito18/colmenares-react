import styles from "./styles/Nosotros.module.css";

export default function Nosotros() {
  return (
    <section className={styles.nosotros}>
      <h2 className={styles.title}>Sobre nosotros</h2>
        <h3 className={styles.subtitle}>
          Mision
        </h3>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consequatur nam numquam tempore. Quis, ea. Corporis, iste! Ut magni consequuntur impedit iure dolorem qui distinctio, modi, non exercitationem hic voluptatum?</p>
        <h3 className={styles.subtitle}>
          Vision
        </h3>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dignissimos velit illum nostrum. Illo, nesciunt laborum consequuntur nisi quisquam tempora. At dolores repellat aliquid nobis ex dicta, vero deleniti eius.</p>
        <h3 className={styles.subtitle}>
          Vision
        </h3>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolores, fuga earum facilis molestiae, saepe soluta odit facere voluptatibus, eaque exercitationem cupiditate nesciunt nihil libero modi consectetur nisi tenetur sunt.</p>
    </section>
  );
}
