import 'react-native-gesture-handler';
import * as React from 'react';
import { Text,Dimensions} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import { Provider } from 'react-redux';
import { Store } from './Redux/store';
//Import the components
import List from './Components/estado';
import MyInfo from './Components/MyInfo';
import Settings from './Components/Retirado';
import Retirar from './Components/Order';
// import map from './Components/map';
import home from './Components/home';

const fullScreenWidth=Dimensions.get('window').width;
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StateStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Estado" component={List} />
      <Stack.Screen name='MyInfo' component={MyInfo} />
    </Stack.Navigator>
  )
}
function OrderStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pedidos" component={Retirar} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>)
}

// function MapStackScreen() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="map" component={map} />
//     </Stack.Navigator>)
// }

function HistoryStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Historial" component={Retirar} />
    </Stack.Navigator>)
}

function WalletStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Billetera" component={Retirar} />
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <Provider store={Store}>
    <NavigationContainer >
      <Tab.Navigator  >
      <Tab.Screen  name="Productos" component={home} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="checkmark-outline" color={'darkblue'} size={size} />
          )
        }} />
        <Tab.Screen  name="Estado" component={StateStackScreen} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="checkmark-outline" color={'darkblue'} size={size} />
          )
        }} />
        <Tab.Screen name="Pedidos" component={OrderStackScreen} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bicycle-outline" color={'darkblue'} size={size} />
          )
        }} />
        {/* <Tab.Screen name="Mapa" component={MapStackScreen} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-outline" color={'darkblue'} size={size} />
          )
        }} /> */}
        <Tab.Screen name="Historial" component={HistoryStackScreen} options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="timer-outline" color={'darkblue'} size={size} />
          )
        }} />
        <Tab.Screen name="Billetera" component={WalletStackScreen} options={{headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wallet-outline" color={'darkblue'} size={size} />
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

