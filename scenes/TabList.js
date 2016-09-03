import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import propTypes from '../propTypes';

export default class Home extends Component {
  propTypes: {
    tab: propTypes.tab
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Tab List
        </Text>
        <Text style={styles.instructions}>
          Hey
        </Text>
      </View>
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
