import { useParams } from "react-router-dom";
import { productos } from "../Consts/productos";
import styles from "./styles/CategoriaProductos.module.css";

export default function CategoriaProductos() {
  const { categoriaId } = useParams();
  const productosFiltrados = productos.filter(
    (prod) => prod.categoria === categoriaId
  );

  return (
    <div className={styles.categoria}>
      <h1 className={styles.titulo}>Productos de {categoriaId}</h1>

      {productosFiltrados.length === 0 ? (
        <p>No hay productos en esta categoría todavía...</p>
      ) : (
        <div className={styles.grid}>
          {productosFiltrados.map((prod) => (
            <div key={prod.id} className={styles.card}>
              <img src={prod.imagen} alt={prod.nombre} />
              <h2>{prod.nombre}</h2>
              <p>S/. {prod.precio}</p>
              <small>Año: {prod.anio}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
