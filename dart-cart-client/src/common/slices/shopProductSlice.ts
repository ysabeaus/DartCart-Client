import {
  createSlice,
  createSelector,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import { ShopProduct } from "../models";
import authHeader from '../../features/login/auth-header';
import { RootState } from "../types";

const MOCK_SERVER = process.env.REACT_APP_API_URL;

const SPAdapter = createEntityAdapter<ShopProduct>(); // Entity is mapped to our Model. Create Entity Adapter provides REDUCERS

export const fetchShopProducts = createAsyncThunk(
  "ShopProducts/fetchShopProducts",
  async () => {
    const response = await axios.get(MOCK_SERVER + "shop_products", { headers: authHeader() });
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
          state.ids[ShopProduct.shop_product_id - 1] =
            ShopProduct.shop_product_id;
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

export const {
  selectAll: selectShopProducts,
  selectById: selectShopProductById,
} = SPAdapter.getSelectors((state: any) => state.ShopProducts); 


export const selectFilteredProducts = createSelector(

  (state: RootState) => state.ShopProducts,
  (state: RootState) => state.ShopProducts.searchString,
  (products, searchString) => {
    
    const items = new Array();
    for(var key in products.entities){
        items.push(products.entities[key])
    
    }

    let re = new RegExp(searchString, 'i')
   
    return (items.filter(prod => prod.product.name.match(re)?.length>0 ));

  }
)

export default SPSlice.reducer; 
