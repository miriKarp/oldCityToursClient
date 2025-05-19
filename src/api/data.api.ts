import axiosData from './axiosData';

export const getUsers = async () => {
  try {
    const response = await axiosData.get('/users');
    return response.data;
  } catch (error: any) {
    console.error("Error fetching users:", error.message || error);
    throw error;
  }
};

export const getTours = async () => {
  try {
    const response = await axiosData.get('/tours');
    return response.data;
  } catch (error: any) {
    console.error("Error fetching tours:", error.message || error);
    throw error;
  }
};