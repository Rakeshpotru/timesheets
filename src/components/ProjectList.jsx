import React from 'react';
import useSWR from 'swr';  // Import SWR hook
import { getProjects } from '../services/projectService'; // Assuming this is your API service

// Create a fetcher function that SWR will use
const fetcher = async () => {
  const response = await getProjects();
  if (response && response.projects) {
    console.log(response, 'response')
    return response.projects;  // Return the projects array
  } else {
    throw new Error('Failed to fetch projects');
  }
};

function ProjectList() {
  const { data: projects, error, isLoading } = useSWR('projects', fetcher); // useSWR hook for fetching data

  if (isLoading) {
    return <p>Loading projects...</p>;
  }

  if (error) {
    return <p>{error.message || 'Failed to load projects'}</p>;
  }

  return (
    <div>
      <h1>Project List</h1>
      <table>
        <thead>
          <tr>
            <th>project name</th>
            <th>Project Description</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
        {/* description
end_date
project_id

project_name
start_date */}
          {projects.map((projects) => (
            <tr key={projects.project_id}>
              <td>{ projects.project_name}</td>
              <td>{projects.description}</td>
              <td>{projects.start_date}</td>
              <td>{projects.end_date}</td>

            </tr>
          ))}
        </tbody>
      </table>
      {/* {projects && projects.length > 0 ? (
        <ul>
          {projects.map((project) => (
            <li key={project.project_id}>
              <h3>{project.project_name}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No projects available.</p>
      )} */}
    </div>
  );
}

export default ProjectList;
