import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import CategoriesList from '../components/CategoriesList'
import { colors } from '../global/colors'

const Home = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <CategoriesList/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
     
      backgroundColor: '#fff',
      alignItems: 'center',
      
    },
    
  });
export default Home