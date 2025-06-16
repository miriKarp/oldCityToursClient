import { AppDispatch } from '../store';
import { authStart, signInSuccess, signInFailure, signUpSuccess, signUpFailure, logout, } from '../slices/userSlices';
import { register, login } from '../../api/user.api';

export const loginUser = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(authStart());
        const response = await login(email, password);
        dispatch(signInSuccess(response));
        localStorage.setItem("user", JSON.stringify(response.user));
        localStorage.setItem("token", response.token);
        return response;
    } catch (err) {
        const error = err as any;
        dispatch(signInFailure(error.response?.data?.message || error.message));
    }
};

export const registerUser = (name: string, email: string, password: string, phone: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(authStart());
        const response = await register(name, email, password, phone);
        dispatch(signUpSuccess(response));
        localStorage.setItem("user", JSON.stringify(response.user));
        localStorage.setItem("token", response.token);
        return response;
    } catch (err) {
        const error = err as any;
        dispatch(signUpFailure(error.response?.data?.message || error.message));
    }
};

export const loadUserFromStorage = () => (dispatch: AppDispatch) => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if (user && token) {
        dispatch(
            signInSuccess({
                user: JSON.parse(user),
                token,
            })
        );
    }
};

export const logOutUser = () => (dispatch: AppDispatch) => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    dispatch(logout());
};