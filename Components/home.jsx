import * as React from 'react';
import { Text, View, FlatList } from 'react-native';
import Card from './card';
// import apiParams from '../config.js';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
// import { Searchbar } from 'react-native-paper';
import { getProducts } from '../Redux/Actions';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
      const [isLoading, setLoading] = useState(false);
      const [data, setData] = useState([]);
    //   const [products, setProducts] = useState(data/20);
    //   const { ts, apikey, hash, baseURL } = apiParams;
    //   const [search, setSearch] = useState('');
    //   const [limit,setLimit]=useState(20)
    //   const [page,setPage] = useState(1)
      const dispatch = useDispatch()
      
      useEffect(() => {
          dispatch(getProducts());
        }, [dispatch]);
        
        const products = useSelector((state)=>state.products)
    console.log(products)

    // function searchCharacter() {
    //     if(search!=='') {
    //       setLoading(true);
    //       axios.get(`${baseURL}/v1/public/characters`, {
    //         params: {
    //           ts,
    //           apikey,
    //           hash,
    //           nameStartsWith: search
    //         }
    //       })
    //         .then(response => setData(response.data.data.results))
    //         .catch(error => console.error(error))
    //         .finally(() => setLoading(false));
    //     }else{
    //       setLoading(true);
    //       axios.get(`${baseURL}/v1/public/characters`, {
    //         params: {
    //           ts,
    //           apikey,
    //           hash,
    //         }
    //       })
    //         .then(response => setData(response.data.data.results))
    //         .catch(error => console.error(error))
    //         .finally(() => setLoading(false));
    //     }
    //   }

    //   const loadMoreItems =()=>{
    //     setLimit(limit+20)
    //   }

    // const renderLoader = ()=>{
    //   return(
    //     <View style={{marginBottom:50}}>
    //       <ActivityIndicator size="large" color="#0000ff" style={{justifyContent:'center',alignItems:'center'}}/>
    //     </View>
    //   )
    // }
    // products?setLoading(false):isLoading
    return (
        <View>
        {isLoading? 
        <ActivityIndicator size="large" color="#0000ff" style={{justifyContent:'center',alignItems:'center'}}/> 
        : (<>
        <Card />
        <FlatList
              data={data}
              keyExtractor={({ id }) => id.toString()}
            //   ListFooterComponent={renderLoader}
            //   onEndReached={loadMoreItems}
              // onEndReachedThreshold={1}
              renderItem={({ item }) => (
                <Card
                  id={item.id}
                  image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`}
                  name={item.name} />
              )}
            />
        </>
        )}
        </View>
    
    )
}