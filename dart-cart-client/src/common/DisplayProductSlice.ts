import {
    createSlice,
    createSelector,
    createEntityAdapter,
    createAsyncThunk
} from "@reduxjs/toolkit";
import axios from "axios";
import { ShopProduct } from '../Components/models'

const MOCK_SERVER = "https://59749c7b-15b7-4456-b980-124c0bb0d8b0.mock.pstmn.io"

const DPSAdapter = createEntityAdapter<ShopProduct>() // Entity is mapped to our Model. Create Entity Adapter provides REDUCERS

export const fetchDisplayProducts = createAsyncThunk(
    'ShopProducts/fetchDisplayProducts', async () => {
        const response = await axios.get(MOCK_SERVER + "/ShopProducts")
        console.log(response.data)
        return response.data

    })


// axios replaces this syntax:

async function GET_REQUEST() {
    const reponse = await fetch(MOCK_SERVER)

    const body = await reponse.json()
}

const intitialState = DPSAdapter.getInitialState({
    status: "idle"
})

const SPSlice = createSlice({
    name: 'ShopProducts',
    initialState: intitialState, //format is identical to getInitialState(), but we added a "status" field to the js Object
    reducers: {
        addIsolatedDisplayProducts: DPSAdapter.addOne,///example reducer. Can't seem to get a selector without one reducer existing????
    }
})

export const { selectAll: selectShopProducts, selectById: selectShopProductById } = DPSAdapter.getSelectors((state: any) => state.ShopProducts); // state.ShopProduct is the NAME field of our slice

export default SPSlice.reducer //exported to the REDUX STORE 
// Creates a selectors to retrieve for ALL shopProducts or ShopProducts by ID


export const selectedShopProducts = createSelector(
    selectShopProducts,
    products => products.map(product => product.product.product_id)
)