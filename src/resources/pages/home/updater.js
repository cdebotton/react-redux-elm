/* @flow */

import { Updater } from 'redux-elm';
import { Map } from 'immutable';

export const init = () => new Map({

});

export default new Updater(init())
  .toReducer();
