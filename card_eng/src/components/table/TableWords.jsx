import { Row } from "./Row";
// import { table_words } from "../table/tableDate";

import { useContext } from "react";
import { DataContext } from "../context/context";

const TableWords = () => {
  const { data } = useContext(DataContext);
  // if (isLoading) return <Loader />;

  return data?.map(cell => <Row key={cell.id} {...cell} />);
};

export default TableWords;
