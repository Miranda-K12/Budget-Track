/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext, useEffect } from 'react';

export const IncomesContext = createContext();

export const useIncomes = () => {
  return useContext(IncomesContext);
};

export const IncomesProvider = ({ children }) => {
  const savedIncomes = JSON.parse(localStorage.getItem('incomes')) || [];
  const [incomes, setIncomes] = useState(savedIncomes);

  useEffect(() => {
    if (incomes.length > 0) {
      localStorage.setItem('incomes', JSON.stringify(incomes));
    }
  }, [incomes]);

  const addIncome = (newIncome) => {
    setIncomes((prevIncomes) => [...prevIncomes, newIncome]);
  };

  const removeIncome = (incomeToRemove) => {
    setIncomes((prevIncomes) => prevIncomes.filter((income) => income !== incomeToRemove));
  };
  const totalIncomes = incomes.reduce((acc, income) => acc + parseFloat(income.amount), 0);
  return (
    <IncomesContext.Provider value={{ incomes, addIncome, removeIncome, totalIncomes }}>
      {children}
    </IncomesContext.Provider>
  );
};
