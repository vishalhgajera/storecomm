import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import Drawer from '@mui/material/Drawer';
import { Badge, Divider } from '@mui/material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ChevronRightIcon from '@mui/icons-material/ChevronLeft';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/joy';
import { useEffect } from 'react';
import ActivityCard from '../../../blocks/cards/activity-card/ActivityCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartData, updateCart } from '../../../../store/cartSlice';

export default function CartDrawer() {
    const anchor = 'right';
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const { cartItems, isLoaded, error } = useSelector((state) => state.cart);
  
    useEffect(() => {
      dispatch(fetchCartData());
    }, [dispatch] );

    const toggleDrawer = (value) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(value);
    };

    const list = (anchor) => (
        <Sheet
            sx={{
            height: anchor === 'top' || anchor === 'bottom' ? 'auto' : "100%",
            width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
            role="presentation"
        ><Box display={'flex'} alignItems={'center'} p={1}>
                <IconButton
                    height={50}
                    size="large"
                    color="inherit"
                    onClick={toggleDrawer(false)} sx={{ transform: 'rotate(180deg)' }}>
                    <ChevronRightIcon />
                </IconButton>
                <Typography variant="h6" component="h5" pl={2}>
                    Cart List
                </Typography>
            </Box>
            <Divider />
            <Box>
                {isLoaded &&
                cartItems.map((item) => (
                    <Box sx={{m:1}} key={item.product._id}>
                      <ActivityCard item={item} />
                    </Box>
                ))}
            </Box>
        </Sheet>
    );

    return (
        <React.Fragment>
            <IconButton onClick={toggleDrawer(true)} size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={cartItems.length} color="error">
                    <LocalGroceryStoreIcon />
                </Badge>
            </IconButton>
            <Drawer
                anchor={anchor}
                open={open}
                onClose={toggleDrawer( false)}
            >
                {list(anchor)}
            </Drawer>
        </React.Fragment>
    );
}