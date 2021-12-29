import { DataContext } from "../../context/context";
import ButtonSave from "../buttons/ButtonSave";
import ErrorServer from "../error/errorServer";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";

const NewInput = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const [newWord, setNewWord] = useState({
    english: "",
    transcription: "",
    russian: "",
  });
  const { updateData } = useContext(DataContext);
  const [error, setError] = useState({
    english: false,
    transcription: false,
    russian: false,
  });

  const notValidWords =
    newWord.english === "" ||
    newWord.transcription === "" ||
    newWord.russian === "";

  const handleEditChange = () => {
    if (!notValidWords) {
      console.log(newWord);
    }
    //   setEditMode(isEdit);
  };

  const handleChange = event =>
    setNewWord({ ...newWord, [event.target.name]: event.target.value });

  // метод добавления слова

  const addNewWord = () => {
    fetch("/api/words/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(newWord),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then(newWord => {
        updateData();
        console.log(newWord);
      })
      .catch(error => {
        console.log(error);
        setError(true);
      });
  };
  if (error) return <ErrorServer />;

  return (
    <tr>
      <td>
        <input
          className={`input_editMode ${
            !newWord.english.length ? "inputError" : ""
          }`}
          type="text"
          name="english"
          value={newWord.english}
          {...register("english", {
            required: true,
            pattern: /^[A-Za-z]+$/i,
            onChange: handleChange,
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
            !newWord.transcription.length ? "inputError" : ""
          }`}
          type="text"
          name="transcription"
          value={newWord.transcription}
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
            !newWord.russian.length ? "inputError" : ""
          }`}
          type="text"
          name="russian"
          value={newWord.russian}
          {...register("russian", {
            required: true,
            pattern: /^[\u0400-\u04FF]+$/i,
            onChange: handleChange,
          })}
        />
        <div className="error">
          {errors.russian?.type === "required" && "Заполните, пожалуйста, поле"}
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
          disabled={Object.keys(errors).length}
        />
      </td>
    </tr>
  );
};
export default NewInput;
