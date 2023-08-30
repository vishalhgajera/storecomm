import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { fetchOrderById } from '../../../store/orderDetailSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '@mui/system';

export default function OrderDetailPage() {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { orderDetail, isLoaded } = useSelector((state) => state.orderDetail);

  console.log(orderDetail);
  console.log(orderId);

  useEffect(() => {
    dispatch(fetchOrderById(orderId));
  }, [dispatch]);

  const { products , totalAmount } = orderDetail;

  return (
    <Container maxWidth="xl" className="App">
      {isLoaded && products && (
        <List disablePadding>
          { products.map((item) => (
            <ListItem key={item._id} sx={{ py: 1, px: 0 }}>
              <ListItemText primary={item.productName} />
              <Typography variant="body2">{item.totalPrice}</Typography>
            </ListItem>
          ))}
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary="Total Amount With discount" />
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              {totalAmount}Rs
            </Typography>
          </ListItem>
        </List>
      )}
    </Container>
  );
}
