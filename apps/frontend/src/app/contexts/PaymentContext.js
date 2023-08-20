import React, { createContext, useContext, useState } from 'react';

const PaymentContext = createContext();

export const usePayment = () => useContext(PaymentContext);

const PaymentProvider = ({ children }) => {
  const [payment, setPayment] = useState("");

  const paymentHandler = (e) => {
    setPayment(e.target.value)
  }
  
  return (
    <PaymentContext.Provider value={{ payment, setPayment:paymentHandler }}>
      {children}
    </PaymentContext.Provider>
  );
};

export default PaymentProvider;








