import React, { useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import CardSkeleton from '../../../blocks/cards/shop-card/CardSkeleton';
import { Box, Container, CssBaseline } from '@mui/material';
import ActivityCard from '../../../blocks/cards/activity-card/ActivityCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartData, updateCart } from '../../../../store/cartSlice';

const UserCart = () => {
  const newArray = Array.from(Array(20).keys());

  const dispatch = useDispatch();
  const { cartItems, isLoaded, error } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch] );

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
              cartItems.map((item) => (
                <Grid xs={12} sm={6} key={item.product._id}>
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

