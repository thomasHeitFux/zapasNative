// import * as React from 'react';
import React,{useState,useEffect} from 'react';
import { Text, View, FlatList ,Alert,ScrollView} from 'react-native';
import Card from './card';
import { ActivityIndicator } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { getProducts,searchShoes } from '../Redux/actions';
// import { searchShoes } from '../Redux/actions/searchShoe';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


export default  function  Home()  {
      const [isLoading, setLoading] = useState(true);
      const [data, setData] = useState();
      const {products} = useSelector((state)=>state.userReducer)
      const dispatch = useDispatch()
      const [search, setSearch] = useState('');
      
      useEffect (()  =>  {
      dispatch(getProducts())
      setLoading(false)
      }, [dispatch]);
    
    const handleSearch =()=>{

      if (search!=='') {
        setLoading(true)
        dispatch(searchShoes(search))
        setLoading(false)
      }else{
        Alert.alert('No hay resultados con ese nombre')
      }
      }
    return (
        <ScrollView>
        {isLoading? 
        <ActivityIndicator size="large" color="#0000ff" style={{justifyContent:'center',alignItems:'center'}}/> 
        : (<>
            <Searchbar 
              placeholder="Search for character..."
              onChangeText={value => setSearch(value)}
              value={search}
              onIconPress={(e)=>handleSearch(e)}
              onSubmitEditing={(e)=>handleSearch(e)}
            />

        <FlatList
              data={products}
              keyExtractor={({ id }) => id.toString()}
              renderItem={({ item }) => (
                <Card
                  id={item.id}
                  image={`${item?.image}`}
                  title={item?.title} />
              )}
            />
        </>
        )}
        </ScrollView>
    
    )
}