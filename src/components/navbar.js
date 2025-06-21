import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#fff', color: '#333' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <img 
            src="/sail-logo.png" 
            alt="SAIL Logo" 
            style={{ height: '40px', marginRight: '20px' }}
          />
        </Box>
        
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About SAIL</Button>
        <Button color="inherit" component={Link} to="/inventory">Check Inventory</Button>
        {isAuthenticated && (
          <Button color="inherit" component={Link} to="/manage">Add/Delete Items</Button>
        )}
        {!isAuthenticated ? (
          <Button color="inherit" component={Link} to="/auth">Login / Signup</Button>
        ) : (
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;