import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Box from '@mui/joy/Box';
import CardCover from '@mui/joy/CardCover';
import IconButton from '@mui/joy/IconButton';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Visibility from '@mui/icons-material/Visibility';
import CardActions from '@mui/joy/CardActions';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Checkbox } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import { NavLink } from 'react-router-dom';
import CardModal from './CardModal';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useCart } from '../../../../context/CartContext';

const StyledRating = styled(Rating)({
  paddingTop: '10px',
  '& .MuiRating-iconFilled': {
    color: 'darkorange',
  },
  '& .MuiRating-iconHover': {
    color: 'orange',
  },
});

export default function NewCard(props) {
  const { fetchUpdateCart } = useCart();
  const [open, setOpen] = React.useState(false);

  const modalHandler = (param) => {
    setOpen(param);
  };

  const cartHandler = (productId,qty) => {
    fetchUpdateCart(productId,qty)
  }

  let item = props.item;
  return (
    <Card
      sx={{
        width: '100%',
        boxShadow: 'lg',
        overflow: 'hidden',
        height: '100%',
        pt:0,
      }}
    >
      <CardModal data={{ item, open, setOpen: modalHandler }} />
      <CardOverflow sx={{ position: 'relative', p: 0 }}>
        <AspectRatio ratio="4/3">
          <figure>
            <img
              src={item.category.image}
              srcSet={item.category.image}
              loading="lazy"
              alt="Yosemite by Casey Horner"
            />
          </figure>
        </AspectRatio>
        <CardCover
          className="gradient-cover"
          sx={{
            '&:hover, &:focus-within': {
              opacity: 1,
            },
            borderRadius: '0',
            zIndex: 2,
            opacity: 0,
            height: '100%',
            width: '100%',
            transition: '0.1s ease-in',
            background:
              'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
          }}
        >
          {/* The first box acts as a container that inherits style from the CardCover */}
           {/* <Box> */}
             <Box
               sx={{
                 p: 2,
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'end !important',
                 justifyContent:'end !important',
                 gap: 0,
                 width:'auto !important',
                 flexGrow: 1,
               }}
             >
               <Checkbox
                 icon={
                   <FavoriteBorderIcon
                     sx={{
                       fontWeight: 'md',
                       color: 'white',
                     }}
                   />
                 }
                 checkedIcon={
                   <Favorite
                     sx={{
                       fontWeight: 'md',
                       color: 'red',
                     }}
                   />
                 }
               />
               <IconButton
                 size="sm"
                 variant="plain"
                 color="primary.solid"
                 sx={{p: '9px' }}
                 onClick={(e) => modalHandler(true)}
               >
                 <Visibility
                   sx={{
                     fontWeight: 'md',
                     color: 'white',
                     '&:hover': { color: 'lightgrey' },
                   }}
                 />
               </IconButton>
             </Box>
           {/* </Box> */}
        </CardCover>
      </CardOverflow>
      <CardContent>
        <NavLink to={`/product/${item._id}`} style={{ textDecoration: 'none' }}>
          <Typography
            href={`/product/${item._id}`}
            fontWeight="xl"
            color="neutral"
            textColor="text.primary"
            endDecorator={<ArrowOutwardIcon />}
          >
            {item.title}
          </Typography>
        </NavLink>

        <Typography level="body3">{item.description}</Typography>

        <Typography
          fontSize="xl"
          fontWeight="xl"
          sx={{ mt: 1 }}
          startDecorator={<CurrencyRupeeIcon />}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Lowest price
            </Chip>
          }
        >
          {item.price}
        </Typography>
        <Typography level="body2">
          (Only <b>7</b> left in stock!)
        </Typography>
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
      </CardContent>
      <CardOverflow sx={{ bgcolor: 'background.level1' }}>
        <CardActions buttonFlex="1">
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              href={`/product/${item._id}`}
              fontWeight="xl"
              color="neutral"
              textColor="text.primary"
            >
              Add To Cart
            </Typography>

            <IconButton sx={{ bgcolor: 'background.level2' }} onClick={e => cartHandler(item._id,1)}>
              <Checkbox
                icon={
                  <ShoppingCartOutlinedIcon
                    sx={{
                      fontWeight: 'md',
                    }}
                  />
                }
                checkedIcon={
                  <ShoppingCartIcon
                    sx={{
                      fontWeight: 'md',
                      color: 'neutral.900',
                    }}
                  />
                }
              />
            </IconButton>
          </Box>
        </CardActions>
      </CardOverflow>
    </Card>
  );
}
