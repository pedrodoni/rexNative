import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const CategoryItem = ({item}) => {
  return (
    <View style={styles.categories}>
      <Text  style={styles.categoriesText}>{item}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
   
    categoriesText:{
        fontSize: 50,
        margin: 15,
        borderColor: colors.white,
        fontFamily: 'Cochin',
        alignItems: 'center',
        justifyContent: "center",
        textTransform:'capitalize',
        width: "80%",
        textAlign: 'center',
        padding: 4,
        
        color: colors.white,
       
    },
    categories:{
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 25,
        borderWidth: 2,
        backgroundColor: colors.blueRex,
        margin: 10
    }
})

export default CategoryItem