import { Row } from "./Row";
import { table_words } from "../table/tableDate";

const TableWords = () => {
  return table_words.map(cell => <Row key={cell.id} {...cell} />);
};

export default TableWords;
