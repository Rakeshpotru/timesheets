import React, { useState } from 'react';
import axios from 'axios';
import { registerEmployee } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [department, setDepartment] = useState('');
  const [position, setPosition] = useState('');
  const [hire_date, setHireDate] = useState('');
  const [status, setStatus] = useState('active');
  const [message, setMessage] = useState('');
    const navigate = useNavigate();


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const employeeData = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password:password,
      department: department,
      position: position,
      hire_date: hire_date,
      status: status,
    };

    try {
       const response = await registerEmployee({first_name, last_name, email,password,department,position,hire_date,status});
       if (response.success) {
        setMessage('Employee added successfully!');
        navigate('/dashboard');  // Redirect to login page
      } else {
        alert(response.message);
      }
      
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('')
      setDepartment('');
      setPosition('');
      setHireDate('');
    } catch (error) {
      console.error('Error adding employee:', error);
      setMessage('Error adding employee.');
    }
  };

  return (
    <div>
      <h2>Add New Employee</h2>
      <div className='add_employee'>
      <form>
        <label>
          First Name:
          <input
            type="text"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Department:
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Position:
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Hire Date:
          <input
            type="date"
            value={hire_date}
            onChange={(e) => setHireDate(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Status:
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </label>
        <br />
        <button onClick={handleSubmit}>Register</button>

      </form>
      {message && <p>{message}</p>}
      </div>
     
    </div>
  );
};

export default AddEmployee;
