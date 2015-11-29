'use strict';

import React, {Component, StyleSheet, View, Text} from 'react-native';
import {OPERATION_ADD, OPERATION_SUBTRACT, OPERATION_DIVIDE, OPERATION_MULTIPLY} from '../actions/types';
import {aggregateCalculatorHistory} from '../helper';

const OperationSymbols = {
  [OPERATION_ADD]: '+',
  [OPERATION_SUBTRACT]: '-',
  [OPERATION_DIVIDE]: '/',
  [OPERATION_MULTIPLY]: 'X'
};

class OutputScreen extends Component {
  getOutput() {
    var {currentInput, history} = this.props.calculations;
    if (currentInput.length === 0 && history.length === 0) {
      return 0
    } else if (currentInput.length === 0) {
      return '';
    } else {
      return currentInput.join('');
    }
  }
  renderAggregate() {
    var {currentInput, history, operation, offset} = this.props.calculations;
    if (history.length > 0) {
      let aggregate = aggregateCalculatorHistory(history, offset);
      let highlight = null;
      if (currentInput.length === 0) {
        highlight = styles.highlightAggregate;
      }
      return (
        <Text style={[styles.aggregate, highlight]}>{aggregate} {currentInput.length > 0 ? OperationSymbols[operation] : ''}</Text>
      );
    }
  }
  render() {
    return (
      <View style={[styles.view, this.props.style]}>
        {this.renderAggregate()}
        <Text style={styles.text}>{this.getOutput()}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  text: {
    color: '#fff',
    fontSize: 38
  },
  aggregate: {
    color: '#a2dcf5',
    fontSize: 38,
    marginRight: 5
  },
  highlightAggregate: {
    color: '#fff'
  }
});

export default OutputScreen;
