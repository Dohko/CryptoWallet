/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
global.Random = require('random-js')
import "./shim";

import SInfo from 'react-native-sensitive-info';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Modal,
  Alert
} from 'react-native';

const bitcoin = require("bitcoinjs-lib");
const keyPair = bitcoin.ECPair.makeRandom();
// const address = keyPair.getAddress();

var address = ""


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



type Props = {};
export default class App extends Component<Props> {
	
  onCloseModal = () => {
	  SInfo.deleteItem('account1', {
			  sharedPreferencesName: 'mySharedPrefs',
			  keychainService: 'myKeychain'
	  })
	  
	  SInfo.getItem('account1', {
	  sharedPreferencesName: 'mySharedPrefs',
	  keychainService: 'myKeychain'}).then(value => {
	      console.log(value) //value1
		  if (value == null) {
			  address = keyPair.getAddress();
			  
			  SInfo.setItem('account1', address, {
			  sharedPreferencesName: 'mySharedPrefs',
			  keychainService: 'myKeychain'
			  }).then(value => {
				  Alert.alert('Alert', address);
			  });
		  }
		  else {
			  address = value;
		  }
	  });	  
	  
	  
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={this.onCloseModal}>
		Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
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
