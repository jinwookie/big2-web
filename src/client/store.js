import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

export function createAppStore(initialState) {
  if (initialState)
    return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}
