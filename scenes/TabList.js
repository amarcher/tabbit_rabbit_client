import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import actions from '../actions';
import propTypes from '../propTypes';
import store from '../store';

function getState() {
  return store.getState();
}

export default class TabList extends Component {
  constructor(props) {
    super(props);
    this.state = getState();
    this.update = this.update.bind(this);
  }

  componentDidMount() {
   store.addChangeListener(this.update);

    if (!this.state.tabs) {
      actions.fetchTabs();
    }
  }

  componentWillUnmount() {
   store.removeChangeListener(this.update);
  }

  update() {
   this.setState(getState());
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Tab List
        </Text>
        {this.renderTabs()}
      </View>
    );
  }

  renderTabs() {
    if (this.state.tabs) {
      return this.state.tabs.map(this.renderTab, this);
    }
  }

  renderTab(tab, index) {
    return (
      <Text key={index} style={styles.instructions}>
        {tab.name}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
