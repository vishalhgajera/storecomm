import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAddressList } from '../../../../store/addressSlice';
import AddressModal from './AddressModal';
import AddressCard from './AddressCard';
import { Box, Card, CardContent, IconButton } from '@mui/joy';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

export default function AddressList() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { addressList, isLoaded } = useSelector((state) => state.address);
  useEffect(() => {
    dispatch(fetchAddressList());
  }, [dispatch]);

  console.log(addressList);

  return (
    <div>
      {isLoaded && (
        <Box>
          <Box
            sx={{
              flexDirection: 'row',
              flexWrap:'wrap',
              gap: 2,
              display:"flex"
            }}
          >
            <Card variant="outlined" sx={{ width: 250 }}>
              <CardContent>
                <IconButton
                  variant="outlined"
                  color="neutral"
                  size='lg'
                  sx={{margin: 'auto'}}
                  onClick={() => setOpen(true)}
                >
                  <AddIcon />
                </IconButton>
              </CardContent>
            </Card>
            {addressList.map((data, index) => (
              <Sheet
                key={data._id}
                variant="outlined"
                sx={{
                  borderRadius: 'md',

                  boxShadow: 'sm',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1.5,
                  p: 2,
                  width: 250,
                }}
                >
                <AddressCard data={{data,setOpen}}/>
              </Sheet>
            ))}
          </Box>
          <AddressModal data={{ open, setOpen }} />
        </Box>
      )}
    </div>
  );
}
