import { Section } from "../Section";

export function TextSection(props) {
  return (
    <Section title={props.title} highlighted={props.highlighted}>
      <p>{props.text}</p>
    </Section>
  );
}
