'use strict';

import React, {Component, StyleSheet, View, Text, TextInput} from 'react-native';

class OutputScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }
  componentWillReceiveProps(nextProps) {
    this.state.value = nextProps.value;
    this.setState(this.state);
  }
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>{this.state.value}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'flex-end'
  },
  text: {
    color: '#fff',
    fontSize: 38
  }
})

export default OutputScreen;
