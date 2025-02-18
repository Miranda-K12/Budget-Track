import React, {useState, useContext} from "react";
import styles from './Incomes.module.css';
import { IncomesContext } from "../../Context/IncomesContext";

function Incomes() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("salary");

  const { incomes, addIncome, removeIncome } = useContext(IncomesContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newIncome = {
      title,
      amount,
      date,
      category
    };
    addIncome(newIncome);
    setTitle('');
    setAmount('');
    setDate('');
    setCategory('salary');
  };

  const removeIncomeHandler = (incomeToRemove) => {
    removeIncome(incomeToRemove);
  };

  return (
    <div>
      <div className={styles.income_header}>
        <h1>Incomes</h1>
        <p>Easily Monitor Your Income Streams</p>
      </div>
      <div className={styles.incomes_box}>
        <h2>Total Incomes</h2>
        <p>{incomes.reduce((acc, income) => acc + parseFloat(income.amount), 0)} EUR</p>
      </div>
      <form className={styles.incomes_container} onSubmit={handleSubmit}>
        <div className={styles.formFields}>
          <div>
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={title}
              placeholder="Income Name"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              placeholder="Income Amount"
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="category">Choose a category:</label>
            <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} required>
              <option value="salary">Salary</option>
              <option value="freelance">Freelance</option>
              <option value="investment">Investment</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <button type="submit" className={styles.add_btn}>Add Income</button>
      </form>
      <div className={styles.incomes_list}>
        {incomes.length === 0 ? (
          <p className={styles.incomes_message}>No incomes added yet. Add some!</p>
        ) : (
          <ul>
            {incomes.map((income, index) => (
              <li key={index} className={styles.income_item}>
                <p className={styles.incomes_title}>{income.title}<span> - (Amount: {income.amount} EUR, 
                Date: {income.date}, Category: {income.category})</span></p>
                <button className={styles.delete_btn} onClick={() => removeIncomeHandler(income)}>Delete Incomes</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Incomes;