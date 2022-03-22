import { Product } from "../../common/models";
import { ShopProductCard } from "../product-details/ShopProductCard";
import "./display.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchShopProducts,
  getStatus,
  selectShopProducts,
  clearSlice,
} from "../../common/slices/shopProductSlice";
import Featured_Products from "../Featured_Products";

const Display = () => {
  const dispatch = useDispatch();
  const ReduxShopProducts: Product[] = useSelector(selectShopProducts);
  const status = useSelector(getStatus);

  useEffect(() => {
    if (status === "idle") dispatch(fetchShopProducts("")); // places return value into REDUX global state
  }, []);

  return (
    <>
      <div className="ProductCardContainer">
      <Featured_Products/>
      </div>

      <div className="ProductCardContainer">
        {status === "success" ? (
          (ReduxShopProducts.length &&
            ReduxShopProducts.map((Product) => {
              return <ShopProductCard Product={Product}></ShopProductCard>;
            })) || (
            <>
              <h1 style={{ color: "white" }}>No Items Found</h1>
            </>
          )
        ) : (
          <div
            className="text-light fs-1 p-5 text-uppercase"
            style={{ textAlign: "center" }}
          >
            Fetching Products...
          </div>
        )}
      </div>
    </>
  );
};

export default Display;
