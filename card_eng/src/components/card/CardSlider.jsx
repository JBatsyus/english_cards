import Card from "./index";
import "./CardSlider.scss";
// import { words } from "./cardDate";
import { useContext } from "react";
import { DataContext } from "../../context/context";
import { useState, useCallback } from "react";
import ButtonBack from "../buttons/ButtonBack";
import ButtonNext from "../buttons/ButtonNext";

const CardSlider = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  const [count, setCount] = useState(0);
  const { dataWords } = useContext(DataContext);

  const handleClickButtonNext = () => {
    // бесконечная карусель
    const newIdx = (selectedCard + 1) % dataWords.length;
    if (newIdx < dataWords.length) {
      setSelectedCard(newIdx);
    }
  };

  const handleClickButtonBack = () => {
    // переключение карточек в обратном направлении
    const oldIdx = (selectedCard - 1 + dataWords.length) % dataWords.length;
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
        <ButtonBack onClick={handleClickButtonBack} />
        <Card
          key={dataWords[selectedCard]?.id}
          english={dataWords[selectedCard]?.english}
          transcription={dataWords[selectedCard]?.transcription}
          translation={dataWords[selectedCard]?.russian}
          increment={increment}
        />
        <ButtonNext onClick={handleClickButtonNext} />
      </div>
      <div className="cardCounter">
        {selectedCard + 1} / {dataWords.length}
      </div>
    </div>
  );
};
export default CardSlider;
