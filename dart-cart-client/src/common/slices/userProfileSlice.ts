import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../types";
import axios from "axios";
import authHeader from "../../features/authentication/AuthHeader";


// Change URL for testing vs. production
const API_URL = process.env.REACT_APP_API_URL;

// createEntityAdapter gives us several premade reducer functions for manipulating state
const userProfileAdapter = createEntityAdapter<User>();

// Create slice that will manage the state of some type of object
const userUpdateProfileSlice = createSlice({
    name: "userUpdateProfile",
    initialState: {
        status: "idle"
    },
    reducers: {
        homeRedirect(state, action) {
            state.status = "idle";
        }
    },
    // Extra reducers to handle the promise produced by createAsyncThunk
    extraReducers: (builder) => {
        builder
            .addCase(updateUser.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.status = "success";
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.status = "failed";
            });
    }
});

// Wrapping reducers in actions
export const { homeRedirect } = userUpdateProfileSlice.actions;
export default userUpdateProfileSlice.reducer;


// // Async thunk to update user profile
// export const updateUser = createAsyncThunk("userUpdateProfile/updateUser", async (user: User) => {
//     console.log(user);
//     return await axios.patch(API_URL + "updateProfile", {
//         firstName: user.firstName,
//         lastName: user.lastName,
//         email: user.email,
//         phone: user.phone,
//         location: user.location
//         firstName: "Hannah",
//         lastName: "Test",
//         email: "hannah@test.com",
//         phone: "5555555555",
//         location: "bay area"
//     });
// });


export const updateUser = createAsyncThunk("userUpdateProfile/updateUser", async (user: User) => {
    return await axios.patch(
        API_URL + "updateProfile",
        {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            location: user.location
        },
        { headers: authHeader() }
    );
});
