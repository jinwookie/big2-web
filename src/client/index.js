import React from 'react';
import { match, browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import 'babel-polyfill';
import routes from './routes';
import { createAppStore } from './store';

const store = createAppStore(window.__INITIAL_STATE__);

const history = syncHistoryWithStore(browserHistory, store);

const mountNode = document.getElementById('react-container');

match({ history, routes }, (error, redirectLocation, renderProps) => {
  render(
    <Provider store={store}>
      <Router {...renderProps} />
    </Provider>
  , mountNode);
});
