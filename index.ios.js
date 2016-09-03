import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Home from './scenes/Home';
import TabList from './scenes/TabList';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={Home} title="Home" initial={true} />
          <Scene key="tabList" component={TabList} title="TabList" />
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('TabbitRabbit', () => App);