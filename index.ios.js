import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Router } from 'react-native-router-flux';
import scenes from './Scenes';

export default class App extends Component {
  render() {
    return <Router scenes={scenes} />;
  }
}

AppRegistry.registerComponent('TabbitRabbit', () => App);