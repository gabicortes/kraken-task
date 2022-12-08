import { Section } from "../Section";
import styles from "./TableSection.module.scss";

export function TableSection(props) {
  return (
    <Section title={props.title}>
      <Table table={props.table} />
    </Section>
  );
}

function Table(props) {
  return (
    <table>
      <tbody>
        {props.table.map((row, index) => {
          return (
            <tr key={index}>
              <td className={styles.tableElement}>{row.attribute}</td>
              <td className={styles.tableElement}>{row.value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
