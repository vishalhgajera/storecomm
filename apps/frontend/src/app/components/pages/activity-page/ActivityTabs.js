import * as React from 'react';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Typography from '@mui/joy/Typography';
import UserCart from './user-cart/UserCart';

export default function ActivityTabs() {
  const [index, setIndex] = React.useState(0);
  return (
    <Box
      sx={{
        bgcolor: 'background.body',
        flexGrow: 1,
        overflowX: 'hidden',
        borderRadius: 'md',
      }}
    >
      <Tabs
        aria-label="Pipeline"
        value={index}
        onChange={(event, value) => setIndex(value)}
        sx={{ '--Tabs-gap': '0px' }}
      >
        <TabList
          variant="plain"
          sx={{
            width: '100%',
            maxWidth: 400,
            mx: 'auto',
            pt: 2,
            alignSelf: 'flex-start',
            [`& .${tabClasses.root}`]: {
              bgcolor: 'transparent',
              boxShadow: 'none',
              '&:hover': {
                bgcolor: 'transparent',
              },
              [`&.${tabClasses.selected}`]: {
                color: 'primary.plainColor',
                fontWeight: 'lg',
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  zIndex: 1,
                  bottom: '-1px',
                  left: 'var(--ListItem-paddingLeft)',
                  right: 'var(--ListItem-paddingRight)',
                  height: '3px',
                  borderTopLeftRadius: '3px',
                  borderTopRightRadius: '3px',
                  bgcolor: 'primary.500',
                },
              },
            },
          }}
        >
          <Tab>
            Cart{' '}
            <Chip
              size="sm"
              variant="soft"
              color={index === 0 ? 'primary' : 'neutral'}
              sx={{ ml: 1 }}
            >
              14
            </Chip>
          </Tab>
          <Tab>
            Favorites{' '}
            <Chip
              size="sm"
              variant="soft"
              color={index === 1 ? 'primary' : 'neutral'}
              sx={{ ml: 1 }}
            >
              24
            </Chip>
          </Tab>
          <Tab>Orders</Tab>
        </TabList>
        <Box
          sx={(theme) => ({
            '--bg': theme.vars.palette.background.level3,
            height: '1px',
            background: 'var(--bg)',
            boxShadow: '0 0 0 100vmax var(--bg)',
            clipPath: 'inset(0 -100vmax)',
          })}
        />
        <Box
          sx={(theme) => ({
            '--bg': theme.vars.palette.background.surface,
            background: 'var(--bg)',
            boxShadow: '0 0 0 100vmax var(--bg)',
            clipPath: 'inset(0 -100vmax)',
            px: 4,
            py: 2,
          })}
        >
          <TabPanel value={0}>
            <Typography
              level="h2"
              component="div"
              fontSize="lg"
              mb={2}
              textColor="text.primary"
            >
              Cart panel
            </Typography>
            <UserCart/>
          </TabPanel>
          <TabPanel value={1}>
            <Typography
              level="h2"
              component="div"
              fontSize="lg"
              mb={2}
              textColor="text.primary"
            >
              Favorites panel
            </Typography>
          </TabPanel>
          <TabPanel value={2}>
            {/* <Input
              autoFocus
              placeholder="Type in third panel..."
              startDecorator={<SearchRounded />}
            /> */}
            <Typography
              level="h2"
              component="div"
              fontSize="lg"
              mb={2}
              textColor="text.primary"
            >
              Orders panel
            </Typography>
          </TabPanel>
        </Box>
      </Tabs>
    </Box>
  );
}