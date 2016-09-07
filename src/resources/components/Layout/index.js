/* @flow */

import React from 'react';
import classNames from 'classnames';
import type { Element } from 'react';

import Header from '../Header';

import styles from './styles.css';

type Props = {
  content: Element<any>;
};

export default ({ content }: Props): Element<any> => {
  const { className } = content.props;
  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      {React.cloneElement(content, {
        className: classNames([className, styles.content]),
      })}
    </div>
  );
};
