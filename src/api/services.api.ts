import axiosData from './axiosData.api';

export const getAllServices = async () => {
    const response = await axiosData.get('/services/services');
    return response.data;
};
