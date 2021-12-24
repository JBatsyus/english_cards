import { Row } from "./Row";
import { useContext } from "react";
import { DataContext } from "../context/context";

const TableWords = () => {
  const { data } = useContext(DataContext);
  return data?.map(cell => <Row key={cell.id} {...cell} />);
};

export default TableWords;
