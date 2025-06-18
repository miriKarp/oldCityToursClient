import axiosData from './axiosData';
import { Tour } from '../types/Tour';

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
    const token = localStorage.getItem('token');
    const response = await axiosData.get('/tours', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error("Error fetching tours:", error.message || error);
    throw error;
  }
};

export const postTour = async (tourData: any) => {
  try {
    const response = await axiosData.post('/tours/addTour', tourData);
    return response.data;
  } catch (error: any) {
    console.error("Error posting tour:", error.message || error);
    throw error;
  }
};

export const putTour = async (tourData: Tour) => {
  const response = await axiosData.put('/tours/updateTour', tourData);
  return response.data;
};

export const deleteTour = async (id: string) => {
  console.log("Deleting tour with ID:", id);
  const response = await axiosData.delete(`/tours/deleteTour/${id}`);
  return response.data;
};

export const getServices = async () => {
  const response = await axiosData.get('/services/services');
  console.log("Fetched services:", response.data);
  return response.data;
};

export const postService = async (service: any) => {
  const response = await axiosData.post('/services/addService', service);
  return response.data;
};
export const putService = async (service: any) => {
  console.log("Updating service:", service);
  const response = await axiosData.put('/services/updateService', service);
  return response.data;
};

export const deleteService = async (id: string) => {
  const response = await axiosData.delete(`/services/deleteService/${id}`);
  return response.data;
};


export const getMyTours = async () => {
  const token = localStorage.getItem('token');
  const res = await axiosData.get('/users/my-tours', {
    headers: {
      Authorization: `${token}`,
    },
  });
  return res.data;
};