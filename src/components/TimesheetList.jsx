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
      <ul>
        {timesheets.map((timesheet) => (
          <li key={timesheet.id}>
            <p>{timesheet.date}</p>
            <p>{timesheet.hoursWorked} hours</p>
            <p>Project: {timesheet.project_name}</p>
            <p>Employee: {timesheet.employee_id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimesheetList;
