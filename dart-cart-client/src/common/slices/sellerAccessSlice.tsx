import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import React from "react";
import { RootState, Seller } from "../types";

// Change URL for testing vs. production
const API_URL = process.env.REACT_APP_API_URL;

const sellerAccessAdapter = createEntityAdapter<Seller>();

const sellerAccessSlice = createSlice({
    name: "sellerAccess",
    initialState: {
        status: "idle",
        seller: localStorage.getItem("seller")
    },
    reducers: {
        updateSeller(sellerAccessSliceState, action) {
            sellerAccessSliceState.seller = action.payload;
        },
        logoutSeller(sellerAccessSliceState, action) {
            sellerAccessSliceState.seller = null;
            localStorage.removeItem("seller");
        }
    },
    // Extra reducers to handle the promise created by createAsyncThunk
    extraReducers: (builder) => {
        builder
            .addCase(fetchSeller.pending, (sellerAccessSliceState, action) => {
                sellerAccessSliceState.status = "loading";
            })
            .addCase(fetchSeller.fulfilled, (sellerAccessSliceState, action) => {
                sellerAccessSliceState.seller = localStorage.getItem("seller");

                if (sellerAccessSliceState.seller) sellerAccessSliceState.status = "success";
                else sellerAccessSliceState.status = "failure";
            })
            .addCase(fetchSeller.rejected, (sellerAccessSliceState, action) => {
                sellerAccessSliceState.status = "failure";
            });
    }
});

export const { selectAll: selectSellers, selectById: selectSellerById } = sellerAccessAdapter.getSelectors(
    (state: any) => state.sellerAccess
);

export const selectSeller = (state) => state.sellerAccess.seller;

export const fetchSeller = createAsyncThunk("sellerAccess/fetchSeller", async (id: number) => {
    return axios.get(`${API_URL}sellers/${id}`).then((response) => {
        localStorage.setItem("seller", JSON.stringify(response.data));
    });
});

export const { updateSeller, logoutSeller } = sellerAccessSlice.actions;
export default sellerAccessSlice.reducer;
