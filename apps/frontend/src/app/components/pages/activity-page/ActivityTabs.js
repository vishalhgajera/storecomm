import React from 'react'
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import UserCart from './user-cart/UserCart';
import ProfileCard from '../../blocks/cards/activity-card/ProfileCard';
import BasicCard from '../../blocks/cards/category-card/BasicCard';
import AddressCard from '../../blocks/cards/category-card/AddressCard';
import { Divider } from '@mui/joy';
import CreditCardForm from '../../blocks/cards/category-card/CreditCardForm';
import RowCard from '../../blocks/cards/category-card/RowCard';
import ViewCard from '../../blocks/cards/activity-card/ViewCard';

const ActivityTabs = () => {
  return (
     <Tabs
      aria-label="Vertical tabs"
      orientation="vertical"
      sx={{ minWidth: 300, borderRadius: 'lg' }}
    >
      <TabList sx={{minWidth:250}}>
        <Tab>Cart List</Tab>
        <Tab>Wish List</Tab>
        <Tab>Order List</Tab>
        <Divider/>
        <Tab>Profile</Tab>
        <Tab>Address</Tab>
        <Tab>Cards</Tab>
      </TabList>
      <TabPanel sx={{ p: 2, minHeight: 200 }} value={0}>
        <UserCart/>
      </TabPanel>
      <TabPanel sx={{ p: 2, minHeight: 200 }} value={1}>
        <BasicCard/>
      </TabPanel>
      <TabPanel sx={{ p: 2, minHeight: 200 }} value={2}>
        <RowCard/>
        <RowCard/>
      </TabPanel>
      <TabPanel sx={{ p: 2, minHeight: 200 }} value={3}>
        <ProfileCard/>
      </TabPanel>
      <TabPanel sx={{ p: 2, minHeight: 200 }} value={4}>
        <AddressCard/>
      </TabPanel>
      <TabPanel sx={{ p: 2, minHeight: 200 }} value={5} >
        <CreditCardForm/>
      </TabPanel>
    </Tabs>
  )
}

export default ActivityTabs
