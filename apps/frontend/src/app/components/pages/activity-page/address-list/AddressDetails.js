import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAddressList, primaryAddress } from '../../../../store/addressSlice';
import AddressCard from './AddressCard';
import { Box, Card, CardContent, IconButton, RadioGroup } from '@mui/joy';
import AddIcon from '@mui/icons-material/Add';
import AddressModal from './AddressModal';

export default function AddressDetails() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { addressList, isLoaded } = useSelector((state) => state.address);

  useEffect(() => {
    dispatch(fetchAddressList());
  }, [dispatch]);

  const setPrimary = (addressId) => {
    dispatch(primaryAddress(addressId));
  };

  return (
    <div>
      {isLoaded && (
        <Box>
          <RadioGroup defaultValue="outlined" name="radio-buttons-group">
            <Box
              sx={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 2,
                display: 'flex',
              }}
            >
              <Card variant="outlined" sx={{ width: 250 }}>
                <CardContent>
                  <IconButton
                    variant="outlined"
                    color="neutral"
                    size="lg"
                    sx={{ margin: 'auto' }}
                    onClick={() => setOpen(true)}
                  >
                    <AddIcon />
                  </IconButton>
                </CardContent>
              </Card>
              {addressList.map((data) => (
                <AddressCard key={data._id} data={data} setPrimary={setPrimary} />
              ))}
            </Box>
          </RadioGroup>
          <AddressModal data={{ open, setOpen }} />
        </Box>
      )}
    </div>
  );
}
