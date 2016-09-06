/* @flow */

import React from 'react';
import classNames from 'classnames';

import Header from '../Header';

import type { Element as ReactElement } from 'react';

import styles from './styles.css';

type Props = {
  content: ReactElement;
};

type LayoutType = {
  props: Props;
};

const Layout: LayoutType = ({ content }) => {
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

export default Layout;
