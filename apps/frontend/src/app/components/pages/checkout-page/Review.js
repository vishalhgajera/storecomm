import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartData } from '../../../store/cartSlice'; 
import { useEffect } from 'react';
import { fetchAddressList } from '../../../store/addressSlice';


export default function Review() {

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { addressList } = useSelector((state) => state.address);

  useEffect(() => {
    dispatch(fetchAddressList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch] );

const price = cartItems.reduce((b,a)=>a.product.price*a.qty + b,0);
const discount = price*10/100;
const totalPrice = price - discount + 99;
const address = addressList[0];

const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartItems.map((item) => (
          <ListItem key={item._id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={item.product.title} secondary={item.product.description} />
            <Typography variant="body2">{item.product.price * item.qty}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          {totalPrice}Rs
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography level="title-lg">
          {address.firstName} {address.lastName}
          </Typography>
          <Typography level="body-sm">
            {address.address1}, {address.address2}
          </Typography>
          <Typography level="body-sm">
            {address.city} - {address.zip}, {address.state},{address.country}
          </Typography>
          <Typography level="body-sm">
            Contact No. : {address.contactNo}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
