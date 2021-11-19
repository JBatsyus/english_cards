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
        {words.map(word => (
          <Card
            key={word.id}
            word={word.word}
            transcription={word.transcription}
            translation={word.russian}
          />
        ))}
        <ButtonNext />
      </div>

      <Table></Table>
    </main>
  );
};

export default Main;
