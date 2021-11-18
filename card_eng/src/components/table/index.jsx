import "./table.scss";
import ButtonDelete from "../buttons/ButtonDelete";
import ButtonEdit from "../buttons/ButtonEdit";
import ButtonSave from "../buttons/ButtonSave";

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
          <tr>
            <td>butterfly</td>
            <td>[ ˈbʌtəflaɪ ]</td>
            <td>бабочка</td>
            <td>
              <ButtonSave />
              <ButtonEdit />
              <ButtonDelete />
            </td>
          </tr>
          ...
        </tbody>
      </table>
    </div>
  );
};

export default Table;
