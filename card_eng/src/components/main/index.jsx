import Card from "../card/index";
import Table from "../table/index";
import { words } from "../card/cardDate";
import "./main.scss";

const Main = () => {
  return (
    <main className="main">
      {words.map(word => (
        <Card
          key={word.id}
          word={word.word}
          transcription={word.transcription}
          translation={word.russian}
        />
      ))}
      <Table></Table>
    </main>
  );
};

export default Main;
