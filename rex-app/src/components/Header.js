import { View, Text,StyleSheet,Image, Platform,Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const Header = ({navigation}) => {
  
  return (
    
    
    <SafeAreaView style={styles.container}>
      
      <Pressable style={styles.back} onPress={() => navigation.goBack()}>
      <AntDesign name="leftcircleo" size={24} color="black" />
      </Pressable>
      <Image 
      style={styles.logo}
      source={{uri:'https://scontent.fcor4-1.fna.fbcdn.net/v/t39.30808-6/321803510_1225218278072928_4103975119971623412_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=5t55mOxPZp8AX_fR3OG&_nc_ht=scontent.fcor4-1.fna&oh=00_AfDqzx77QUI29FyJIPEXExSCr5DyMWHbnO6RoBj4-po5-g&oe=650FC5D4'}}
      
      />
    
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
logo:{
    width:"80%",
    height:"100%",
    borderRadius:75,
    margin: 15
},
container:{
    width:"100%",
    height: 166,
    marginBottom: "10%",
    alignItems: 'center',
    marginTop: "10%",
    flexDirection:'row'

    
},back:{
  marginLeft:10

}

})

export default Header