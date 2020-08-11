// import { byName, byEncounter, byType } from './pokeapi';
// let root = document.getElementById("root");
// let name = document.getElementById("inputName").value;
// root.innerHTML = `
//   <button onClick= " ${byName(name)}">
//     Click
//   </button>`;
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App'
import './index.scss';
import { createStore } from 'redux';
import rootReducer from './reducers/index'

const store = createStore(rootReducer,
  {
    pokemones: [],
    queryFilter: '',
    isInHome: false
  });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));