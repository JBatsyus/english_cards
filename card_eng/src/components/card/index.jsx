import { useState } from "react";
import "./Card.scss";

const Card = props => {
  // Card.defaultProps = {
  //   word: "",
  //   transcription: "",
  //   translation: "",
  // };

  const { word, transcription, translation } = props;

  const [pressed, setPressed] = useState(false);

  const handleChange = () => {
    setPressed(!pressed);
  };
  return (
    <div className="card_body">
      <div className="card_word">{word}</div>
      <div className="card_transcription">{transcription}</div>
      {pressed ? (
        <div className="card_translation">
          {translation}
          <div className="hidden_btn" title="change" onClick={handleChange}>
            &#9055;
          </div>
        </div>
      ) : (
        <button className="card_answer_btn" onClick={handleChange}>
          check
        </button>
      )}
    </div>
  );
};

export default Card;
