import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FormControlLabel from '@mui/material/FormControlLabel';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import ProductSummary from './ProductSummary';
import PreviewBox from './PreviewBox';

export default function ViewProduct(props) {
  let data = props.data
  return (
    <div>
        <Box >
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <PreviewBox image={data.images}></PreviewBox>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>

              <Card sx={{
                // height: "175px", 
                textAlign: "start"
              }}>
                <CardContent sx={{ padding: '20px 10px 5px !important' }}>
                  {/* <LableTag tag={item.category.name}></LableTag> */}
                  <Box minHeight="60px">
                    <Typography variant="body2" fontSize={35} sx={{ mb: 2 }}>
                      {data.title}
                    </Typography>
                    <Typography variant="body2" color="black" fontSize={12} sx={{ mb: 2 }}>
                      {data.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dignissimos ab in fugiat voluptates iure eaque cumque, quibusdam sit accusamus!
                    </Typography>
                  </Box>
                  <Box>
                    <Typography gutterBottom variant="body2" fontSize={16} fontWeight="bolder" sx={{ mb: 1 }}>
                      Price : {data.price} rs
                    </Typography>
                    <Typography variant="body2" color="white" sx={{
                      fontSize: "14px", fontWeight: "600", padding: "0px 0px",
                      color: "secondary.main"
                    }}>
                      15% Off
                    </Typography>
                  </Box>
                </CardContent>
                <Box sx={{
                  display: "block",
                  alignItems: 'center',
                  justifyContent: "space-between",
                  paddingLeft: '8px',
                }}>

                    <FormControlLabel control={<Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite color='secondary' />} />}
                      label="" sx={{ margin: "0 !important", top: "0px", right: "0px" }} />
                    <FormControlLabel control={<Checkbox
                      icon={<ShoppingCartOutlinedIcon />}
                      checkedIcon={<ShoppingCartIcon />} />}
                      label="" sx={{ margin: "0 !important", padding: 0 }} />
                    {/* <OpenIconSpeedDial /> */}
                </Box>
                <Box sx={{p:1}}>
                  <Button variant="contained" disableElevation sx={{width:"100%"}}>
                     Book Order Now
                    </Button>
                </Box>
              </Card>
              <Box mt={2}>
                <ProductSummary />
              </Box>
            </Grid>
          </Grid>
      </Box>
    </div>
  );
}

