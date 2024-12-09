import React from 'react';
import { Container, Typography, Grid, Paper, Button } from '@material-ui/core';

const MenuBuilder = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
        Menu Builder
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6">Current Menu Items</Typography>
            <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
              Add Menu Item
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MenuBuilder;
