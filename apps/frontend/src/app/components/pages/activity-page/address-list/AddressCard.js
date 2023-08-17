import {
  Box,
  Card,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  Radio,
  Typography,
} from '@mui/joy';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteAddress } from '../../../../store/addressSlice';
import { useDispatch } from 'react-redux';
import AddressModal from './AddressModal';
import { useState } from 'react';

export default function AddressCard({ data, setPrimary }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteAddress(id));
  };
  const handleRadioChange = () => {
    setPrimary(data._id);
  };
  return (
    <Card variant="outlined" sx={{ width: 250 }}>
      <CardContent>
        <Typography level="title-lg">
          {data.firstName} {data.lastName}
        </Typography>
        <Typography level="body-sm">
          {data.address1}, {data.address2}
        </Typography>
        <Typography level="body-sm">
          {data.city} - {data.zip}, {data.state},{data.country}
        </Typography>
        <Typography level="body-sm">Contact No. : {data.contactNo}</Typography>
      </CardContent>
      <Divider sx={{ my: 2 }} />
      <CardActions>
        <Radio
          value={data._id}
          label="Use this Address for shipment"
          variant="soft"
          checked={data.primary}
          onChange={handleRadioChange}
          sx={{alignItems:'center'}}
        />
        <Box>
          <IconButton
            onClick={(e) => deleteHandler(data._id)}
            size="sm"
            variant="plain"
            color="neutral"
            sx={{ ml: 'auto', alignSelf: 'flex-start' }}
          >
            <DeleteIcon color="danger" />
          </IconButton>
          <IconButton
            onClick={(e) => setOpen(true)}
            size="sm"
            variant="plain"
            color="neutral"
            sx={{ ml: 'auto', alignSelf: 'flex-start' }}
          >
            <EditIcon color="danger" />
          </IconButton>
        </Box>
      </CardActions>
      <AddressModal data={{ data, open, setOpen, title: 'Edit Address' }} />
    </Card>
  );
}
