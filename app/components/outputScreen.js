'use strict';

import React, {Component, StyleSheet, View, Text} from 'react-native';

class OutputScreen extends Component {
  render() {
    var value = this.props.value;
    return (
      <View style={[styles.view, this.props.style]}>
        <Text style={styles.text}>{value}</Text>
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
