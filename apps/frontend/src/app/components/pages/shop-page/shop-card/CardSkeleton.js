import { Box, CardContent, Skeleton } from '@mui/material'
import Card from '@mui/joy/Card';
import React from 'react'

const CardSkeleton = () => {
  return (
    <Box>
    <Card
      className="ProductList"
      elevation={2}
      sx={{ width: '100%', position: 'relative', p:0,overflow:'hidden', }}
    >
      <Box>
        <Skeleton
          sx={{ height: 200 }}
          animation="wave"
          variant="rectangular"
        />
      </Box>
      <Box>
        <CardContent>
          <Box minHeight="60px">
            <Skeleton
              animation="wave"
              height={20}
              width="80%"
              sx={{ mb: 1 }}
            />
            <Skeleton animation="wave" height={10} width="100%" />
          </Box>
          <Box>
            <Skeleton animation="wave" height={18} width="50%" />
            <Skeleton
              animation="wave"
              height={10}
              width="40%"
              sx={{ my: 1 }}
            />
            <Skeleton
              animation="wave"
              height={12}
              width="60%"
              sx={{ mt: 2 }}
            />
          </Box>
        </CardContent>
      </Box>
    </Card>
  </Box>
  )
}

export default CardSkeleton
