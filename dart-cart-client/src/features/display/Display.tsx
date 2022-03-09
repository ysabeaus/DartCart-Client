import { Product} from "../../common/models";
import { ShopProductCard } from "../product-details/ShopProductCard";
import "./display.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchShopProducts,

  selectShopProducts,
} from "../../common/slices/shopProductSlice";

const Display = () => {
  const dispatch = useDispatch();
  const ReduxShopProducts : Product[] = useSelector(selectShopProducts);

  useEffect(() => {
    dispatch(fetchShopProducts("")); // places return value into REDUX global state
  }, []);

  return (
    <>
      <div className=""></div>

      <div className="ProductCardContainer">
        {ReduxShopProducts.length > 0 ? (
          
          ReduxShopProducts.map((Product) => {
            return (
              <ShopProductCard Product={Product}></ShopProductCard>
            );
          })
        ) : (
          <div className="text-light fs-1 p-5 text-uppercase" style = {{textAlign: "center"}}>
            Fetching Products...
          </div>
        )}
      </div>
    </>
  );
};

export default Display;