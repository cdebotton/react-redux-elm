/* @flow */

import React from 'react';
import { view } from 'redux-elm';

import Layout from '../../components/Layout';

const content = (
  <div>
    <h2>Home</h2>
  </div>
);

export default view(() => (
  <Layout
    content={content}
  />
));
