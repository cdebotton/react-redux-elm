import { Updater } from 'redux-elm';
import { takeLatest } from 'redux-saga';
import { call, put, select, fork } from 'redux-saga/effects';

import * as Effects from './effects';

const getCount = model => model.count;

function* fetchItems() {
  const count = yield select(getCount);
  const items = yield call(Effects.fetchItems, count);

  yield put({ type: 'NewItems', items });
}

function* watchIncrease() {
  yield* takeLatest('Increase', fetchItems);
}

function* watchDecrease() {
  yield* takeLatest('Decrease', fetchItems);
}

function* saga() {
  yield* fetchItems();
  yield fork(watchIncrease);
  yield fork(watchDecrease);
}

const init = value => ({
  items: [],
  count: value,
});

export default new Updater(init(0), saga)
  .case('Increase', model => ({ ...model, count: model.count + 1 }))
  .case('Decrease', model => ({ ...model, count: model.count - 1 }))
  .case('NewItems', (model, { items }) => ({ ...model, items }))
  .toReducer();
