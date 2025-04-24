import React, { useState, useEffect } from 'react';
import { getTimesheets } from '../services/timesheetService';

function TimesheetList  ()  {
  const [timesheets, setTimesheets] = useState([]);

  useEffect(() => {
    const fetchTimesheets = async () => {
      const data = await getTimesheets();
      console.log(data,'timesheetsdata')
      setTimesheets(data.timesheets);
    };
    fetchTimesheets();
  }, []);

  return (
    <div>
  <h2>Your Timesheets</h2>
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Hours Worked</th>
        <th>Project</th>
        <th>Employee ID</th>
      </tr>
    </thead>
    <tbody>
      {timesheets.map((timesheet) => (
        <tr key={timesheet.id}>
          <td>{timesheet.date}</td>
          <td>{timesheet.hours_worked}</td>
          <td>{timesheet.project_name}</td>
          <td>{timesheet.employee_id}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  );
};


export default TimesheetList;
