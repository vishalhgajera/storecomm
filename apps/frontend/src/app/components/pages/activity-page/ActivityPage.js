import React from 'react'
import ActivityTabs from './ActivityTabs'
import {Box, Container, CssBaseline } from '@mui/material'

const ActivityPage = () => {
  return (
    <div>
    <Box component="main" sx={{ pt: 0 }}>
      <CssBaseline />
      <Container  maxWidth="xl">
        <ActivityTabs/>
      </Container>
    </Box>
    </div>
  )
}

export default ActivityPage
