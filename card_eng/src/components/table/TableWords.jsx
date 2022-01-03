import { Row } from "./Row";
import { observer, inject } from "mobx-react";

const TableWords = inject(["wordsStore"])(
  observer(({ wordsStore }) => {
    return wordsStore.words.map(cell => <Row key={cell.id} {...cell} />);
  }),
);
export default TableWords;
