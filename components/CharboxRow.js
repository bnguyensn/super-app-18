import React from 'react';

import styles from './charbox-row.module.css';

export default function CharboxRow({ children }) {
  return <div className={styles['charbox-row']}>{children}</div>;
}
