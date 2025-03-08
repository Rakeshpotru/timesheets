// /services/authService.js
import axios from 'axios';

const API_URL = 'https://your-api-url.com/api'; // Replace with your backend API URL

// Function to log in a user
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    if (response.data.token) {
      // Store token in local storage or cookie (or other storage)
      localStorage.setItem('authToken', response.data.token);
      return { success: true, token: response.data.token };
    }
    return { success: false, message: 'Invalid credentials' };
  } catch (error) {
    console.error('Error during login:', error);
    return { success: false, message: 'An error occurred' };
  }
};

// Function to check if the user is authenticated (based on stored token)
export const isAuthenticated = () => {
  const token = localStorage.getItem('authToken');
  return token ? true : false; // You can also validate token expiry here
};

// Function to log out a user
export const logoutUser = () => {
  localStorage.removeItem('authToken');
};
