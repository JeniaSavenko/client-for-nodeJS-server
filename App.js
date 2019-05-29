import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Navigator from "./src/components/Navigator";
import {store} from "./src/store/configureStore";
import {Provider} from "react-redux";

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Provider store={store}>
                <Navigator/>
            </Provider>
        );
    }
}

