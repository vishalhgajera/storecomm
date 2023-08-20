import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Typography from '@mui/joy/Typography';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/joy';

export default function CheckoutCard(props) {

    const allItem = props.allItem;
    const price = allItem.reduce((b,a)=>a.product.price*a.qty + b,0);
    const discount = price*10/100; // suppose 10% discount in all item
    const totalPrice = price - discount;

  return (
    <Card
    variant="outlined"
      sx={{
        width: '100%',
        overflow: 'auto',
      }}
    >
      <CardContent sx={{ textAlign: 'center', alignItems: 'center' }}>
        <Typography>
          Price - {price} Rs
        </Typography>
        <Typography >
        -  Total Discount - {discount} Rs
        </Typography>
        <Typography >
        + Shipping Charge - 0 Rs
        </Typography>
        <Divider sx={{my:2}}/>
        <Typography fontSize="lg" fontWeight="lg" sx={{mb:2}}>
          Total Price - {totalPrice} Rs
        </Typography>
        <ButtonGroup
          variant="soft"
          aria-label="outlined primary button group"
          buttonFlex="0 1 200px"
          sx={{ width: '100%', justifyContent: 'center' }}
        >
          <Button>
            <Link to="/shop" style={{ color: 'inherit', textDecoration: 'none'}}><Typography >Add More product</Typography></Link>
          </Button>
          <Button> 
            <Link to="/checkout" style={{ color: 'inherit', textDecoration: 'none'}}><Typography >Checkout Now</Typography></Link>
          </Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}