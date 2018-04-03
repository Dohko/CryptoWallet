/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @providesModule app-init
 */

import React, { Component } from 'react';

import MainScreen from 'ui-screen-main';


// import SInfo from 'react-native-sensitive-info';
// 
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   Modal,
//   Alert
// } from 'react-native';

// import Bitcoin from './libs/crypto/bitcoin';
//
// const keyPair = Bitcoin.ECPair.makeRandom();
//
// var address = ""
//
//
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};



export default class App extends Component<Props> {
	
  // onCloseModal = () => {
  // 	  SInfo.deleteItem('account1', {
  // 			  sharedPreferencesName: 'mySharedPrefs',
  // 			  keychainService: 'myKeychain'
  // 	  })
  //
  // 	  SInfo.getItem('account1', {
  // 	  sharedPreferencesName: 'mySharedPrefs',
  // 	  keychainService: 'myKeychain'}).then(value => {
  // 		  if (value == null) {
  // 			  address = keyPair.getAddress();
  //
  // 			  SInfo.setItem('account1', address, {
  // 			  sharedPreferencesName: 'mySharedPrefs',
  // 			  keychainService: 'myKeychain'
  // 			  }).then(value => {
  //               console.log(address)
  // 				  Alert.alert('Alert', address);
  // 			  });
  // 		  }
  // 		  else {
  // 			  address = value;
  // 		  }
  // 	  });
  //
  //
  // }
  render() {
    return (
		<MainScreen />
    );
	  
	  // return (<Login ref="current" />);
		//     return (
		//       <View style={styles.container}>
		//         <Text style={styles.welcome} onPress={this.onCloseModal}>
		// Welcome to React Native!
		//         </Text>
		//         <Text style={styles.instructions}>
		//           To get started, edit App.js
		//         </Text>
		//         <Text style={styles.instructions}>
		//           {instructions}
		//         </Text>
		//       </View>
		//     );
  }
}

