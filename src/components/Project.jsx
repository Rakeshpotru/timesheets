import React, { useState } from 'react';
import { addProject } from '../services/projectService'; 

function Project() {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const projectData = {
      name: projectName,
      description: projectDescription,
      startDate,
      endDate,
    };

    const response = await addProject(projectData);

    if (response.success) {
      setMessage('Project added successfully');
    } else {
      setMessage('Failed to add project');
    }
  };

  return (
    <div>
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Project Name</label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Project</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Project;
