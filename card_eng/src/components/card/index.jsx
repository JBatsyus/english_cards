import { useState, useRef, useEffect } from "react";
import "./Card.scss";

const Card = props => {
  // Card.defaultProps = {
  //   word: "",
  //   transcription: "",
  //   translation: "",
  // };

  const { word, transcription, translation } = props;

  const [pressed, setPressed] = useState(false);

  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

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
            ✔
          </div>
        </div>
      ) : (
        <button ref={ref} onClick={handleChange} className="card_answer_btn">
          check
        </button>
      )}
    </div>
  );
};

export default Card;
