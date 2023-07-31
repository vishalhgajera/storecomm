import React from 'react'
import ActivityTabs2 from './ActivityTabs2'
import {Box, Container, CssBaseline } from '@mui/material'

const ActivityPage = () => {
  return (
    <div>
    <Box component="main" sx={{ pt: 0 }}>
      <CssBaseline />
      <Container  maxWidth="xl">
        <ActivityTabs2/>
      </Container>
    </Box>
    </div>
  )
}

export default ActivityPage
