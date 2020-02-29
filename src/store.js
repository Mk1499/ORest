import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

import MainReducer from './reducers';

const intialState = {}; 

const store = createStore(MainReducer,
    intialState,
    applyMiddleware(thunk)); 

export default store;