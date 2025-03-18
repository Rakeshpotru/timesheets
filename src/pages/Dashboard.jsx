import React, { useState, useEffect } from 'react';
// import { getTimesheets } from '../services/timesheetService';

function Dashboard  ()  {
  const [timesheets, setTimesheets] = useState([]);

  useEffect(() => {
    const fetchTimesheets = async () => {
      const data = await getTimesheets();
      setTimesheets(data);
    };
    fetchTimesheets();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Employee Timesheets</h2>
      <ul>
        {timesheets.map((timesheet) => (
          <li key={timesheet.id}>
            <p>{timesheet.date}</p>
            <p>{timesheet.hoursWorked} hours</p>
            <p>Project: {timesheet.projectName}</p>
            <p>Employee: {timesheet.employeeName}</p>
            <p>Description: {timesheet.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
