import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Data } from './src/components/CategoryItem';
import Home from './src/screens/Home';
import Search from './src/components/Search';
import Products from './src/screens/Products';
import { ScrollView } from 'react-native';
import Header from './src/components/Header';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/RootNavigation/RootNavigation';


export default function App() {
  const [fontsLoaded] = useFonts({
    Merriweather: require("./assets/Merriweather-Regular.ttf")


  })
if(!fontsLoaded){
  return;
}
      
  return (
    <NavigationContainer>
        <Header/>
        <RootNavigation/>
    

    </NavigationContainer>
    
  );
}

