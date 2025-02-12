import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import LogInForm from './Components/LogIn/LogIn';  
import Dashboard from './Components/Dashboard/Dashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogInForm />} /> 
        <Route path="/Dashboard" element={<Dashboard />} /> 
      </Routes>
    </Router>
  );
}

export default App;
