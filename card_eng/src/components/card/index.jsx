import { useState } from "react";

import "./Card.scss";

const Card = props => {
  const [pressed, setPressed] = useState(false);

  const { word, transcription, translation } = props;

  const handleChange = () => {
    setPressed(!pressed);
  };
  return (
    <div className="card_body">
      <div className="card_word">{word}</div>
      <div className="card_transcription">{transcription}</div>
      {pressed ? (
        <div className="card_translation">{translation}</div>
      ) : (
        <button className="card_answer_btn" onClick={handleChange}>
          check
        </button>
      )}
    </div>
  );
};

export default Card;
