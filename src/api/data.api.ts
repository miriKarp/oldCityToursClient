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

export const postTour = async (tourData: any) => {
  try {
    const response = await axiosData.post('/tours/addTour', tourData);
    return response.data;
  } catch (error: any) {
    console.error("Error posting tour:", error.message || error);
    throw error;
  }
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
