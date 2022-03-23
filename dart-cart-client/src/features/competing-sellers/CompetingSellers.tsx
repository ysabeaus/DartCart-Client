import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product, ShopProduct } from "../../common/models";
import { addToCart } from "../../common/slices/cartSlice";
import {
  fetchCompetitorProducts,
  selectCompetitorProductById,
  selectCompetitorProducts,
} from "../../common/slices/competitorsSlice";
import Logo from "../layout/Logo";
import "./competingSellers.css";

interface SellerProduct {
  Seller: number;
}

export function CompetingSellers({ Seller }: SellerProduct) {
  const dispatch = useDispatch();

  const ReduxCompetitorProducts: ShopProduct[] = useSelector(
    selectCompetitorProducts
  );

  useEffect(() => {
    dispatch(fetchCompetitorProducts(Seller)); // places return value into REDUX global state
  }, []);

  function handleAddtoCart(e) {
    dispatch(addToCart(e.target.value));
  }

  return (
    <div className="Competitors">
      {(ReduxCompetitorProducts &&
        ReduxCompetitorProducts.map((competitors) => {
          return (
            <div className="SellerContainer">
              <div className="SellerWindow"></div>

              <div className="SellerPocket">
                <div className="SellerInfo">
                  <span>{competitors.product.name}</span>
                  <br />
                  <span>Price: {competitors.price}</span>
                  <br />
                  {competitors.discount > 0 && (
                    <span className="SellerDiscount">
                      Discount: {competitors.discount}
                    </span>
                  )}
                </div>
                <div className="SellerInfo">
                  <span>Location: {competitors.location}</span>
                  <br />
                  <span>In Stock: {competitors.quantity}</span>
                  <br />
                </div>
              </div>
              <button
                className="btn btn-primary"
                value={competitors.shop_product_id}
                onClick={(e) => handleAddtoCart(e)}
              >
                Add to cart
              </button>
            </div>
          );
        })) ||
        ""}
    </div>
  );
}
