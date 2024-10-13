import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/css/header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.logo}>KHALIDKANAAN</Link>
      <nav>
          <Link to="/">Introduction</Link>
          <Link to="/Experience">Experience</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/Education">Education</Link>
      </nav>
    </div>
  );
}

export default Header;
