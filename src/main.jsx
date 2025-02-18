// main.jsx
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';  
import './index.css';  
import App from './App.jsx'; 
import { UserProvider } from './Context/UserContext.jsx';
import { IncomesProvider } from './Context/IncomesContext.jsx';
import { ExpensesProvider } from './Context/ExpensesContext';
const root = createRoot(document.getElementById('root'));  
root.render(
  <StrictMode>
    <UserProvider>
      <IncomesProvider>
        <ExpensesProvider>
          <App />
          </ExpensesProvider>
        </IncomesProvider>
    </UserProvider>
    
  </StrictMode>
);
