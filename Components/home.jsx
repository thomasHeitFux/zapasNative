// import * as React from 'react';
import React,{useState,useEffect} from 'react';
import { Text, View, FlatList } from 'react-native';
import Card from './card';
// import apiParams from '../config.js';
import axios from 'axios';
import { ActivityIndicator } from 'react-native';
// import { Searchbar } from 'react-native-paper';
import { getProducts } from '../Redux/Actions';
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux';

export default  function  Home()  {
      const [isLoading, setLoading] = useState(true);
      const [data, setData] = useState();
      const {products} = useSelector((state)=>state.userReducer)
      const dispatch = useDispatch()
      
      useEffect (()  =>  {
      dispatch(getProducts())
      setLoading(false)
      }, [dispatch]);


    
    return (
        <View>
        {isLoading? 
        <ActivityIndicator size="large" color="#0000ff" style={{justifyContent:'center',alignItems:'center'}}/> 
        : (<>
        <Card />
        <FlatList
              data={products}
              keyExtractor={({ id }) => id.toString()}
              renderItem={({ item }) => (
                <Card
                  id={item.id}
                  image={`${item?.image}`}
                  name={item.name} />
              )}
            />
        </>
        )}
        </View>
    
    )
}