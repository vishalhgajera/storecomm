import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';
import { Box, Button, ButtonGroup, CardActions, IconButton, Link } from '@mui/joy';

export default function ActivityCard(props) {
  let item = props.item;
  let qty = item.qty | 5;
  return (
      <Card
        orientation="horizontal"
        variant="outlined"
        sx={{
          width: '100%',
          bgcolor: 'background.body',
          // p: 0,
          // overflow: 'hidden',
        }}
      >
        <AspectRatio ratio="1" sx={{ minWidth: 120, borderRadius: '0' }}>
          <img
            src={item.category.image}
            srcSet={item.category.image}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <Box
          sx={{
            // py: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CardContent>
            <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
              {item.title.length > 18 && item.title.substring(0, 18) + '...'}
              {item.title.length <= 18 && item.title}
            </Typography>
            <Typography
              fontSize="md"
              fontWeight="lg"
              sx={{ mt: 1 }}
              endDecorator
            >
              <CurrencyRupeeIcon sx={{ fontSize: '16px' }} />
              {item.price} * {qty} ={' '}
              <CurrencyRupeeIcon sx={{ fontSize: '16px' }} /> {item.price * qty}
            </Typography>
          </CardContent>
          <CardOverflow sx={{ p: 1, mt: 'auto',bgcolor: 'background.level1' }}>
            <CardActions buttonFlex="1" sx={{ p: 0 }}>
              <ButtonGroup
                variant="outlined"
                sx={{ bgcolor: 'background.surface' }}
              >
                <IconButton>
                  <AddIcon />
                </IconButton>
                <Button> {qty} </Button>
                <IconButton>
                  <RemoveIcon />
                </IconButton>
              </ButtonGroup>
            </CardActions>
          </CardOverflow>
        </Box>
        <Box sx={{
          p:0
          ,
          ml:'auto'
          }}>
          <Link
            color="danger"
            sx={{
              // boxShadow: '0 2px 1px 0 rgba(0 0 0 / 0.1)',
              // bgcolor: 'background.level1',
              position: 'absolute',
              borderRadius:"50%",
              top: '2px',
              right: '2px',
              p:'2px'
            }}
          >
            <ClearIcon />
          </Link>
        </Box>
      </Card>
  );
}
