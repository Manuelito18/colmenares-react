import { useParams } from "react-router-dom";
import { productosPorCategoria } from "../Data/productos";
import ProductoCard from "../components/ProductCard";
import styles from "./styles/CategoriaProductos.module.css";

export default function CategoriaProductos() {
  const { categoriaId } = useParams();
  const productos = productosPorCategoria[categoriaId] || [];

  return (
    <div className={styles.categoria}>
      <h1 className={styles.titulo}>Productos de {categoriaId}</h1>

      {productos.length === 0 ? (
        <p>No hay productos en esta categoría todavía...</p>
      ) : (
        <div className={styles.grid}>
          {productos.map((prod) => (
            <ProductoCard key={prod.id} {...prod} /> //ese truco no lo conocia, con el '{...obj}' le pasa el objeto desglosado como props
          ))}
        </div>
      )}
    </div>
  );
}
