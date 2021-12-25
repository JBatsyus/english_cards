import { Row } from "./Row";
import { useContext } from "react";
import { DataContext } from "../../context/context";

const TableWords = () => {
  const { dataWords } = useContext(DataContext);
  return dataWords?.map(cell => <Row key={cell.id} {...cell} />);
};

export default TableWords;
