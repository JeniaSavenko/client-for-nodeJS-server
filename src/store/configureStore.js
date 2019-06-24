import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import rootSaga from '../sagas';
import { rootReducer } from '../reducers';


const persistConfig = {
  key: 'root',
  storage,
};


export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    persistedReducer,
    {},
    composeEnhancers(applyMiddleware(sagaMiddleware, logger)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
