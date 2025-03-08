// /services/authService.js
import axios from 'axios';
import { API_URLS } from '../apicalls/apis';



export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URLS.LOGIN_API_URL}`, credentials);
    console.log(response)
    if (response.data.token) {
      localStorage.setItem('authToken', response.data.token);
      return { success: true, token: response.data.token };
    }
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
export const isAuthenticated = () => {
  const token = localStorage.getItem('authToken');
  return token ? true : false;
};


export const logoutUser = () => {
  localStorage.removeItem('authToken');
};
