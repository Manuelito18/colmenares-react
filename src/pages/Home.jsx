//import styles from "./styles/Home.module.css";  -- todavia falta meter cosita o detallitos
import HeroSlider from "../components/HeroSlider";
import { promos } from "../data/promos";
import CategoriesBlock from "../components/CategoriesBlock";
import ProductBlock from "../components/ProductBlock";

export default function Home() {
  return (
    <>
      <section>
        <HeroSlider slides={promos} />
      </section>
      <section>
        <CategoriesBlock />
      </section>
      <section>
        <ProductBlock />
      </section>
    </>
  );
}
1;
