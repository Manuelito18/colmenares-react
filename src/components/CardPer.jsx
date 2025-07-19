import styles from "./styles/CardPer.module.css";
import { FaGithub } from "react-icons/fa";

export default function CardPer({
  img = null,
  name,
  role,
  des,
  github = null,
}) {
  return (
    <div className={styles.card}>
      <img className={styles.photo} src={img} alt="image" />
      <h3 className={styles.name}>{name}</h3>
      <h4 className={styles.role}>{role}</h4>
      <p className={styles.description}>{des}</p>

      {github && (
        <a
          href={github}
          className={styles.githubIcon}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name}'s GitHub`}
        >
          <FaGithub />
        </a>
      )}
    </div>
  );
}
