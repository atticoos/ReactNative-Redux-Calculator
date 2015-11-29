'use strict';

import React, {Component, StyleSheet, View, Text} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux/native';
import * as CalculatorActionCreators from '../actions/dispatchers';
import OutputScreen from '../components/outputScreen';
import History from '../components/history';
import Inputs from '../components/inputs';

@connect(state => ({
  calculations: state.calculations
}))
class Calculator extends Component {
  render() {
    var {dispatch, calculations} = this.props;
    var boundActionCreators = bindActionCreators(CalculatorActionCreators, dispatch);
    return (
      <View style={styles.container}>
        <OutputScreen
          style={styles.outputScreen}
          calculations={calculations} />
        <History
          {...boundActionCreators}
          calculations={calculations}
          style={styles.history} />
        <Inputs
          {...boundActionCreators}
          style={{flex: 1}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  outputScreen: {
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40
  },
  history: {
    backgroundColor: '#4c4c4c',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  }
});

export default Calculator;
