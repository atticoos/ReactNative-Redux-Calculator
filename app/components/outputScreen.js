'use strict';

import React, {Component, StyleSheet, View, Text} from 'react-native';
import {OPERATION_ADD, OPERATION_SUBTRACT, OPERATION_DIVIDE, OPERATION_MULTIPLY} from '../actions/types';

class OutputScreen extends Component {
  getCalculation() {
    var {history} = this.props.calculations;
    return history.splice(1, history.length).reduce((aggregation, current) => {
      switch (current.operation) {
        case OPERATION_ADD:
          return aggregation + current.input;
        case OPERATION_SUBTRACT:
          return aggregation - current.input;
        case OPERATION_DIVIDE:
          return aggregation / current.input;
        case OPERATION_MULTIPLY:
          return aggregation * current.input;
        default:
          return aggregation;
      }
    }, history[0].input);
  }
  getOutput() {
    var {currentInput, history} = this.props.calculations;
    if (currentInput.length === 0 && history.length === 0) {
      return 0
    } else if (currentInput.length === 0) {
      return this.getCalculation();
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
