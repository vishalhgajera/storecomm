import * as React from 'react';
import Box from '@mui/joy/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/joy/Typography';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { Sheet } from '@mui/joy';
import AddressDetails from '../activity-page/address-list/AddressDetails';
import CartList from '../activity-page/cart-list/CartList';
import { usePayment } from '../../../contexts/PaymentContext';
import { useDispatch } from 'react-redux';
import { AddOrderData } from '../../../store/orderSlice';


export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [orderData, setOrderData] = React.useState({});
  const dispatch = useDispatch(); 

  const steps = ['Cart Items','Shipping address', 'Payment details', 'Review your order'];
  const payData = usePayment();

  payData.setOrderData = (data) => {
    setOrderData(data);
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handlePlaceOrder = () => {
    dispatch(AddOrderData(orderData))
    handleNext();
  }
  
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <CartList />; 
      case 1:
        return <AddressDetails />;
      case 2:
        return <PaymentForm  {...payData}/>;
      case 3:
        return <Review {...payData}/>;
      default:
        throw new Error('Unknown step');
    }
  }

  return (
        <Sheet variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label} sx={{bgcolor:"#ffffff2e",borderRadius:'5px',py:"4px",m:"2px"}}>
                <StepLabel>
                  <Typography>
                      {label}
                  </Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                {activeStep === steps.length - 1 ? <Button
                  variant="contained"
                  onClick={handlePlaceOrder}
                  sx={{ mt: 3, ml: 1 }}
                >PlaceOrder</Button> 
                :<Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >Next</Button>}
              </Box>
            </React.Fragment>
          )}
        </Sheet>
  );
}
