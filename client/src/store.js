import  {combineReducers} from 'redux'

import { createStore, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'
import {getAllPizzasReducer} from './reducers/pizzaReducers'
import { cartReducer } from './reducers/cartReducer' //cartfunction path


const finalReducer = combineReducers({  
    getAllPizzasReducer : getAllPizzasReducer,
    cartReducer : cartReducer           //cartfunction 
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [] //cartfunction stay

const initialState = {    //cartfunction stay     
    cartReducer : {
        cartItems: cartItems  //cartItems reducer
    }                               
}
const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store