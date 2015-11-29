'use strict';

import {OPERATION_ADD, OPERATION_SUBTRACT, OPERATION_DIVIDE, OPERATION_MULTIPLY} from '../actions/types';

const OperationSymbols = {
  [OPERATION_ADD]: '+',
  [OPERATION_SUBTRACT]: '-',
  [OPERATION_DIVIDE]: '/',
  [OPERATION_MULTIPLY]: 'X'
};

export default OperationSymbols;
