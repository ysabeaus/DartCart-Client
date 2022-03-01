import { createSlice, configureStore } from '@reduxjs/toolkit'
//import { StoreAPI } from '../services/APIQuery'
import SPSlice from './ShopProductSlice'

// const reducer = (state, action) => {
//     switch (action.type) {
//         case "addProduct":
//             return state + action.payload
//     }
// }


// Here we configure the store object that redux uses for storing data
// Each slice's reducer is added as a reducer here. Note that redux
// toolkit query's createApi is creating a slice as well, so it is included
//
// we also declare all the middleware we'll be using (here we add the exampleApi
// to the default middleware that comes with RTK)


//############################### ALL REDUCERS FOR ENTIRE STORE CAN BE DEFINED HERE

const store = configureStore({
    reducer: {
        ShopProducts: SPSlice
    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(StoreAPI.middleware)
})

//############################### ALL REDUCERS FOR ENTIRE STORE CAN BE DEFINED HERE

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
