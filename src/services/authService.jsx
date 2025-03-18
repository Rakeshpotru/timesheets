// /services/authService.js
import axios from 'axios';
import { API_URLS } from '../apicalls/apis';



export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URLS.LOGIN_API_URL}`, credentials);
    console.log(response);

    // Check if token exists in the response data
    if (response.data.token) {
      // Store the token and employee details in local storage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('employee_id', response.data.employee_details.employee_id);
      localStorage.setItem('first_name', response.data.employee_details.first_name);
      localStorage.setItem('last_name', response.data.employee_details.last_name);
      localStorage.setItem('email', response.data.employee_details.email);
      localStorage.setItem('position', response.data.employee_details.position);
      localStorage.setItem('department', response.data.employee_details.department);

      // Return success with token
      return { success: true, token: response.data.token };
    }

    // If no token in the response, return failure
    return { success: false, message: 'Invalid credentials' };
  } catch (error) {
    console.error('Error during login:', error);
    return { success: false, message: 'An error occurred' };
  }
};

export const registerUser = async ({ username, password, email }) => {
  try {
    const response = await axios.post(`${API_URLS.REGISTER_API_URL}`, { username, password, email });
    return { success: true, message: 'User registered successfully' };
  } catch (error) {
    return { success: false, message: error.response.data.message };
  }
};
export const registerEmployee = async ({ first_name, last_name, email,password,department,position,hire_date,status }) => {
  try {
    const responseregister = await axios.post(`${API_URLS.ADDEMPLOYEE_API_URL}`, { first_name, last_name, email,password ,department,position,hire_date,status});
    return { success: true, message: 'Employee Added successfully' };
  } catch (error) {
    return { success: false, message: error.response.data.message };
  }
};
export const isAuthenticated = () => {
  const token = localStorage.getItem('authToken');
  return token ? true : false;
};


export const logoutUser = () => {
  localStorage.removeItem('authToken');
};
