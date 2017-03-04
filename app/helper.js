'use strict';

import {OPERATION_ADD, OPERATION_SUBTRACT, OPERATION_DIVIDE, OPERATION_MULTIPLY} from './actions/types';

/**
 * Operations map
 */
const Operations = {
  [OPERATION_ADD]: (accumulative, current) => accumulative + current,
  [OPERATION_SUBTRACT]: (accumulative, current) => accumulative - current,
  [OPERATION_MULTIPLY]: (accumulative, current) => accumulative * current,
  [OPERATION_DIVIDE]: (accumulative, current) => accumulative / current
};

/**
 * Aggregates the final value of the calculator by the history of inputs
 */
export function aggregateCalculatorHistory (calculations, offset = null, stepFunction = function(){}) {

  let collection = calculations.slice(0, offset === null ? calculations.length : (offset + 2));
  if (collection.length === 0) {
    return 0;
  } else if (collection.length === 1) {
    return collection[0].input;
  }

  return collection.slice(1, calculations.length).reduce((aggregate, current, index) => {
    stepFunction(aggregate, current.input, current.operation, index);
    if (Operations[current.operation]) {
      return Operations[current.operation](aggregate, current.input);
    }
    return aggregate;
  }, collection[0].input);
}
