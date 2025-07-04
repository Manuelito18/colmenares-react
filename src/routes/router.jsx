import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Productos from "../pages/Productos";
import Contacto from "../pages/Contacto";
import Nosotros from "../pages/Nosotros";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "productos", element: <Productos /> },
      { path: "contacto", element: <Contacto /> },
      { path: "nosotros", element: <Nosotros /> },
    ],
  },
]);

export default router;
