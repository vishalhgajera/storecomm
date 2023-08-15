import {Box, Container, CssBaseline } from '@mui/material'
import React from 'react'
import Banner from './Banner'
import AddressList from '../activity-page/address-list/AddressList'

function HomePage() {
  return (
    <Box component="main" sx={{ pt: 0 }}>
      <CssBaseline />
      <Container  maxWidth="xl">
        <Banner/>
        <AddressList/>
      </Container>
    </Box>
  )
}

export default HomePage


