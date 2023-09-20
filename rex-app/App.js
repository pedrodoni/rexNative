
import React,{useEffect, useState} from 'react'

import Header from './src/components/Header';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/RootNavigation/RootNavigation';


export default function App({navigation}) {
  const [fontsLoaded] = useFonts({
    Merriweather: require("./assets/Merriweather-Regular.ttf")


  })
if(!fontsLoaded){
  return;
}
      
  return (
    <NavigationContainer>
        
        <RootNavigation/>
    

    </NavigationContainer>
    
  );
}

