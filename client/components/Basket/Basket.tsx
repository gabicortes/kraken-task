import basket from "../../public/basket.svg";
import { BasketProps } from "../../types";
import styles from "./Basket.module.css";

export function Basket(props: BasketProps) {
  return (
    <div className={styles.basketWrapper}>
      <img className={styles.basket} src={basket.src} />
      {props.itemsInCart !== 0 && (
        <div
          title="Basket items"
          className={styles.itemsInCart}
          style={{ left: `-${10 + 5 * props.itemsInCart.toString().length}px` }}
        >
          {props.itemsInCart}
        </div>
      )}
    </div>
  );
}
