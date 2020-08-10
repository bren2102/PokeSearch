import React from "react";
import Pokedex from "../containers/pokedex"
import App from "./App";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class Main extends React.Component {
  render() {
    return(
        <div id="generations">
            <Link to="/generation/1">
              <div id="initialImg">
              <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="" />
              <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" alt="" />
              <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" alt="" />
              </div>
              <p>Generation I</p>
              </Link>
            <Link to="/generation/2">
              <div id="initialImg">
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png" alt="" />
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/155.png" alt="" />
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png" alt="" />
              </div>
              <p>Generation II</p>
            </Link>
            <Link to="/generation/3">
              <div id="initialImg">
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/252.png" alt="" />
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/255.png" alt="" />
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png" alt="" />
              </div>
              <p>Generation III</p>
            </Link>
            <Link to="/generation/4">
              <div id="initialImg">
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/387.png" alt="" />
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/390.png" alt="" />
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/393.png" alt="" />
              </div>
              <p>Generation IV</p>
            </Link>
            <Link to="/generation/5">
              <div id="initialImg">
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/495.png" alt="" />
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/498.png" alt="" />
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/501.png" alt="" />
              </div>
              <p>Generation V</p>
            </Link>
            <Link to="/generation/6">
              <div id="initialImg">
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/650.png" alt="" />
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/653.png" alt="" />
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/656.png" alt="" />
              </div>
              <p>Generation VI</p>
            </Link>
            <Link to="/generation/7">
              <div id="initialImg">
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/722.png" alt="" />
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/725.png" alt="" />
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/728.png" alt="" />
              </div>
              <p>Generation VII</p>
            </Link>          
        </div>
    );
  } 
}

export default Main;