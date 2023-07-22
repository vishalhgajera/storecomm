import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

export default function ProductCard() {
  return (
    <Card sx={{ height : '100%'}}>
      <Box sx={{height : '100%', display : 'flex', flexDirection:'column'}}>
      <CardMedia 
        sx={{height : '200px'}}
        image="https://source.unsplash.com/200x200/?mandala,art"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx = {{marginTop:'auto'}}>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      </Box>
    </Card>
  );
}