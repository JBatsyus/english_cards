import "./table.scss";
import TableWords from "../table/TableWords";
import NewInput from "../table/newInput";

const Table = () => {
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
};

export default Table;
