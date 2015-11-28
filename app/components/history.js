'use strict';

import React, {Component, StyleSheet, View, Text} from 'react-native';

class History extends Component {
  render() {
    return (
      <View style={[styles.view, this.props.style]}>
        <Text style={styles.text}>10 - 2</Text>
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
    fontSize: 22
  }
})

export default History;
