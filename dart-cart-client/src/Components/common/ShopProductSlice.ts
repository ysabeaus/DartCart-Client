import { 
    createSlice,
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { ShopProduct } from '../models'


const SPAdapter = createEntityAdapter<ShopProduct>();


// const SPSlice = createSlice({
//     name: 'ShopProducts',
//     initialState: SPAdapter.getInitialState(),
//     reducers: {
//        getShopProducts: SPAdapter.removeOne,
//     }
// })


//export const { productDeleted, orderedProductsDeleted } = SPSlice.actions
//export default SPSlice.reducer

export const { selectAll: selectShopProducts, selectById: selectShopProductById } = SPAdapter.getSelectors((state: any) => state.products);
//Creates a selector to retrieve for ALL shopProducts


// export const selectOrderedProducts = createSelector(
//     selectProducts,
//     products => products.map(product => product.ordered)
// )