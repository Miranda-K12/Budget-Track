
import styles from './Header.module.css';
import User from '../../assets/images/new-user.svg';
import { useUser } from '../../UserContext';  
import React from 'react';
// Header.js

import { useLocation } from 'react-router-dom';  // Import useLocation hook

const Header = () => {
  const { name } = useUser(); 
  const location = useLocation();  
  const generateBreadcrumb = () => {
    const path = location.pathname.split('/').filter((segment) => segment);
    if (path[0] === 'dashboard') {
      return 'Dashboard / Welcome';
    } else if (path[0] === 'incomes') {
      return 'Dashboard / Incomes';
    } else if (path[0] === 'expenses') {
      return 'Dashboard / Expenses';
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.breadcrumb}>
        <p>{generateBreadcrumb()}</p>
      </div>
      <div className={styles.user}>
        <img src={User} alt='user' className={styles.user_icon} />
        <h2 className={styles.welcome}>Welcome, {name || 'Guest'}!</h2> 
      </div>
    </header>
  );
};

export default Header;


