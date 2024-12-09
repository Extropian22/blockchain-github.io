import React from 'react';
import { Container, Typography, Grid, Paper, Button } from '@material-ui/core';

const InventoryTracker = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Inventory Tracker
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6">Current Inventory</Typography>
            <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
              Update Inventory
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InventoryTracker;
