import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {reducer} from './reducers/main-reducer';

// const middlewares = [thunk]
// const middleware = applyMiddleware(...middlewares);

export const store = createStore(
    reducer,
    applyMiddleware(thunk)
);