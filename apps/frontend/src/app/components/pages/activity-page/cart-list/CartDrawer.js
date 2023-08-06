import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import Drawer from '@mui/material/Drawer';
import { Badge, Divider } from '@mui/material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ChevronRightIcon from '@mui/icons-material/ChevronLeft';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Box, Button, ButtonGroup } from '@mui/joy';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartData, updateCart } from '../../../../store/cartSlice';
import { Link } from 'react-router-dom';
import CartItemCard from './CartItemCard';

export default function CartDrawer() {
    const anchor = 'right';
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const { cartItems, isLoaded, error } = useSelector((state) => state.cart);

    const totalPrice = cartItems.reduce((b,a)=>a.product.price*a.qty + b,0);
    console.log(totalPrice);

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
        > 
            <Box display={'flex'} alignItems={'center'} p={1}>
                <IconButton
                    height={50}
                    size="large"
                    color="inherit"
                    onClick={toggleDrawer(false)} sx={{ transform: 'rotate(180deg)' }}>
                    <ChevronRightIcon />
                </IconButton>
                <Typography variant="h6" component="h5" pl={2}>
                  {cartItems.length} Items
                </Typography>
            </Box>
            <Divider />
            <Sheet sx={{minHeight: 'calc(100% - 130px)' , pb:1}}>
                {isLoaded &&
                cartItems.map((item) => (
                    <Box sx={{m:1}} key={item.product._id}>
                      <CartItemCard item={item} />
                    </Box>
                ))}
            </Sheet>
            <Box sx={{p:1,position:'sticky',bottom:'0', textAlign:'center',bgcolor:'background.body',zIndex:'1'}}>
                <ButtonGroup
                variant="soft"
                orientation="vertical"
                aria-label="outlined primary button group"
                // buttonFlex="0 1 200px"
                sx={{ width: '100%', justifyContent: 'center' }}
                >
                <Link to="checkout"> 
                    <Button onClick={toggleDrawer(false)}> 
                        <Typography variant="h6" component="h5" pl={2}>
                        Checkout Now {totalPrice} Rs
                        </Typography>
                    </Button>
                </Link>
                </ButtonGroup>
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
                sx={{ position:'relative',}}
            >
                {list(anchor)}
            </Drawer>
        </React.Fragment>
    );
}