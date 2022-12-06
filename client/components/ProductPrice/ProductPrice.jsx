import bulb from "../../public/philips-plumen.jpg";
import styles from "./ProductPrice.module.css";

export function ProductPrice() {
  return (
    <section className={styles.section}>
      <img src={bulb.src} alt="product image" />
    </section>
  );
}
