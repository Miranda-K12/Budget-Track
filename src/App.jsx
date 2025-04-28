/* eslint-disable no-unused-vars */
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LogInForm from "./Components/LogIn/LogIn";
import Layout from "./Components/Layout/Layout";
import Dashboard from "./Components/Dashboard/Dashboard";
import Incomes from "./Components/Incomes/Incomes";
import Expenses from "./Components/Expenses/Expenses";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LogInForm />} />
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
