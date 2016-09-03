import { Updater } from 'redux-elm';

const init = value => ({
  count: value,
});

export default new Updater(init(0))
  .case('Increase', model => ({ ...model, count: model.count + 1 }))
  .case('Decrease', model => ({ ...model, count: model.count - 1 }))
  .toReducer();
