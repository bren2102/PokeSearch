import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import './index.scss';
import rootReducer from './reducers/index';

const store = createStore(rootReducer,
  {
    pokemones: [],
    queryFilter: '',
    isInHome: false,
    details: {
      index: '',
      name: '',
      type: [],
      entriesText: [],
      eggGroups: [],
      color: [],
      height: '',
      weight: '',
      abilities: [],
      captureRate: '',
      baseHappiness: '',
      baseExperience: '',
      growthRate: [],
      genderRate: '',
    },
  });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
