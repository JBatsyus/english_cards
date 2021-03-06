import Card from "./index";
import "./CardSlider.scss";
import { useState, useCallback } from "react";
import ButtonBack from "../buttons/ButtonBack";
import ButtonNext from "../buttons/ButtonNext";
import { observer, inject } from "mobx-react";

const CardSlider = inject(["wordsStore"])(
  observer(({ wordsStore }) => {
    const allWords = wordsStore.words;
    const [selectedCard, setSelectedCard] = useState(0);
    const [count, setCount] = useState(0);

    const handleClickButtonNext = () => {
      // бесконечная карусель
      const newIdx = (selectedCard + 1) % allWords.length;
      if (newIdx < allWords.length) {
        setSelectedCard(newIdx);
      }
    };

    const handleClickButtonBack = () => {
      // переключение карточек в обратном направлении
      const oldIdx = (selectedCard - 1 + allWords.length) % allWords.length;
      if (oldIdx >= 0) {
        setSelectedCard(oldIdx);
      }
    };
    // подсчет карточек
    const increment = useCallback(() => setCount(count + 1), [count]);

    return (
      <div className="CardContainer">
        <div className="title">
          You learned <span className="titleCount">{count}</span> words!
          <br /> Congratulations!
        </div>
        <div className="Card">
          <ButtonBack
            onClick={handleClickButtonBack}
            // disabled={selectedCard === 0}
          />
          <Card
            key={allWords[selectedCard].id}
            english={allWords[selectedCard].english}
            transcription={allWords[selectedCard].transcription}
            translation={allWords[selectedCard].russian}
            increment={increment}
          />
          <ButtonNext
            onClick={handleClickButtonNext}
            // disabled={selectedCard === words.length - 1}
          />
        </div>
        <div className="cardCounter">
          {selectedCard + 1} / {allWords.length}
        </div>
      </div>
    );
  }),
);
export default CardSlider;
