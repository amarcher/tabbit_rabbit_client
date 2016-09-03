/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import actions from '../actions';
 import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Home extends Component {
  handlePress() {
    console.log('hi')
    actions.login();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Tabbit Rabbit!
        </Text>
        <TouchableHighlight onPress={this.handlePress}>
          <Text>Login</Text>
        </TouchableHighlight>
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
});
