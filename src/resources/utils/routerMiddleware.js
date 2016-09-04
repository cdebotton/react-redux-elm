/* @flow */

import { CALL_HISTORY_METHOD } from 'react-router-redux';

export default history => () => next => action => {
  if (!action.type.endsWith(CALL_HISTORY_METHOD)) {
    return next(action);
  }

  const { payload: { method, args } } = action;
  history[method](...args);

  return action;
};
