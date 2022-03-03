import { configureStore } from "@reduxjs/toolkit";
import userRegisterReducer from "./userRegisterSlice";
import authenticationReducer from "./authSlice";

// Here we configure the store object that redux uses for storing data
// Each slice's reducer is added as a reducer here. Note that redux
// toolkit query's createApi is creating a slice as well, so it is included
//
// we also declare all the middleware we'll be using (here we add the exampleApi
// to the default middleware that comes with RTK)
const store = configureStore({
  reducer: {
    userReegister: userRegisterReducer,
    authentication: authenticationReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
