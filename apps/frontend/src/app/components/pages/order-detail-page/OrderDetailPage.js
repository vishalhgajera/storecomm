import React from 'react'
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { fetchOrderData } from '../../../store/orderSlice';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

export default function OrderDetailPage() {
   const orderId =  useParams();
   const dispatch = useDispatch();
   const { orderList } = useSelector((state) => state.order);
 
   const order = orderList[0];
   console.log(order);

   useEffect(() => {
     dispatch(fetchOrderData());
   }, [dispatch]);


   console.log(orderId);

  return (
    <React.Fragment>
  
    </React.Fragment>
  )
}
