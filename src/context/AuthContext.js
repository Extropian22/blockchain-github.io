import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the AuthContext
const AuthContext = createContext(null);

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [error, setError] = useState(null);

  // Login method with enhanced error handling
  const login = (userData) => {
    try {
      // Validate user data
      if (!userData || !userData.email) {
        throw new Error('Invalid user credentials');
      }

      setIsAuthenticated(true);
      setUser(userData);
      setRole(userData.role || process.env.REACT_APP_DEFAULT_ROLE);
      setError(null);

      // Store user data securely
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', userData.token || '');
    } catch (loginError) {
      setError(loginError.message);
      logout();
    }
  };

  // Logout method with clear token and user data
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setRole(null);
    setError(null);
    
    // Clear local storage
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  // Check authentication status on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');

    if (storedUser && storedToken) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setIsAuthenticated(true);
        setUser(parsedUser);
        setRole(parsedUser.role || process.env.REACT_APP_DEFAULT_ROLE);
      } catch (parseError) {
        console.error('Error parsing stored user data', parseError);
        logout();
      }
    }
  }, []);

  return (
    <AuthContext.Provider 
      value={{ 
        isAuthenticated, 
        user, 
        role,
        error,
        login, 
        logout 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
