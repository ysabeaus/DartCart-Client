import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

const API_URL = "http://localhost:9005/"

const initialState = {
   // carts: localStorage.getItem("carts")
   carts: []
};
const username = JSON.parse(localStorage.getItem("user")).username;
const userid = JSON.parse(localStorage.getItem("user"));
let temp = {};
export const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCart.pending, (state, action) => {
                console.log("pending")
            })
            .addCase(fetchCart.fulfilled, (state, action) => {
                state.carts = action.payload
            })
            .addCase(addToCart.pending, (state, action) => {
                console.log("pending")
            })
            .addCase(addToCart.fulfilled, (state, action) => {

                console.log(action.payload)
            })
            .addCase(updateCart.pending, (state, action) => {
                console.log("pending")
            })
            .addCase(updateCart.fulfilled, (state, action) => {
                console.log(temp)
                if(temp.quantity==0){
                    state.carts = state.carts.filter(e => e.id!=temp.id)
                }
            })
    }
})

export const fetchCart = createAsyncThunk(
    'cards/fetchCart',
    async () => {
        await console.log("hahahaha");
        return (await axios.get(API_URL + "carts/"+username)).data
    }
)

export const addToCart = createAsyncThunk(
    'cards/addToCart',
    async (shop_product_id) => {
        // console.log(userid)
        return (await axios.post(API_URL + "carts",{
            quantity: 1,
            saved : false,
            customer: {
                username: username
            },
            shopProduct: {
                id : shop_product_id
            },
        })).data
    }
)

export const updateCart = createAsyncThunk(
    'cards/UpdateCart',
    async (element) => {

        temp.id = element.id;
        temp.quantity = element.quantity;
        return (await axios.put(API_URL + "carts/"+element.id,{
            quantity: element.quantity,
        })).data
    }
)
//export const {fetchCart} = cartSlice.actions

export default cartSlice.reducer