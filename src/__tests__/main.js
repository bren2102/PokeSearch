import '@testing-library/jest-dom';

import React from 'react';
import { render as rtlRender, screen } from '@testing-library/react';
import {
  HashRouter as Router,
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Main from '../components/main';
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
test('test if Generation I text is loaded when main is rendered', () => {
  render(<Main />);
  expect(screen.getByText('Generation I')).toBeDefined();
});

test('test if Generation II text is loaded when main is rendered', () => {
  render(<Main />);
  expect(screen.getByText('Generation II')).toBeDefined();
});

test('test if Generation III text is loaded when main is rendered', () => {
  render(<Main />);
  expect(screen.getByText('Generation III')).toBeDefined();
});

test('test if Generation IV text is loaded when main is rendered', () => {
  render(<Main />);
  expect(screen.getByText('Generation IV')).toBeDefined();
});

test('test if Generation V text is loaded when main is rendered', () => {
  render(<Main />);
  expect(screen.getByText('Generation V')).toBeDefined();
});

test('test if Generation VI text is loaded when main is rendered', () => {
  render(<Main />);
  expect(screen.getByText('Generation VI')).toBeDefined();
});

test('test if Generation VII text is loaded when main is rendered', () => {
  render(<Main />);
  expect(screen.getByText('Generation VII')).toBeDefined();
});

test('test if image1 is loaded when main is rendered', () => {
  render(<Main />);
  expect(screen.getByTestId('image1')).toBeDefined();
});

test('test if image2 is loaded when main is rendered', () => {
  render(<Main />);
  expect(screen.getByTestId('image2')).toBeDefined();
});

test('test if image3 is loaded when main is rendered', () => {
  render(<Main />);
  expect(screen.getByTestId('image3')).toBeDefined();
});
