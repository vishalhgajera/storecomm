import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Typography from '@mui/joy/Typography';

export default function CheckoutCard(props) {

    const allItem = props.allItem;
    const totalPrice = allItem.reduce((b,a)=>a.product.price*a.qty + b,0);
    console.log(totalPrice);

  return (
    <Card
      sx={{
        width: '100%',
        overflow: 'auto',
      }}
    >
      <CardContent sx={{ textAlign: 'center', alignItems: 'center' }}>
        <Typography fontSize="lg" fontWeight="lg">
          Titrle
        </Typography>
        <Typography mb={3} maxWidth="32ch">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Typography>
        <ButtonGroup
          variant="soft"
          aria-label="outlined primary button group"
          buttonFlex="0 1 200px"
          sx={{ width: '100%', justifyContent: 'center' }}
        >
          <Button>Buy</Button>
          <Button>Learn</Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}