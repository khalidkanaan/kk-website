import React from 'react';
import styles from '../assets/css/basepage.module.css';

function BasePage({ leftChildren, rightChildren, children }) {
  if ((leftChildren || rightChildren) && children) {
    console.warn("BasePage: Both children and leftChildren/rightChildren were provided. children will be ignored.");
  }

  if (leftChildren || rightChildren) {
    return (
      <div className={styles.baseWrapper}>
        <div className={styles.leftHalf}>
          {leftChildren || null}
        </div>
        <div className={styles.rightHalf}>
          {rightChildren || null}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.baseWrapper}>
      {children}
    </div>
  );
}

export default BasePage;
