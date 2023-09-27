import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import { Image } from 'react-native'
import { colors } from '../global/colors'

const FinishCart = (navigation) => {
  return (
    <View style={styles.container}>
         <Image 
      style={styles.logo}
      source={{uri:'https://scontent.fcor4-1.fna.fbcdn.net/v/t39.30808-6/321803510_1225218278072928_4103975119971623412_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=7WbCfqe2QeAAX9bku40&_nc_ht=scontent.fcor4-1.fna&oh=00_AfDVPUHixSSf2gAXU-X53vGmn04w4-5ZQ0rzCJoFoSIbaA&oe=6519A914'}}/>
      <View>
        <Text style={styles.boxes}>
            Compra En Progreso
        </Text>
        <Text style={styles.boxes}>
            Compra Entregada
        </Text>
        <Text style={styles.boxes}>
            Compra Entregada
        </Text>

      </View>
      
    </View>
  )
}

export default FinishCart

const styles = StyleSheet.create({
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
      
},
boxes:{
    color: colors.blueRex,
   
    margin:10,
    paddingLeft: 40,
    paddingRight:40,
    paddingBottom:5,
    paddingTop:5,
    borderColor:colors.blueRex,
    borderWidth:10,
    borderRadius:10,
    
}
})