import React, { useEffect } from 'react';
import { useShop } from '../../../../context/ShopContext';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import CardSkeleton from '../../../blocks/cards/shop-card/CardSkeleton';
import { Box, Container, CssBaseline } from '@mui/material';
import ActivityCard from '../../../blocks/cards/activity-card/ActivityCard';

const UserCart = () => {
  const newArray = Array.from(Array(20).keys());
  const { fetchShop, products, isLoaded } = useShop();
  useEffect(() => {
    fetchShop('all');
  }, []);
  return (
    <div>
      <Box component="main" sx={{ pt: 0 }}>
        <CssBaseline />
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 2 }} columns={{ sm: 12 }}>
            {!isLoaded &&
              newArray.map((item, index) => (
                <Grid xs={12} sm={6} key={index}>
                  <CardSkeleton />
                </Grid>
              ))}
            {isLoaded &&
              products.map((item) => (
                <Grid xs={12} sm={6} key={item._id}>
                  <ActivityCard item={item} />
                </Grid>
              ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default UserCart;

