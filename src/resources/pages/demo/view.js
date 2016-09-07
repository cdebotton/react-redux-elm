/* @flow */

import React from 'react';
import { view } from 'redux-elm';

import type { Element } from 'react';

import Layout from '../../components/Layout';
import styles from './styles.css';

type Props = {
  dispatch: Function;
  model: Map<string, any>;
};

export default view(({ model, dispatch }: Props): Element<any> => {
  const increase = () => dispatch({ type: 'Increase' });
  const decrease = () => dispatch({ type: 'Decrease' });

  const content = (
    <div className={styles.container}>
      <h2 className={styles.title}>Hello, World!</h2>
      <div className={styles.buttons}>
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
      </div>
      <span className={styles.counter}>Count: {model.get('count')}</span>
      <ul className={styles.list}>
        {model.get('items').map(item => (
          <li
            className={styles.listItem}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <Layout
      content={content}
    />
  );
});
