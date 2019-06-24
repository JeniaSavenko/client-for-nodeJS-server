import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Navigator from './src/components/Navigator';
import configureStore from './src/store/configureStore';
import WebSocket from './src/api/socket';
import './src/components/i18n';

const store = configureStore();
const persistor = persistStore(store);

const App = () => {
  useEffect(() => {
    WebSocket.configureSocket(store);
    WebSocket.init();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
