'use strict';

import React, {Component, StyleSheet, ScrollView, TouchableHighlight, View, Text} from 'react-native';
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
    var {history, offset} = this.props.calculations;
    var pills = [];

    aggregateCalculatorHistory(history, null, (aggregate, input, operation, index) => {
      pills.push(this.createPill(aggregate, input, operation, index));
    });
    return pills.reverse();
  }
  createPill(aggregation, input, operation, index) {
    var {timeTravel, calculations} = this.props;
    var offset = calculations.offset;
    var offsetStyle;
    if (offset === null) {
      offsetStyle = null;
    } else if (index > offset) {
      offsetStyle = styles.pillOffset;
    } else if (index === offset) {
      offsetStyle = styles.currentPillOffset;
    }
    return (
      <TouchableHighlight
        onPress={() => timeTravel(index)}
        style={[styles.pill, styles[operation], styles.inversion, offsetStyle]}>
        <Text style={styles.text}>{aggregation} {OperationSymbols[operation]} {input}</Text>
      </TouchableHighlight>
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
  pillOffset: {
    backgroundColor: 'gray'
  },
  currentPillOffset: {
    backgroundColor: 'green'
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
