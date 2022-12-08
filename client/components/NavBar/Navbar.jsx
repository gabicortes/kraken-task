import { Basket } from "../Basket";
import logo from "../../public/octopus-logo.svg";
import styles from "./Navbar.module.scss";

export function Navbar(props) {
  return (
    <section className={styles.navBarWrapper}>
      <img className={styles.logoImg} src={logo.src} alt="octopus-logo" />
      <Basket className={styles.basket} itemsInCart={props.itemsInCart} />
    </section>
  );
}
