// import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/app';
import { Provider } from 'react-redux';
import store from './app/store/store';
import PaymentProvider from './app/contexts/PaymentContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Provider store={store}>
        <PaymentProvider>
         <App />
         </PaymentProvider>
      </Provider>
    </BrowserRouter>
);


