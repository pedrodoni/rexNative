import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const ProductList = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>{item.title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
container:{
    flex: 1,
   flexDirection: 'row',
    flexWrap: 'wrap'
},
item:{
  backgroundColor: colors.lightGrey,
  margin: 5,
  padding: 5
  


}


})
export default ProductList