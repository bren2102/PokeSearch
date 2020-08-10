// import { byName, byEncounter, byType } from './pokeapi';
// let root = document.getElementById("root");
// let name = document.getElementById("inputName").value;
// root.innerHTML = `
//   <button onClick= " ${byName(name)}">
//     Click
//   </button>`;
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  , document.getElementById('root'));