'use strict';

import React, {Component, StyleSheet, View, Text} from 'react-native';

class OutputScreen extends Component {
  getCalculation() {
    var {history} = this.props.calculations;
    return history.splice(1, history.length).reduce((aggregation, current) => {
      switch (current.operation) {
        case 'add':
          return aggregation + current.input;
        case 'subtract':
          return aggregation - current.input;
        case 'divide':
          return aggregation / current.input;
        case 'multiply':
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
