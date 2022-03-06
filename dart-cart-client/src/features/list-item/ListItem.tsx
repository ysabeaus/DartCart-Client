import { Alert, Modal, Button } from "react-bootstrap";
import { saveSellerandShop, shopRedirect } from "../../common/slices/sellerRegisterSlice";
import { Seller, Shop } from "../../common/types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../common/hooks";
import { selectUser } from "../../common/slices/authSlice";
import { useSelector } from "react-redux";
import { getAllProducts } from "../../common/slices/listItemSlice";

export function ListItem() {
    // TODO: Grab the Shop from the store

    const [productName, setProductName] = useState("");
    console.log(productName);

    const dispatch = useAppDispatch();
    const nav = useNavigate();

    useEffect( () => {dispatch(getAllProducts())}, [])



    return (
        <>
            <section className="vh-200">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10">
                            <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                                <div className="card-header card text-center bg-success text-white">
                                    <h3 className="mb-0">Create Your Shop</h3>
                                </div>
                                <div className="card-body p-3 text-center">
                                    <div id="description">
                                        <p>
                                            To become a seller on DartCart, create a Shop. It'll have a unique web
                                            address.
                                            <br />
                                            Provide a description of your Shop and the address from which you'll be
                                            shipping customers' orders.
                                        </p>
                                    </div>

                                    {/* {error ? <Alert variant="danger">{error}</Alert> : null} */}

                                    <div className="row">
                                        <div className="form-outline mb-0">
                                            {/* Note: This is the Seller's name. */}
                                            <h4>Product Name</h4>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="text"
                                                placeholder={`product`}
                                                id="typeEmailX-2"
                                                className="form-control form-control-lg"
                                                value={productName}
                                                onChange={(e) => {
                                                    setProductName(e.target.value);
                                                }}
                                            />
                                        </div>
                                        <button className="btn btn-success btn-lg btn-block">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ListItem;
