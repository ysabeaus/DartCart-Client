import { 
    createSlice,
    createSelector,
    createEntityAdapter,
    createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";
import { ShopProduct } from '../Components/models'

const MOCK_SERVER = "https://59749c7b-15b7-4456-b980-124c0bb0d8b0.mock.pstmn.io"
const SPAdapter = createEntityAdapter<ShopProduct>();
export const fetchShopProducts = createAsyncThunk(
    'ShopProducts/fetchShopProducts', async () => {
      const response = await axios.get(MOCK_SERVER+"/ShopProducts")
      console.log(response.data)  
      return response.data
        
    })

    const intitialState = SPAdapter.getInitialState({
        status: "idle"
    })
       

const SPSlice = createSlice({
    name: 'ShopProducts',
    initialState: intitialState,
    reducers: {
       //addShopProducts: SPAdapter.addOne,///example reducer. Can't seem to get a selector without one reducer existing????
    },
    extraReducers: (builder) => {
        builder.addCase(fetchShopProducts.pending, (state, action) => {
            state.status = 'Loading'
        })
        .addCase(fetchShopProducts.fulfilled, (state, action) => {
            const newEntities = {}
            action.payload.forEach(product => {
                state.ids[product.shop_product_id-1] = product.shop_product_id
                newEntities[product.shop_product_id] = product
            })
            state.entities = newEntities
            state.status = "idle"

        })
    }
})


export const { selectAll: selectShopProducts, selectById: selectShopProductById } = SPAdapter.getSelectors((state: any) => state.ShopProducts);

export default SPSlice.reducer
//Creates a selectors to retrieve for ALL shopProducts or ShopProducts by ID


// export const selectedShopProducts = createSelector(
//     selectShopProducts,
//     products => products.map(product => product.product.product_id)
// )