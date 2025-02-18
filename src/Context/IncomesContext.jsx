/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext, useEffect } from 'react';

export const IncomesContext = createContext();

export const useIncomes = () => {
  return useContext(IncomesContext);
};

export const IncomesProvider = ({ children }) => {
  // Retrieve incomes from localStorage, and ensure it is parsed correctly
  const savedIncomes = JSON.parse(localStorage.getItem('incomes')) || [];

  // Initialize the incomes state with savedIncomes (default empty array if none exists)
  const [incomes, setIncomes] = useState(savedIncomes);

  useEffect(() => {
    // Whenever incomes change, update localStorage
    if (incomes.length > 0) {
      localStorage.setItem('incomes', JSON.stringify(incomes));
    }
  }, [incomes]);

  // Function to add new income
  const addIncome = (newIncome) => {
    setIncomes((prevIncomes) => [...prevIncomes, newIncome]);
  };


  const removeIncome = (incomeToRemove) => {
    setIncomes((prevIncomes) => prevIncomes.filter((income) => income !== incomeToRemove));
  };

  return (
    <IncomesContext.Provider value={{ incomes, addIncome, removeIncome }}>
      {children}
    </IncomesContext.Provider>
  );
};
