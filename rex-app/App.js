import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Data } from './src/components/CategoryItem';
import Home from './src/screens/Home';
import Search from './src/components/Search';
import Products from './src/screens/Products';
import { ScrollView } from 'react-native';
import Header from './src/components/Header';

export default function App() {
  const [screens, setScreens] = useState("Home")
      
  return (
    
    <SafeAreaView >
    <ScrollView>
    <Header></Header>
    
    <Home></Home>
    <Products category="jugueteria"/>
    </ScrollView>  

   
      
    </SafeAreaView>
  );
}

