
import React,{useEffect, useState} from 'react'

import Header from './src/components/Header';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/RootNavigation/RootNavigation';
import TabNav from './src/RootNavigation/TabNav';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';


export default function App({navigation}) {
  const [fontsLoaded] = useFonts({
    Merriweather: require("./assets/Merriweather-Regular.ttf")


  })
if(!fontsLoaded){
  return;
}
      
  return (
    <Provider store={store}>
    <NavigationContainer>
      
        <TabNav/>
    

    </NavigationContainer>
    </Provider>
  );
}

