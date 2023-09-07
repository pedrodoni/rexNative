import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Home from './src/screens/Home';
import Search from './src/components/Search';
import Products from './src/screens/Products';

export default function App() {
  return (
    
    <SafeAreaView >
      <Products></Products>
      {/* <Home/>  */}
      
    </SafeAreaView>
  );
}

