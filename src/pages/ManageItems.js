import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Alert } from '@mui/material';
import AddItemForm from '../components/AddItemForm';
import InventoryTable from '../components/InventoryTable';
import { inventoryApi } from '../services/api';

const ManageItems = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await inventoryApi.getAll();
      setItems(response.data);
    } catch (err) {
      setError('Failed to fetch inventory items');
    }
  };

  const handleAdd = async (itemData) => {
    try {
      await inventoryApi.add(itemData);
      setSuccess('Item added successfully');
      fetchItems();
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to add item');
      setTimeout(() => setError(''), 3000);
    }
  };

  const handleDelete = async (id) => {
    try {
      await inventoryApi.delete(id);
      setSuccess('Item deleted successfully');
      fetchItems();
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to delete item');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <Box
      className="page-container"
      sx={{
        backgroundImage: 'url(/steel-plant-5.jpg)',
        py: 4
      }}
    >
      <Container maxWidth="lg">
        <Box className="content-overlay">
          <Typography variant="h4" gutterBottom>
            Manage Inventory
          </Typography>
          
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          
          {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {success}
            </Alert>
          )}

          <AddItemForm onAdd={handleAdd} />
          
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Current Inventory
            </Typography>
            <InventoryTable
              items={items}
              isAdmin={true}
              onDelete={handleDelete}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ManageItems;