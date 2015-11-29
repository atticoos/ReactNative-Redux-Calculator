'use strict';

import React, {Component, StyleSheet, ScrollView, View, Text} from 'react-native';
import {OPERATION_ADD, OPERATION_SUBTRACT, OPERATION_DIVIDE, OPERATION_MULTIPLY} from '../actions/types';
import {aggregateCalculatorHistory} from '../helper';

const OperationSymbols = {
  [OPERATION_ADD]: '+',
  [OPERATION_SUBTRACT]: '-',
  [OPERATION_DIVIDE]: '/',
  [OPERATION_MULTIPLY]: 'X'
};

class History extends Component {
  render() {
    return (
      <View style={[this.props.style]}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={styles.inversion}>
          {this.renderPills()}
        </ScrollView>
      </View>
    )
  }
  renderPills() {
    var {calculations} = this.props;
    var pills = [];

    aggregateCalculatorHistory(calculations, (aggregate, input, operation) => {
      pills.push(this.createPill(aggregate, input, operation));
    });
    return pills.reverse();
  }
  createPill(aggregation, input, operation) {
    return (
      <View style={[styles.pill, styles[operation], styles.inversion]}>
        <Text style={styles.text}>{aggregation} {OperationSymbols[operation]} {input}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    // alignItems: 'flex-end',
    // flexDirection: 'row',
    // justifyContent: 'flex-end'
  },
  inversion: {
    transform: [
      {scaleX: -1}
    ]
  },
  pill: {
    backgroundColor: '#f8b055',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderRadius: 15,
    marginRight: 20
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
