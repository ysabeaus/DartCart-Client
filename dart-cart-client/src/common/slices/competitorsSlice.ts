import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";
import { ShopProduct } from "../models";

const MOCK_SERVER =
  "https://59749c7b-15b7-4456-b980-124c0bb0d8b0.mock.pstmn.io";

const CPAdapter = createEntityAdapter<ShopProduct>(); // Entity is mapped to our Model. Create Entity Adapter provides REDUCERS

//

export const fetchCompetitorProducts = createAsyncThunk(
  "CompetitorProducts/fetchCompetitorProducts",
  async (productId: number) => {
    const response = await axios.get(MOCK_SERVER + "/ShopProducts", {
      params: { product_id: `${productId}` },
    });
    return response.data;
  }
);

const intitialState = CPAdapter.getInitialState({
  status: "idle",
});

const CPSlice = createSlice({
  name: "CompetitorProducts",
  initialState: intitialState, //format is identical to getInitialState(), but we added a "status" field to the js Object
  reducers: {
    //addCompetitorProducts: CPAdapter.addOne,///example reducer. Can't seem to get a selector without one reducer existing????
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompetitorProducts.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(fetchCompetitorProducts.fulfilled, (state, action) => {
        const newEntities = {};
        action.payload.forEach((CompetitorProduct) => {
          state.ids[CompetitorProduct.shop_product_id - 1] =
            CompetitorProduct.shop_product_id;
          newEntities[CompetitorProduct.shop_product_id] = CompetitorProduct;
        });
        state.entities = newEntities;
        state.status = "idle";
      });
  },
});

export const {
  selectAll: selectCompetitorProducts,
  selectById: selectCompetitorProductById,
} = CPAdapter.getSelectors((state: any) => state.CompetitorProducts); // state.CompetitorProduct is the NAME field of our slice

export default CPSlice.reducer; //exported to the REDUX STORE
//Creates a selectors to retrieve for ALL shopProducts or CompetitorProducts by ID
