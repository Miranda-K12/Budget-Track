/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext, useEffect } from 'react';

export const ExpensesContext = createContext();

export const useExpenses = () => {
  return useContext(ExpensesContext);
};

export const ExpensesProvider = ({ children }) => {
  const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];

  const [expenses, setExpenses] = useState(savedExpenses);

  useEffect(() => {
    if (expenses.length > 0) {
      localStorage.setItem('expenses', JSON.stringify(expenses));
    }
  }, [expenses]);

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };


  const removeExpense = (expenseToRemove) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense !== expenseToRemove));
  };
 const totalExpenses = expenses.reduce((acc, expenses) => acc + parseFloat(expenses.amount), 0);
  return (
    <ExpensesContext.Provider value={{ expenses,  addExpense, removeExpense, totalExpenses }}>
      {children}
    </ExpensesContext.Provider>
  );
};
