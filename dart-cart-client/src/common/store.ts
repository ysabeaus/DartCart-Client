import { configureStore } from "@reduxjs/toolkit";
import userRegisterReducer from "./slices/userRegisterSlice";
import sellerRegisterReducer from "./slices/sellerRegisterSlice";
import SPSlice from "./slices/shopProductSlice";
import CPSlice from "./slices/competitorsSlice";
import authenticationReducer from "./slices/authSlice";
import listItemReducer from "./slices/listItemSlice";

// Here we configure the store object that redux uses for storing data
// Each slice's reducer is added as a reducer here
const store = configureStore({
    reducer: {
        userRegister: userRegisterReducer,
        sellerRegister: sellerRegisterReducer,
        authentication: authenticationReducer,
        shopProducts: SPSlice,
        competitorProducts: CPSlice,
        products: listItemReducer
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
