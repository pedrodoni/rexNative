import { View, Text, FlatList,StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import { products } from '../data/products'
import ProductList from '../components/ProductList'

const Products = () => {
  return (
    <View    >
      
      <Header/>
      <Search></Search>
   
   
     <FlatList 
      
      data={products}
      keyExtractor={products.id}
      renderItem={({item})=>
        <ProductList    item={item}/>
        
        }
      
      
      
      
      />
    
      
    
      



      
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
     
     flexDirection: 'row',
      flexWrap: 'wrap'
  },
  item:{
  
  
  }
  
  
  })

export default Products