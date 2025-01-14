import axios from 'axios';

export const register = async (name: string, email: string, password: string, phone: string) => {
  try {
    const response = await axios.post('http://localhost:3000/api/users/signUp', {
      name,
      email,
      password,
      phone
    });
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.error('Error during registration:', error);
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post('http://localhost:3000/api/users/signIn', {
      email,
      password
    });
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.error('Error during login:', error);
  }
};
