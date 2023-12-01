import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import CardSkeleton from './shop-card/CardSkeleton';
import { Box, Container, CssBaseline, Typography } from '@mui/material';
import ShopCard from './shop-card/ShopCard';
import { fetchProductData } from '../../../store/productSlice';
import Filterbar from './sidebar/Filterbar';
import Stack from '@mui/joy/Stack';
import Search from './sidebar/Search';
import { Sheet } from '@mui/joy';
import Pagination from '@mui/material/Pagination';



function ShopPagination() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      {/* <Typography>Page: {page}</Typography> */}
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
  );
}



const ShopPage = () => {
  const dispatch = useDispatch();
  const { productList, isLoaded, error } = useSelector(
    (state) => state.products
  );
  const newArray = Array.from(Array(20).keys());

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  return (
    <div>
      <Box component="main" sx={{ pt: 0 }}>
        <CssBaseline />
        <Container maxWidth="xl">
          {isLoaded && error && (
            <Typography variant="h5" color="error">
              Error fetching data. Please try again later.
            </Typography>
          )}
          <Stack direction="row" spacing={2}>
            <Box  sx={{maxWidth:300}}>
              <Sheet sx={{mb:3}}>
                  <Search />
              </Sheet>
              <Sheet sx={{mb:3}}>
                <Filterbar />
              </Sheet>
            </Box>
            <Grid container spacing={{ xs: 2 }} columns={{ sm: 12 }}>
              {isLoaded
                ? productList.map((item) => (
                    <Grid xs={12} sm={6} md={4} lg={3} key={item._id}>
                      <ShopCard item={item} />
                    </Grid>
                  ))
                : newArray.map((item, index) => (
                    <Grid xs={12} sm={6} md={4} lg={3} key={index} sx={{width:'100%'}}>
                      <CardSkeleton />
                    </Grid>
                  ))}
                  <ShopPagination/>
            </Grid>
          </Stack>
        </Container>
      </Box>
    </div>
  );
};

export default ShopPage;
