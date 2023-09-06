import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { categories } from '../data/categories'
import { colors } from '../global/colors'
import CategoryItem from './CategoryItem'
const CategoriesList = () => {
  return (
    <View style={styles.container}>
     <FlatList
     data={categories}
     keyExtractor={(key)=>key}
     renderItem={({item})=>
     
        
        <CategoryItem item={item}/>
         
     }
     
    />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        
      width: "100%"
    
      
    },
  });


export default CategoriesList