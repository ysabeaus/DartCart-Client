import { Alert, Modal, Button, Form } from "react-bootstrap";
import { saveSellerandShop, shopRedirect } from "../../common/slices/sellerRegisterSlice";
import { Seller, Shop } from "../../common/types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../common/hooks";
import { selectShop, selectUser } from "../../common/slices/authSlice";
import { useSelector } from "react-redux";
import { createShopProduct, getAllProducts, selectProducts } from "../../common/slices/listItemSlice";
import { Typeahead } from "react-bootstrap-typeahead";
import { ShopProduct } from "../../common/models";
import NumberFormat from "react-number-format";

export function ListItem() {
    const [productName, setProductName] = useState<any[]>([]);
    const [error, setError] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productQuantity, setProductQuantity] = useState(0);
    const [productDiscount, setProductDiscount] = useState(0);
    const stateProducts = useSelector(selectProducts);
    const stateShop = useSelector(selectShop);
    const shop = JSON.parse(stateShop);
    const dispatch = useAppDispatch();
    const nav = useNavigate();

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    const extractProductNames = () => {
        return stateProducts.map((product) => {
            return product.name;
        });
    };
    const products = extractProductNames();
    console.log(products);

    const setChosenProduct = () => {
        if (productName) {
            return stateProducts.find((product) => product?.name === productName[0]);
        }
    };
    const chosenProduct = setChosenProduct();
    console.log(chosenProduct);

    const extractCategories = () => {
        return chosenProduct.categories.map((category) => {
            return category.name;
        });
    };

    const checkChosenProduct = () => {
        if (chosenProduct) {
            return extractCategories();
        }
    };
    const categories = checkChosenProduct();

    const shopProduct: ShopProduct = {
        id: 0,
        shop: shop,
        product: chosenProduct,
        quantity: 0,
        price: 0,
        discount: 0
    };

    const handleOnClick = () => {
        shopProduct.quantity = productQuantity;
        shopProduct.price = productPrice * 100;
        shopProduct.discount = productDiscount * 100;

        console.log(shopProduct);

        // TODO: Input validation

        // dispatch(createShopProduct(shopProduct))
        //     .unwrap()
        //     .then((originalPromiseResult) => {
        //         window.alert("AAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHH");
        //     })
        //     .catch((rejectedValueOrSerializedError) => {
        //         setError("Some kind of input validation thing.");
        //     });
    };

    return (
        <>
            <section className="vh-200">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-10">
                            <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                                <div className="card-header card text-center bg-success text-white">
                                    <h3 className="mb-0">List an Item</h3>
                                </div>
                                <div className="card-body p-3 text-center">
                                    <div id="description">
                                        <p>
                                            Post a new item for sale. Search our existing database of products, then
                                            provide a quantity and price.
                                        </p>
                                    </div>

                                    {error ? <Alert variant="danger">{error}</Alert> : null}

                                    <div className="row">
                                        <div className="form-outline mb-0">
                                            <h4>Product Name</h4>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <Form.Group>
                                                <Form.Label>Single Selection</Form.Label>
                                                <Typeahead
                                                    id="basic-typeahead-single"
                                                    labelKey="name"
                                                    onChange={(selected) => {
                                                        setProductName(selected);
                                                    }}
                                                    options={products}
                                                    placeholder="Search by product name"
                                                    selected={productName}
                                                />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-outline mb-0">
                                            <h4>Category: {categories?.join(", ")}</h4>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-outline mb-0">
                                            <h4>Quantity</h4>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="number"
                                                placeholder={`0`}
                                                id="typeEmailX-2"
                                                className="form-control form-control-lg"
                                                value={productQuantity}
                                                onChange={(e) => {
                                                    setProductQuantity(Number.parseInt(e.target.value));
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-outline mb-0">
                                            <h4>Price Per Item</h4>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="number"
                                                step={0.01}
                                                placeholder={`0`}
                                                id="typeEmailX-2"
                                                className="form-control form-control-lg"
                                                value={productPrice}
                                                onChange={(e) => {
                                                    setProductPrice(Number.parseFloat(e.target.value));
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-outline mb-0">
                                            <h4>Discount</h4>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="number"
                                                step={0.01}
                                                placeholder={`0`}
                                                id="typeEmailX-2"
                                                className="form-control form-control-lg"
                                                value={productDiscount}
                                                onChange={(e) => {
                                                    setProductDiscount(Number.parseFloat(e.target.value));
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <button className="btn btn-success btn-lg btn-block" onClick={handleOnClick}>
                                        Post
                                    </button>
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
