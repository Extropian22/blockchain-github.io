import React from 'react';
import { Container, Typography, Grid, Paper } from '@material-ui/core';

const Dashboard = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Restaurant Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Sales Overview</Typography>
            <Typography variant="body1">Placeholder for sales data</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Inventory Status</Typography>
            <Typography variant="body1">Placeholder for inventory data</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Recent Orders</Typography>
            <Typography variant="body1">Placeholder for recent orders</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
