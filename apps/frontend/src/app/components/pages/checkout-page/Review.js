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

export default function Review(props) {
  const {payment,setOrderData} = props
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { addressList } = useSelector((state) => state.address);
  const status = "pending";

  useEffect(() => {
    dispatch(fetchAddressList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch] );


const orderedProduct = cartItems.map((x) => ({
  _id: x.product._id,
  productName: x.product.title,
  quantity: x.qty,
  unitPrice: x.product.price,
  totalPrice: (x.product.price - x.product.price * (10 / 100))* x.qty,
  discount: x.product.price * (10 / 100),
}));

const totalAmount = orderedProduct.reduce((b,a)=>a.totalPrice + b,0).toFixed(2);

const address = addressList.filter((x)=> x.primary)[0];
const payments = payment || "cod"; //for testing purpose, update needed

useEffect(() => {
  setOrderData({paymentType:payments,userAddress:address,totalAmount,products:orderedProduct,status});
}, []);

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
          <ListItemText primary="Total Amount With discount" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {totalAmount}Rs 
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
            {payments}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
