import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import CardSkeleton from '../../blocks/cards/shop-card/CardSkeleton';
import { Box, Container, CssBaseline, Typography } from '@mui/material';
import NewCard from '../../blocks/cards/shop-card/NewCard';
import { fetchShopData, setFilterList, setFullList } from '../../../store/shopSlice';
import { useState } from 'react';

const ShopPage = () => {
  const dispatch = useDispatch();
  const { products, isLoaded, error } = useSelector((state) => state.shop);
  const newArray = Array.from(Array(20).keys());

  useEffect(() => {
    dispatch(fetchShopData());
  }, []);

  const handleFilter = (value) => {
    dispatch(setFilterList(value));
  };

  const handleFullList = () => {
    dispatch(setFullList());
  };

  return (
    <div>  
      <Box component="main" sx={{ pt: 0 }}>
        <CssBaseline />
        <Container maxWidth="xl">
          {isLoaded && error && (
            <Typography variant="h5" color="error">
              Error fetching data. Please try again later.
            </Typography>
          )}
           <Grid container spacing={{ xs: 2 }} columns={{ sm: 12 }}>
          {isLoaded
            ? products.map((item) => (
                <Grid xs={12} sm={6} md={4} lg={3} key={item._id}>
                  <NewCard item={item} />
                </Grid>
              ))
            : newArray.map((item, index) => (
                <Grid xs={12} sm={6} md={4} lg={3} key={index}>
                  <CardSkeleton />
                </Grid>
              ))}
            </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default ShopPage;
