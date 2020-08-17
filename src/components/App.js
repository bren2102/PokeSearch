/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import Pokedex from '../containers/pokedex';
import PokeDetails from './pokeDetail';
import Main from './main';
import InputFilter from './inputFilter';

const App = () => (
  <Router>
    <div id="app">
      <header>
        <Link to="/">
          <h1>Pokedex</h1>
        </Link>
        <InputFilter />
      </header>
      <Switch>
        <Route exact path="/generation/1">
          <Pokedex generation="pokemon?limit=151" />
        </Route>
        <Route exact path="/generation/2">
          <Pokedex generation="pokemon?limit=100&offset=151" />
        </Route>
        <Route exact path="/generation/3">
          <Pokedex generation="pokemon?limit=135&offset=250" />
        </Route>
        <Route exact path="/generation/4">
          <Pokedex generation="pokemon?limit=107&offset=386" />
        </Route>
        <Route exact path="/generation/5">
          <Pokedex generation="pokemon?limit=156&offset=493" />
        </Route>
        <Route exact path="/generation/6">
          <Pokedex generation="pokemon?limit=72&offset=649" />
        </Route>
        <Route exact path="/generation/7">
          <Pokedex generation="pokemon?limit=86&offset=721" />
        </Route>
        <Route exact path="/pokemon/:name">
          <PokeDetails />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  </Router>

);

export default App;
