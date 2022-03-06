import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";
import { ShopProduct } from "../models";

const MOCK_SERVER = "http://localhost:9005/";

const listItemAdapter = createEntityAdapter<ShopProduct>();

const intitialState = listItemAdapter.getInitialState({
  status: "idle"
});

const listItemSlice = createSlice({
  name: "listItems",
  initialState: intitialState,
  reducers: {
    addedShopProduct: listItemAdapter.addOne
  },
  extraReducers: (builder) => {
    builder
      .addCase(createShopProduct.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(createShopProduct.fulfilled, (state, action) => {
        const newEntities = {};
        action.payload.forEach((ShopProduct) => {
          state.ids[ShopProduct.id - 1] = ShopProduct.id;
          newEntities[ShopProduct.id] = ShopProduct;
        });
        state.entities = newEntities;
        state.status = "idle";
      });
  }
});

export const {
  selectAll: selectShopProducts,
  selectById: selectShopProductById
} = listItemAdapter.getSelectors((state: any) => state.ShopProducts);

export const getAllProducts = createAsyncThunk(
  "listItem/getAllProducts",
  async () => {
    const response = await axios.get(MOCK_SERVER + "products");
    return response.data;
  }
);

export const createShopProduct = createAsyncThunk(
  "listItem/createShopProduct",
  async () => {
    const response = await axios.get(MOCK_SERVER + "shop_products");
    return response.data;
  }
);

export default listItemSlice.reducer;
