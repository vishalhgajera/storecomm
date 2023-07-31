import React from 'react'
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';


const PreviewBox = (props) => {
    // console.log(props);
let image =  props.image
const [value, setValue] = useState(null);
  return (
    <div>
    <Card sx={{ width: "100%" }}>
      <CardMedia
        component="img"
        image={value ? value : (image?image[0]:"./images/Product9.jpg")}
        alt="Nicola Sturgeon on a TED talk stage"
      />

      <CardContent sx={{ display: "flex", justifyContent: 'center' }}>
        <FormControl onChange={e => setValue(e.target.value)} >
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            {image.map((image=>(
            <FormControlLabel key={image} value={image?image:"./images/Product9.jpg"}
               control={<Radio
                icon={<Avatar
                  variant="square"
                  alt="Shop Pro"
                  src={image?image:"./images/Product9.jpg"}
                  sx={{ m: 1, width: 60, height: 60 }}
                />}
                checkedIcon={<Avatar
                  variant="square"
                  alt="Shop Pro"
                  src={image?image:"./images/Product9.jpg"}
                  sx={{ border: "4px solid #e1d6da", m: 1, width: 60, height: 60, transform: "scale(1.25)" }}
                />}
              />}
            />
            )))}
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
    </div>
  )
}

export default PreviewBox
