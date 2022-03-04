import { Form, Button } from "react-bootstrap";
import { Billing } from "./BillingForm";
import { Shipping } from "./ShippingForm";
import { DisplayInvoice } from "./InvoiceContainer";
import {selectUser} from "../../common/slices/authSlice";
import { useSelector } from "react-redux";
import "./CheckoutDisplay.css"
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../common/types";
import { CheckoutButton } from "./CheckoutButton";


export function Checkout() {


    return (
        <>
            <Shipping></Shipping>
            <Billing></Billing>
            <DisplayInvoice></DisplayInvoice>
            <CheckoutButton></CheckoutButton>
        </>
    )
}
export default Checkout;