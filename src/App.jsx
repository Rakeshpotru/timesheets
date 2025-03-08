import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import TimesheetForm from './components/TimesheetForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/timesheet" element={<TimesheetForm/>} />
        
      </Routes>
    </Router>
  );
};

export default App;
