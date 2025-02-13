import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import LogInForm from './Components/LogIn/LogIn';  // Your login page
import Layout from './Components/Layout/Layout';  // The layout with sidebar
import DashboardContent from './Components/DashboardContent/DashboardContent';  // The dashboard page
import Incomes from './Components/Incomes/Incomes';  // The incomes page
import Expenses from './Components/Expenses/Expenses';  // The expenses page

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Login page */}
        <Route path="/" element={<LogInForm />} />
        
        {/* Layout will be the wrapper for Dashboard, Incomes, Expenses */}
        <Route element={<Layout />}>
          <Route path="dashboard" element={<DashboardContent />} />  {/* Dashboard content */}
          <Route path="incomes" element={<Incomes />} />  {/* Incomes content */}
          <Route path="expenses" element={<Expenses />} />  {/* Expenses content */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;



