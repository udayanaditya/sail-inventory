import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Tab, Tabs } from '@mui/material';
import AuthForms from '../components/AuthForms';

const Auth = ({ setIsAuthenticated }) => {
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();

  const handleSuccess = () => {
    setIsAuthenticated(true);
    navigate('/');
  };

  return (
    <Box
      className="page-container"
      sx={{
        backgroundImage: 'url(/steel-plant-3.jpg)',
        py: 4
      }}
    >
      <Container maxWidth="sm">
        <Box className="auth-form">
          <Tabs
            value={tab}
            onChange={(e, newValue) => setTab(newValue)}
            centered
          >
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
          <Box sx={{ mt: 3 }}>
            <AuthForms
              isLogin={tab === 0}
              onSuccess={handleSuccess}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Auth;