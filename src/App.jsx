import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Navbar from './components/navbar';
import Home from './pages/Home';
import About from './pages/About';
import Inventory from './pages/Inventory';
import ManageItems from './pages/ManageItems';
import Auth from './pages/Auth';
import { checkAuthStatus } from './services/auth';
import './styles/global.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0056b3',
      light: '#3378c1',
      dark: '#003b7d'
    },
    secondary: {
      main: '#6c757d',
      light: '#868e96',
      dark: '#495057'
    },
    background: {
      default: '#f8f9fa',
      paper: '#ffffff'
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500
    }
  }
});

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      const authStatus = await checkAuthStatus();
      setIsAuthenticated(authStatus.isAuthenticated);
      setIsAdmin(authStatus.isAdmin);
      setLoading(false);
    };
    verifyAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar 
          isAuthenticated={isAuthenticated} 
          isAdmin={isAdmin} 
          setIsAuthenticated={setIsAuthenticated} 
          setIsAdmin={setIsAdmin} 
        />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route 
              path="/inventory" 
              element={
                isAuthenticated ? 
                  <Inventory /> : 
                  <Navigate to="/auth" replace />
              } 
            />
            <Route 
              path="/manage" 
              element={
                isAuthenticated && isAdmin ? 
                  <ManageItems /> : 
                  <Navigate to="/" replace />
              } 
            />
            <Route 
              path="/auth" 
              element={
                !isAuthenticated ? 
                  <Auth 
                    setIsAuthenticated={setIsAuthenticated} 
                    setIsAdmin={setIsAdmin} 
                  /> : 
                  <Navigate to="/" replace />
              } 
            />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;