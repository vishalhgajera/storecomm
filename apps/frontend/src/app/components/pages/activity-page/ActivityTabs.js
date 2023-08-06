import React from 'react'
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import CartList from './cart-list/CartList';
import ProfileCard from './user-profile/ProfileCard';
import BasicCard from '../../blocks/cards/BasicCard';
import AddressCard from '../../blocks/cards/AddressCard';
import { Divider, ListItemDecorator, Typography } from '@mui/joy';
import CreditCardForm from '../../blocks/cards/CreditCardForm';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactsIcon from '@mui/icons-material/Contacts';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import OrderList from './order-list/OrderList';

const ActivityTabs = () => {
  return (
     <Tabs
      aria-label="Vertical tabs"
      orientation="vertical"
      sx={{ minWidth: 300, borderRadius: 'lg' }}
    >
      <TabList sx={{minWidth:250}}>
        <Tab><ListItemDecorator><ShoppingCartIcon /></ListItemDecorator>Cart List</Tab>
        <Tab><ListItemDecorator><FavoriteIcon /></ListItemDecorator>Wish List</Tab>
        <Tab><ListItemDecorator><ShoppingBagIcon /></ListItemDecorator>Order List</Tab>
        <Divider/>
        <Tab><ListItemDecorator><AccountCircleIcon /></ListItemDecorator>Profile</Tab>
        <Tab><ListItemDecorator><ContactsIcon /></ListItemDecorator>Address</Tab>
        <Tab><ListItemDecorator><CreditCardIcon /></ListItemDecorator>Cards</Tab>
      </TabList>
      <TabPanel sx={{ p: 2, minHeight: 200 }} value={0}>
        <Typography level="h4" startDecorator={<ShoppingCartIcon />} mb={1}>Cart List</Typography>
        <Divider sx={{ mb:2 }}/>
        <CartList/>
      </TabPanel>
      <TabPanel sx={{ p: 2, minHeight: 200 }} value={1}>
        <Typography level="h4" startDecorator={<FavoriteIcon />} mb={1}>Wish List</Typography>
        <Divider sx={{ mb:2 }}/>
        <BasicCard/>
      </TabPanel>
      <TabPanel sx={{ p: 2, minHeight: 200 }} value={2}>
        <Typography level="h4" startDecorator={<ShoppingBagIcon />} mb={1}>Order List</Typography>
        <Divider sx={{ mb:2 }}/>
        <OrderList/>
      </TabPanel>
      <TabPanel sx={{ p: 2, minHeight: 200 }} value={3}>
      <Typography level="h4" startDecorator={<AccountCircleIcon />} mb={1}>Profile</Typography>
      <Divider sx={{ mb:2 }}/>
        <ProfileCard/>
      </TabPanel>
      <TabPanel sx={{ p: 2, minHeight: 200 }} value={4}>
      <Typography level="h4" startDecorator={<ContactsIcon />} mb={1}>Address</Typography>
      <Divider sx={{ mb:2 }}/>
        <AddressCard/>
      </TabPanel>
      <TabPanel sx={{ p: 2, minHeight: 200 }} value={5} >
      <Typography level="h4" startDecorator={<CreditCardIcon />} mb={1}>Cards</Typography>
      <Divider sx={{ mb:2 }}/>
        <CreditCardForm/>
      </TabPanel>
    </Tabs>
  )
}

export default ActivityTabs
