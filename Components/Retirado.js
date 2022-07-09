import React, { useEffect, useState } from "react";

import { TouchableOpacity } from "react-native-gesture-handler";
import 'react-native-gesture-handler'
import { useSelector,useDispatch } from 'react-redux';


import { StyleSheet, View, Text,SafeAreaView } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from 'expo-location'
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';


const Settings = (props) => {
  const {number , name ,sharp}=useSelector(state=>state.userReducer)
  const [origin, setOrigin] = useState({
    latitude: -34.6214185,
    longitude: -58.3776339
})
const [destination, setDestination] = useState({
    latitude: -34.6114185,
    longitude: -58.3676339
})

async function getPermissionLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        alert('permission denied');
        return;
    }
    let location = await Location.getCurrentPositionAsync({});
    const curr = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
    }
    setOrigin(curr)
}

useEffect(() => {
    setInterval(() => {
        getPermissionLocation()
    }, 10000)

}, [])

  
    return (
      <SafeAreaView style={styles.point}>
        
        <Text style={{ margin: 15 }}>Llegada estimada a las 4:20 a.m.</Text>
        <MapView
                style={styles.map}
                region={{
                    latitude:origin.latitude,
                    longitude: origin.longitude,
                    latitudeDelta:0.03,
                    longitudeDelta:0.03,
                }}
            >
                <Marker
                    draggable
                    onDragEnd={(dir) => setOrigin(dir.nativeEvent.coordinate)}
                    coordinate={origin}>
                    <View style={styles.icon}>
                        <MaterialCommunityIcons name="bicycle-outline" style={styles.bike} />
                    </View>
                </Marker>
                <Marker
                    coordinate={destination}>
                    <View style={styles.icon}>
                        <MaterialCommunityIcons name="person-circle-outline" style={styles.bike} />
                    </View>
                </Marker>
            </MapView>
        {/* <Image source={require('../assets/mapa.jpeg')} style={{ height: '41%', width: '85%', margin: 5, borderRadius: 15 }} /> */}
        <Text >Detalles de la entrega</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={{ margin: 15 }}>Av. Juan de Garay 737,Buenos Aires
          apartamento:6/C3
        </Text>
        <TouchableOpacity
          style={styles.llegada}
          onPress={()=>alert('Llegaste amigue!')}>
          <Text style={styles.buttonText}>llegue al punto de entrega</Text>
        </TouchableOpacity>
        
      
        
      </SafeAreaView>
    );
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
      marginVertical:180,
      marginHorizontal:24
    },
    buttonText: {
      fontWeight:'bold',
      fontSize:20,
      textAlign:'center',
      borderRadius: 8,
      color:'white',
      margin: 4
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
    },
    map: {
      width: '80%',
      height: '40%'
  },
  icon: {
      alignItems: 'center',
      justifyContent: 'center',
      color: 'darkblue',
      backgroundColor: 'white',
      borderRadius: 8,
      height: 30,
      width: 30
  },
  bike: {
      textShadowColor: 'black',
      shadowColor: 'black',
      fontSize: 20
  },
  name:{
    fontSize:18,
    fontWeight:'bold',
    color:'black'
  }})

  export default Settings;
  