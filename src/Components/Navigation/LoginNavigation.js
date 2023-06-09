import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../Screens/Login'
import Registro from '../Screens/Registro'
import Drawer from '../Navigation/Drawernavigation'

const Stack = createNativeStackNavigator();

export default function LoginNavigation(){ 
  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name={'Login'} component={LoginScreen}/>
      <Stack.Screen name={'Registro'} component={Registro}/>
      <Stack.Screen name={'Restaurantes'} component={Drawer}/>
    </Stack.Navigator>
  )
}

/* import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//importacion de navegacion
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Registro from '../Screens/Registro';
import Login from '../Screens/Login';

export default function ButtonNavigation() {

    const Stack = createStackNavigator();

   return (
        <NavigationContainer>
          <Stack.Navigator screenOptions = {{headerShown:false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registro" component={Registro} />
          </Stack.Navigator>
        </NavigationContainer>
         
   )
} */