import React from 'react';
import { Scene, Actions } from 'react-native-router-flux';
import Home from './scenes/Home';
import TabList from './scenes/TabList';

export default Actions.create(
  <Scene key="root">
    <Scene key="login" component={Home} title="Home" initial={true} />
    <Scene key="tabList" component={TabList} title="TabList" />
  </Scene>
);