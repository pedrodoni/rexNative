import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
        
      <Image 
      style={styles.logo}
      source={{uri:'https://scontent.fcor4-1.fna.fbcdn.net/v/t39.30808-6/321803510_1225218278072928_4103975119971623412_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=KjCNemxjmGQAX8JzX8f&_nc_ht=scontent.fcor4-1.fna&oh=00_AfA65R9kw6avjbk8xMHbBNgu6fstlghWJenbiadXQwY7RA&oe=6503E854'}}
      
      />
    </View>
  )
}

const styles= StyleSheet.create({
logo:{
    width:"80%",
    height:"100%",
    borderRadius:75
},
container:{
    width:"100%",
    height: 144,
    marginBottom: "10%",
    alignItems: 'center',
    
}


})

export default Header