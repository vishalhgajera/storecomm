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

export default function AddressCard() {
  return (
    <Card
      variant="outlined"
      sx={{
        maxHeight: 'max-content',
        maxWidth: '100%',
        mx: 'auto',
        // to make the demo resizable
        overflow: 'auto',
        // resize: 'horizontal',
      }}
    >
      <Typography level="title-lg" startDecorator={<InfoOutlined />}>
        Add new Address
      </Typography>
      <Divider inset="none" />
      <CardContent
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
          gap: 1.5,
        }}
      >
        <FormControl required>
          <FormLabel>First name</FormLabel>
          <Input 
            id="firstName"
            name="firstName"
            autoComplete="given-name" />
        </FormControl>

        <FormControl required>
          <FormLabel>Last name</FormLabel>
          <Input
            id="lastName"
            name="lastName"
            autoComplete="family-name" />
        </FormControl>

        <FormControl sx={{ gridColumn: '1/-1' }}  required>
          <FormLabel>Address line 1</FormLabel>
          <Input 
            id="address1"
            name="address1"
            autoComplete="shipping address-line1"
            />
        </FormControl>

        <FormControl sx={{ gridColumn: '1/-1' }}  required>
          <FormLabel>Address line 2</FormLabel>
          <Input 
            id="address2"
            name="address2"
            autoComplete="shipping address-line2"
            />
        </FormControl>

        <FormControl  required>
          <FormLabel>City</FormLabel>
          <Input 
            id="city"
            name="city"
            autoComplete="shipping address-level2" />
        </FormControl>

        <FormControl>
          <FormLabel>State/Province/Region</FormLabel>
          <Input
            id="state"
            name="state"
            label="State/Province/Region"/>
        </FormControl>

        
        <FormControl  required>
          <FormLabel>Zip / Postal code</FormLabel>
          <Input 
           id="zip"
           name="zip"
           autoComplete="shipping postal-code" />
        </FormControl>

        <FormControl>
          <FormLabel>Country</FormLabel>
          <Input
            id="country"
            name="country"
            autoComplete="shipping country"/>
        </FormControl>
        <Checkbox label="Use this address for payment details" sx={{ gridColumn: '1/-1', my: 1 }} />
        <CardActions sx={{ gridColumn: '1/-1' }}>
          <Button variant="solid" color="primary">
            Submit
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}