import "./App.css";
import Header from "./components/header/index.jsx";
import Table from "./components/table/index.jsx";
import Footer from "./components/footer/index.jsx";
import CardSlider from "./components/card/CardSlider.jsx";
import Error from "./components/error/index.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home">
            <Table />
          </Route>
          <Route path="/cards">
            <CardSlider />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
