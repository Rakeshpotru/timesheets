// /services/projectService.js
import axios from 'axios';
import { API_URLS } from '../apicalls/apis';


export const getProjects = async () => {
  try {
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage
    console.log(token)
    // Check if token exists
    if (!token) {
      console.error('No authentication token found.');
      return [];
    }
    const response = await axios.get(`${API_URLS.ListOfProjects}`,{
      headers: {
        Authorization: `Bearer ${token}`, // Send the token in the header
      },
    });
    return response.data; // Returns the list of projects
  } catch (error) {
    console.error('Error fetching projects:', error);
    return []; // Return empty array if there's an error
  }
};

// Function to fetch a single project by ID (optional)
export const getProjectById = async (projectId) => {
  try {
    const response = await axios.get(`${API_URLS}/projects/${projectId}`);
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
export const addProject = async (projectData) => {
  try {
    const response = await axios.post(`${API_URLS}`, projectData);  // POST request to add a new project
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Error adding project:', error);
    return { success: false, message: 'Failed to add project' };
  }
};