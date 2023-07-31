import * as React from 'react';
import Card from '@mui/joy/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import { Box, CardContent } from '@mui/material'

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: 'darkorange',
  },
  '& .MuiRating-iconHover': {
    color: 'orange',
  },
});


export default function ShopCard(prop) {

  let item = prop.item;

  return (
    <Card sx={{ height : '100%', p:0,overflow:'hidden'}}>
      <Sheet sx={{height : '100%', display : 'flex', flexDirection:'column'}}>
      <CardMedia 
        sx={{height : '200px'}}
        image={item.category.image}
        title="green iguana"
      />
      <CardContent>
            <Box minHeight="60px">
              <Link to={`/product/${item._id}`} style={{
                color: '#000',
                textDecoration:'none'
               }}
              >
              <Typography variant="body2" fontSize={18} 
              sx={{
                whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
               }}
                >
                {item.title}
              </Typography>
              </Link> 
              <Typography variant="body2" fontSize={12} sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {item.description}
              </Typography>
            </Box>
            <Box>
              <Typography gutterBottom variant="body2" fontSize={22} fontWeight="bolder" display={'flex'} alignItems={'center'} >
                <CurrencyRupeeIcon fontSize="string" sx={{ mb: "0px" }} /> {item.price}
              </Typography>
              <Typography variant="body2" sx={{
                fontSize: "14px", fontWeight: "600", padding: "0px 0px"
              }}>
                {(item.price/2).toString().slice(0,2)}% Off
              </Typography>
            </Box>
      </CardContent>
   
      <CardActions sx = {{marginTop:'auto'}}>
      <Box sx={{
          display: "flex",
          alignItems: 'center',
          justifyContent: "space-between",
          paddingLeft: '8px',
          width:'100%'
        }}>
          <StyledRating
            name="customized-color"
            size="small"
            defaultValue={4.5}
            getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
            precision={0.5}
            readOnly
            icon={<StarIcon fontSize="inherit" />}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
          />
            <Box sx={{backgroundColor:'#ffffff73', borderRadius:'2rem',px:1}} >
            <FormControlLabel control={<Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite color='secondary' />} />}
              label="" sx={{ margin: "0 !important", top: "0px", right: "0px" }} />
            <FormControlLabel control={<Checkbox
              checked={item.qty > 0 ? true : false}
              icon={<ShoppingCartOutlinedIcon />}
              checkedIcon={<ShoppingCartIcon />} />}
              label="" sx={{ margin: "0 !important", padding: 0 }} />
            </Box>
            
            {/* <OpenIconSpeedDial /> */}
        </Box>
      </CardActions>
      </Sheet>
    </Card>
  );
}