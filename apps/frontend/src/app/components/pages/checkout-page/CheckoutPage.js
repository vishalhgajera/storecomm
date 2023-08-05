import React from 'react'
import Checkout from './Checkout'
import { Container } from '@mui/material'

const CheckoutPage = () => {
  return (
    <div>
      <Container maxWidth="md" className="App">
          <Checkout/> 
      </Container> 
    </div>
  )
}

export default CheckoutPage
