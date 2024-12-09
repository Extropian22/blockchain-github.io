import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Button, 
  makeStyles, 
  Paper, 
  Snackbar 
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'formik-material-ui';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
    width: '100%',
    maxWidth: 400,
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[10],
  },
  logo: {
    marginBottom: theme.spacing(2),
    width: 100,
    height: 100,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(1.5),
    borderRadius: theme.spacing(1),
  },
  forgotPassword: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
    width: '100%',
  }
}));

// Validation Schema
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required')
});

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { login, isAuthenticated, error } = useAuth();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('error');

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      // Simulate authentication (replace with actual authentication logic)
      if (values.email === 'admin@restaurant.com' && values.password === 'password123') {
        const userData = {
          email: values.email,
          name: 'Restaurant Admin',
          role: 'admin',
          token: 'simulated-jwt-token'
        };

        // Use the login method from AuthContext
        login(userData);

        setSnackbarMessage('Login Successful!');
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
        
        // Redirect to dashboard after successful login
        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (loginError) {
      setSnackbarMessage(loginError.message || 'An error occurred during login');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <img 
          src="/logo.svg" 
          alt="Restaurant Management Logo" 
          className={classes.logo}
        />
        <Typography component="h1" variant="h5">
          Restaurant Management Login
        </Typography>
        
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={handleLogin}
        >
          {({ submitForm, isSubmitting }) => (
            <Form className={classes.form}>
              <Field
                component={TextField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Field
                component={TextField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={isSubmitting}
                onClick={submitForm}
              >
                Sign In
              </Button>
              
              <Typography variant="body2" className={classes.forgotPassword}>
                Forgot password? Contact system administrator
              </Typography>
            </Form>
          )}
        </Formik>
      </Paper>

      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={3000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbarSeverity}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Login;
