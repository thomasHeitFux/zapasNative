import axios from 'axios';

export const SET_USERNUMBER='SET_USERNUMBER';
export const SET_USERNAME='SET_USERNAME';
export const SET_SHARP='SET_SHARP';
export const GET_PRODUCTS = "GET_PRODUCTS";

export const local_url = "http://localhost:3001";


export  function getProducts  () {
    return async function  (dispatch) {
      const {data} = await axios(`${local_url}/shoes`)
      dispatch({
          type: GET_PRODUCTS,
          payload: data,
        })
      
    };
  }

export const setNumber =(number)=>{
    return({
        type:SET_USERNUMBER,
        payload:number
    })
}

export const setName =(name)=>{
    return({
        type:SET_USERNAME,
        payload:name
    })
}
export const setSharp =(num)=>{
    return({
        type:SET_SHARP,
        payload:num
    })
}