'use strict';

import React, {Component, StyleSheet, View, Text} from 'react-native';
import {OPERATION_ADD, OPERATION_SUBTRACT, OPERATION_DIVIDE, OPERATION_MULTIPLY} from '../actions/types';

const OperationSymbols = {
  [OPERATION_ADD]: '+',
  [OPERATION_SUBTRACT]: '-',
  [OPERATION_DIVIDE]: '/',
  [OPERATION_MULTIPLY]: 'X'
};

class History extends Component {
  render() {
    return (
      <View style={[styles.view, this.props.style]}>
        {this.renderPills()}
      </View>
    )
  }
  renderPills() {
    var {calculations} = this.props;
    var pills = [];

    calculations.slice(1, calculations.length).reduce((aggregate, current) => {
      pills.push(this.createPill(aggregate, current.input, current.operation));
      switch (current.operation) {
        case OPERATION_ADD:
          return aggregate + current.input;
        case OPERATION_SUBTRACT:
          return aggregate - current.input;
        case OPERATION_DIVIDE:
          return aggregate / current.input;
        case OPERATION_MULTIPLY:
          return aggregate * current.input;
        default:
          return aggregate;
      }
    }, calculations[0].input);
    return pills;
  }
  createPill(aggregation, input, operation) {
    return (
      <View style={[styles.pill, styles[operation]]}>
        <Text style={styles.text}>{aggregation} {OperationSymbols[operation]} {input}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  pill: {
    backgroundColor: '#f8b055',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderRadius: 15,
    marginLeft: 20
  },
  text: {
    color: '#fff',
    fontSize: 18
  },
  [OPERATION_ADD]: {
    backgroundColor: '#f796d2'
  },
  [OPERATION_SUBTRACT]: {
    backgroundColor: '#f8b055'
  },
  [OPERATION_DIVIDE]: {
    backgroundColor: '#f8b055'
  },
  [OPERATION_MULTIPLY]: {
    backgroundColor: '#6fcdf4'
  }
});

export default History;
