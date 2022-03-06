import { Alert, Modal, Button } from "react-bootstrap";
import { saveSellerandShop, shopRedirect } from "../../common/slices/sellerRegisterSlice";
import { Seller, Shop } from "../../common/types";
import { useState } from "react";
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

    dispatch(getAllProducts);

    //   const seller: Seller = {
    //     id: 0,
    //     name: "",
    //     homepage: "",
    //     description: "",
    //     user: currentUser
    //   };

    //   const shop: Shop = {
    //     id: 0,
    //     location: "",
    //     seller: seller
    //   };

    //   function validateInput() {
    //     if (name === "") {
    //       setError("Please enter the name of your business.");
    //     } else if (homepage === "") {
    //       setError("You must create a URL for your Shop.");
    //     } else if (description === "") {
    //       setError("Please enter a description for your Shop.");
    //     } else if (location === "") {
    //       setError("Please enter your business address.");
    //     } else {
    //       return true;
    //     }
    //   }

    //   const createSeller = async () => {
    //     seller.name = name;
    //     seller.homepage = `/${homepage}`;
    //     seller.description = description;
    //     shop.location = location;

    //     if (!validateInput()) {
    //       return;
    //     }

    //     await dispatch(saveSellerShop(shop))
    //       .unwrap()
    //       .then((originalPromiseResult) => {
    //         setShowModal(true);
    //       })
    //       .catch((rejectedValueOrSerializedError) => {
    //         setError("That Shop URL is unavailable.");
    //         clearInputs();
    //       });
    //   };

    //   function clearInputs() {
    //     setHomepage("");
    //   }

    //   function handleClose() {
    //     setShowModal(false);
    //     dispatch(shopRedirect(null));
    //     nav(`/shops/${homepage}`);
    //   }

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
