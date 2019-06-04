import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import Navigator from './src/components/Navigator';
import { store } from './src/store/configureStore';

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
