import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/css/header.module.css';
import hamburgerButton from '../assets/img/hamburger.svg'; // import the hamburger icon

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.header}>
      <Link to="/" className={styles.logo}>KHALIDKANAAN</Link>
      <img
        src={hamburgerButton}
        alt="Menu"
        className={styles.hamburger}
        onClick={toggleMenu}
      />
      <nav className={menuOpen ? styles.active : ''}>
        <Link to="/" onClick={toggleMenu}>Introduction</Link>
        <Link to="/experience" onClick={toggleMenu}>Experience</Link>
        <Link to="/projects" onClick={toggleMenu}>Projects</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
      </nav>
    </div>
  );
}

export default Header;
