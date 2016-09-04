/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import { forwardTo } from 'redux-elm';

export default (View, modelKey, ...nesting) =>
  connect(appState => ({
    model: appState.root.get(modelKey),
  }))(props =>
    <View
      {...props}
      dispatch={forwardTo(props.dispatch, ...nesting)}
    />
  );
