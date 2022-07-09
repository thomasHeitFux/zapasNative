import { useSelector,useDispatch } from 'react-redux';
import { setName,setNumber ,setSharp} from '../Redux/actions';
import React, { useState } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity , StyleSheet, Alert} from 'react-native';

export default function List() {
  // const [name, setName] = useState('');
  const {number , name,sharp}=useSelector(state=>state.userReducer)
  function pressed() {
    Alert.alert(name)
  }
  const dispatch = useDispatch();
  // const [text, setText] = useState('');
  // dispatch(setName(name));
  // dispatch(setNumber(number))
  return (
    <View>
      {/* <Image source={require('./assets/favicon.png')} /> */}
      <TextInput
        placeholder="Type here the name"
        onChangeText={(value) => dispatch(setName(value))}
        // defaultValue={text}
      />
      <TextInput
        placeholder="Type here the number"
        onChangeText={(value) => dispatch(setNumber(value))}
        // defaultValue={text}
      />
       <TextInput
        placeholder="Type here the Sharp number"
        onChangeText={(value) => dispatch(setSharp(value))}
        // defaultValue={text}
      />
      {/* <TouchableOpacity 
      style={styles.button}
      onPress={()=>pressed()}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
      <Text>
        {name}
      </Text>
      <Text>
        {number}
      </Text>
      <Text>
        {sharp}
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
 
  button: {
    width:270,
    // paddingVertical:12,
    borderRadius: 10,
    backgroundColor: 'darkblue',
    // margin: 4,
    // marginVertical:180,
    // marginHorizontal:24
  },
  buttonText: {
    fontWeight:'bold',
    fontSize:20,
    textAlign:'center',
    borderRadius: 8,
    color:'white',
    margin: 4
  },
 
})