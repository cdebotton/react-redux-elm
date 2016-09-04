/* @flow */

import React from 'react';
import { view } from 'redux-elm';

import type { Element as ReactElement } from 'react';

import styles from './styles.css';

export default view(({ model, dispatch }): ReactElement => {
  const increase = () => dispatch({ type: 'Increase' });
  const decrease = () => dispatch({ type: 'Decrease' });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello, World!</h1>
      <button
        className={styles.button}
        onClick={increase}
      >
        +
      </button>
      <button
        className={styles.button}
        onClick={decrease}
      >
        -
      </button>
      <span className={styles.counter}>Count: {model.get('count')}</span>
      <ul>
        {model.get('items').map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
});
