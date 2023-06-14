import axios from 'axios';

export const registerUser = async (userData: any) => {
  try {
    const response = await axios.post('/api/auth/register', userData);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.detail);
  }
};

export const loginUser = async (credentials: any) => {
  try {
    const response = await axios.post('/api/auth/login', credentials);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.detail);
  }
};

export const logoutUser = async () => {
  try {
    const response = await axios.get('/api/auth/logout');
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.detail);
  }
};

export const getUserProfile = async () => {
  try {
    const response = await axios.get('/api/auth/profile');
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.detail);
  }
};