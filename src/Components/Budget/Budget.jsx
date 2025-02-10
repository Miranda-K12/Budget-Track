import React from 'react';
import styles from './Budget.module.css';
function Budget() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.sideBar}>
        <p>This is side bar</p>
      </div>
      <div className={styles.dashboard_container}>
        <p>Welcome </p>
        
        <p>This is dashboard</p></div>
    </div>
   
  )
}
export default Budget;