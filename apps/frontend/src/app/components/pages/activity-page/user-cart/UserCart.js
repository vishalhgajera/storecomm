import React, { useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { Box } from '@mui/material';
import ActivityCard from '../../../blocks/cards/activity-card/ActivityCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartData, updateCart } from '../../../../store/cartSlice';
import CheckoutCard from '../../../blocks/cards/activity-card/CheckoutCard';

const UserCart = () => {

  const dispatch = useDispatch();
  const { cartItems, isLoaded, error } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch] );

  return (
    <div>
      <Box component="main" sx={{ pt: 0 }}>
          <Grid container spacing={{ xs: 2 }} columns={{ sm: 12 }}>
            <Grid xs={12} sm={6} lg={8}>
            {isLoaded &&
              cartItems.map((item) => (
                  <Box sx={{pb:1}} key={item.product._id}>
                    <ActivityCard item={item}  />
                  </Box>
                  ))}
            </Grid>
            <Grid xs={12} sm={6} lg={4}>
              {isLoaded &&
                <CheckoutCard allItem={cartItems}/>
              }
            </Grid>
          </Grid>
      </Box>
    </div>
  );
};

export default UserCart;

