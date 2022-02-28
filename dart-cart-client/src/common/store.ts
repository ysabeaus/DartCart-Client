import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "../features/example/exampleSlice";
import { exampleApi } from "../services/product";

// Here we configure the store object that redux uses for storing data
// Each slice's reducer is added as a reducer here. Note that redux
// toolkit query's createApi is creating a slice as well, so it is included
//
// we also declare all the middleware we'll be using (here we add the exampleApi
// to the default middleware that comes with RTK)
const store = configureStore({
    reducer: {
        examples: exampleReducer,
        [exampleApi.reducerPath]: exampleApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(exampleApi.middleware)
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch