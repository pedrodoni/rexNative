import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const CategoryItem = ({item, navigation}) => {




  return (
    <View style={styles.categories}>
      <Pressable onPress={() => navigation.navigate("Products", { item: item })}>
      <Text  style={styles.categoriesText}>{item}</Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
   
    categoriesText:{
        fontSize: 50,
        margin: 15,
        borderColor: colors.white,
        fontFamily: 'Merriweather',
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
        margin: 10,
        
    }
})

export default CategoryItem