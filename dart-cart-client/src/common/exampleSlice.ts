import { 
    createSlice,
    createSelector,
    createAsyncThunk,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { Product } from './types'
import { RootState } from "./store";

const axios = require('axios').default;

// createEntityAdapter gives us several premade reducer functions
// for manipulating state. It gives us:
// addOne / addMany: add new items to the state
// upsertOne / upsertMany: add new items or update existing ones
// updateOne / updateMany: update existing items by supplying partial values
// removeOne / removeMany: remove items based on IDs
// setAll: replace all existing items
//
// We also get:
// getInitialState: returns an object that looks like { ids: [], entities: {} }, 
//     for storing a normalized state of items along with an array of all item IDs
// getSelectors: generates a standard set of selector functions
const exampleAdapter = createEntityAdapter<Product>();

// Create slice that will manage the state of some type of object
// in this example slice we're using an example Product type
const exampleSlice = createSlice({
    name: 'products',
    initialState: exampleAdapter.getInitialState({
        status: "idle"
    }),
    reducers: {
        productDeleted: exampleAdapter.removeOne,
        orderedProductsDeleted(state, action) {
            const orderedProductIds: any[] = Object.values(state.entities)
                .filter(product => product?.ordered)
                .map(product => product?.id)

            // note that orderedProductIds is type any[], not worth fighting the type system here
            exampleAdapter.removeMany(state, orderedProductIds)
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                exampleAdapter.addMany(state, action.payload)
                state.status = "idle"
            })
    }
})

// This Thunk is used to make the api call to the backend (here mocked using json-server)
// The extraReducers field of the slice contains a set of reducers (added through addCase)
// to modify state based on the response's status
export const fetchProducts = createAsyncThunk('products/fectProducts', async () => {
    const response = await axios("http://localhost:3001/products");
    return response.data;
})

// With Redux Toolkit we get our reducers wrapped in actions, which simplifies the logic
// a lot. Our React components will use dispatch on these actions to actually perform
// state management
export const { productDeleted, orderedProductsDeleted } = exampleSlice.actions
export default exampleSlice.reducer

// In this next section is where we define our selectors, ie how our react components get/derive
// the state they need from Redux. The base method is useSelector, but it has some optimizations
// built on it via Redux Toolkit that we can get from the adapter we declared earlier

// What we've done here is override the built in selectors given by the adapater object
// we can also create custom selectors with createSelector
export const { selectAll: selectProducts, selectById: selectProductById } = exampleAdapter.getSelectors((state: RootState) => state.products);

export const selectOrderedProducts = createSelector(
    selectProducts,
    products => products.map(product => product.ordered)
)

export const selectStatus = createSelector(
    (state: RootState) => state.products.status,
    status => status
)