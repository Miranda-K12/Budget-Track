// main.jsx
import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';  
import './index.css';  
import App from './App.jsx'; 
import { UserProvider } from './UserContext.jsx';
const root = createRoot(document.getElementById('root'));  
root.render(
  <StrictMode>
     <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>
);
