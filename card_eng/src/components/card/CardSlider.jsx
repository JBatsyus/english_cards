import Card from "./index";
import "./CardSlider.scss";
import { words } from "./cardDate";
import { useState } from "react";
import ButtonBack from "../buttons/ButtonBack";
import ButtonNext from "../buttons/ButtonNext";

// определяем массив с карточками
const cardsArr = new Array(15).fill(0);

const CardSlider = () => {
  const [selectedCard, setSelectedCard] = useState(0);

  const handleClickButtonNext = () => {
    const newIdx = selectedCard + 1;
    if (newIdx < cardsArr.length) {
      setSelectedCard(newIdx);
    }
  };
  const handleClickButtonBack = () => {
    const oldIdx = selectedCard - 1;
    if (oldIdx > cardsArr.length) {
      setSelectedCard(oldIdx);
    }
  };
  if (selectedCard >= words.length) {
    return (
      <div>
        <div>карточки закончились!</div>
      </div>
    );
  } else {
    return (
      <div className="CardContainer">
        <div className="Card">
          <ButtonBack onClick={handleClickButtonBack} />
          <Card
            key={words[selectedCard].id}
            word={words[selectedCard].word}
            transcription={words[selectedCard].transcription}
            translation={words[selectedCard].russian}
          />
          <ButtonNext onClick={handleClickButtonNext} />
        </div>
        <div className="cardCounter">
          {selectedCard + 1} / {words.length}
        </div>
      </div>
    );
  }
};
export default CardSlider;
