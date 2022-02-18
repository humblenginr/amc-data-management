import { Table } from "evergreen-ui";
import { v4 } from "uuid";

// @ts-ignore
export const DisplayTable = ({ columns, planes }) => {
  return (
    <Table width="100%" height="80%">
      <Table.Head>
        <Table.SearchHeaderCell />
        {columns &&
          columns.map((col: string) => (
            <Table.TextHeaderCell key={v4()}>{col}</Table.TextHeaderCell>
          ))}
      </Table.Head>
      <Table.Body height={240}>
        {planes.map((plane: any) => (
          <Table.Row key={plane.id}>
            <Table.EditableCell>{plane.name}</Table.EditableCell>
            {columns.map((col: string) => (
              <Table.EditableCell key={v4()}>{plane[col]}</Table.EditableCell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
