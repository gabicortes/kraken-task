import { Basket } from "../Basket";
import logo from "../../public/octopus-logo.svg";
import styles from "./Navbar.module.scss";

export function Navbar() {
  return (
    <section className={styles.navBarWrapper}>
      <img className={styles.logoImg} src={logo.src} alt="octopus-logo" />
      <Basket className={styles.basket} />
    </section>
  );
}
