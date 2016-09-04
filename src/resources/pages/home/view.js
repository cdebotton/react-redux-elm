/* @flow */

import React from 'react';
import { view } from 'redux-elm';

import Layout from '../../components/Layout';

export default view(({ model }) => {
  const content = (
    <div>
      <h2>Home</h2>
    </div>
  );

  return (
    <Layout
      content={content}
    />
  );
});
