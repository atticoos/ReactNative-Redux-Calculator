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
];
var operations = [
  {value: '/', color: '#c77ccc', altColor: '#b16eb7'},
  {value: '-', color: '#f8b055', altColor: '#dc9c4c'},
  {value: '+', color: '#f796d2', altColor: '#e088be'},
  {value: 'x', color: '#6fcdf4', altColor: '#65badd'}
];

class Inputs extends Component {
  render() {

    return (
      <View style={this.props.style}>
        {this.renderInputRows()}
        {this.renderOperationRow()}
        {this.renderActionRow()}
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
          <TouchableHighlight
            key={'inputRow_' + rowIndex + '_inputCol_' + columnIndex}
            style={styles.input}
            underlayColor="#ededed">
            <Text style={styles.inputText}>{item.value}</Text>
          </TouchableHighlight>
        );
      });
      return (
        <View style={[styles.row, styles.inputRow]} key={'inputRow_' + rowIndex}>
          {columns}
        </View>
      );
    });
  }
  renderOperationRow() {
    var columns = operations.map((operation, index) => {
      return (
        <TouchableHighlight
          key={'operationRow' + index}
          style={[styles.operationInput, {backgroundColor: operation.color}]}
          underlayColor={operation.altColor}>
          <Text style={styles.operationInputText}>{operation.value}</Text>
        </TouchableHighlight>
      );
    });
    return (
      <View style={[styles.row, styles.operationRow]}>
        {columns}
      </View>
    );
  }
  renderActionRow() {
    return (
      <View style={[styles.row, styles.actionRow]}>
        <TouchableHighlight
          style={[styles.actionButton, styles.actionButtonUndo]}
          underlayColor='#ebc6c8'>
          <Text style={[styles.actionButtonText, styles.actionButtonUndoText]}>&lt; &lt;</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.actionButton, styles.actionButtonEquals]}
          unerlayColor='#bfe4be'>
          <Text style={[styles.actionButtonText, styles.actionButtonEqualsText]}>=</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1
  },
  inputRow: {
    borderBottomWidth: 1,
    borderBottomColor: '#ededed'
  },
  input: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#ededed'
  },
  text: {
    color: '#000',
    fontSize: 18
  },
  operationRow: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  operationInput: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    width: 50,
    height: 50
  },
  operationInputText: {
    color: '#fff'
  },
  actionRow: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  actionButton: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionButtonText: {
    fontSize: 24
  },
  actionButtonUndo: {
    marginRight: 10,
    borderColor: '#ebc6c8'
  },
  actionButtonEquals: {
    marginLeft: 10,
    borderColor: '#bfe4be'
  }
});

export default Inputs;
