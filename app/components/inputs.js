'use strict';

import React, {TouchableHighlight, Component, StyleSheet, View, Text} from 'react-native';

var Types = {
  NUMBER: 'NUMBER',
  MODIFIER: 'MODIFIER'
};

var inputs = [
  {value: 1, type: Types.NUMBER},
  {value: 2, type: Types.NUMBER},
  {value: 3, type: Types.NUMBER},
  {value: 4, type: Types.NUMBER},
  {value: 5, type: Types.NUMBER},
  {value: 6, type: Types.NUMBER},
  {value: 7, type: Types.NUMBER},
  {value: 8, type: Types.NUMBER},
  {value: 9, type: Types.NUMBER},
  {value: '+/-', type: Types.MODIFIER},
  {value: 0, type: Types.NUMBER},
  {value: '.', type: Types.MODIFIER},
]

class Inputs extends Component {
  render() {

    return (
      <View style={this.props.style}>
        {this.renderInputRows()}
      </View>
    )
  }
  renderInputRows() {
    return inputs.reduce((collection, input) => {
      if (collection[collection.length - 1].length === 3) {
        collection.push([]);
      }
      collection[collection.length-1].push(input);
      return collection;
    }, [[]]).map((group, rowIndex) => {
      var columns = group.map((item, columnIndex) => {
        return (
          <TouchableHighlight style={styles.input} key={'inputRow_' + rowIndex + '_inputCol_' + columnIndex}>
            <Text style={styles.inputText}>{item.value}</Text>
          </TouchableHighlight>
        );
      });
      console.log('columns', columns);
      return (
        <View style={styles.row} key={'inputRow_' + rowIndex}>
          {columns}
        </View>
      );
    });
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1
  },
  input: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#000',
    fontSize: 18
  }
});

export default Inputs;
