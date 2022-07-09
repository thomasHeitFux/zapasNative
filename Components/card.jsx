import * as React from 'react';
import { Text, View, Image, TouchableOpacity ,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const hardImg='https://d3ugyf2ht6aenh.cloudfront.net/stores/001/581/688/products/nam1verde_21-4ee9ebe37ea4f012af16180921784628-1024-1024.jpg'

export default function CharacterCard({ title, image, price, id, product}) {
	const navigation = useNavigation();
	return (
		<View style={{ justifyContent: 'center', alignItems: 'center' }}>
			<TouchableOpacity style={{  
				flexDirection: 'row', backgroundColor: 'lightblue', minWidth: 320, margin: 8, borderRadius: 8, alignItems:'center',flex:1 }}
				onPress={() => navigation.navigate('Detail',{id:id})}>
				<Image 
				style={{ height: 50, width: 80,flex:2, borderRadius: 3 }} 
				source={{uri:image?image:hardImg}}
				/> 
				<Text style={{flex:3, marginLeft: 15 }}>{title?title:"Zapatilla Nike"}</Text>
                <Text style={{flex:3, marginLeft: 15 }}>{price?price:"$20.000"}</Text>
				<TouchableOpacity style={{flex:1, backgroundColor:'#778899',borderRadius:8,padding:16,marginLeft: 15}}><Text>Fav</Text></TouchableOpacity>
			</TouchableOpacity>
		</View>

	);
}