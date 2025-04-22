import React from 'react';
import useSWR from 'swr';  // Import SWR hook
import { Pie } from 'react-chartjs-2'; // Pie chart component from chart.js
import { getProjects } from '../services/projectService'; // Assuming this is your API service
import { getTimesheets } from '../services/timesheetService'; // Assuming this is your timesheet API service

// Import chart.js components
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

// Fetch function to get project data
const fetchProjects = async () => {
  const response = await getProjects();
  if (response && response.projects) {
    return response.projects;
  } else {
    throw new Error('Failed to fetch projects');
  }
};

// Fetch function to get timesheet data
const fetchTimesheets = async () => {
  const response = await getTimesheets();
  if (response && response.timesheets) {
    return response.timesheets;
  } else {
    throw new Error('Failed to fetch timesheets');
  }
};

function Dashboard() {
  // Fetch projects and timesheets using SWR
  const { data: projects, error: projectError, isLoading: projectLoading } = useSWR('projects', fetchProjects);
  const { data: timesheets, error: timesheetError, isLoading: timesheetLoading } = useSWR('timesheets', fetchTimesheets);

  // Handle loading state
  if (projectLoading || timesheetLoading) {
    return <p>Loading data...</p>;
  }

  // Handle errors
  if (projectError) {
    return <p>{projectError.message || 'Failed to load projects'}</p>;
  }
  if (timesheetError) {
    return <p>{timesheetError.message || 'Failed to load timesheets'}</p>;
  }

  // Group projects by the year they started
  const projectCountsByYear = {};

  projects.forEach(project => {
    const startYear = new Date(project.start_date).getFullYear(); // Get the year from start_date
    if (projectCountsByYear[startYear]) {
      projectCountsByYear[startYear] += 1; // Increment count for that year
    } else {
      projectCountsByYear[startYear] = 1; // Initialize count for a new year
    }
  });

  // Group timesheets by project and calculate total hours worked per project
  const timesheetHoursByProject = {};

  timesheets.forEach(timesheet => {
    const projectName = timesheet.project_name; // Assuming timesheet has a projectName field
    const hoursWorked = timesheet.hoursWorked;

    if (timesheetHoursByProject[projectName]) {
      timesheetHoursByProject[projectName] += hoursWorked; // Add hours worked to the project
    } else {
      timesheetHoursByProject[projectName] = hoursWorked; // Initialize hours for the new project
    }
  });

  // Prepare chart data for Pie chart (Projects by Year)
  const projectChartData = {
    labels: Object.keys(projectCountsByYear), // Years as labels
    datasets: [
      {
        label: 'Projects by Year',
        data: Object.values(projectCountsByYear), // Number of projects in each year
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)', // Color for the first slice
          'rgba(255, 159, 64, 0.2)', // Color for the second slice
          'rgba(153, 102, 255, 0.2)', // Color for the third slice
          'rgba(255, 99, 132, 0.2)', // Color for the fourth slice
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Prepare chart data for Pie chart (Total Hours Worked by Project)
  const timesheetChartData = {
    labels: Object.keys(timesheetHoursByProject), // Projects as labels
    datasets: [
      {
        label: 'Total Hours Worked by Project',
        data: Object.values(timesheetHoursByProject), // Total hours worked for each project
        backgroundColor: [
          'rgba(255, 159, 64, 0.2)', // Color for the first slice
          'rgba(153, 102, 255, 0.2)', // Color for the second slice
          'rgba(75, 192, 192, 0.2)', // Color for the third slice
          'rgba(255, 99, 132, 0.2)', // Color for the fourth slice
        ],
        borderColor: [
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
      <div style={{width: "45%"}}>
        <h1>Admin Dashboard</h1>
        <h2>Projects Started by Year</h2>
        <Pie data={projectChartData} />
      </div>

      <div style={{width: "45%"}}>
        <h2>Total Hours Worked by Project</h2>
        <Pie data={timesheetChartData} />
      </div>
    </div>
  );
}

export default Dashboard;
