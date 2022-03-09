import {
  createSlice,
  createSelector,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from "../../features/authentication/AuthHeader";
import { Product } from "../models";
import { RootState } from "../types";

const MOCK_SERVER = process.env.REACT_APP_API_URL;

const SPAdapter = createEntityAdapter<Product>(); // Entity is mapped to our Model. Create Entity Adapter provides REDUCERS

export const fetchShopProducts = createAsyncThunk(
  "ShopProducts/fetchShopProducts",
  async (name: string) => {
    const response = await axios.get(MOCK_SERVER + "shop_products/search", {
      headers: authHeader(),
      params: { name },
    });

<<<<<<< HEAD
=======
export const fetchShopProducts = createAsyncThunk(
  "ShopProducts/fetchShopProducts",
  async () => {
    const response = await axios.get(MOCK_SERVER + "shop_products", {
      headers: authHeader(),
    });
>>>>>>> b14a86d78367c1da688f6f03c2f85b3ca4a32371
    return response.data;
  }
);

const intitialState = SPAdapter.getInitialState({
  status: "idle",
  searchString: "",
  items: new Array(),
});

const SPSlice = createSlice({
  name: "ShopProducts",
  initialState: intitialState, //format is identical to getInitialState(), but we added a "status" field to the js Object
  reducers: {
    updatedSearchString(state, action) {
      state.searchString = action.payload;
<<<<<<< HEAD
    },
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
          state.ids[ShopProduct.id - 1] = ShopProduct.id;
          newEntities[ShopProduct.id] = ShopProduct;
          newProducts[ShopProduct.id - 1] = ShopProduct.product;
        });
        state.items = newProducts;
        state.entities = newEntities;
        state.status = "idle";
      });
  },
=======
    }},
    extraReducers: (builder) => {
      builder
          .addCase(fetchShopProducts.pending, (state, action) => {
              state.status = "Loading";
          })
          .addCase(fetchShopProducts.fulfilled, (state, action) => {
              const newEntities = {};
              const newProducts = new Array();
              action.payload.forEach((ShopProduct) => {
                  state.ids[ShopProduct.id - 1] = ShopProduct.id;
                  newEntities[ShopProduct.id] = ShopProduct;
                  newProducts[ShopProduct.id - 1] = ShopProduct.product;
              });
              state.items = newProducts;
              state.entities = newEntities;
              state.status = "idle";
          });
    }
>>>>>>> b14a86d78367c1da688f6f03c2f85b3ca4a32371
});

export const { updatedSearchString } = SPSlice.actions;

export const {
  selectAll: selectShopProducts,
  selectById: selectShopProductById,
} = SPAdapter.getSelectors((state: any) => state.ShopProducts);
<<<<<<< HEAD

export const getSearchString = createSelector(
  (state: RootState) => state.ShopProducts.searchString,
  (search) => {
    return search;
  }
);
=======
>>>>>>> b14a86d78367c1da688f6f03c2f85b3ca4a32371

export const selectFilteredProducts = createSelector(
  (state: RootState) => state.ShopProducts,
  (state: RootState) => state.ShopProducts.searchString,
  (products, searchString) => {
    const items = new Array();
    for (var key in products.entities) {
      items.push(products.entities[key]);
    }

    let re = new RegExp(searchString, "i");

    return items.filter((prod) => prod.product.name.match(re)?.length > 0);
  }
);

export default SPSlice.reducer;
