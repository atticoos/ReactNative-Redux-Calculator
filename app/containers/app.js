'use strict';

import React, {Component, Navigator} from 'react-native';
import {Provider} from 'react-redux/native';
import store from '../store';
import Calculator from './Calculator';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      {() => <Calculator />}
      </Provider>
    );
  }
}
