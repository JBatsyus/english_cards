import Card from "./index";
import "./CardSlider.scss";
import { words } from "./cardDate";
import { useState } from "react";
import ButtonBack from "../buttons/ButtonBack";
import ButtonNext from "../buttons/ButtonNext";

const CardSlider = () => {
  const [selectedCard, setSelectedCard] = useState(0);

  const handleClickButtonNext = () => {
    // бесконечная карусель
    const newIdx = (selectedCard + 1) % words.length;
    if (newIdx < words.length) {
      setSelectedCard(newIdx);
    }
  };

  const handleClickButtonBack = () => {
    // переключение карточек в обратном направлении
    const oldIdx = (selectedCard - 1 + words.length) % words.length;
    if (oldIdx >= 0) {
      setSelectedCard(oldIdx);
    }
  };

  return (
    <div className="CardContainer">
      <div className="Card">
        <ButtonBack
          onClick={handleClickButtonBack}
          // disabled={selectedCard === 0}
        />
        <Card
          key={words[selectedCard].id}
          word={words[selectedCard].word}
          transcription={words[selectedCard].transcription}
          translation={words[selectedCard].russian}
        />
        <ButtonNext
          onClick={handleClickButtonNext}
          // disabled={selectedCard === words.length - 1}
        />
      </div>
      <div className="cardCounter">
        {selectedCard + 1} / {words.length}
      </div>
    </div>
  );
};
export default CardSlider;
