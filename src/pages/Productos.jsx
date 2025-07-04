import styles from "./styles/Productos.module.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { categorias } from "../Consts/categProducs";

export default function Productos() {
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  const manejarBusqueda = (e) => {
    e.preventDefault();
    // Aquí podrías redirigir a una página con los resultados
    console.log("Buscando:", busqueda);
  };

  const irACategoria = (ruta) => {
    navigate(`/productos/${ruta}`);
  };

  return (
    <div className={styles.productos}>
      <h1 className={styles.titulo}>Explora Nuestros Productos</h1>

      <form onSubmit={manejarBusqueda} className={styles.buscador}>
        <input
          type="text"
          placeholder="Buscar un producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      <div className={styles.gridCategorias}>
        {categorias.map((cat) => (
          <div
            key={cat.nombre}
            className={styles.categoriaCard}
            onClick={() => irACategoria(cat.ruta)}
          >
            <img src={cat.imagen} alt={cat.nombre} />
            <div className={styles.categoriaNombre}>{cat.nombre}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
