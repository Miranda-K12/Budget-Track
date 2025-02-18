import React, {useState, useContext} from "react";
import styles from './Expenses.module.css';
import { ExpensesContext } from "../../Context/ExpensesContext";

function Expenses() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");

  const { expenses, addExpense, removeExpense, totalExpenses } = useContext( ExpensesContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense= {
      title,
      amount,
      date,
      category
    };
   addExpense(newExpense);
    setTitle('');
    setAmount('');
    setDate('');
    setCategory('');
  };

  const removeExpenseHandler = (ExpenseToRemove) => {
    removeExpense(ExpenseToRemove);
  };

  return (
    <div>
      <div className={styles.expense_header}>
        <h1>Expenses</h1>
        <p>Easily Monitor Your Expense Streams</p>
      </div>
      <div className={styles.expenses_box}>
        <h2>Total Expenses</h2>
  <p>{totalExpenses === 0 ? '0 EUR' : `${totalExpenses} EUR`}</p>
      </div>
      <form className={styles.expenses_container} onSubmit={handleSubmit}>
        <div className={styles.formFields}>
          <div>
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={title}
              placeholder="Expense Name"
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
              placeholder="Expense Amount"
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
              <option value="" disabled selected>Select a category</option>
              <option value="utility">Utility</option>
              <option value="rent">Rent</option>
              <option value="gloceries">Gloceries</option>
              <option value="entertainment">Entertainment</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <button type="submit" className={styles.add_btn}>Add Expense</button>
      </form>
      <div className={styles.expense_list}>
        {expenses.length === 0 ? (
          <p className={styles.expense_message}>No Expenses added yet. Add some!</p>
        ) : (
          <ul>
            {expenses.map((expense, index) => (
              <li key={index} className={styles.expense_item}>
                <p className={styles.expenses_title}>{expense.title}<span> - (Amount: {expense.amount} EUR, 
                Date: {expense.date}, Category: {expense.category})</span></p>
                <button className={styles.delete_btn} onClick={() => removeExpenseHandler(expense)}>Delete Expense</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Expenses;