import React, { useState, useEffect } from 'react';
import { getProjects } from '../services/projectService';
import { addTimesheet } from '../services/timesheetService';
import dayjs from 'dayjs';

function TimesheetForm ()  {
  const [projects, setProjects] = useState([]);
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [hoursWorked, setHoursWorked] = useState('');
  const [project, setProject] = useState('');
  const [description, setDescription] = useState('');
  const employee_id=Number(localStorage.getItem('employee_id'))|0

  
    useEffect(() => {
      const fetchTimesheets = async () => {
        const projectslist = await getProjects();
        console.log(projectslist,'proectslist')
        setProjects(projectslist.projects);
      };
      fetchTimesheets();
    }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let hours_worked=Number(hoursWorked)
    const timesheetData = { 
      date: date,              
      hours_worked: hours_worked,  
      employee_id: employee_id  ,
      project_name: project
    };
    // const timesheetData = { date, hours_worked, employee_id };
    const response = await addTimesheet(timesheetData);
    console.log(response,'timesheetslog')
    if (response.message) {
      alert('Timesheet entry added!');
    } else {
      alert('Error submitting timesheet.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Date:</label>
      <input 
        type="date" 
        value={date}
        onChange={(e) => setDate(e.target.value)} 
      />
      <label>Hours Worked:</label>
      <input 
        type="number" 
        value={hoursWorked}
        onChange={(e) => setHoursWorked(e.target.value)} 
      />
      <label>Project:</label>
      {/* <select value={project} onChange={(e) => setProject(e.target.value)}>
        <option value="">Select a project</option>
        {projects.map((p) => (
          <option key={p.id} value={p.id}>{p.project_name}</option>
        ))}
      </select> */}

<select 
          value={project} 
          onChange={(e) => setProject(e.target.value)} 
          required
        >
          <option value="">Select a project</option>
          {projects.map((p) => (
            <option key={p.id} value={p.project_name}>
              {p.project_name} {/* Use project_name in the option value */}
            </option>
          ))}
        </select>
        
      {/* <label>Description:</label>
      <textarea 
        value={description}
        onChange={(e) => setDescription(e.target.value)} 
      /> */}
      <button type="submit">Log Hours</button>
    </form>
  );
};

export default TimesheetForm;
