import { Box, IconButton, Typography } from '@mui/joy';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteAddress } from '../../../../store/addressSlice';
import { useDispatch } from 'react-redux';
import AddressModal from './AddressModal';
import { useState } from 'react';

export default function AddressCard(props) {
const [open, setOpen] = useState(false);
const {data} = props.data;
const dispatch = useDispatch();

const deleteHandler = (id) => {
  dispatch(deleteAddress(id));
}

  return (
  <Box sx={{ display: 'flex' }}>
    <div>
      <Typography level="title-lg">
       {data.firstName} {data.lastName}
      </Typography>
      <Typography level="body-sm">
         {data.address1}, {data.address2}
      </Typography>
      <Typography level="body-sm">
         {data.city} - {data.zip}, {data.state},{data.country}
      </Typography>
      <Typography level="body-sm">
        Contact No. : {data.contactNo}
      </Typography>
    </div>
    <div>
      <IconButton
        onClick={e => deleteHandler(data._id)}
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
    </div>
    <AddressModal data={{data, open, setOpen , title:'Edit Address'}} />
  </Box>  
  )
}
