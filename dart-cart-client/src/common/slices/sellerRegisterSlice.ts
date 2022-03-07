import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk
} from "@reduxjs/toolkit";
import { Seller, Shop } from "../types";
import axios from "axios";

// Change URL for testing vs. production
const API_URL = process.env.REACT_APP_API_URL;

// createEntityAdapter gives us several premade reducer functions for manipulating state
const sellerRegisterAdapter = createEntityAdapter<Seller>();

// Create slice that will manage the state of some type of object
const sellerRegisterSlice = createSlice({
  name: "sellerRegister",
  initialState: sellerRegisterAdapter.getInitialState({
    status: "idle"
  }),
  reducers: {
    addedSeller: sellerRegisterAdapter.addOne,
    shopRedirect(state, action) {
      state.status = "idle";
    }
  },
  // Extra reducers to handle the promise produced by createAsyncThunk
  extraReducers: (builder) => {
    builder.addCase(saveSellerShop.pending, (state, action) => {
      state.status = "loading";
    });
  }
});

// Wrapping reducers in actions
export const { addedSeller, shopRedirect } = sellerRegisterSlice.actions;
export default sellerRegisterSlice.reducer;

// Selectors
export const { selectAll: selectSellers, selectById: selectSellerById } =
  sellerRegisterAdapter.getSelectors((state: any) => state.users);

// Async thunks
export const saveSellerShop = createAsyncThunk(
  "sellerRegister/createdSellerShop",
  async (shop: Shop) => {
    return await axios.post(API_URL + "signup", {
      id: shop.id,
      location: shop.location,
      seller: shop.seller
    });
  }
);
