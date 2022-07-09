import { SET_USERNAME, SET_USERNUMBER, SET_SHARP, GET_PRODUCTS } from './actions'

const initialState = {
    name: 'thomas',
    number: 0,
    sharp: 0,
    products: [],
    allProducts: [],
    allProductsName: []
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USERNAME:
            const stateName = action.payload;
            return {
                ...state,
                name: stateName
            }
        case SET_USERNUMBER:
            return { ...state, number: action.payload }
        case SET_SHARP:
            return { ...state, sharp: action.payload }
        case GET_PRODUCTS:
            const result = action.payload.map((e) => ({
                title: e.title,
                brand: e.brand,
            }));
            console.log(result)
            return {
                ...state,
                allProductsName: result,
                products: action.payload,
                allProducts: action.payload,
                allProductsCopy: action.payload,
            };
        default: return state
    }
}
export default userReducer;