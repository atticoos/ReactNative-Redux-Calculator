'use strict';

import React, {Component, StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux/native';
import OutputScreen from '../components/outputScreen';

@connect(state => ({
  calculations: state.calculations
}))
class Calculator extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <OutputScreen value={42} />
        </View>
        <Text>Hello world</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  top: {
    backgroundColor: '#6fccf5',
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40
  }
});

export default Calculator;
