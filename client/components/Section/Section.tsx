import { SectionProps } from "../../types";
import styles from "./Section.module.scss";

export function Section(props: SectionProps) {
  return (
    <section className={props.highlighted && styles.highlighted}>
      <h1 style={{ fontWeight: 500 }}>{props.title}</h1>
      <div>{props.children}</div>
    </section>
  );
}
