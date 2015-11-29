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
  lastOperation: null,
  currentInput: [],
  history: []
};

export default function calculationReducer (state = initialState, action) {
  switch(action.type) {
    case NUMBER_INPUT:
      return {
        ...state,
        currentInput: state.currentInput.slice().push(action.value)
      };
    case NUMBER_SIGNED_INPUT:
      return {
        ...state,
        positive: !state.positive
      };
    case DECIMAL_INPUT:
      return {
        ...state,
        currentInput: state.currentInput.slice().push('.')
      };
    case OPERATION_INPUT:
      // calculate current input against value of last history item, then reset the integer sign
      // set currentInput to the calculated value
      return {
        ...state,
        lastOperation: action.operation,
        positive: true
      };
    case UNDO:
      return {
        ...state,
        positive: true,
        currentInput: [],
        history: state.history.slice(0, state.history.length - 2)
      };
    case CALCULATE:
      // calcluate the current input with the last operation, set currentInput to the calcluated value
      return {
        ...state
      };
    default:
      return state;
  }
}
