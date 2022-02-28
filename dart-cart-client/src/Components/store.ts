import {createSlice, configureStore } from 'react-redux'
import { Product, ShopProduct } from './models'

const intitialState = {
    Products: [],
    ShopProducts: []
}



const reducer = (state, action) => {
    switch (action.type) {
        case "addProduct":
            return state + action.payload
    }
}