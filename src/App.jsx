import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import LogInForm from './Components/LogIn/LogIn';  
import Layout from './Components/Layout/Layout';  
import Dashboard from './Components/Dashboard/Dashboard';  
import Incomes from './Components/Incomes/Incomes'; 
import Expenses from './Components/Expenses/Expenses'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogInForm />} />
        <Route element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />  
          <Route path="incomes" element={<Incomes />} />  
          <Route path="expenses" element={<Expenses />} />  
        </Route>
      </Routes>
    </Router>
  );
}

export default App;



