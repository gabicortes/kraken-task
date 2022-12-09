import { useState } from "react";
import styles from "./ProductPrice.module.scss";

export function ProductPrice(props) {
  const [count, setCount] = useState(1);

  const { product } = props;

  const handleClickAddToCart = () => {
    props.setItemsInCart(props.itemsInCart + count);
    setCount(1);
  };

  return (
    <section className={styles.section}>
      <img
        className={styles.productImg}
        title={product.name}
        src={product.img_url}
        alt="product image"
      />
      <div className={styles.priceDetailsWrapper}>
        <h1 className={styles.productName}>{product.name}</h1>
        <span className={styles.detailQuantity}>
          {product.power} // Packet of {product.quantity}
        </span>
        <div className={styles.priceWrapper}>
          <div className={styles.price}>
            £{((product.price / 100) * count).toFixed(2)}
          </div>
          <div className={styles.productQuantityWrapper}>
            <span className={styles.quantityProduct}>Qty</span>
            <div className={styles.buttonsWrapper}>
              <button
                className={styles.buttonDecrease}
                type="button"
                onClick={() => {
                  setCount(count--);
                }}
                disabled={count < 2}
              >
                -
              </button>
              <div className={styles.quantityCount}>{count}</div>
              <button
                className={styles.buttonIncrease}
                type="button"
                onClick={() => {
                  setCount(count++);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <button
          className={styles.buttonAddToCart}
          type="submit"
          onClick={handleClickAddToCart}
        >
          Add to cart
        </button>
      </div>
    </section>
  );
}
