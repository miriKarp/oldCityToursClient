import axios from 'axios';

export const register = async (name: string, email: string, password: string, phone: string) => {
  const response = await axios.post('http://localhost:3000/api/users/signUp', {
    name,
    email,
    password,
    phone
  });
  console.log(response.data);
  return response.data;
};

export const login = async (email: string, password: string) => {
  const response = await axios.post('http://localhost:3000/api/users/signIn', {
    email,
    password
  });
  console.log(response.data);
  return response.data;
};
