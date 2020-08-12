import '@testing-library/jest-dom';

import React from 'react';
import { render as rtlRender, screen } from '@testing-library/react';
import {
  HashRouter as Router,
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import PokeDetails from '../components/pokeDetail';
import rootReducer from '../reducers';
/* eslint-disable */
function render(
  ui,
  {
    initialState = {
      queryFilter: '',
      isInHome: false,
    },
    store = createStore(rootReducer, initialState),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <Router>
          {' '}
          {children}
          {' '}
        </Router>
        {' '}
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}
/* eslint-enable */
test('test if pokemon name is loaded when PokeDetails is rendered', () => {
  render(<PokeDetails />);
  expect(screen.getByTestId('name')).toBeDefined();
});

test('test if pokemon image is loaded when PokeDetails is rendered', () => {
  render(<PokeDetails />);
  expect(screen.getByTestId('img')).toBeDefined();
});

test('test if pokemon index is loaded when PokeDetails is rendered', () => {
  render(<PokeDetails />);
  expect(screen.getByTestId('index')).toBeDefined();
});

test('test if pokemon height is loaded when PokeDetails is rendered', () => {
  render(<PokeDetails />);
  expect(screen.getByTestId('height')).toBeDefined();
});

test('test if pokemon weight is loaded when PokeDetails is rendered', () => {
  render(<PokeDetails />);
  expect(screen.getByTestId('weight')).toBeDefined();
});

test('test if pokemon ability is loaded when PokeDetails is rendered', () => {
  render(<PokeDetails name="bulbasaur" url="https://pokeapi.co/api/v2/" />);
  expect(screen.getByTestId('ability')).toBeDefined();
});

test('test if pokemon captureRate is loaded when PokeDetails is rendered', () => {
  render(<PokeDetails name="bulbasaur" url="https://pokeapi.co/api/v2/pokemon-species/bulbasaur" />);
  expect(screen.getByTestId('captureRate')).toBeDefined();
});
