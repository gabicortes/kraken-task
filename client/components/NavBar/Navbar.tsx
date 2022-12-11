import { Basket } from "../Basket";
import { BasketProps } from "../../types";
import logo from "../../public/octopus-logo.svg";
import styles from "./Navbar.module.scss";

export function Navbar(props: BasketProps) {
  return (
    <section className={styles.navBarWrapper}>
      <img className={styles.logoImg} src={logo.src} alt="octopus-logo" />
      <Basket itemsInCart={props.itemsInCart} />
    </section>
  );
}
