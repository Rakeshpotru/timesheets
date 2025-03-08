// /services/projectService.js
import axios from 'axios';

const API_URL = 'https://your-api-url.com/api'; // Replace with your backend API URL

// Function to fetch all projects
export const getProjects = async () => {
  try {
    const response = await axios.get(`${API_URL}/projects`);
    return response.data; // Returns the list of projects
  } catch (error) {
    console.error('Error fetching projects:', error);
    return []; // Return empty array if there's an error
  }
};

// Function to fetch a single project by ID (optional)
export const getProjectById = async (projectId) => {
  try {
    const response = await axios.get(`${API_URL}/projects/${projectId}`);
    return response.data; // Returns the project details
  } catch (error) {
    console.error('Error fetching project:', error);
    return null; // Return null if the project is not found or there's an error
  }
};

// Function to create a new project (optional)
export const createProject = async (projectData) => {
  try {
    const response = await axios.post(`${API_URL}/projects`, projectData);
    return response.data; // Returns the newly created project
  } catch (error) {
    console.error('Error creating project:', error);
    return null; // Return null if project creation fails
  }
};

// Function to update a project (optional)
export const updateProject = async (projectId, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/projects/${projectId}`, updatedData);
    return response.data; // Returns the updated project
  } catch (error) {
    console.error('Error updating project:', error);
    return null; // Return null if updating the project fails
  }
};
