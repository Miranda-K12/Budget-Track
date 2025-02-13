// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.layout}>
      {/* Sidebar will always be shown */}
      <Sidebar />
      
      {/* Main content will change based on the current route */}
      <div className={styles.content}>
        <Outlet />  {/* This will render the specific page content (Dashboard, Incomes, Expenses) */}
      </div>
    </div>
  );
};

export default Layout;



