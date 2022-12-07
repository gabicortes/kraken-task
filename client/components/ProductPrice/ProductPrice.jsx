import { useState } from "react";
import styles from "./ProductPrice.module.scss";

export function ProductPrice(props) {
  const [count, setCount] = useState(1);

  const { product } = props;

  const handleClickDecrease = () => {
    setCount(count--);
  };

  const handleClickIncrease = () => {
    setCount(count++);
  };

  return (
    <section className={styles.section}>
      <img
        className={styles.productImg}
        src={product?.img_url}
        alt="product image"
      />
      <h1 className={styles.productName}>{product?.name}</h1>
      <span className={styles.detailQuantity}>
        {product?.power} // Packet of {product?.quantity}
      </span>
      <div className={styles.priceWrapper}>
        <div className={styles.price}>£{product?.price / 100}</div>
        <div className={styles.productQuantityWrapper}>
          <span className={styles.quantityProduct}>Qty</span>
          <div className={styles.buttonsWrapper}>
            <button
              className={styles.buttonDecrease}
              onClick={handleClickDecrease}
              disabled={count < 2}
            >
              -
            </button>
            <div className={styles.quantityCount}>{count}</div>
            <button
              className={styles.buttonIncrease}
              onClick={handleClickIncrease}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <button className={styles.buttonAddToCart} type="submit">
        Add to cart
      </button>
    </section>
  );
}
