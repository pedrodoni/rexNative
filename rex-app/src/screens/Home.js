import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import CategoriesList from '../components/CategoriesList'
import { colors } from '../global/colors'
import Search from '../components/Search'



const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>

      
      <CategoriesList navigation={navigation}/>
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