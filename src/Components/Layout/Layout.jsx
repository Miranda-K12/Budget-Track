import React from 'react';
import { Outlet } from 'react-router-dom';  // Dynamic page rendering
import Sidebar from '../Sidebar/Sidebar';  // Sidebar component
import Header from '../Header/Header';  // Header component (same across all pages)
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />  {/* Sidebar stays on the left */}
      
      <div className={styles.mainContent}>
        <Header />  {/* Header stays the same for all pages */}
        
        <div className={styles.pageContent}>
          <Outlet />  {/* Dynamic content depending on route (Dashboard, Incomes, etc.) */}
        </div>
      </div>
    </div>
  );
};

export default Layout;


