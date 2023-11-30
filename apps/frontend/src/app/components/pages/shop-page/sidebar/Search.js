import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import Stack from '@mui/joy/Stack';
import Autocomplete from '@mui/joy/Autocomplete';
import { fetchCategories } from '../../../../store/categorySlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function Search() {

    const {allCategories} = useSelector((state)=> state.categories)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchCategories());
    },[dispatch])


  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <FormControl id="free-solo-demo">
        <Autocomplete
          freeSolo
          placeholder="Type anything"
          options={allCategories.map((category) => category.name)}
        />
      </FormControl>
    </Stack>
  );
}