import { Highlighted } from "../../types";
import styles from "./Footer.module.scss";

export function Footer(props: Highlighted) {
  return (
    <section className={props.highlighted && styles.highlighted}>
      <p className={styles.footerText}>
        Octopus Energy Ltd is a company registered in England and Wales.
        Registered number: 09263424. Registered office: 33 Holborn, London, ECIN
        2HT. Trading office: 20-24 Broadwick Street, London, WIF 8HT
      </p>
    </section>
  );
}
