import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// Import AuthProvider and useAuth
import { AuthProvider, useAuth } from './context/AuthContext';

// Import components
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import RecipeManager from './pages/RecipeManager';
import InventoryTracker from './pages/InventoryTracker';
import FinancialAnalytics from './pages/FinancialAnalytics';
import MenuBuilder from './pages/MenuBuilder';

// Custom Theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', // Vibrant blue
      light: '#64b5f6',
      dark: '#1976d2',
    },
    secondary: {
      main: '#f50057', // Vibrant pink
      light: '#ff4081',
      dark: '#c51162',
    },
    background: {
      default: '#f4f4f4',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        borderRadius: '8px',
      },
      containedPrimary: {
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)',
        },
      },
    },
  },
});

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, checkAuthStatus } = useAuth();

  useEffect(() => {
    checkAuthStatus();
  }, []);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router basename="/restaurantmanagement-github.io">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/recipes" 
              element={
                <ProtectedRoute>
                  <RecipeManager />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/inventory" 
              element={
                <ProtectedRoute>
                  <InventoryTracker />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/financials" 
              element={
                <ProtectedRoute>
                  <FinancialAnalytics />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/menu" 
              element={
                <ProtectedRoute>
                  <MenuBuilder />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
