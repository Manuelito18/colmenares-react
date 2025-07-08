import styles from "./styles/ProductBlock.module.css";
import { productos } from "../data/productos";
import ProductCard from "./CardProduct";

export default function ProductBlock() {
  const filtrarProductosPorEstado = (data) => {
    const productosFiltrados = {};
    var temp = 0;
    for (const categoria in data) {
      if (Object.hasOwnProperty.call(data, categoria)) {
        productosFiltrados[categoria] = data[categoria].filter(
          (producto) => producto.stado === true
        );
      }
      temp++;
      if (temp >= 3) break;
    }
    return Object.values(productosFiltrados).flat();
  };

  const productosEnOferta = filtrarProductosPorEstado(productos);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Productos Destacados</h2>
      <div className={styles.grid}>
        {productosEnOferta.map((producto) => (
          <ProductCard
            key={producto.id}
            producto={producto}
            onAddToCart={(p) => console.log("Añadir al carrito:", p)}
          />
        ))}
      </div>
    </section>
  );
}
