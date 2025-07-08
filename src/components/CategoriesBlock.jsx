import styles from "./styles/CategoriesBlock.module.css";
import { useNavigate } from "react-router-dom";
import { categories } from "../data/favCateg";

export default function Categories() {
  const navigate = useNavigate();

  const irACategoria = (ruta) => {
    navigate(`/productos/${ruta}`);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Categorías Preferidas</h2>
      <div className={styles.grid}>
        {categories.map((cat, i) => (
          <div key={i} className={styles.card}>
            <div
              className={styles.iconWrapper}
              style={{ background: cat.color }}
              onClick={() => irACategoria(cat.ruta)}
            >
              <img src={cat.icon} alt={cat.title} className={styles.icon} />
            </div>
            <p className={styles.label}>{cat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
