import { TableSectionProps, TableProps } from "../../types";
import { Section } from "../Section";
import styles from "./TableSection.module.scss";

export function TableSection(props: TableSectionProps) {
  return (
    <Section title={props.title}>
      <Table specifications={props.specifications} />
    </Section>
  );
}

function Table(props: TableProps) {
  return (
    <table>
      <tbody>
        {props.specifications.map((row, index) => {
          return (
            <tr key={row.attribute}>
              <td className={styles.tableElement}>{row.attribute}</td>
              <td className={styles.tableElement}>{row.value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
