'use strict';

import {
  NUMBER_INPUT,
  NUMBER_SIGNED_INPUT,
  DECIMAL_INPUT,
  OPERATION_INPUT,
  UNDO,
  CALCULATE
} from '../actions/types';

const integerSigns = {
  POSITIVE: 'POSTIIVE',
  NEGATIVE: 'NEGATIVE'
};

const initialState = {
  positive: true,
  operation: null,
  currentInput: [],
  history: [{
    input: 10,
    operation: 'ADD'
  }, {
    input: 10,
    operation: 'ADD'
  }]
};

export default function calculationReducer (state = initialState, action) {
  var currentInput = state.currentInput.slice();
  var history = state.history.slice();
  switch(action.type) {
    case NUMBER_INPUT:
      currentInput.push(action.value);
      return {
        ...state,
        currentInput
      };
    case NUMBER_SIGNED_INPUT:
      return {
        ...state,
        positive: !state.positive
      };
    case DECIMAL_INPUT:
      // only allow one decimal
      if (state.currentInput.indexOf('.') > -1) {
        return state;
      }
      currentInput.push('.');
      return {
        ...state,
        currentInput
      };
    case OPERATION_INPUT:
      // assign the current operation
      return {
        ...state,
        operation: action.operation
      };
    case UNDO:
      return {
        ...state,
        positive: true,
        currentInput: [],
        history: state.history.slice(0, state.history.length - 2)
      };
    case CALCULATE:
      if (currentInput.length === 0) {
        // @TODO - apply the operation to the last item in the history to repeat the calculation
        return state;
      }
      history.push({
        input: parseFloat(currentInput.join('')),
        operation: state.operation
      })
      currentInput = [];
      return {
        ...state,
        history,
        currentInput
      };
    default:
      return state;
  }
}
