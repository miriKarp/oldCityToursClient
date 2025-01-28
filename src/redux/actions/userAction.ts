import { AppDispatch } from '../store';
import { authStart, signInSuccess, signInFailure, signUpSuccess, signUpFailure } from '../slices/userSlices';
import { register, login } from '../../api/user.api';

export const loginUser = (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(authStart());
        const userToken = await login(email, password);
        dispatch(signInSuccess(userToken));
        return userToken;
    } catch (err) {
        const error = err as any;
        dispatch(signInFailure(error.response?.data?.message || error.message));
    }
};

export const registerUser = (name: string, email: string, password: string, phone: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(authStart());
        const userToken = await register(name, email, password, phone);
        dispatch(signUpSuccess(userToken));
        return userToken;
    } catch (err) {
        const error = err as any;
        dispatch(signUpFailure(error.response?.data?.message || error.message));
    }
};