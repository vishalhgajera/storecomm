import React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import CartList from './cart-list/CartList';
import ProfileCard from './user-profile/ProfileCard';
import BasicCard from '../../blocks/cards/BasicCard';
import { Box, Divider, ListItemDecorator, Typography } from '@mui/joy';
import CreditCardForm from '../../blocks/cards/CreditCardForm';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactsIcon from '@mui/icons-material/Contacts';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import OrderList from './order-list/OrderList';
import AddressDetails from './address-list/AddressDetails';
import { Link, useParams } from 'react-router-dom';

const ActivityTabs = () => {
  const activityTabs = [
    {
      name: 'cart-list',
      component: <CartList />,
      icon: <ShoppingCartIcon />,
      title: 'Cart List',
    },
    {
      name: 'wish-list',
      component: <BasicCard />,
      icon: <FavoriteIcon />,
      title: 'Wish List',
    },
    {
      name: 'order-list',
      component: <OrderList />,
      icon: <ShoppingBagIcon />,
      title: 'Order List',
    },
    {
      name: 'profile',
      component: <ProfileCard />,
      icon: <AccountCircleIcon />,
      title: 'Profile',
    },
    {
      name: 'address',
      component: <AddressDetails />,
      icon: <ContactsIcon />,
      title: 'Address',
    },
    {
      name: 'cards',
      component: <CreditCardForm />,
      icon: <CreditCardIcon />,
      title: 'Cards',
    },
  ];

  const { tab } = useParams();
  console.log(tab);

  return (
    <Tabs
      aria-label="Vertical tabs"
      orientation="vertical"
      sx={{ minWidth: 300, borderRadius: 'lg' }}
      value={tab}
    >
      <TabList sx={{ minWidth: 250 }}>
        {activityTabs.map((tab) => (
          <Box key={tab.name}>
            <Link
              to={'/activity/' + tab.name}
              style={{ textDecoration: 'none' }}
            >
              <Typography component="div" sx={{ color: 'neutral.plainColor' }}>
                <Tab value={tab.name} sx={{ width: '100%' }}>
                  <ListItemDecorator>{tab.icon}</ListItemDecorator>
                  {tab.title}
                </Tab>
              </Typography>
            </Link>
          </Box>
        ))}
      </TabList>

      {activityTabs.map((tab) => (
          <TabPanel sx={{ p: 2, minHeight: 200 }} value={tab.name} key={tab.name}>
            <Typography level="h4" startDecorator={<ShoppingCartIcon />} mb={1}>
              {tab.title}
            </Typography>
            <Divider sx={{ mb: 2 }} />
              {tab.component}
          </TabPanel>
      ))}
    </Tabs>
  );
};

export default ActivityTabs;
