import React from 'react';
import { 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Paper, 
  Box, 
  makeStyles 
} from '@material-ui/core';
import { 
  Restaurant as RestaurantMenu, 
  ShowChart as Analytics, 
  AttachMoney, 
  Dashboard, 
  Store 
} from '@material-ui/icons';
import Navbar from '../components/Navbar';

const useStyles = makeStyles((theme) => ({
  heroSection: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    padding: theme.spacing(10, 0),
    textAlign: 'center',
    backgroundImage: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  },
  heroTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(3),
  },
  heroSubtitle: {
    marginBottom: theme.spacing(4),
    color: theme.palette.text.secondary,
  },
  ctaButton: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1.5, 4),
    fontSize: '1.1rem',
  },
  featuresSection: {
    padding: theme.spacing(10, 0),
    backgroundColor: theme.palette.background.paper,
  },
  featureCard: {
    padding: theme.spacing(4),
    textAlign: 'center',
    height: '100%',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  featureIcon: {
    fontSize: '3rem',
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  const features = [
    {
      icon: <RestaurantMenu className={classes.featureIcon} />,
      title: 'Menu Management',
      description: 'Easily create, update, and manage your restaurant menu with intuitive controls.'
    },
    {
      icon: <Analytics className={classes.featureIcon} />,
      title: 'Financial Analytics',
      description: 'Get real-time insights into your restaurant\'s financial performance.'
    },
    {
      icon: <AttachMoney className={classes.featureIcon} />,
      title: 'Inventory Tracking',
      description: 'Monitor ingredient stocks, track usage, and optimize procurement.'
    },
    {
      icon: <Dashboard className={classes.featureIcon} />,
      title: 'Comprehensive Dashboard',
      description: 'A centralized hub for all your restaurant management needs.'
    },
    {
      icon: <Store className={classes.featureIcon} />,
      title: 'Multi-Location Support',
      description: 'Manage multiple restaurant locations from a single platform.'
    }
  ];

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className={classes.heroSection}>
        <Container maxWidth="md">
          <Typography 
            variant="h2" 
            className={classes.heroTitle}
            color="textPrimary"
          >
            Streamline Your Restaurant Operations
          </Typography>
          <Typography 
            variant="h5" 
            className={classes.heroSubtitle}
            color="textSecondary"
          >
            An all-in-one solution to manage your restaurant efficiently
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            className={classes.ctaButton}
          >
            Get Started
          </Button>
        </Container>
      </section>

      {/* Features Section */}
      <section className={classes.featuresSection}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            align="center" 
            gutterBottom
            style={{ marginBottom: '3rem' }}
          >
            Key Features
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper 
                  elevation={3} 
                  className={classes.featureCard}
                >
                  <Box display="flex" flexDirection="column" alignItems="center">
                    {feature.icon}
                    <Typography variant="h6" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" align="center">
                      {feature.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      {/* Testimonial or CTA Section */}
      <section style={{ 
        backgroundColor: '#f4f4f4', 
        padding: '4rem 0', 
        textAlign: 'center' 
      }}>
        <Container maxWidth="md">
          <Typography variant="h4" gutterBottom>
            Transform Your Restaurant Management
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" paragraph>
            Join hundreds of restaurants who have simplified their operations
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            size="large"
          >
            Start Free Trial
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default LandingPage;
