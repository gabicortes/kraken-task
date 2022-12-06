import basket from "../../public/basket.svg";
import styles from "./Basket.module.css";

export function Basket() {
  return <img className={styles.basket} src={basket.src} />;
}
