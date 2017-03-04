'use strict';

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {OPERATION_ADD, OPERATION_SUBTRACT, OPERATION_DIVIDE, OPERATION_MULTIPLY} from '../actions/types';
import OperationSymbols from '../constants/operationSymbols';
import Colors from '../colors';
import {aggregateCalculatorHistory} from '../helper';

class OutputScreen extends React.Component {
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
      if (offset !== null || currentInput.length === 0) {
        highlight = styles.highlightAggregate;
      } else {
        highlight = highlightedStyles[operation];
      }
      return (
        <Text style={[styles.aggregate, highlight]}>{aggregate} {currentInput.length > 0 ? OperationSymbols[operation] : ''}</Text>
      );
    }
  }
  render() {
    var {offset, history, operation} = this.props.calculations;
    var offsetStyle = null;
    if (offset !== null) {
      offsetStyle = styles[history[offset + 1].operation];
    }
    return (
      <View style={[styles.view, this.props.style, styles[operation], offsetStyle]}>
        {this.renderAggregate()}
        <Text style={styles.text}>{this.getOutput()}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#6fccf5',
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
  },
  [OPERATION_ADD]: {
    backgroundColor: Colors[OPERATION_ADD].normal
  },
  [OPERATION_SUBTRACT]: {
    backgroundColor: Colors[OPERATION_SUBTRACT].normal
  },
  [OPERATION_DIVIDE]: {
    backgroundColor: Colors[OPERATION_DIVIDE].normal
  },
  [OPERATION_MULTIPLY]: {
    backgroundColor: Colors[OPERATION_MULTIPLY].normal
  }
});
const highlightedStyles = StyleSheet.create({
  [OPERATION_ADD]: {
    color: Colors[OPERATION_ADD].lighter
  },
  [OPERATION_SUBTRACT]: {
    color: Colors[OPERATION_SUBTRACT].lighter
  },
  [OPERATION_DIVIDE]: {
    color: Colors[OPERATION_DIVIDE].lighter
  },
  [OPERATION_MULTIPLY]: {
    color: Colors[OPERATION_MULTIPLY].lighter
  }
})

export default OutputScreen;
