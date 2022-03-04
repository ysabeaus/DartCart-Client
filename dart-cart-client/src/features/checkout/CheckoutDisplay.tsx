import { Form, Button } from "react-bootstrap";
import { Billing } from "./BillingForm";
import { Shipping } from "./ShippingForm";
import "./CheckoutDisplay.css"
import { DisplayInvoice } from "./InvoiceContainer";

export function Checkout() {
    return (
        <>
            <Shipping></Shipping>
            <Billing></Billing>
            <DisplayInvoice></DisplayInvoice>
        </>
    )
}

export default Checkout;