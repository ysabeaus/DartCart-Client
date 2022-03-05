import {
  createSlice,
  createSelector,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import { ShopProduct } from "../models";
import { RootState } from '../types'

const MOCK_SERVER =
  "https://6a03c0f8-707b-4c71-9de2-eba10f74363b.mock.pstmn.io";

const SPAdapter = createEntityAdapter<ShopProduct>(); // Entity is mapped to our Model. Create Entity Adapter provides REDUCERS

export const fetchShopProducts = createAsyncThunk(
  "ShopProducts/fetchShopProducts",
  async () => {
    const response = await axios.get(MOCK_SERVER + "/ShopProducts");
    return response.data;
  }
);

const intitialState = SPAdapter.getInitialState({
  status: "idle",
  searchString: "",
  items: new Array()
});

const SPSlice = createSlice({
  name: "ShopProducts",
  initialState: intitialState, //format is identical to getInitialState(), but we added a "status" field to the js Object
  reducers: {
    updatedSearchString(state, action) {
      console.log(action.payload)
      state.searchString = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShopProducts.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(fetchShopProducts.fulfilled, (state, action) => {
        const newEntities = {};
        const newProducts = new Array();
        action.payload.forEach((ShopProduct) => {
          state.ids[ShopProduct.shop_product_id - 1] = ShopProduct.shop_product_id;
          newEntities[ShopProduct.shop_product_id] = ShopProduct;
          newProducts[ShopProduct.shop_product_id - 1] = ShopProduct.product;
        });
        state.items = newProducts; 
        state.entities = newEntities;
        state.status = "idle";
      });
  },
});

export const { updatedSearchString } = SPSlice.actions
export default SPSlice.reducer; //exported to the REDUX STORE

export const {
  selectAll: selectShopProducts,
  selectById: selectShopProductById,
} = SPAdapter.getSelectors((state: any) => state.ShopProducts); // state.ShopProduct is the NAME field of our slice


export const selectFilteredProducts = createSelector(

  (state: RootState) => state.ShopProducts,
  (state: RootState) => state.ShopProducts.searchString,
  (products, searchString) => {
    
    let p= new Array()
    for(let prod of products.items){
      if (prod !== undefined) p.push(prod)
    }

    let re = new RegExp(searchString, 'i')

    return (p.filter(prod => prod.name.match(re)?.length>0 ));
  }
)