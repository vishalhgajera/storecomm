import * as React from 'react';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import FormLabel from '@mui/joy/FormLabel';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {fetchAddress} from '../../../../store/addressSlice'

export default function AddressList() {

  const dispatch = useDispatch();
  const {addressList , isLoaded} = useSelector(state => state.address)
  useEffect(()=>{
    dispatch(fetchAddress)
  },[dispatch])

  if(isLoaded){
    console.log(addressList);
  }

  return (
<div>
      {/* <RadioGroup
        aria-label="platform"
        defaultValue="Website"
        overlay
        name="platform"
        sx={{
          flexDirection: 'row',
          gap: 2,
          [`& .${radioClasses.checked}`]: {
            [`& .${radioClasses.action}`]: {
              inset: -1,
              border: '3px solid',
              borderColor: 'primary.500',
            },
          },
          [`& .${radioClasses.radio}`]: {
            display: 'contents',
            '& > svg': {
              zIndex: 2,
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              bgcolor: 'background.surface',
              borderRadius: '50%',
            },
          },
        }}
      >
        {['H-501, Aashraya-9, new ranip, Ahmedabad', '123 Main Street, Cityville, USA', 'H-501, Main Street, Cityville, Ahmedabad'].map((value,index) => (
          <Sheet
            key={index}
            variant="outlined"
            sx={{
              borderRadius: 'md',
  
              boxShadow: 'sm',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1.5,
              p: 2,
              minWidth: 120,
            }}
          >
            <Radio id={index} value={index} checkedIcon={<CheckCircleRoundedIcon />} />
            <LocationOnIcon variant="soft" size="lg" />
            <FormLabel htmlFor={index}>{value}</FormLabel>
          </Sheet>
        ))}
      </RadioGroup> */}
</div>
  );
}