import {StyleSheet} from 'react-native';
import {OPERATION_ADD, OPERATION_SUBTRACT, OPERATION_DIVIDE, OPERATION_MULTIPLY} from './actions/types';

export default {
  [OPERATION_ADD]: {
    normal: '#f796d2',
    darker: '#e088be',
    lighter: '#f7b4de'
  },
  [OPERATION_SUBTRACT]: {
    normal: '#f8b055',
    darker: '#dc9c4c',
    lighter: '#f8c483'
  },
  [OPERATION_DIVIDE]: {
    normal: '#c77ccc',
    darker: '#b16eb7',
    lighter: '#df8be5'
  },
  [OPERATION_MULTIPLY]: {
    normal: '#6fcdf4',
    darker: '#65badd',
    lighter: '#a2dcf5'
  }
}
