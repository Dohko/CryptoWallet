/**
 * @providesModule ui-screen-main
 */

import React, { Component } from 'react';
import BaseScreen from 'ui-component-basescreen';

import { bitcoin } from 'app-provider-bitcoin';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


type Props = {};

export default class MainScreen extends BaseScreen<Props> {
	
	state = {
		bitcoinAddress: '',
	}
	
	constructor() {
		super();
		bitcoin.address().then(value => {
			this.setState({bitcoinAddress: value});
		});
	}
	

	render() {
		const s = this.styles
		return (
			<View style={s.container}>
				<Text>{this.state.bitcoinAddress}</Text>
			</View>
		);
	}
	
};

