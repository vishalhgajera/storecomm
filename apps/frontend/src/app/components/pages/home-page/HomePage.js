import {Box, Container, CssBaseline } from '@mui/material'
import React from 'react'
import Banner from './Banner'

function HomePage() {
  return (
    <Box component="main" sx={{ pt: 0 }}>
      <CssBaseline />
      <Container  maxWidth="xl">
        <Banner/>
      </Container>
    </Box>
  )
}

export default HomePage


