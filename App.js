import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Login from './src/Components/Screens/Login'

export default function App() {
  return (
    <NavigationContainer>
      <Login/>
    </NavigationContainer>
  );
}

