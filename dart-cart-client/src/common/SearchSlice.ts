import { 
    createSlice,
    createSelector,
    createEntityAdapter,
    createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";
import { ShopProduct } from '../Components/models'

const MOCK_SERVER = "https://59749c7b-15b7-4456-b980-124c0bb0d8b0.mock.pstmn.io"

const SPAdapter = createEntityAdapter<ShopProduct>() // Entity is mapped to our Model. Create Entity Adapter provides REDUCERS

export const searchShopProducts = createAsyncThunk(
    'ShopProducts/searchShopProducts', async (query: string) => {
      const response = await axios.get(MOCK_SERVER+"/ShopProducts/Search", { params: { query: `${query}`}})
      console.log(response.data)  
      return response.data
        
    })


// axios replaces this syntax:

// async function GET_REQUEST () {
//     const reponse =  await fetch(MOCK_SERVER)

//     const body = await reponse.json()
// }

    const intitialState = SPAdapter.getInitialState({
        status: "idle"
    })

const SearchSlice = createSlice({
    name: 'SearchShopProducts',
    initialState: intitialState, //format is identical to getInitialState(), but we added a "status" field to the js Object
    reducers: {
       //addShopProducts: SPAdapter.addOne,///example reducer. Can't seem to get a selector without one reducer existing????
    },
    extraReducers: (builder) => {
        builder.addCase(searchShopProducts.pending, (state, action) => {
            state.status = 'Loading'
        })
        .addCase(searchShopProducts.fulfilled, (state, action) => {
            const newEntities = {}
            action.payload.forEach(ShopProduct => {
                state.ids[ShopProduct.shop_product_id-1] = ShopProduct.shop_product_id
                newEntities[ShopProduct.shop_product_id] = ShopProduct
            })
            state.entities = newEntities
            state.status = "idle"

        })
    }
})

export const { selectAll: selectShopProducts, selectById: selectShopProductByName } = SPAdapter.getSelectors((state: any) => state.SearchShopProducts); // state.ShopProduct is the NAME field of our slice

export default SearchSlice.reducer //exported to the REDUX STORE 
//Creates a selectors to retrieve for ALL shopProducts or ShopProducts by ID


// export const selectedShopProducts = createSelector(
//     selectShopProducts,
//     products => products.map(product => product.product.product_id)
// )