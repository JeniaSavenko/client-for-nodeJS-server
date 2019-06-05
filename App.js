import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import Navigator from './src/components/Navigator';
import { store } from './src/store/configureStore';
import { configureSocket } from './src/api/socket';

configureSocket(store);

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
