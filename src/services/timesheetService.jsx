// /services/timesheetService.js
import axios from 'axios';

const API_URL = 'https://your-api-url.com/api'; // Replace with your backend API URL

// Function to add a new timesheet entry
export const addTimesheet = async (timesheetData) => {
  try {
    const response = await axios.post(`${API_URL}/timesheets`, timesheetData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Include token for authentication
      },
    });
    return response.data; // Returns the newly created timesheet entry
  } catch (error) {
    console.error('Error adding timesheet:', error);
    return null; // Return null if adding the timesheet fails
  }
};

// Function to fetch all timesheets (Admin view or personal view for users)
export const getTimesheets = async () => {
  try {
    const response = await axios.get(`${API_URL}/timesheets`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
    });
    return response.data; // Returns the list of timesheets
  } catch (error) {
    console.error('Error fetching timesheets:', error);
    return []; // Return empty array if there's an error
  }
};

// Function to fetch a specific timesheet by ID (optional)
export const getTimesheetById = async (timesheetId) => {
  try {
    const response = await axios.get(`${API_URL}/timesheets/${timesheetId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
    });
    return response.data; // Returns the timesheet details
  } catch (error) {
    console.error('Error fetching timesheet:', error);
    return null; // Return null if the timesheet is not found or there's an error
  }
};

// Function to update a timesheet entry (optional)
export const updateTimesheet = async (timesheetId, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/timesheets/${timesheetId}`, updatedData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
    });
    return response.data; // Returns the updated timesheet entry
  } catch (error) {
    console.error('Error updating timesheet:', error);
    return null; // Return null if updating the timesheet fails
  }
};
