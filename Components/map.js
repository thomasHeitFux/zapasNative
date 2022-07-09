import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { useState } from "react";
import * as Location from 'expo-location'
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';



export default function map() {
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
        <View>

            <MapView
                style={Styles.map}
                region={{
                    latitude:origin.latitude,
                    longitude: origin.longitude,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02,
                }}
            >
                <Marker
                    draggable
                    onDragEnd={(dir) => setOrigin(dir.nativeEvent.coordinate)}
                    coordinate={origin}>
                    <View style={Styles.icon}>
                        <MaterialCommunityIcons name="bicycle-outline" style={Styles.bike} />
                    </View>
                </Marker>
                <Marker
                    coordinate={destination}>
                    <View style={Styles.icon}>
                        <MaterialCommunityIcons name="person-circle-outline" style={Styles.bike} />
                    </View>
                </Marker>
            </MapView>
        </View>
    )
}

const Styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center'
    },
    map: {
        width: '100%',
        height: '100%'
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
    }
})