import React, { useEffect } from 'react';
import { useShop } from '../../../context/ShopContext';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import CardSkeleton from '../../blocks/cards/shop-card/CardSkeleton';
import { Box, Container, CssBaseline } from '@mui/material';
import NewCard from '../../blocks/cards/shop-card/NewCard';


const ShopPage = () => {
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
                <Grid xs={12} sm={6} md={4} lg={3} key={index}>
                  <CardSkeleton />
                </Grid>
              ))}
            {isLoaded &&
              products.map((item) => (
                <Grid xs={12} sm={6} md={4} lg={3} key={item._id}>
                  <NewCard item={item} />
                </Grid>
              ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default ShopPage;
