import React, { useState, useEffect } from 'react';
import { getProjects } from '../services/projectService';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch available projects
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <h3>Project List</h3>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
