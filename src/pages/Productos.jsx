import styles from "./styles/Productos.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { categorias } from "../data/categProducs";
import { productos } from "../data/productos";
import CardProduct from "../components/CardProduct";

export default function Productos() {
  const [busqueda, setBusqueda] = useState("");
  const [ordenPrecio, setOrdenPrecio] = useState("asc");
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [filtroStado, setFiltroStado] = useState(null); // "oferta", "nuevo", "normal", null

  const navigate = useNavigate();

  const manejarBusqueda = (e) => {
    e.preventDefault();
  };

  const irACategoria = (ruta) => {
    setCategoriaSeleccionada(ruta);
    navigate(`/productos/${ruta}`);
  };

  const handleAddToCart = (producto) => {
    console.log("Agregar al carrito:", producto);
  };

  const allProducts = useMemo(
    () =>
      Object.entries(productos).flatMap(([categoria, lista]) =>
        lista.map((p) => ({ ...p, categoria }))
      ),
    []
  );

  const productosFiltrados = useMemo(() => {
    let lista = allProducts;

    if (categoriaSeleccionada) {
      lista = lista.filter((p) => p.categoria === categoriaSeleccionada);
    }

    if (busqueda) {
      lista = lista.filter((p) =>
        p.nombre.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    if (filtroStado !== null) {
      if (filtroStado === "oferta") {
        lista = lista.filter((p) => p.stado === true);
      } else if (filtroStado === "nuevo") {
        lista = lista.filter((p) => p.stado === false);
      } else if (filtroStado === "normal") {
        lista = lista.filter((p) => p.stado === null);
      }
    }

    const destacados = lista.filter((p) => p.stado === true);
    const normales = lista.filter((p) => p.stado !== true);

    const ordenar = (arr) =>
      [...arr].sort((a, b) =>
        ordenPrecio === "asc" ? a.precio - b.precio : b.precio - a.precio
      );

    return [...ordenar(destacados), ...ordenar(normales)];
  }, [allProducts, categoriaSeleccionada, busqueda, ordenPrecio, filtroStado]);

  const grouped = useMemo(() => {
    return productosFiltrados.reduce((acc, p) => {
      acc[p.categoria] = acc[p.categoria] || [];
      acc[p.categoria].push(p);
      return acc;
    }, {});
  }, [productosFiltrados]);

  return (
    <div className={styles.productos}>
      <h1 className={styles.titulo}>Nuestros Productos</h1>

      <div className={styles.categoriasNav}>
        {categorias.map((cat) => (
          <button
            key={cat.ruta}
            className={`${styles.catBtn} ${
              categoriaSeleccionada === cat.ruta ? styles.active : ""
            }`}
            onClick={() => irACategoria(cat.ruta)}
          >
            {cat.nombre}
          </button>
        ))}
        <button
          className={`${styles.catBtn} ${
            categoriaSeleccionada === null ? styles.active : ""
          }`}
          onClick={() => setCategoriaSeleccionada(null)}
        >
          Todas
        </button>
      </div>

      <form onSubmit={manejarBusqueda} className={styles.buscador}>
        <input
          type="text"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      <div className={styles.filtros}>
        <label>Ordenar:</label>
        <select
          value={ordenPrecio}
          onChange={(e) => setOrdenPrecio(e.target.value)}
        >
          <option value="asc">Menor → Mayor</option>
          <option value="desc">Mayor → Menor</option>
        </select>

        <label>Tipo:</label>
        <select
          value={filtroStado || ""}
          onChange={(e) =>
            setFiltroStado(e.target.value === "" ? null : e.target.value)
          }
        >
          <option value="">Todos</option>
          <option value="oferta">Solo ofertas</option>
          <option value="nuevo">Solo nuevos</option>
          <option value="normal">Solo normales</option>
        </select>
      </div>

      <div className={styles.gridProductos}>
        {Object.entries(grouped).map(([catName, prods]) => (
          <div key={catName} className={styles.categoriaSection}>
            <h2 className={styles.subtitulo}>
              {categorias.find((c) => c.ruta === catName)?.nombre ||
                "Productos"}
            </h2>
            <div className={styles.gridCategoria}>
              {prods.map((p) => (
                <CardProduct
                  key={p.id}
                  producto={p}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
