import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios'

import { CartItem } from '../types'
import { RootState } from '../store';

const API_URL = "http://localhost:3001"

const cartAdapater = createEntityAdapter<CartItem>();

export const fetchCart = createAsyncThunk('cart/fetchCart', async (username: string) => {
        const response = await axios.get(API_URL + "/cart/" + username)
        return response.data
    }
)

export const addToCart = createAsyncThunk('cart/addToCart', async (shop_product_id: number) => {
        const username = localStorage.getItem("username")
        const response = await axios.post(API_URL + "/cart", {
            quantity: 1,
            saved: false,
            customer: {
                username: username
            },
            shopProduct: {
                shop_product_id: shop_product_id
            }
        })

        return response.data
    }
)

export const updateCart = createAsyncThunk('cart/updateCart', async (cartItem: CartItem) => {
        const response = await axios.put(API_URL + "/cart/" + cartItem.id, {
            quantity: cartItem.quantity
        })

        return response.data
    }
)

export const cartSlice = createSlice({
    name: 'cart',
    initialState: cartAdapater.getInitialState(),
    reducers: {
        updateCartItem(state, action) {
            if(action.payload.changes.quantity == 0) {
                cartAdapater.removeOne(state, action.payload.id)
            } else {
                cartAdapater.updateOne(state, action)
            }
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCart.fulfilled, (state, action) => {
                cartAdapater.addMany(state, action.payload)
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                cartAdapater.addOne(state, action.payload)
            })
            .addCase(updateCart.fulfilled, (state, action) => {
                cartAdapater.setOne(state, action.payload)
            })
    }
})

export const { updateCartItem } = cartSlice.actions
export default cartSlice.reducer

export const { selectAll: selectAllCartItems, selectById: selectCartItemById} = cartAdapater.getSelectors((state: RootState) => state.cart)