import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const registerUser = async (userData: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/auth/register`, userData);
    return response.data;
  } catch (error:any) {
    throw error.response.data;
  }
};
