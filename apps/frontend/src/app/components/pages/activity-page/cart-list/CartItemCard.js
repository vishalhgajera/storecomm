import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';
import { Box, ButtonGroup, IconButton } from '@mui/joy';
import { fetchUpdateCartData } from '../../../../store/cartSlice'; 


export default function CartItemCard(props) {
  const dispatch = useDispatch();
  let item = !props.item.product ? {} : props.item.product;
  const cartItems = useSelector((state) => state.cart.cartItems); // Access the cart state using useSelector
  let qty = cartItems.find((e) => e.product._id === item._id)?.qty || 0;

  const cartHandler = (product, proQty) => {
    dispatch(fetchUpdateCartData({ product, qty: proQty })); // Dispatch the action with the product and new quantity
  };
  
  return (
      <Card
      orientation="horizontal"
      variant="outlined" 
      sx={{ width: "100%", alignItems: "center" }} >
        <AspectRatio ratio="1" sx={{ minWidth: 100, borderRadius: '0' }}>
          <img
            src={item.images[0] ? item.images[0] : item.category?.image}
            srcSet={item.images[0] ? item.images[0] : item.category?.image}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <Box
          sx={{
            // py: 2,
            overflow:'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CardContent>
            <Typography fontWeight="md" textColor="success.plainColor" mb={0.5} noWrap>
              { item.title}
            </Typography>
            <Typography
              fontSize="md"
              fontWeight="lg"
            >
              <CurrencyRupeeIcon sx={{ fontSize: '16px' }} />
              {item.price} * {qty} ={' '}
              <CurrencyRupeeIcon sx={{ fontSize: '16px' }} /> {item.price * qty}
            </Typography>
            <Box sx={{mt:2}}>
                  <ButtonGroup
                    // orientation="vertical"
                    spacing={2}
                    variant="soft"
                    size="sm"
                    color="primary"
                    sx={{alignItems:"center"}}
                  >
                <IconButton  onClick={e=>cartHandler(item,qty+1)} sx={{ borderRadius: '50%' }}> <AddIcon /> </IconButton>
                <Typography fontWeight="md" textColor="success.plainColor">
                  {qty}
                </Typography>
                <IconButton disabled={qty===1}  onClick={e=>cartHandler(item,qty-1)} sx={{ borderRadius: '50%' }}> <RemoveIcon /> </IconButton>
              </ButtonGroup>
            </Box>
          </CardContent>
          </Box>
        <CardOverflow
        variant="soft"
        color="danger"
        sx={{
          px: 0.2,
          writingMode: 'vertical-rl',
          textAlign: 'center',
          fontSize: 'xs',
          fontWeight: 'xl',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          borderLeft: '1px solid',
          borderColor: 'divider',
          ml:"auto"
        }}
      >
          <IconButton sx={{ borderRadius: '50%' }} variant="plain" size="sm" color="danger" onClick={e=>cartHandler(item,0)}>
            <ClearIcon />
          </IconButton>
      </CardOverflow>
      </Card>
  );
}
