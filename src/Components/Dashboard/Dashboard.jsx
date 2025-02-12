/* eslint-disable react/prop-types */
import React, {useContext} from 'react';
import styles from './Dashboard.module.css';
import User from '../../assets/images/new-user.svg';
import { UserContext } from '../../UserContext';
import DashboardIcon from "../../assets/images/dashboard.svg";
import Income from '../../assets/images/income.svg';
import Expenses from '../../assets/images/expenses.svg';
import Github from '../../assets/images/github.svg';
function DashboardMenu({ children }) {
  return (
    <div className={styles.dashboard_box}>
      {children}
    </div>
  )
}
function Dashboard() {
  const { name} =  useContext(UserContext);
  return (
    <div className={styles.dashboard}>
      <div className={styles.sideBar}>
        <h2 className={styles.sidebar_header}>Budget Track</h2>
        <DashboardMenu>
          <img src={DashboardIcon} alt='dashboard_icon' className={styles.dashboard_icon} />
          <h3>Dashboard</h3>
        </DashboardMenu>
        <DashboardMenu>
           <img src={Income} alt='income_icon' className={styles.dashboard_icon} />
          <h3>Incomes</h3>
        </DashboardMenu>
        <DashboardMenu>
          <img src={Expenses} alt='dashboard_icon' className={styles.dashboard_icon} />
           <h3>Expenses</h3>
        </DashboardMenu>
        <button className={styles.sign_out}>Sign out</button>
        <div className={styles.author}>
  <a href="https://www.linkedin.com/in/miranda-kachlavashvili-8a43aaa4/" target="_blank">
    <img src={Github} alt='github_icon' className={styles.github_icon} /> Created by Miranda
  </a>
</div>

      </div>
      <div className={styles.dashboard_container}>
        <div className={styles.header}>
          <div className={styles.dashboard_title}>
            <p>Budget Dashboard</p>
        </div>
          <div className={styles.user_container}>
            <img src={User} alt='user' />
            <p>Welcome <span className={styles.user_name}>{name}</span></p>
        </div>
        </div>
        <p className={styles.summary}>This is a summary of your current financial standing</p>
        
         
      </div>
    </div>
   
  )
}
export default Dashboard;