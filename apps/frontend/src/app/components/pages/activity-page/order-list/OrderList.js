import React from 'react'
import OrderCard from './OrderCard'
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrderData } from '../../../../store/orderSlice';
import { useEffect } from 'react';
import { Box } from '@mui/joy';

export default function OrderList() {
    const dispatch = useDispatch();
    const { orderList, isLoaded, error } = useSelector((state) => state.order);
  
    useEffect(() => {
      dispatch(fetchOrderData());
    }, [dispatch] );
    
  return (
    <div>
        {isLoaded && orderList.map(item => (
            <Box key={item._id}>
                <OrderCard item={item}></OrderCard>
            </Box>
        ))}
    </div>
  )
}
