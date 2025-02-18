import React from 'react';
import { Link } from 'react-router-dom';  // Use Link for navigation
import DashboardIcon from '../../assets/images/dashboard.svg';  
import Income from '../../assets/images/income.svg'
import Expense from '../../assets/images/expenses.svg';  
import Github from '../../assets/images/github.svg';  
import styles from './Sidebar.module.css';  

const Sidebar = () => {
  return (
    <div className={styles.sideBar}>
      <h2 className={styles.sidebar_header}>Budget Track</h2>
      <div className={styles.dashboard_box}>
        <Link to="/dashboard">
          <img src={DashboardIcon} alt="dashboard_icon" className={styles.dashboard_icon} />
          <h3>Dashboard</h3>
        </Link>
      </div>
      <div className={styles.dashboard_box}>
        <Link to="/incomes">
          <img src={Income} alt="income_icon" className={styles.dashboard_icon} />
          <h3>Incomes</h3>
        </Link>
      </div>
      <div className={styles.dashboard_box}>
        <Link to="/expenses">
          <img src={Expense} alt="expense_icon" className={styles.dashboard_icon} />
          <h3>Expenses</h3>
        </Link>
      </div>

      <button className={styles.sign_out}>Sign out</button>
      <div className={styles.author}>
        <img src={Github} alt="github_icon" className={styles.github_icon} />
        <a href="https://www.linkedin.com/in/miranda-kachlavashvili-8a43aaa4/" target="_blank">
          Created by Miranda
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
