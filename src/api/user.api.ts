import axios from './axiosData';

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

    const { token, user } = response.data;
    return { token, user };

  } catch (error: any) {
    console.error('Error during registration:', error);
    if (error.response.status === 400) {
      throw new Error("משתמש זה כבר קיים במערכת");
    }
    throw new Error("שגיאת שרת במהלך הרשמה");
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
    const { token, user } = response.data;
    return { token, user };
  } catch (error: any) {
    console.error('Error during login:', error);
    if (error.response.status === 404) {
      throw new Error("משתמש זה לא קיים במערכת");
    }
    if (error.response.status === 401) {
      throw new Error("סיסמה לא נכונה");
    }
    throw new Error("שגיאת שרת במהלך התחברות");
  }
};
