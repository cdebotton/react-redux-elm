import { Updater } from 'redux-elm';
import { Map } from 'immutable';

import demoUpdater, { init as demoInit } from '../pages/demo/updater';

export const initialModel = () => new Map({
  demo: demoInit(0),
});

export default new Updater(initialModel())
  .case('Demo', (model, action) => model.update('demo', demo => demoUpdater(demo, action)))
  .toReducer();
