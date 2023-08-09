import * as React from 'react';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Box, List, ListItem, Radio, RadioGroup } from '@mui/joy';

export default function PaymentForm() {
  return (
    <Box>
      <RadioGroup
        aria-labelledby="example-payment-channel-label"
        overlay
        name="example-payment-channel"
        defaultValue="Paypal"
      >
        <List
          component="div"
          variant="outlined"
          orientation="vertical"
        >
          <ListItem>
            <Box sx={{width: '100%'}}>
            <Radio value="card" label="Credit Card" />
            <Card
            
              variant="outlined"
              sx={{
                my:2,
                maxHeight: 'max-content',
                maxWidth: '100%',
                mx: 'auto',
                // to make the demo resizable
                overflow: 'auto',
                // resize: 'horizontal',
              }}
            >
              <Typography level="title-lg" startDecorator={<InfoOutlined />}>
                Add new card
              </Typography>
              <Divider inset="none" />
              <CardContent
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
                  gap: 1.5,
                }}
              >
                <FormControl sx={{ gridColumn: '1/-1' }}>
                  <FormLabel>Card number</FormLabel>
                  <Input endDecorator={<CreditCardIcon />} />
                </FormControl>
                <FormControl>
                  <FormLabel>Expiry date</FormLabel>
                  <Input endDecorator={<CreditCardIcon />} />
                </FormControl>
                <FormControl>
                  <FormLabel>CVC/CVV</FormLabel>
                  <Input endDecorator={<InfoOutlined />} />
                </FormControl>
                <FormControl sx={{ gridColumn: '1/-1' }}>
                  <FormLabel>Card holder name</FormLabel>
                  <Input placeholder="Enter cardholder's full name" autoComplete="Cardholder's full name" />
                </FormControl>
                <Checkbox label="Save card" sx={{ gridColumn: '1/-1', my: 1 }} />
                <CardActions sx={{ gridColumn: '1/-1' }}>
                  <Button variant="solid" color="primary">
                    Submit
                  </Button>
                </CardActions>
              </CardContent>
              </Card>
            </Box>
          </ListItem>
          <ListItem>
            <Box sx={{width: '100%'}}>
            <Radio value="Paypal" label="Paypal" />
            <Card
              variant="outlined"
              sx={{
                my:2,
                maxHeight: 'max-content',
                width: '100%',
                mx: 'auto',
                // to make the demo resizable
                overflow: 'auto',
                // resize: 'horizontal',
              }}
            >
              <CardContent
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
                  gap: 1.5,
                }}
              >
                <FormControl sx={{ gridColumn: '1/-1' }}>
                  <FormLabel>Paypal Email</FormLabel>
                  <Input placeholder="Paypal Email" autoComplete="email" />
                </FormControl>
                <Checkbox label="Save Paypal" sx={{ gridColumn: '1/-1', my: 1 }} />
                <CardActions sx={{ gridColumn: '1/-1' }}>
                  <Button variant="solid" color="primary">
                    Submit
                  </Button>
                </CardActions>
              </CardContent>
              </Card>
            </Box>
          </ListItem>
          <ListItem>
            <Box sx={{width: '100%'}}>
              <Radio value="cod" label="Cash On Delhivery" />
            </Box>
          </ListItem>
        </List>
      </RadioGroup>
    </Box>
  );
}
