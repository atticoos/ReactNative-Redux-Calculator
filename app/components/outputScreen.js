'use strict';

import React, {Component, StyleSheet, View, Text} from 'react-native';
import {OPERATION_ADD, OPERATION_SUBTRACT, OPERATION_DIVIDE, OPERATION_MULTIPLY} from '../actions/types';
import {aggregateCalculatorHistory} from '../helper';

class OutputScreen extends Component {
  getOutput() {
    var {currentInput, history} = this.props.calculations;
    if (currentInput.length === 0 && history.length === 0) {
      return 0
    } else if (currentInput.length === 0) {
      return aggregateCalculatorHistory(history);
    } else {
      return currentInput.join('');
    }
  }
  render() {
    return (
      <View style={[styles.view, this.props.style]}>
        <Text style={styles.text}>{this.getOutput()}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    alignItems: 'flex-end'
  },
  text: {
    color: '#fff',
    fontSize: 38
  }
})

export default OutputScreen;
