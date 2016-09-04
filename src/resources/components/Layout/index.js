/* @flow */

import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

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
      <header className={styles.header}>
        <h1 className={styles.logo}>CMYK</h1>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navListItem}>
              <Link activeClassName={styles.activeLink} to="/">Home</Link>
              <Link activeClassName={styles.activeLink} to="demo">Demo</Link>
            </li>
          </ul>
        </nav>
      </header>
      {React.cloneElement(content, {
        className: classNames([className, styles.content]),
      })}
    </div>
  );
};

export default Layout;
