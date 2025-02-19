/* eslint-disable no-unused-vars */
import React,{useContext} from "react";
import styles from './Dashboard.module.css';
import cardData from "./data";
import Arrow from '../../assets/images/orange-arrow.svg';
import { IncomesContext } from "../../Context/IncomesContext";
import { ExpensesContext } from '../../Context/ExpensesContext';


function Dashboard() {
  const { totalIncomes } = useContext(IncomesContext);
  const { totalExpenses } = useContext(ExpensesContext);
   const currentBalance = totalIncomes - totalExpenses;
  return (
    <div>
      <div className={styles.balance_container}>
        <h1>Balance</h1>
        <p>{currentBalance} Euros</p>
      </div>
      <div className={styles.detail_info}>
      <div className={styles.incomes_container}>
       <h2 className={styles.subheader}>Incomes</h2>
        <p>{totalIncomes} Euros</p>
      </div>
      
      <div className={styles.expenses_container}>
        <h2 className={styles.subheader}>Expenses</h2>
        <p>{totalExpenses} Euros</p>
      </div>
      </div>
      <h3 className={styles.card_header}>Money Management Insights</h3>
      <div className={styles.total_amount}>
      </div>
      <div className={styles.card_container}>
        {cardData.map((card) => (
          <div key={card.id} className={styles.card_item}>
            <img src={card.image} alt={card.header} className={styles.card_img} />
            <h4 className={styles.card_title}>{card.header}</h4>
            <p>{card.description}</p>
             <a href={card.link} target="_blank" className={styles.learn_more_button}>
            <p>Learn More</p> 
              <img src={Arrow} alt='arrow' className={styles.arrow_icon } />
          </a>
            
          </div>
        ))}
      </div>
    </div>
  );
} 

export default Dashboard;