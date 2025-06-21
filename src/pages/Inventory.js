import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Alert } from '@mui/material';
import InventoryTable from '../components/InventoryTable';
import { inventoryApi } from '../services/api';

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await inventoryApi.getAll();
        setItems(response.data);
      } catch (err) {
        setError('Failed to fetch inventory items');
      }
    };

    fetchItems();
  }, []);

  return (
    <Box
      className="page-container"
      sx={{
        backgroundImage: 'url(/steel-plant-4.jpg)',
        py: 4
      }}
    >
      <Container maxWidth="lg">
        <Box className="content-overlay">
          <Typography variant="h4" gutterBottom>
            Inventory Management
          </Typography>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          <InventoryTable items={items} />
        </Box>
      </Container>
    </Box>
  );
};

export default Inventory;