import React from "react";
import App from "./App";
import Pokedex from "../containers/pokedex"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class Main extends React.Component {
  render() {
    return(
      <div>
        <Router>
          <div id="generations">
            <div>
              <Link to="/generation-i">Generation I</Link>
              <Link to="/generation-ii">Generation II</Link>
            </div>
            <Switch>
              <Route exact path="/generation-i" component={Pokedex} />
              <Route exact path="/generation-i" component={App} />
            </Switch>
          </div>
        </Router>
      </div>
      
    );
  } 
}

export default Main;