"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import reducer from './app/reducers';

import App from './app/containers/app';

const store = createStore(
  combineReducers({
    ...reducer
  })
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
