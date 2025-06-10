import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  fetchServices,
  addService,
  removeService,
  updateService,
} from '../../redux/slices/servicesSlices';
import { Service } from '../../types/Service';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, TextField, Typography } from '@mui/material';

export const ServicesList = () => {
  const dispatch = useAppDispatch();
  const { services, loading, error } = useAppSelector((state) => state.services);

  const [newService, setNewService] = useState<Service>({
    _id: '',
    description: ' ',
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
    <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 2 }}>
      <Typography variant="h5" gutterBottom>רשימת שירותים</Typography>

      <ul style={{ padding: 0 }}>
        {services.map((service) => (
          <li key={service._id} style={{ marginBottom: '0.5rem', listStyle: 'none' }}>
            {service.description} - ₪{service.price} - {service.durationTime} דקות
            <Box component="span" sx={{ ml: 1 }}>
              <Button
                size="small"
                variant="outlined"
                color="primary"
                onClick={() => handleEdit(service)}
                startIcon={<EditIcon />}
                sx={{ mr: 1 }}
              >
                ערוך
              </Button>
              <Button
                size="small"
                variant="outlined"
                color="error"
                onClick={() => handleDelete(service._id)}
                startIcon={<DeleteIcon />}
              >
                מחק
              </Button>
            </Box>
          </li>
        ))}
      </ul>

      <Typography variant="h6" sx={{ mt: 3 }}>
        {isEditMode ? 'עריכת שירות קיים:' : 'הוספת שירות חדש:'}
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
        <TextField
          label="תיאור"
          value={newService.description}
          onChange={(e) => setNewService({ ...newService, description: e.target.value })}
        />
        <TextField
          type="number"
          label="מחיר"
          value={newService.price}
          onChange={(e) => setNewService({ ...newService, price: Number(e.target.value) })}
        />
        <TextField
          type="number"
          label="משך זמן"
          value={newService.durationTime}
          onChange={(e) => setNewService({ ...newService, durationTime: Number(e.target.value) })}
        />

        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<AddIcon />}
          onClick={handleAddOrUpdate}
          sx={{ alignSelf: 'start' }}
        >
          {isEditMode ? 'עדכן שירות' : 'הוסף שירות'}
        </Button>
      </Box>
    </Box>
  );
};
