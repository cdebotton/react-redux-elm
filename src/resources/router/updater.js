import { Updater } from 'redux-elm';
import { Map } from 'immutable';

import demoUpdater, { init as demoInit } from '../pages/demo/updater';
import homeUpdater, { init as homeInit } from '../pages/home/updater';

export const initialModel = () => new Map({
  demo: demoInit(0),
  home: homeInit(),
});

export default new Updater(initialModel())
  .case('Demo', (model, action) => model.update('demo', demo => demoUpdater(demo, action)))
  .case('Home', (model, action) => model.update('home', home => homeUpdater(home, action)))
  .toReducer();
