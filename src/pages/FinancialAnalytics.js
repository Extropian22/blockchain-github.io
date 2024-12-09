import React from 'react';
import { Container, Typography, Grid, Paper } from '@material-ui/core';

const FinancialAnalytics = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Financial Analytics
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Revenue Overview</Typography>
            <Typography variant="body1">Placeholder for revenue charts</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Expense Tracking</Typography>
            <Typography variant="body1">Placeholder for expense data</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FinancialAnalytics;
