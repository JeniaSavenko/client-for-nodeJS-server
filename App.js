import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View
} from 'react-native';
import { Provider } from 'react-redux';
import Navigator from './src/components/Navigator';
import { store } from './src/store/configureStore';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
