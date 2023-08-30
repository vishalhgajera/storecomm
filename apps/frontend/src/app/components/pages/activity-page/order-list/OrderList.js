import React from 'react'
import OrderCard from './OrderCard'
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrderData } from '../../../../store/orderSlice';
import { useEffect } from 'react';
import { Box } from '@mui/joy';

export default function OrderList() {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchOrderData());
    }, [dispatch] );
    const { orderList, isLoaded, error } = useSelector((state) => state.order);
    console.log(orderList);
    
  return (
    <div>
        {isLoaded && orderList && orderList.map(item => (
            <Box key={item._id}>
                <OrderCard item={item}></OrderCard>
            </Box>
        ))}
    </div>
  )
}
