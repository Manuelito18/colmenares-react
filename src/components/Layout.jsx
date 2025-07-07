// src/components/Layout.jsx
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./styles/Layout.module.css";
import { Outlet } from "react-router-dom";

import ScrollToTop from "./specials/ScrollToTop";

export default function Layout() {
  return (
    <div className={styles.wrapper}>
      <ScrollToTop />
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
