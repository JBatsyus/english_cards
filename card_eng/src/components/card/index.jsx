import "./Card.scss";

const Card = props => {
  const { word, transcription, translation } = props;
  return (
    <div className="card_body">
      <div className="card_word">{word}</div>
      <div className="card_transcription">{transcription}</div>
      <div className="card_translation">{translation}</div>
    </div>
  );
};

export default Card;
