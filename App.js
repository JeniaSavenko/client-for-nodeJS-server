import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Navigator from './src/components/Navigator';
import { store } from './src/store/configureStore';
import { configureSocket } from './src/api/socket';
import './src/components/i18n';

const App = () => {
  useEffect(() => {
    configureSocket(store);
  }, []);
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
