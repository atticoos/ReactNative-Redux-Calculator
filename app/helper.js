'use strict';

import {OPERATION_ADD, OPERATION_SUBTRACT, OPERATION_DIVIDE, OPERATION_MULTIPLY} from './actions/types';

/**
 * Aggregates the final value of the calculator by the history of inputs
 */
export function aggregateCalculatorHistory (calculations, stepFunction = function(){}) {
  if (calculations.length === 0) {
    return 0;
  } else if (calculations.length === 1) {
    return calculations[0].input;
  }
  return calculations.slice(1, calculations.length).reduce((aggregate, current) => {
    stepFunction(aggregate, current.input, current.operation);
    switch (current.operation) {
      case OPERATION_ADD:
        return aggregate + current.input;
      case OPERATION_SUBTRACT:
        return aggregate - current.input;
      case OPERATION_DIVIDE:
        return aggregate / current.input;
      case OPERATION_MULTIPLY:
        return aggregate * current.input;
      default:
        return aggregate;
    }
  }, calculations[0].input);
}
