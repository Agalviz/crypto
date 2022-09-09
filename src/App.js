import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.scss";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Coins from "./pages/Coins";
import About from "./pages/About";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    data: [],
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/coins/:id" component={Coins} />
            <Route exact path="/about" component={About} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
