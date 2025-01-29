import axios from 'axios';

export const register = async (name: string, email: string, password: string, phone: string) => {
  if (!name || !email || !password || !phone) {
    throw new Error("נא למלא את כל הפרטים");
  }
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
    if (error.response.status === 400) {
      throw new Error("משתמש זה כבר קיים במערכת");
    }
  }
};

export const login = async (email: string, password: string) => {
  if (!email || !password) {
    throw new Error("נא למלא את כל הפרטים");
  }
  try {
    const response = await axios.post('http://localhost:3000/api/users/signIn', {
      email,
      password
    });
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.error('Error during login:', error);
    if (error.response.status === 404) {
      throw new Error("משתמש זה לא קיים במערכת");
    }
    if (error.response.status === 401) {
      throw new Error("סיסמה לא נכונה");
    }
  }
};
