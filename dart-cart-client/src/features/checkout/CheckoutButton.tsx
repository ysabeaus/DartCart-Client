import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../common/types";

import { addInvoice, selectStatus } from "../../common/slices/cartSlice";
import { Modal, Button } from "react-bootstrap";
import { selectUser } from "../../common/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { selectShipping } from "../../common/slices/shippingSlice";
import "./CheckoutButton.css";

export function CheckoutButton() {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectUser);
    const currentCart = useSelector((state: RootState) => state.cart);

    const status = useSelector(selectStatus);

    const { id, streetAddress, city, state, zip } = useSelector((state: RootState) => selectShipping(state, 1)) || {   
        id: 1,
        streetAddress: "",
        city: "",
        state: "",
        zip: "" 
    };

    const nav = useNavigate();
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
        if(status === "fulfilled"){
            nav("/");
        }else{
            nav("/cart");
        }
    }

    async function checkout() {
        if(currentUser && currentCart){
            let shippingAddress = streetAddress + ", " + city + " " + state + ", " + zip;

            await dispatch(addInvoice({user: JSON.parse(currentUser), currentCart: currentCart, shippingAddress: shippingAddress}));
            if(status === "fulfilled"){
                handleShow();
            }else{
                //change modal message
                handleShow();
            }
        }
    }

    return(
        <>
            <div className="col-12">
                <div className="btn btn-primary mb-3" onClick={checkout}>
                    <span className="ps-3">Checkout</span> <span className="fas fa-arrow-right"></span> 
                </div>
            </div>

            <Modal show={show} >
                <Modal.Header>
                    <Modal.Title>Order Confirmed</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your items have been successfully purchased!</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}> Confirm </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}