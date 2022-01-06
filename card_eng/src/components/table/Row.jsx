import ButtonDelete from "../buttons/ButtonDelete";
import ButtonEdit from "../buttons/ButtonEdit";
import ButtonSave from "../buttons/ButtonSave";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { observer, inject } from "mobx-react";

export const Row = inject(["wordsStore"])(
  observer(props => {
    console.log(props);
    // измеение слова
    const updateWord = (id, editWord) => {
      props.wordsStore.updateWord(id, editWord);
    };

    // удаление слова
    const deleteWord = props.wordsStore.deleteWord;
    // const deleteWord = id => {
    //   props.wordsStore.deleteWord(id);
    // };

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
      english: props.english,
      transcription: props.transcription,
      russian: props.russian,
    });

    const notValidWords =
      data.english === "" || data.transcription === "" || data.russian === "";

    const handleEditChange = isEdit => {
      if (!notValidWords) {
        console.log(data);
      }
      setEditMode(isEdit);
    };
    const handleChange = event =>
      setData({ ...data, [event.target.name]: event.target.value });

    return (
      <tr key={props.id}>
        <td>
          <input
            className={`input_editMode ${
              !data.english.length ? "inputError" : ""
            }`}
            type="text"
            name="english"
            value={data.english}
            disabled={!editMode}
            {...register("english", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
              onChange: handleChange,
            })}
          />

          {
            <div className="error">
              {errors.english?.type === "required" &&
                "Заполните, пожалуйста, поле"}
              {errors.english?.type === "pattern" &&
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
            disabled={!editMode}
            {...register("transcription", {
              required: true,
              onChange: handleChange,
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
            disabled={!editMode}
            {...register("russian", {
              required: true,
              pattern: /^[\u0400-\u04FF]+$/i,
              onChange: handleChange,
            })}
          />
          <div className="error">
            {errors.russian?.type === "required" &&
              "Заполните, пожалуйста, поле"}
            {errors.russian?.type === "pattern" &&
              "Только буквы русского алфавита"}
          </div>
        </td>
        <td>
          {!editMode ? (
            <ButtonEdit
              className="btn_editMode"
              onClick={() => {
                handleEditChange(true);
                // updateWord не надо добавлять, тк кнопку только нажали, но слово еще не обновили;
              }}
            />
          ) : (
            <ButtonSave
              className="btn_editMode"
              onClick={() => {
                handleEditChange(false);
                // Здесь нужно передавать данные не из пропсов (потому что они исходные), а из стейта (обновленные); два аргумента
                updateWord(
                  props.id,
                  { ...data, id: props.id },
                  props.editWord,
                  {
                    ...data,
                    editWord: props.editWord,
                  },
                );
              }}
              disabled={Object.keys(errors).length}
            />
          )}
          <ButtonDelete onClick={() => deleteWord({ id: props.id })} />
        </td>
      </tr>
    );
  }),
);
