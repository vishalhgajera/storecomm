import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/material/Drawer';
import { Badge, Divider } from '@mui/material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ChevronRightIcon from '@mui/icons-material/ChevronLeft';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

export default function CartDrawer() {
    const anchor = 'right';
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (value) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(value);
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
            role="presentation"
        ><Box display={'flex'} alignItems={'center'} p={1}  >
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
        </Box>
    );

    return (
        <React.Fragment>
            <IconButton onClick={toggleDrawer(true)} size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent="02" color="error">
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