import React from "react";
import {SafeAreaView,Text,Button,Alert} from "react-native"
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import 'react-native-gesture-handler'
import { useSelector,useDispatch } from 'react-redux';

const Retirar = (props) => {
  const {number , name ,sharp}=useSelector(state=>state.userReducer)


    const twoOptions=()=>{
      Alert.alert('Confirmas que retiraste el pedido?','123456789',[{text:'Confirmar retiro',onPress:()=>{
        props.navigation.navigate('Settings',{greeting:'hello'})
      }},
    {text:'Cancel',onPress:()=>{
     alert("Nel")
    }}])
    }


    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: 'white',
          margin: 20,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "#ccc",
        },
        button: {
          width:270,
          paddingVertical:12,
          borderRadius: 10,
          backgroundColor: 'darkblue',
          margin: 4,
          marginVertical:140,
          marginHorizontal:24
        },
        buttonText: {
          fontWeight:'bold',
          fontSize:20,
          textAlign:'center',
          borderRadius: 8,
          color:'white',
          margin: 2
        },
        textito:{
          color:'black',
          marginHorizontal:24,
          marginVertical:5
        },
        text:{
          fontSize:18,
          fontWeight:'bold',
          color:'darkblue',
          marginHorizontal:24,
          marginVertical:5
        },
        numbers:{
          fontSize:18,
          fontWeight:'bold',
          color:'black',
          marginHorizontal:24,
          marginVertical:5
        },
        detail:{
          fontSize:12,
          color:'black',
          marginHorizontal:24,
          marginVertical:20
        },
        point:{
          flex: 1, 
          alignItems: 'center',
          backgroundColor:'white' 
        },
        llegada: {
          width:270,
          paddingVertical:12,
          borderRadius: 10,
          backgroundColor: 'darkblue',
          margin: 4,
        }
      })
      
      
    return (
  
      <SafeAreaView style={styles.container}>
        <Text  style={styles.detail} >detalles de la orden</Text>
        <Text   style={styles.numbers}>{number}(#{sharp})</Text>
        <Text  style={styles.textito}>{name}</Text>
        <Text  style={styles.text}>ver los productos de la orden(3)</Text>
        <Text  style={styles.detail}>Pago</Text>
        <Text  style={styles.textito}>No pagar en el local</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={twoOptions}>
          <Text style={styles.buttonText}>Retirar</Text>
        </TouchableOpacity>
      </SafeAreaView>
  
  
    );
  };

  export default Retirar;