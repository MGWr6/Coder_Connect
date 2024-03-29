// using axios instead of fetch api for additonal tools that are helpful
import axios from 'axios';

const API_URL = '/api/users/';

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// user profile
// const profile = async (userData) => {
//   const response = await axios.post(API_URL + 'profile', userData)

//   if (response.data) {
//     localStorage.setItem('user', JSON.stringify(response.data))
//   }
//   return response.data
// }

// Logout user
const logout = () => localStorage.removeItem('user');

const authService = {
  register,
  logout,
  login,
};

export default authService;
