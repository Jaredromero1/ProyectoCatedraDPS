import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home'

const Drawer=createDrawerNavigator();

export default function Drawer_Navigation({navigation}){ 
  return(
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
  )
}


/* import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//importacion de navegacion
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Screens/HomeScreen/Home';

const Stack = createStackNavigator();

export default function Drawer_Navigation() {
   return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer> 
   )
} */