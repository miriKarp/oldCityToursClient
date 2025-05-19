import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCustomers } from '../../redux/slices/customersSlices';

export const CustomersList = () => {
    const dispatch = useAppDispatch();
    const { customers, loading, error } = useAppSelector((state) => state.customers);

    useEffect(() => {
        dispatch(fetchCustomers());
    }, [dispatch]);

    if (loading) return <p>Loading customers...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>רשימת לקוחות:</h2>
            <ul>
                {customers.map((customer) => (
                    <li key={customer.id}>
                        {customer.name} - {customer.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};