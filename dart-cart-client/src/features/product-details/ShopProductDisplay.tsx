import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "./shopProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchShopProducts, selectShopProductById } from "../../common/slices/shopProductSlice";
import { CompetingSellers } from "../competing-sellers/CompetingSellers";

//imgs
import cartoonBat from "../../imgs/cartoon-baseball-bat.png";
import cartoonComputer from "../../imgs/cartoon-computer.png";
import cartoonSteak from "../../imgs/cartoon-steak.png";
import cartoonClothing from "../../imgs/Clothing-baby-clothes.png";
import cartoonDiamond from "../../imgs/diamond-ring.png";
import cartoonMeds from "../../imgs/Free-medica.png";
import cartoonShoes from "../../imgs/Sneaker-tennis-shoes.png";

const ShopProductDisplay = () => {
    const shop_product_id = useParams()?.shop_product_id || "";
    const dispatch = useDispatch();

    const ReduxShopProducts = useSelector((state) => selectShopProductById(state, shop_product_id));

    useEffect(() => {
        dispatch(fetchShopProducts()); // places return value into REDUX global state
    }, []);

    const ImgStyleBase = {
        backgroundImage: "",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "40%"
    };

    function ImgSplice(catagories: String[]) {
        let newImg = Object.assign({}, ImgStyleBase);
        catagories.forEach((catagory) => {
            switch (catagory) {
                case "Perishable":
                    newImg.backgroundImage = `url('${cartoonSteak}')`;
                    break;
                case "Electronics":
                    newImg.backgroundImage = `url('${cartoonComputer}')`;
                    break;
                case "Clothing":
                    newImg.backgroundImage = `url('${cartoonClothing}')`;
                    break;
                case "Luxury":
                    newImg.backgroundImage = `url('${cartoonDiamond}')`;
                    break;
                case "Entertainment":
                    newImg.backgroundImage = `url('${cartoonBat}')`;
                    break;
                case "Medical":
                    newImg.backgroundImage = `url('${cartoonMeds}')`;
                    break;
                case "Footware":
                    newImg.backgroundImage = `url('${cartoonShoes}')`;
                    break;
            }
        });
        return newImg;
    }
//<CompetingSellers Seller={ReduxShopProducts?.id!}></CompetingSellers>
    console.log(ReduxShopProducts);

    return (
        <>
            <div className="ProductInfoPocket">
                <h2>{ReduxShopProducts?.product.name?.toUpperCase()}</h2>
                <br />
                <h3>Price: $ {ReduxShopProducts?.price}</h3>
                <h3>In Stock: {ReduxShopProducts?.quantity}</h3>
                <h3>Seller: {ReduxShopProducts?.shop}</h3>
            </div>

            <div className="ProductDescriptionPocket">
                <p>{ReduxShopProducts?.product.description}</p>
            </div>
            
        </>
    );
};

export default ShopProductDisplay;
