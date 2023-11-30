import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import StoreIcon from '@mui/icons-material/Store';
import { Link } from 'react-router-dom';
import CartDrawer from '../../pages/activity-page/cart-list/CartDrawer';
import ModeToggle from './ModeToggle';
import TypeJoy from '@mui/joy/Typography';

import {logout} from '../../../store/authSlice'
import { useDispatch } from 'react-redux';
// import { LinearProgress } from '@mui/joy';

const pages = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Shop',
    link: '/shop',
  },
  {
    name: 'Activity',
    link: '/activity/order-list',
  },
  {
    name: 'Checkout',
    link: '/checkout',
  },
];

const settings = [{
  name: 'Profile',
  link: '/activity/profile',
},
{
  name: 'Setting',
  link: '/activity/address',
}];


export default function Navbar(prop) {

  const dispatch = useDispatch();

  const user = prop.user;

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutHandler = () => {
    dispatch(logout())
  };

  return (

    <Sheet sx={{
      boxShadow: 'sm',
      top: 0,
      position: 'sticky',
      zIndex: 5,
      width: '100%',
      backdropFilter: "blur(8px)",
    }}>
       {/* <LinearProgress thickness={1} /> */}
       <Container maxWidth="xl">
         <Toolbar disableGutters>
           <StoreIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
             <Typography
               variant="h6"
               noWrap
               component="span"
               sx={{
                 mr: 2,
                 display: { xs: 'none', md: 'flex' },
                 fontFamily: 'monospace',
                 fontWeight: 700,
                 letterSpacing: '.3rem',
                 color: 'inherit',
                 textDecoration: 'none',
               }}
             >
               storeComm
             </Typography>
           <Sheet sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
             <IconButton
               size="large"
               aria-label="account of current user"
               aria-controls="menu-appbar"
               aria-haspopup="true"
               onClick={handleOpenNavMenu}
               color="inherit"
             >
               <MenuIcon />
             </IconButton>
  
             <Menu
               id="menu-appbar"
               anchorEl={anchorElNav}
               anchorOrigin={{
                 vertical: 'bottom',
                 horizontal: 'left',
               }}
               keepMounted
               transformOrigin={{
                 vertical: 'top',
                 horizontal: 'left',
               }}
               open={Boolean(anchorElNav)}
               onClose={handleCloseNavMenu}
               sx={{
                 display: { xs: 'block', md: 'none' },
               }}
             >
               {pages.map((page) => (
                 <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                   <Typography textAlign="center">{page.name}</Typography>
                 </MenuItem>
               ))}
             </Menu>
           </Sheet>
  
           <StoreIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
           <Typography
             variant="h5"
             noWrap
             component="a"
             href=""
             sx={{
               mr: 2,
               display: { xs: 'flex', md: 'none' },
               flexGrow: 1,
               fontFamily: 'monospace',
               fontWeight: 700,
               letterSpacing: '.3rem',
               color: 'inherit',
               textDecoration: 'none',
             }}
           >
             LOGO
           </Typography>
           <Sheet
             sx={{
               flexGrow: 1,
               display: { xs: 'none', md: 'flex' },
               justifyContent: 'center',
             }}
           >
  
             {pages.map((page) => (
              <Link
                   key={page.name}
                   to={page.link}
                   style={{
                     my: 2,
                     display: 'block',
                     textDecoration: 'none',
                   }}
                 >
                 <TypeJoy level="body1" sx={{p:1,color:'neutral.plainColor'}}> {page.name} </TypeJoy>
              </Link>
             ))}
             
           </Sheet>
           <Sheet sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              <ModeToggle></ModeToggle>
              <CartDrawer/>
             <Tooltip title={`Hello ${user.name}`} >
               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0,mx: 2}}>
                 <Avatar alt={user.name} src="/static/images/avatar/2.jpg" />
               </IconButton>
             </Tooltip>
             <Menu
               sx={{ mt: '45px' }}
               id="menu-appbar"
               anchorEl={anchorElUser}
               anchorOrigin={{
                 vertical: 'top',
                 horizontal: 'right',
               }}
               keepMounted
               transformOrigin={{
                 vertical: 'top',
                 horizontal: 'right',
               }}
               open={Boolean(anchorElUser)}
               onClose={handleCloseUserMenu}
             >
               {settings.map((setting) => (
                 <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                 <Link
                   to={setting.link}
                   style={{
                     color: 'inherit',
                     textDecoration: 'none',
                   }}
                 >
                 <Typography textAlign="center">{setting.name}</Typography>
                 </Link>
  
                 </MenuItem>
               ))}
               <MenuItem >
                 <Link
                   to='/login'
                   onClick={logoutHandler}
                   style={{
                     color: 'inherit',
                     textDecoration: 'none',
                   }}
                 ><Typography textAlign="center"> Logout</Typography>
                 </Link>
               </MenuItem>
             </Menu>
           </Sheet>
         </Toolbar>
       </Container>
     </Sheet>
  );
}
