import { View, Text, FlatList,StyleSheet } from 'react-native'
import React,{useEffect, useState} from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import { products } from '../data/products'
import ProductList from '../components/ProductList'
import { data } from '../components/CategoryItem'

const Products = ({route, navigation}) => {


  
 const [categoryProd, setCategoryProd] = useState([])
 const [text, setText] = useState(null)
 const { item } = route.params;
 


useEffect(() => {
 const categoryProducts = products.filter((el)=> el.category===item)
 setCategoryProd(categoryProducts)
 if(text){
  const titleProd = products.filter(
    (el)=>el.title.toLowerCase()=== text.toLowerCase()
  );
  setCategoryProd(titleProd);
 }
 }, [text, item]);
 


  return (
    <View style={{alignItems:'center'}}   >
      
      <Header navigation={navigation}/>
      
    
      <Search text={text} setText={setText}/>
   
    
      <FlatList 
      
      style={styles.container} 
      
      numColumns={2}
        data={categoryProd}
        keyExtractor={products.id}
        renderItem={({item})=>
          <ProductList   navigation={navigation} item={item}/>
          
          }
        
        
        
        
      />
    
    
      
    
      



      
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
 flexDirection: "row",

 
  
  },
  item:{
  
  
  }
  
  
  })

export default Products