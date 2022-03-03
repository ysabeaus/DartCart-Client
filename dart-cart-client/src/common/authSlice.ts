import { createSlice, createSelector, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { RootState } from "./types";

// JSON server URL. Change to backend URL for testing/in production
const API_URL = process.env.REACT_APP_API_URL;

// Create a slice that will manage the state of the SecurityToken
const authenticationSlice = createSlice({
    name: "authentication",
    initialState: {
        status: "idle",
        token: localStorage.getItem("accessToken"),
        user: localStorage.getItem("user")
    },
    reducers: {
        updateToken(authenticationSliceState, action) {
            authenticationSliceState.token = action.payload;
        },
        updateUser(authenticationSliceState, action) {
            authenticationSliceState.user = action.payload;
        },
        redirect(authenticationSliceState, action) {
            authenticationSliceState.status = "idle";
        },
        logout(authenticationSliceState, action) {
            authenticationSliceState.token = null;
            authenticationSliceState.user = null;
            authenticationSliceState.status = "idle";

            localStorage.removeItem("user");
            localStorage.removeItem("username");
            localStorage.removeItem("accessToken");
        },
    },
    // Extra reducers to handle the promise created by createAsyncThunk
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (authenticationSliceState, action) => {
                authenticationSliceState.status = "loading";
            })
            .addCase(loginUser.fulfilled, (authenticationSliceState, action) => {
                authenticationSliceState.token = localStorage.getItem("accessToken");
                authenticationSliceState.user = localStorage.getItem("user");

                if (authenticationSliceState.user)
                    authenticationSliceState.status = "success";
                else
                    authenticationSliceState.status = "failure";
            })
            .addCase(loginUser.rejected, (authenticationSliceState, action) => {
                authenticationSliceState.status = "failure";
            })
    }
});

// With Redux Toolkit we get our reducers wrapped in actions, which simplifies the logic
// a lot. Our React components will use dispatch on these actions to actually perform
// state management
export const { updateToken, updateUser, redirect, logout } = authenticationSlice.actions;
export default authenticationSlice.reducer;

// In this next section is where we define our selectors, ie how our react components get/derive
// the state they need from Redux. The base method is useSelector, but it has some optimizations
// built on it via Redux Toolkit that we can get from the adapter we declared earlier

// we can create custom selectors with createSelector
export const selectStatus = createSelector(
    (state: RootState) => state.authentication,
    (authentication) => authentication.status
);
export const selectUser = createSelector(
    (state: RootState) => state.authentication,
    (authentication) => authentication.user
);
export const selectToken = createSelector(
    (state: RootState) => state.authentication,
    (authentication) => authentication.token
);

// Async functionality
export const loginUser = createAsyncThunk(
    "authentication/login",
    async (user: { username: string, password: string }) => {
        return axios.post(API_URL + "login", {
            username: user.username,
            password: user.password
        })
            .then(response => {

                if (response.headers) {

                    localStorage.setItem("username", response.data.username);
                    localStorage.setItem("accessToken", response.headers.authorization);
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
            }).catch(error => {
                localStorage.removeItem("user");
                localStorage.removeItem("username");
                localStorage.removeItem("accessToken");
            });
    }
);
