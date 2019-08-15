import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './rootReducer';

let store;

if (process.env.NODE_ENV === 'PRODUCTION') {
  store = createStore(rootReducer);
} else {
  store = createStore(rootReducer, applyMiddleware(logger));
}

export default store;
