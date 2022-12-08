import styles from "./Section.module.scss";

export function Section(props) {
  return (
    <section className={props.highlighted && styles.highlighted}>
      <h1>{props.title}</h1>
      <div>{props.children}</div>
    </section>
  );
}
