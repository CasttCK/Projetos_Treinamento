/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './Src/Context/AuthProvider';
import Routes from './Src/Route/Routes';



export default function App() {


  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
   </NavigationContainer>
  );
}
