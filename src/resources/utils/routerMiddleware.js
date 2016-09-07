/* @flow */

import { CALL_HISTORY_METHOD } from 'react-router-redux';

type Action = {
  [key: string]: any,
};

type Next = (action: Action) => ?Next;

export default (history: Object) => () => (next: Next) => (action: Action) => {
  if (!action.type.endsWith(CALL_HISTORY_METHOD)) {
    return next(action);
  }

  const { payload: { method, args } } = action;
  history[method](...args);

  return action;
};
