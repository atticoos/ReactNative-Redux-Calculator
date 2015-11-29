'use strict';

import React, {Component, StyleSheet, View, Text} from 'react-native';

class OutputScreen extends Component {
  getOutput() {
    var {currentInput} = this.props;
    if (currentInput.length === 0) {
      return 0;
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
