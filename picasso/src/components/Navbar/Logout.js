import React from 'react';
import { Redirect } from 'react-router-dom';

export default () => {
  localStorage.removeItem('token');
  return <Redirect to='/' />;
}