import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUserFromStorage } from '../../redux/actions/userAction';
import { AppDispatch } from '../../redux/store';

export const AppInitializer = () => {
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUserFromStorage());
    }, [dispatch]);

    return null;
};
