import React from 'react';
import { AdminRegister } from './AdminRegister';
import { RegisterProvider } from '../../context/Register.context';

export const Register = () => {
  return (
    <RegisterProvider>
      <AdminRegister />
    </RegisterProvider>
  );
};
