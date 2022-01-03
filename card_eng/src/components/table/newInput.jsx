import ButtonSave from "../buttons/ButtonSave";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { observer, inject } from "mobx-react";

const NewInput = inject(["wordsStore"])(
  observer(({ wordsStore }) => {
    // записала пустые поля в инпуте
    const [data, setData] = useState({
      english: "",
      transcription: "",
      russian: "",
    });

    // register — это функция, которую нужно подключить к каждому из полей ввода в качестве ссылки.
    // Функция register будет принимать значение, которое пользователь ввел в каждое поле, и проверять его.
    //   register также передаст каждое значение в функцию, которая будет вызвана при отправке формы
    const {
      register,
      formState: { errors },
    } = useForm({
      mode: "onChange",
    });

    // состояние, отражающее изменения внутри инпутов
    //   const [editMode, setEditMode] = useState(false);

    const notValidWords =
      data.english === "" || data.transcription === "" || data.russian === "";

    const handleEditChange = () => {
      if (!notValidWords) {
        console.log(data);
      }
    };

    const handleChange = event =>
      setData({ ...data, [event.target.name]: event.target.value });

    const addNewWord = wordsStore.addNewWord;

    return (
      <tr>
        <td>
          <input
            className={`input_editMode ${
              !data.english.length ? "inputNull" : ""
            }`}
            type="text"
            name="english"
            value={data.english}
            placeholder="English Word"
            {...register("english", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
              onChange: handleChange,
            })}
          />

          {
            <div className="error">
              {errors.word?.type === "required" &&
                "Заполните, пожалуйста, поле"}
              {errors.word?.type === "pattern" &&
                "Только буквы латинского алфавита"}
            </div>
          }
        </td>
        <td>
          <input
            className={`input_editMode ${
              !data.transcription.length ? "inputNull" : ""
            }`}
            type="text"
            name="transcription"
            value={data.transcription}
            placeholder="Transcription"
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
              !data.russian.length ? "inputNull" : ""
            }`}
            type="text"
            name="russian"
            value={data.russian}
            placeholder="Russian Word"
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
          <ButtonSave
            className="btn_editMode"
            onClick={() => {
              handleEditChange(false);
              addNewWord();
            }}
          />
        </td>
      </tr>
    );
  }),
);
export default NewInput;
