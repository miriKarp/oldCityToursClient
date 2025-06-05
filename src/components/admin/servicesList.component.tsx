import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  fetchServices,
  addService,
  removeService,
  updateService,
} from '../../redux/slices/servicesSlices';
import { Service } from '../../types/Service';

export const ServicesList = () => {
  const dispatch = useAppDispatch();
  const { services, loading, error } = useAppSelector((state) => state.services);

  const [newService, setNewService] = useState<Service>({
    _id: '',
    description: '',
    price: 0,
    durationTime: 0,
    business: '',
  });

  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const handleAddOrUpdate = async () => {
    if (isEditMode) {
      await dispatch(updateService(newService));
    } else {
      await dispatch(addService(newService));
    }
    await dispatch(fetchServices());
    setNewService({ _id: '', description: '', price: 0, durationTime: 0, business: '' });
    setIsEditMode(false);
  };

  const handleDelete = (id: string) => {
    dispatch(removeService(id));
  };

  const handleEdit = (service: Service) => {
    setNewService(service);
    setIsEditMode(true);
  };

  if (loading) return <p>טוען שירותים...</p>;
  if (error) return <p>שגיאה: {error}</p>;

  return (
    <div>
      <h2>רשימת שירותים</h2>
      <ul>
        {services.map((service) => (
          <li key={service._id}>
            {service.description} - ₪{service.price} - {service.durationTime} דקות
            <button onClick={() => handleEdit(service)}>✏️ ערוך</button>
            <button onClick={() => handleDelete(service._id)}>🗑️ מחק</button>
          </li>
        ))}
      </ul>

      <h3>{isEditMode ? 'עריכת שירות קיים:' : 'הוספת שירות חדש:'}</h3>
      <input
        type="text"
        placeholder="תיאור"
        value={newService.description}
        onChange={(e) => setNewService({ ...newService, description: e.target.value })}
      />
      <input
        type="number"
        placeholder="מחיר"
        value={newService.price}
        onChange={(e) => setNewService({ ...newService, price: Number(e.target.value) })}
      />
      <input
        type="number"
        placeholder="משך (בדקות)"
        value={newService.durationTime}
        onChange={(e) => setNewService({ ...newService, durationTime: Number(e.target.value) })}
      />
      <button onClick={handleAddOrUpdate}>
        {isEditMode ? 'עדכן שירות' : 'הוסף שירות'}
      </button>
    </div>
  );
};
