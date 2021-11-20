import ButtonDelete from "../buttons/ButtonDelete";
import ButtonEdit from "../buttons/ButtonEdit";
import ButtonSave from "../buttons/ButtonSave";
import { table_words } from "../table/tableDate";
import { useState } from "react";

const TableWords = () => {
  const [editMode, setEditMode] = useState(false);

  const handleEditChange = isEdit => setEditMode(isEdit);

  return table_words.map(cell => (
    <tr key={cell.id}>
      <td>
        {editMode ? (
          <input
            className="input_editMode"
            type="text"
            value={cell.word}
            onChange={() => null}
          />
        ) : (
          cell.word
        )}
      </td>
      <td>
        {editMode ? (
          <input
            className="input_editMode"
            type="text"
            value={cell.transcription}
            onChange={() => null}
          />
        ) : (
          cell.transcription
        )}
      </td>
      <td>
        {editMode ? (
          <input
            className="input_editMode"
            type="text"
            value={cell.russian}
            onChange={() => null}
          />
        ) : (
          cell.russian
        )}
      </td>
      <td>
        {/* <div className="buttons"> */}
        {!editMode ? (
          <ButtonEdit
            className="btn_editMode"
            onClick={() => handleEditChange(true)}
          />
        ) : null}
        {editMode ? (
          <ButtonSave
            className="btn_editMode"
            onClick={() => handleEditChange(false)}
          />
        ) : null}
        <ButtonDelete />
        {/* </div> */}
      </td>
    </tr>
  ));
};

export default TableWords;

// {
//   editMode ? (<input value="butterfly" onChange={() => null} />) : ( <span>butterfly</span>);
// }
