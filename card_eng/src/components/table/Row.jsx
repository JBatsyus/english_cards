import ButtonDelete from "../buttons/ButtonDelete";
import ButtonEdit from "../buttons/ButtonEdit";
import ButtonSave from "../buttons/ButtonSave";
import { useState } from "react";

export const Row = props => {
  const [editMode, setEditMode] = useState(false);

  const handleEditChange = isEdit => setEditMode(isEdit);

  return (
    <tr key={props.id}>
      <td>
        <input
          className="input_editMode"
          type="text"
          defaultValue={props.word}
          onChange={() => null}
          disabled={!editMode}
        />
      </td>
      <td>
        <input
          className="input_editMode"
          type="text"
          defaultValue={props.transcription}
          onChange={() => null}
          disabled={!editMode}
        />
      </td>
      <td>
        <input
          className="input_editMode"
          type="text"
          defaultValue={props.russian}
          onChange={() => null}
          disabled={!editMode}
        />
      </td>
      <td>
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
      </td>
    </tr>
  );
};
