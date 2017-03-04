'use strict';

import React from 'react';
import {Provider} from 'react-redux';
import store from '../store';
import Calculator from './Calculator';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Calculator />
      </Provider>
    );
  }
}
