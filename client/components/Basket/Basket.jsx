import basket from "../../public/basket.svg";
import styles from "./Basket.module.css";

export function Basket(props) {
  return (
    <>
      <img className={styles.basket} src={basket.src} />
      {props.itemsInCart !== 0 && (
        <div className={styles.itemsInCart}>{props.itemsInCart}</div>
      )}
    </>
  );
}
