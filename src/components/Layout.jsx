import styles from "./styles/Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./specials/ScrollToTop";

export default function Layout() {
  return (
    <div className={styles.wrapper}>
      <ScrollToTop />
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
