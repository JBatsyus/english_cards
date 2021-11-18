import "./App.css";
import Header from "./components/header/index.jsx";
// import Main from "./components/main/index.jsx";
import Footer from "./components/footer/index.jsx";
import Card from "./components/card/index.jsx";
import { words } from "./components/card/cardDate";

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Main> */}
      {words.map(word => (
        <Card
          key={word.id}
          word={word.word}
          transcription={word.transcription}
          translation={word.russian}
        />
      ))}
      {/* </Main> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
