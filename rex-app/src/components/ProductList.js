import { View, Text,StyleSheet, Image } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import { Ionicons } from '@expo/vector-icons';

const ProductList = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
      <Image
      resizeMode='cover'
      style={styles.image}
      source={{uri: item.thumbnail}}
      
      />   
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <Ionicons name="add-circle-outline" size={30} color="black" />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
container:{
   flexDirection: 'row',
     borderWidth: 3,
  borderRadius: 25,
  borderColor:colors.orange,
  backgroundColor: colors.lightGrey,
  width: "45%",
  marginHorizontal: 15,
  marginVertical: 5,
  
},
item:{
 
  margin: 5,
  padding: 5,
  width: "100%",
  alignItems: 'center'


}, 
title:{
  fontSize: 17,
 fontWeight: "300"
}
, 
price:{
  fontSize: 17,
 fontWeight: "900"
 
},
image:{
  width: 100,
  height: 80,
  
}

})
export default ProductList