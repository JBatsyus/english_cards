import ButtonDelete from "../buttons/ButtonDelete";
import ButtonEdit from "../buttons/ButtonEdit";
import ButtonSave from "../buttons/ButtonSave";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const Row = props => {
  // register — это функция, которую нужно подключить к каждому из полей ввода в качестве ссылки.
  // Функция register будет принимать значение, которое пользователь ввел в каждое поле, и проверять его. register также передаст каждое значение в функцию, которая будет вызвана при отправке формы
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  // состояние, отражающее изменения внутри инпутов
  const [editMode, setEditMode] = useState(false);
  const [data, setData] = useState({
    word: props.word,
    transcription: props.transcription,
    russian: props.russian,
  });

  const handleEditChange = isEdit => setEditMode(isEdit);

  return (
    <tr key={props.id}>
      <td>
        <input
          className={`input_editMode ${!data.word.length ? "inputError" : ""}`}
          type="text"
          name="word"
          value={data.word}
          onChange={() => null}
          disabled={!editMode}
          {...register("word", {
            required: true,
            pattern: /^[A-Za-z]+$/i,
            onChange: event => {
              setData({ ...data, word: event.target.value });
            },
          })}
        />

        {
          <div className="error">
            {errors.word?.type === "required" && "Заполните, пожалуйста, поле"}
            {errors.word?.type === "pattern" &&
              "Только буквы латинского алфавита"}
          </div>
        }
      </td>
      <td>
        <input
          className={`input_editMode ${
            !data.transcription.length ? "inputError" : ""
          }`}
          type="text"
          name="transcription"
          value={data.transcription}
          onChange={() => null}
          disabled={!editMode}
          {...register("transcription", {
            required: true,
            onChange: event => {
              setData({ ...data, transcription: event.target.value });
            },
          })}
        />
        <div className="error">
          {errors.transcription?.type === "required" &&
            "Заполните, пожалуйста, поле"}
        </div>
      </td>
      <td>
        <input
          className={`input_editMode ${
            !data.russian.length ? "inputError" : ""
          }`}
          type="text"
          name="russian"
          value={data.russian}
          onChange={() => null}
          disabled={!editMode}
          {...register("russian", {
            required: true,
            pattern: /[а-яё]+/i,
            onChange: event => {
              setData({ ...data, russian: event.target.value });
            },
          })}
        />
        <div className="error">
          {errors.russian?.type === "required" && "Заполните, пожалуйста, поле"}
          {errors.russian?.type === "pattern" &&
            "Только буквы русского алфавита"}
        </div>
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
