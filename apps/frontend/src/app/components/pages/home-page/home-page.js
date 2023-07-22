import {Box, Container, CssBaseline } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import React from 'react'
import ProductCard from '../../blocks/cards/ProductCard'
import { useAuth } from '../../../context/AuthContext';

function HomePage() {
  const { isLoggedIn , user } = useAuth();
  return (
    <Box component="main" sx={{ pt: 5 }}>

    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome to the Home Page!</h2>
          <p>User Data:</p>
          <pre>{user.email}</pre>
        </div>
      ) : (
        <div>You are not logged in!</div>
      )}
    </div>

      <CssBaseline />
      <Container  maxWidth="xl">
      <Grid container spacing={{  xs: 2  }} columns={{  sm: 12 }}>
        <Grid xs={12} sm={6} md={4} lg={3}>
        <ProductCard />
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3} >
        <ProductCard />
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3} >
        <ProductCard />
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3} >
        <ProductCard />
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3} >
        <ProductCard />
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3} >
        <ProductCard />
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3} >
        <ProductCard />
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3} >
        <ProductCard />
        </Grid>
      </Grid>
      </Container>
    </Box>
  )
}

export default HomePage
