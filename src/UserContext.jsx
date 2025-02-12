/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useEffect } from 'react';
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const storedName = localStorage.getItem('userName') || '';
  const [name, setName] = useState(storedName); 
useEffect(() => {
    if (name) {
      localStorage.setItem('userName', name); 
    }
  }, [name]);
  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};
