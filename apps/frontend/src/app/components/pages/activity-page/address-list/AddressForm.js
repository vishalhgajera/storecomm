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
import { updateAddressList } from '../../../../store/addressSlice';
import { useDispatch } from 'react-redux';

export default function AddressForm(props) {
  const dispatch = useDispatch();
  const {setOpen} = props.data;
  const title = props.data.title || "Add New Address";
  const data = props.data.data || {firstName:'',lastName:'',contactNo:'',address1:'',address2:'',zip:'',state:'',city:'',country:''}
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formDataObject = Object.fromEntries(formData);
    if(data._id){
      formDataObject._id = data._id;
    }
    dispatch(updateAddressList(formDataObject));
    setOpen(false);
  }

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
       {title}
      </Typography>
      <Divider inset="none" />
      <CardContent
       component="form"
       onSubmit={submitHandler}
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
            defaultValue={data.firstName}
            autoComplete="given-name" />
        </FormControl>

        <FormControl required>
          <FormLabel>Last name</FormLabel>
          <Input
            id="lastName"
            name="lastName"
            defaultValue={data.lastName}
            autoComplete="family-name" />
        </FormControl>

        <FormControl  sx={{ gridColumn: '1/-1' }} required>
          <FormLabel>Contact Number</FormLabel>
          <Input 
            id="contacteNo"
            name="contactNo"
            type="tel"
            defaultValue={data.contactNo}
            required
            autoComplete="tel" />
        </FormControl>
        <Divider inset="none"  sx={{ gridColumn: '1/-1' ,mt:1}} />
        <FormControl sx={{ gridColumn: '1/-1' }}  required>
          <FormLabel>Address line 1</FormLabel>
          <Input 
            id="address1"
            name="address1"
            autoComplete="shipping address-line1"
            defaultValue={data.address1}
            />
        </FormControl>

        <FormControl sx={{ gridColumn: '1/-1' }}  required>
          <FormLabel>Address line 2</FormLabel>
          <Input 
            id="address2"
            name="address2"
            autoComplete="shipping address-line2"
            defaultValue={data.address2}
            />
        </FormControl>

        <FormControl  required>
          <FormLabel>City</FormLabel>
          <Input 
            id="city"
            name="city"
            defaultValue={data.city}
            autoComplete="shipping address-level2" />
        </FormControl>

        <FormControl>
          <FormLabel>State/Province/Region</FormLabel>
          <Input
            id="state"
            name="state"
            defaultValue={data.state}
            label="State/Province/Region"/>
        </FormControl>

        
        <FormControl  required>
          <FormLabel>Zip / Postal code</FormLabel>
          <Input 
           id="zip"
           name="zip"
           defaultValue={data.zip}
           autoComplete="shipping postal-code" />
        </FormControl>

        <FormControl>
          <FormLabel>Country</FormLabel>
          <Input
            id="country"
            name="country"
            defaultValue={data.country}
            autoComplete="shipping country"/>
        </FormControl>
        <Checkbox label="Use this address for payment details" sx={{ gridColumn: '1/-1', my: 1 }} />
        <CardActions sx={{ gridColumn: '1/-1' }}>
          <Button variant="solid" color="primary" type='submit'>
            Submit
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}