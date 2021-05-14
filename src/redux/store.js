import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rooReducer from './root-reducer';

const middlewares = [logger];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rooReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
