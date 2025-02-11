/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from 'react';

// Create a context
export const UserContext = createContext();

// UserProvider to provide the context value
export const UserProvider = ({ children }) => {
  const [name, setName] = useState(""); 

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};
