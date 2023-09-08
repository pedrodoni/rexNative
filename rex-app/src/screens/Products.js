import { View, Text, FlatList,StyleSheet } from 'react-native'
import React,{useEffect, useState} from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import { products } from '../data/products'
import ProductList from '../components/ProductList'
import { data } from '../components/CategoryItem'

const Products = ({category}) => {

 const [categoryProd, setCategoryProd] = useState([])
 const [text, setText] = useState(null)
 


useEffect(() => {
 const categoryProducts = products.filter((el)=> el.category===category)
 setCategoryProd(categoryProducts)
 if(text){
  const titleProd = products.filter(
    (el)=>el.title.toLowerCase()=== text.toLowerCase()
  );
  setCategoryProd(titleProd);
 }
 }, [text, category]);
 


  return (
    <View    >
      
    
      <Search text={text} setText={setText}/>
   
   
     <FlatList 
      
      data={categoryProd}
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