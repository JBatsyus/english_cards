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
  const { data } = useContext(DataContext);

  const handleClickButtonNext = () => {
    // бесконечная карусель
    const newIdx = (selectedCard + 1) % data.length;
    if (newIdx < data.length) {
      setSelectedCard(newIdx);
    }
  };

  const handleClickButtonBack = () => {
    // переключение карточек в обратном направлении
    const oldIdx = (selectedCard - 1 + data.length) % data.length;
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
          key={data[selectedCard]?.id}
          english={data[selectedCard]?.english}
          transcription={data[selectedCard]?.transcription}
          translation={data[selectedCard]?.russian}
          increment={increment}
        />
        <ButtonNext onClick={handleClickButtonNext} />
      </div>
      <div className="cardCounter">
        {selectedCard + 1} / {data.length}
      </div>
    </div>
  );
};
export default CardSlider;
