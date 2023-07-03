import axios, { AxiosError } from "axios";
import { LoginUserData, RegisterUserData } from "../interfaces/user";

const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api`;

export const registerUser = async (userData: RegisterUserData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/auth/register/`,
      userData
    );
    return response.data;
  } catch (error: unknown) {
    throw new Error(error instanceof AxiosError ? error.message : "");
  }
};

export const loginUser = async (userData: LoginUserData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/auth/login/`,
      userData
    );
    return response.data;
  } catch (error: unknown) {
    throw new Error(error instanceof AxiosError ? error.message : "");
  }
};

export const logoutUser = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/auth/logout`);
    return response.data;
  } catch (error: unknown) {
    throw new Error(error instanceof AxiosError ? error.message : "");
  }
};

export const getUserInfo = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/auth/user`);
    return response.data;
  } catch (error: unknown) {
    throw new Error(error instanceof AxiosError ? error.message : "");
  }
};
