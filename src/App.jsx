import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import LogInForm from './Components/LogIn/LogIn';  
import Budget from './Components/Budget/Budget';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogInForm />} /> 
        <Route path="/Budget" element={<Budget />} /> 
      </Routes>
    </Router>
  );
}

export default App;
