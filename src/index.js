import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import App from './components/App';
import './application.css';
import citiesReducer from './reducers/citiesReducer';
import selectedCityReducer from './reducers/selectedCityReducer';

const reducers = combineReducers({
  cities: citiesReducer,
  selectedCity: selectedCityReducer,
});

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
