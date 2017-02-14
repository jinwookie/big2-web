import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

export function createAppStore(initialState) {
  const middleware = [ thunk, routerMiddleware(browserHistory) ];

  const store = initialState ?
    createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)))
    : createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

  return store;
}
