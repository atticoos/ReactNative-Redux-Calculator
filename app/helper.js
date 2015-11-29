'use strict';

import {OPERATION_ADD, OPERATION_SUBTRACT, OPERATION_DIVIDE, OPERATION_MULTIPLY} from './actions/types';

/**
 * Aggregates the final value of the calculator by the history of inputs
 */
export function aggregateCalculatorHistory (calculations, offset = null, stepFunction = function(){}) {
  let collection = calculations.slice(0, offset === null ? calculations.length : (offset + 1));
  if (collection.length === 0) {
    return 0;
  } else if (collection.length === 1) {
    return collection[0].input;
  }
  return collection.slice(1, calculations.length).reduce((aggregate, current, index) => {
    stepFunction(aggregate, current.input, current.operation, index);
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
  }, collection[0].input);
}
