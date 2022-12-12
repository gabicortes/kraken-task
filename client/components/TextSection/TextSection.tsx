import { TextSectionProps } from "../../types";
import { Section } from "../Section";
import styles from "./TextSection.module.scss";

export function TextSection(props: TextSectionProps) {
  return (
    <Section title={props.title} highlighted={props.highlighted}>
      <p className={styles.textSection}>{props.text}</p>
    </Section>
  );
}
