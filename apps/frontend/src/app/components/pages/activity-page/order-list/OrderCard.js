import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { CardOverflow, IconButton } from '@mui/joy';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function OrderCard(props) {
const {item} = props;

const isoDateString = item.orderDate;
const date = new Date(isoDateString);
const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
const formattedDate = date.toLocaleDateString('en-IN', options);

  return (
    <Card orientation="horizontal" variant="outlined" sx={{ width: "100%",mb:1 }}>
      <CardContent>
        <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
          Order Id
        </Typography>
        <Typography level="body-sm">{item.orderNumber}</Typography>
      </CardContent>
      <CardContent>
        <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
          Order Status
        </Typography>
        <Typography level="body-sm">{item.status}</Typography>
      </CardContent>
      <CardContent>
        <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
          Order Date
        </Typography>
        <Typography level="body-sm">{formattedDate}</Typography>
      </CardContent>
      <CardContent>
        <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
          Total Price
        </Typography>
        <Typography level="body-sm">{item.totalAmount} Rs</Typography>
      </CardContent>
      <CardOverflow
        variant="soft"
        color="primary"
        sx={{
          px: 0.3,
          // writingMode: 'vertical-rl',
          textAlign: 'center',
          fontSize: 'xs',
          fontWeight: 'xl',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          borderLeft: '1px solid',
          borderColor: 'divider',
        }}
      >

      <CardContent>
        <IconButton variant="plain">
            <ArrowForwardIcon />
        </IconButton>
      </CardContent>
      </CardOverflow>
    </Card>
  );
}