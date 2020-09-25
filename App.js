/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { Provider } from "react-redux";
import Store from "./src/store/store";
import Routes from "./src/navigation/AppNavigator";

export default class App extends React.Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    // SplashScreen.hide();
  }
  render() {
    return (
      <>
        <Provider store={Store}>
          <StatusBar backgroundColor="rgb(125,96,209)" barStyle="light-content" />
          <Routes />
        </Provider>
      </>
    );
  }
}
