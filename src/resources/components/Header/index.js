/* @flow */

import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';

import type { Element } from 'react';

import styles from './styles.css';

type Props = {
  className: string;
}

export default ({ className }: Props): Element<any> => (
  <header className={classNames([className, styles.container])}>
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
);
