import React from 'react';
import "./App.css";

import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import TimesheetForm from './components/TimesheetForm';
import Register from './components/Register';
import Header from './header/Header';
import Home from './components/Home';
import ProjectList from './components/ProjectList';
import Project from './components/Project';
import AddEmployee from './components/AddEmployee';
const App = () => {
  return (
    <Router>
       <Header />
       <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/timesheet" element={<TimesheetForm/>} />
        <Route path="/register" element={<Register/>} /> 
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/add-project" element={<Project />} />
        <Route path='/add-employee' element={<AddEmployee/>}/>
        
      </Routes>
      </div>
    </Router>
  );
};

export default App;
