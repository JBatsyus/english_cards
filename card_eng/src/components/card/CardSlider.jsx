import Card from "./index";
import "./CardSlider.scss";
import { useState, useCallback } from "react";
import ButtonBack from "../buttons/ButtonBack";
import ButtonNext from "../buttons/ButtonNext";
import { observer, inject } from "mobx-react";

const CardSlider = inject(["wordsStore"])(
  observer(({ wordsStore }) => {
    const [selectedCard, setSelectedCard] = useState(0);
    const [count, setCount] = useState(0);

    const handleClickButtonNext = () => {
      // бесконечная карусель
      const newIdx = (selectedCard + 1) % wordsStore.length;
      if (newIdx < wordsStore.length) {
        setSelectedCard(newIdx);
      }
    };

    const handleClickButtonBack = () => {
      // переключение карточек в обратном направлении
      const oldIdx = (selectedCard - 1 + wordsStore.length) % wordsStore.length;
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
            key={wordsStore[selectedCard].id}
            word={wordsStore[selectedCard].english}
            transcription={wordsStore[selectedCard].transcription}
            translation={wordsStore[selectedCard].russian}
            increment={increment}
          />
          <ButtonNext
            onClick={handleClickButtonNext}
            // disabled={selectedCard === words.length - 1}
          />
        </div>
        <div className="cardCounter">
          {selectedCard + 1} / {wordsStore.length}
        </div>
      </div>
    );
  }),
);
export default CardSlider;
