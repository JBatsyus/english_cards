import { useState, useRef, useEffect } from "react";
import "./Card.scss";

const Card = props => {
  const { english, transcription, translation } = props;

  const [pressed, setPressed] = useState(false);

  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const handleChange = () => {
    setPressed(!pressed);
    if (!pressed) {
      props.increment();
    }
  };
  return (
    <div className="card_body">
      <div className="card_word">{english}</div>
      <div className="card_transcription">{transcription}</div>
      {pressed ? (
        <div className="card_translation">
          {translation}
          <div className="hidden_btn" title="change" onClick={handleChange}>
            &#9055;
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
