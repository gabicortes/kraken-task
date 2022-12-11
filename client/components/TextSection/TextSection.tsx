import { TextSectionProps } from "../../types";
import { Section } from "../Section";

export function TextSection(props: TextSectionProps) {
  return (
    <Section title={props.title} highlighted={props.highlighted}>
      <p style={{ fontSize: "15px" }}>{props.text}</p>
    </Section>
  );
}
