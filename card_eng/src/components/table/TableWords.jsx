import ButtonDelete from "../buttons/ButtonDelete";
import ButtonEdit from "../buttons/ButtonEdit";
import ButtonSave from "../buttons/ButtonSave";
import { table_words } from "../table/tableDate";
import { useState } from "react";

// const TableWords = () => {
//   return table_words.map((cell, i) => (
//     <tr key={cell.id}>
//       <td>{i === 0 ? <input value={cell.word} /> : cell.word}</td>
//       <td>
//         {i === 0 ? <input value={cell.transcription} /> : cell.transcription}
//       </td>
//       <td>{i === 0 ? <input value={cell.translation} /> : cell.translation}</td>
//       <td>
//         <div className="buttons">
//           {i === 0 && <ButtonEdit />}
//           <ButtonSave /> <ButtonDelete />
//         </div>
//       </td>
//     </tr>
//   ));
// };

// export default TableWords;

const TableWords = () => {
  const [editMode, setEditMode] = useState(false);

  const handleEditChange = isEdit => setEditMode(isEdit);

  return table_words.map(cell => (
    <tr key={cell.id}>
      <td>
        {editMode ? (
          <input type="text" value={cell.word} onChange={() => null} />
        ) : (
          cell.word
        )}
      </td>
      <td>
        {editMode ? (
          <input type="text" value={cell.transcription} onChange={() => null} />
        ) : (
          cell.transcription
        )}
      </td>
      <td>
        {editMode ? (
          <input type="text" value={cell.russian} onChange={() => null} />
        ) : (
          cell.russian
        )}
      </td>
      <td>
        <div className="buttons">
          {!editMode ? (
            <ButtonEdit onClick={() => handleEditChange(true)} />
          ) : null}
          {editMode ? (
            <ButtonSave onClick={() => handleEditChange(false)} />
          ) : null}
          <ButtonDelete />
        </div>
      </td>
    </tr>
  ));
};

export default TableWords;

// {
//   editMode ? (<input value="butterfly" onChange={() => null} />) : ( <span>butterfly</span>);
// }
