import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import React,{useState} from 'react'
import { colors } from '../global/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Search = () => {

const [text, setText] = useState("")

console.log(text)
  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.input}
    onChangeText={(value)=>setText(value)}
      value={text}

      placeholder='Busque el producto que desee'

      
      />
      <Pressable onPress={()=> setText("")}> 
        <MaterialCommunityIcons name="text-box-remove-outline" size={35} color="#fd8000" style={styles.icon}/>
      </Pressable>
      
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        flexDirection:"row",
        alignItems:"center",
        marginTop:-30,
        marginBottom:30,
        width: "100%"
        
        

    },
    input:{
        width: "80%",
        borderWidth: 1,
        borderColor:colors.orange,
        borderRadius: 75,
        padding: 10,
        fontSize: 20,
        
    },
    icon:{
        marginLeft:10
    }
})
export default Search