/* @flow */

import { Updater } from 'redux-elm';
import { takeLatest } from 'redux-saga';
import { call, put, select, fork } from 'redux-saga/effects';
import { Map } from 'immutable';

import * as Effects from './effects';

type Model = {
  items: number[];
  count: number;
};

type GetCount = (model: Map) => number;
const getCount: GetCount = model => model.get('count');

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

type Init = (value: number) => Map;
export const init: Init = value => new Map({
  items: [],
  count: value,
});

export default new Updater(init(0), saga)
  .case('Increase', model => model.update('count', count => count + 1))
  .case('Decrease', model => model.update('count', count => count - 1))
  .case('NewItems', (model, { items }) => model.set('items', items))
  .toReducer();
