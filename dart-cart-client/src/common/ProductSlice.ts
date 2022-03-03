import {
  createSlice,
  createSelector,
  createEntityAdapter,
  createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";
import {Product} from '../Components/models';

const MOCK_SERVER = "https://59749c7b-15b7-4456-b980-124c0bb0d8b0.mock.pstmn.io";

const SPAdapter = createEntityAdapter<Product>() // Entity is mapped to our Model. Create Entity Adapter provides REDUCERS

export const fetchProducts = createAsyncThunk(
    'Products/fetchProducts', async () => {
        const response = await axios.get(MOCK_SERVER + "/Products")
        console.log(response.data)
        return response.data

    })

    const intitialState = SPAdapter.getInitialState({
      status: "idle"
  })

  const SPSlice = createSlice({
    name: 'Products',
    initialState: intitialState, //format is identical to getInitialState(), but we added a "status" field to the js Object
    reducers: {
        //addShopProducts: SPAdapter.addOne,///example reducer. Can't seem to get a selector without one reducer existing????
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = 'Loading'
        })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                const newEntities = {}
                action.payload.forEach(Product => {
                    state.ids[Product.product_id - 1] = Product.product_id
                    newEntities[Product.shop_product_id] = Product
                })
                state.entities = newEntities
                state.status = "idle"

            })
    }
})

export default SPSlice.reducer