import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from "../reducers";
import rootSaga from '../sagas/index'
import { composeWithDevTools } from 'redux-devtools-extension';
import {logger} from "redux-logger";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);