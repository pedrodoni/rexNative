import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Products from '../screens/Products'
import ProductDetail from '../screens/ProductDetail'
import FinishCart from '../components/FinishCart'

const Stack = createNativeStackNavigator()

const RootNavigation = () => {
  return (
    <Stack.Navigator  screenOptions={{   headerShown:false,    }}>
        <Stack.Screen  component={Home} name='Inicio'/>
        <Stack.Screen  component={Products} name='Products'/>
        <Stack.Screen component={ProductDetail}name='Detalle'/>
     
          
    </Stack.Navigator>
  )
}

export default RootNavigation