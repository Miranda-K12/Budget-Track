import React from "react";
import styles from './Dashboard.module.css';
import cardData from "./data";
import Arrow from '../../assets/images/orange-arrow.svg';
function Dashboard() {
  return (
    <div>
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
}<img src={Arrow} alt='right-arrow' className={styles.arrow_icon} />

export default Dashboard;