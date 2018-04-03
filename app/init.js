/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * @providesModule app-init
 */

import React, { Component } from 'react';
import MainScreen from 'ui-screen-main';

type Props = {};

export default class App extends Component<Props> {
	
  render() {
    return (
		<MainScreen />
    );
	  
  }
}

