import styles from "./styles/CardPer.module.css";

export default function CardTeam() {
  return (
    <div className={styles.card}>
      <img className={styles.photo} src="" alt="image" />
      <h3 className={styles.name}></h3>
      <h4 className={styles.role}></h4>
      <p className={styles.description}></p>
    </div>
  );
}
