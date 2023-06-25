import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './NicStyle/nic-add-form.css';
import App from './App';

import { DriverContextProvider } from './context/driver/driverContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DriverContextProvider>
      <App />
      </DriverContextProvider>
  </React.StrictMode>
);


