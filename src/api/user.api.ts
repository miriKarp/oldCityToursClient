import axios from 'axios';

export const register = async (name: string, email: string, password: string, phone: string) => {
  const response = await axios.post('/api/register', {
    name,
    email,
    password,
    phone
  });
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await axios.post('/api/login', {
    email,
    password
  });
  return response.data;
};
