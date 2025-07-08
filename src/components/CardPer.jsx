import styles from "./styles/CardPer.module.css";

export default function CardPer({ img = null, name, role, des }) {
  return (
    <div className={styles.card}>
      <img className={styles.photo} src={img} alt="image" />
      <h3 className={styles.name}>{name}</h3>
      <h4 className={styles.role}>{role}</h4>
      <p className={styles.description}>{des}</p>
    </div>
  );
}
