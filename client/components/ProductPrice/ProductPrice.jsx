import bulb from "../../public/philips-plumen.jpg";
import styles from "./ProductPrice.module.css";

export function ProductPrice() {
  return (
    <section className={styles.section}>
      <img className={styles.productImg} src={bulb.src} alt="product image" />
      <h1 className={styles.h2}>Energy saving light bulb</h1>
      <span>25 W // Packet of 4</span>
      <div className={styles.priceWrapper}>
        <span>£12.99</span>
        <div className={styles.productQuantityWrapper}>
          <span>Qty</span>
          <div className={styles.buttonsWrapper}>
            <button className={styles.buttonDecrease}>-</button>
            <div className={styles.quantityProduct}>1</div>
            <button className={styles.buttonIncrease}>+</button>
          </div>
        </div>
      </div>
      <button className={styles.buttonAddToCart} type="submit">
        Add to cart
      </button>
    </section>
  );
}
