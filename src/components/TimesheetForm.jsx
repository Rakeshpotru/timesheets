import React, { useState, useEffect } from 'react';
// import { getProjects } from '../services/projectService';
// import { addTimesheet } from '../services/timesheetService';
import dayjs from 'dayjs';

function TimesheetForm ()  {
  const [projects, setProjects] = useState([]);
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [hoursWorked, setHoursWorked] = useState('');
  const [project, setProject] = useState('');
  const [description, setDescription] = useState('');
  employee_id=localStorage.getItem('employee_id')

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const timesheetData = { date, hoursWorked, project, description };
    const response = await addTimesheet(timesheetData);
    if (response.success) {
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
      <select value={project} onChange={(e) => setProject(e.target.value)}>
        <option value="">Select a project</option>
        {projects.map((p) => (
          <option key={p.id} value={p.id}>{p.name}</option>
        ))}
      </select>
      <label>Description:</label>
      <textarea 
        value={description}
        onChange={(e) => setDescription(e.target.value)} 
      />
      <button type="submit">Log Hours</button>
    </form>
  );
};

export default TimesheetForm;
