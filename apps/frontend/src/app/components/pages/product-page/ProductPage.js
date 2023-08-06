import React, { useEffect } from 'react'
import { Container } from '@mui/material'
import { useParams } from "react-router-dom";
import { useProduct } from '../../../context/ProductContext';
import ViewProduct from './ViewProduct';


const ProductPage = () => {

const { productId } = useParams();
const { fetchProduct, product, isLoaded } = useProduct();
useEffect(() => {
    fetchProduct(productId);
}, []);
// console.log(products);
// console.log('productId', productId);
  return (
    <div>
       <Container maxWidth="xl" className="App">
          {isLoaded && <ViewProduct data={product}></ViewProduct>}
        </Container>    
    </div>
  )
}

export default ProductPage