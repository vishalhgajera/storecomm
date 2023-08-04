import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';
import { Box, Button, ButtonGroup, CardActions, IconButton, Link } from '@mui/joy';
import { useCart } from '../../../../context/CartContext';


export default function ActivityCard(props) {
  const { fetchUpdateCart } = useCart();
  let item = !props.item.product ? {} : props.item.product;
  let qty = !props.item.qty ? 0 : props.item.qty;

  const cartHandler = (productId,qty) => {
    fetchUpdateCart(productId,qty)
  }

  return (
      <Card
        orientation="horizontal"
        variant="outlined"
        sx={{
          width: '100%',
          bgcolor: 'background.body',
          p: 1,
          // overflow: 'hidden',
        }}
      >
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
          </CardContent>
          <CardOverflow sx={{ p: "2px", mt: 'auto',bgcolor: 'background.level1',width:"150px" }}>
            <CardActions buttonFlex="1" sx={{ p: 0 }}>
              <ButtonGroup
                size="sm"
                variant="soft"
                orientation="horizontal"
                spacing={0}
                // sx={{ bgcolor: 'background.surface' ,}}
              >
                <IconButton  onClick={e=>cartHandler(item,qty+1)} > <AddIcon /> </IconButton>
                <Button > {qty} </Button>
                <IconButton disabled={qty===1}  onClick={e=>cartHandler(item,qty-1)} > <RemoveIcon /> </IconButton>
              </ButtonGroup>
            </CardActions>
          </CardOverflow>
        </Box>
        <Box sx={{
          p:0
          ,
          ml:'auto'
          }}>
          <Link
            onClick={e=>cartHandler(item._id,0)}
            color="danger"
            sx={{
              // boxShadow: '0 2px 1px 0 rgba(0 0 0 / 0.1)',
              // bgcolor: 'background.level1',
              position: 'absolute',
              borderRadius:"50%",
              top: '2px',
              right: '2px',
              p:'2px'
            }}
          >
            <ClearIcon />
          </Link>
        </Box>
      </Card>
  );
}
