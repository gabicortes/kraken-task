import { useState } from "react";
import { Price } from "../../types";
import productImg from "../../public/philips-plumen.jpg";
import styles from "./ProductPrice.module.scss";
import { ImageContainer } from "../ImageContainer";

export function ProductPrice(props: Price) {
  const [count, setCount] = useState(1);

  const { product } = props;

  const handleClickAddToCart = () => {
    props.setItemsInCart(props.itemsInCart + count);
    setCount(1);
  };

  const priceWithTwoDecimals = ((product.price / 100) * count).toFixed(2);

  const minOrderQuantity = count < 2;

  return (
    <section className={styles.section}>
      <ImageContainer src={productImg.src} alt={product.name} />
      <div className={styles.priceDetailsWrapper}>
        <h1 className={styles.productName}>{product.name}</h1>
        <span className={styles.detailQuantity}>
          {product.power} // Packet of {product.quantity}
        </span>
        <div className={styles.priceWrapper}>
          <div className={styles.price}>£{priceWithTwoDecimals}</div>
          <div className={styles.productQuantityWrapper}>
            <span className={styles.quantityProduct}>Qty</span>
            <div className={styles.buttonsWrapper}>
              <button
                className={styles.buttonDecrease}
                type="button"
                onClick={() => {
                  setCount(count - 1);
                }}
                disabled={minOrderQuantity}
              >
                -
              </button>
              <div title="Current quantity" className={styles.quantityCount}>
                {count}
              </div>
              <button
                className={styles.buttonIncrease}
                type="button"
                onClick={() => {
                  setCount(count + 1);
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
