/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import React, { createContext, useState, useContext, useEffect } from 'react';

export const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext); 
};

export const UserProvider = ({ children }) => {
  const savedName = localStorage.getItem('userName') || ''; 
  const [name, setName] = useState(savedName); 
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