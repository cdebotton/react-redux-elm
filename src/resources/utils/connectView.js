/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import { forwardTo } from 'redux-elm';

import type { Component as ReactComponent } from 'react';

export default (View: ReactComponent, modelKey: string, ...nesting: string[]) =>
  connect(appState => ({
    model: appState.root.get(modelKey),
  }))(props =>
    <View
      {...props}
      dispatch={forwardTo(props.dispatch, ...nesting)}
    />
  );
