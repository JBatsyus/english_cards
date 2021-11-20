import Card from "../card/index";
import Table from "../table/index";
import ButtonBack from "../buttons/ButtonBack";
import ButtonNext from "../buttons/ButtonNext";

import { words } from "../card/cardDate";
import "./main.scss";

const Main = () => {
  return (
    <main className="main">
      <div className="main_box">
        <ButtonBack />
        {/* вывод только одной карточки */}
        {/* {words.map(word => ( */}
        <Card
          key={words[0].id}
          word={words[0].word}
          transcription={words[0].transcription}
          translation={words[0].russian}
        />
        {/* ))} */}
        <ButtonNext />
      </div>

      <Table></Table>
    </main>
  );
};

export default Main;
