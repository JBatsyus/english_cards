import "./App.css";
import Header from "./components/header/index.jsx";
import Main from "./components/main/index.jsx";
import Footer from "./components/footer/index.jsx";
import CardSlider from "./components/card/CardSlider.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home">
            <Main />
          </Route>
          <Route path="/cards">
            <CardSlider />
          </Route>
        </Switch>
        <Main />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
