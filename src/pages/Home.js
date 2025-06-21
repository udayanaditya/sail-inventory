import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Home = () => {
  return (
    <Box
      className="page-container"
      sx={{
        backgroundImage: 'url(/steel-plant.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Box
          className="content-overlay"
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: 4,
            borderRadius: 2
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to SAIL Inventory Management
          </Typography>
          <Typography variant="h5" gutterBottom>
            Steel Authority of India Limited
          </Typography>
          <Typography variant="body1" paragraph>
            SAIL is India's largest steel-producing company. Our state-of-the-art inventory management system 
            helps maintain efficient control over our vast resources across multiple plants and locations.
          </Typography>
          <Typography variant="body1">
            Use our system to track inventory levels, manage stock, and ensure smooth operations 
            across all SAIL facilities.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;