import "./table.scss";
import TableWords from "../table/TableWords";
import { observer, inject } from "mobx-react";
import ErrorServer from "../error/errorServer";
import Loader from "../loader/loader";
import NewInput from "../table/newInput";

const Table = inject(["wordsStore"])(
  observer(({ wordsStore }) => {
    const { error, isLoading } = wordsStore;
    if (error) return <ErrorServer />;
    if (isLoading) return <Loader />;
    return (
      <div className="table_box">
        <table className="table">
          <thead>
            <tr className="table_title">
              <th>Word</th>
              <th>Transcription</th>
              <th>Translate</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <NewInput />
            <TableWords />
          </tbody>
        </table>
      </div>
    );
  }),
);

export default Table;
