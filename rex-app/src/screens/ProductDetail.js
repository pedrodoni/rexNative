import {
    View,
    Text,
    Image,
    StyleSheet,
    Button,
    SafeAreaView,
    Pressable,
  } from "react-native";
  import React from "react";
  import { products } from "../data/products";
  import Header from "../components/Header";
  import { AntDesign } from "@expo/vector-icons";
  import { colors } from "../global/colors";
  

  
  const ProductDetail = ({ navigation, route }) => {
    
  
    const { item } = route.params;
  
    console.log(item);
  
    return (
      <View>
        <Header navigation={navigation} />
      
        <View style={styles.containerImage}>
        <Text style={styles.title}> {item.title} </Text>
          <Image
            style={styles.image}
            source={{
              uri: item.images[0],
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            
            <Text style={styles.price}> ${item.price} </Text>
          </View>
          <Text style={styles.description}> {item.description} </Text>
          <View style={{borderRadius:'25', borderColor:'#0E3A67', borderWidth:2}}>
          <Button
            
            color={colors.orange}
            title="Agregar al carrito"
            onPress={() => console.log("Add Cart")}
          />
          </View>
          
          <Text style={styles.description}> Rating: {item.rating} ⭐ </Text>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    image: {
      height: 350,
      width: 350,
    },
    containerImage: {
      alignItems: "center",
    },
    title: {
      fontSize: 40,
      fontFamily: "Merriweather",
      marginTop: 15,
    },
    price: {
      fontSize: 30,
      fontFamily: "Merriweather",
    },
    description: {
      fontSize: 20,
      marginTop: 12,
      marginBottom: 30,
      marginHorizontal: 10,
    },
  });
  
  export default ProductDetail;