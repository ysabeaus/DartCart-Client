import {
  createSlice,
  createSelector,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from "../../features/authentication/AuthHeader";
import { RootState } from "../types";
import { WishListItem } from "../../common/models";

const MOCK_SERVER = process.env.REACT_APP_API_URL;

const WLAdapter = createEntityAdapter<WishListItem>(); // Entity is mapped to our Model. Create Entity Adapter provides REDUCERS

export const fetchWishList = createAsyncThunk(
  "wishlist/fetchWishList",
  async () => {
    const response = await axios.get(`${MOCK_SERVER}myWishList`, {
      headers: authHeader(),
    });

    return response.data;
  }
);

const intitialState = WLAdapter.getInitialState({
  status: "idle",
  items: new Array(),
});

export const WLSlice = createSlice({
  name: "WishList",
  initialState: intitialState,
  reducers: {
    clearSlice(state, action) {
      state.status = "idle";
      state.items = [];
    },
    removeWishListItem(state, action) {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWishList.fulfilled, (state, action) => {
      const newWishListItems = new Array();
      state.ids = [];
      state.entities = {};
      action.payload.forEach((WishListItem) => {
        state.ids.push(WishListItem.wishListId);
        state.entities[WishListItem.id] = WishListItem;
        newWishListItems[WishListItem.id] = WishListItem;
      });
      state.items = newWishListItems;
      for (let i = 0; i < state.items.length; i++) {
        console.log(
          `State of wishListItems index ${i}: ${state.items[i].product.name}`
        );
      }
      state.status = "success";
    });
  },
});

export const {} = WLSlice.actions;

export const {
  selectAll: selectAllWishListItems,
  selectById: selectWishListItemById,
} = WLAdapter.getSelectors((state: RootState) => state.wishlist);

export const selectStatus = createSelector(
  (state: RootState) => state.wishlist,
  (wishlist) => wishlist.status
  );
  
  export default WLSlice.reducer;