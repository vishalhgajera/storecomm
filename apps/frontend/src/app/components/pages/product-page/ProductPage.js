import React, { useEffect } from 'react'
import { Container } from '@mui/material'
import { useParams } from "react-router-dom";
import ViewProduct from './ViewProduct';
import { useDispatch,useSelector } from 'react-redux';
import {fetchProductDetail} from '../../../store/productDetailSlice'

const ProductPage = () => {
const dispatch = useDispatch();
const {product,isLoaded} = useSelector((state) => state.productDetail)

const { productId } = useParams();
useEffect(() => {
  dispatch(fetchProductDetail(productId))
}, []);
  return (
    <div>
       <Container maxWidth="xl" className="App">
          {isLoaded && <ViewProduct data={product}></ViewProduct>}
        </Container>    
    </div>
  )
}

export default ProductPage