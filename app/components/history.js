'use strict';

import React, {Component, StyleSheet, View, Text} from 'react-native';

class History extends Component {
  render() {
    return (
      <View style={[styles.view, this.props.style]}>
        <View style={styles.pill}>
          <Text style={styles.text}>10 - 2</Text>
        </View>
        <View style={[styles.pill, {backgroundColor: '#f796d2'}]}>
          <Text style={styles.text}>8 + 4</Text>
        </View>
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
  }
})

export default History;
