import React from 'react';
import styles from '../assets/css/basepage.module.css';

function BasePage({ children }) {
  return (
    <div className={styles.baseWrapper}>
      {children}
    </div>
  );
}

export default BasePage;
