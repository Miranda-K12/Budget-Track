/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';  
import Sidebar from '../Sidebar/Sidebar'; 
import Header from '../Header/Header'; 
import styles from './Layout.module.css';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Sidebar /> 
      <div className={styles.mainContent}>
        <Header />      
        <div className={styles.pageContent}>
          <Outlet /> 
        </div>
      </div>
    </div>
  );
};

export default Layout;


