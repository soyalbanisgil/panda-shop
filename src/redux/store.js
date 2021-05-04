import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rooReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rooReducer, applyMiddleware(...middlewares));

export default store;
