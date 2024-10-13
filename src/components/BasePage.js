import React from 'react';
import Header from './Header'
import styles from '../assets/css/basepage.module.css';

function BasePage({ children }) {
  return (
    <>
      <Header/>
      <div className={styles.baseWrapper}>
        {children}
      </div>
    </>
  );
}

export default BasePage;
