import axios from 'axios';

const API_URL = 'https://your-api-url.com/api';

export const addTimesheet = async (timesheetData) => {
  try {
    const response = await axios.post(`${API_URL}/timesheets`, timesheetData);
    return response.data;
  } catch (error) {
    console.error('Error adding timesheet:', error);
  }
};

export const getTimesheets = async () => {
  try {
    const response = await axios.get(`${API_URL}/timesheets`);
    return response.data;
  } catch (error) {
    console.error('Error fetching timesheets:', error);
  }
};
