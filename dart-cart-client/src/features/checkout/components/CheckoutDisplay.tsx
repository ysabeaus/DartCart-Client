import { Billing } from "./BillingForm";
import { Shipping } from "./ShippingForm";
import { DisplayInvoice } from "./InvoiceContainer";
import {selectUser} from "../../../common/slices/authSlice";
import { useSelector } from "react-redux";
import "../styles/CheckoutDisplay.css"
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../../common/types";
import { CheckoutButton } from "./CheckoutButton";

const url = "something/for/sure";

const fetchShopProducts = createAsyncThunk(
    "ShopProducts/fetchShopProducts",
    async (user: User) => {
      const response = await axios.post(url + "/invoices", {

      });
      return response.data;
    }
  );

export function Checkout() {
    const currentUser = useSelector(selectUser);
    const accessToken = localStorage.getItem("accessToken");

    return (
        <>
            <Shipping></Shipping>,
            <Billing></Billing>,
            <DisplayInvoice></DisplayInvoice>,
            <CheckoutButton></CheckoutButton>
        </>
    )
}
export default Checkout;