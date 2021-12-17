import ButtonDelete from "../buttons/ButtonDelete";
import ButtonEdit from "../buttons/ButtonEdit";
import ButtonSave from "../buttons/ButtonSave";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const Row = props => {
  // register — это функция, которую нужно подключить к каждому из полей ввода в качестве ссылки.
  // Функция register будет принимать значение, которое пользователь ввел в каждое поле, и проверять его. register также передаст каждое значение в функцию, которая будет вызвана при отправке формы
  const { register, errors } = useForm({
    mode: "onBlur",
  });
  // необходимо дописать кнопку и обернуть ее, но как

  // состояние, отражающее изменения внутри инпутов
  const [editMode, setEditMode] = useState(false);

  const handleEditChange = isEdit => setEditMode(isEdit);

  return (
    <tr key={props.id}>
      <td>
        <input
          className="input_editMode"
          type="text"
          name="word"
          ref={register({
            required: true,
            pattern: /^[A-Za-z]+$/i,
          })}
          placeholder="word"
          value={props.word}
          onChange={() => null}
          disabled={!editMode}
        />
        {errors.word && (
          <span className="error">Поле обязательно к заполнению.</span>
        )}
      </td>
      <td>
        <input
          className="input_editMode"
          type="text"
          name="transcription"
          ref={register({
            required: true,
            pattern: /^[A-Za-z]+$/i,
          })}
          placeholder="transcription"
          value={props.transcription}
          onChange={() => null}
          disabled={!editMode}
        />
        {errors.transcription && (
          <span className="error">Поле обязательно к заполнению.</span>
        )}
      </td>
      <td>
        <input
          className="input_editMode"
          type="text"
          name="russian"
          ref={register({
            required: true,
            pattern: /[а-яё]+/i,
          })}
          placeholder="russian"
          value={props.russian}
          onChange={() => null}
          disabled={!editMode}
        />
        {errors.russian && (
          <span className="error">Поле обязательно к заполнению.</span>
        )}
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
