import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Products from '../screens/Products'

const Stack = createNativeStackNavigator()

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Products' screenOptions={{   headerShown:false,    }}>
        <Stack.Screen  
        // options={{
        //     headerShown: false,
        // }}
        component={Home} name='Inicio'/>
        <Stack.Screen  component={Products} name='Products'/>
          
    </Stack.Navigator>
  )
}

export default RootNavigation