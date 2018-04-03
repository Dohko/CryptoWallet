/**
 * @providesModule ui-component-basescreen
 */

import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

type Props = {};

export default class BaseScreen extends Component<Props> {
	
	styles = require('ui-styles-init').styles[this.constructor.name].default;
		
	constructor() {
		super();
	};
	
};

