import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

let store;

if (process.env.NODE_ENV === 'PRODUCTION') {
  store = createStore(rootReducer, applyMiddleware(thunk));
} else {
  store = createStore(rootReducer, applyMiddleware(thunk, logger));
}

export default store;
