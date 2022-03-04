import { ShopProduct } from "../../common/models";
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
  const ReduxShopProducts = useSelector(selectShopProducts);

  function findCheapest(list: ShopProduct[]) {
    let productMap: Map<number, number> = new Map<number, number>();
    let finalList: ShopProduct[] = [];

    for (let i = 0; i < list.length; i++) {
      if (productMap[list[i].product.product_id]) {
        if (list[i].price < productMap[list[i].product.product_id]) {
          productMap[list[i].product.product_id] = list[i].price;
        }
      } else {
        productMap[list[i].product.product_id] = list[i].price;
      }
    }

    list.forEach((Sproduct) => {
      if (Sproduct.price === productMap[Sproduct.product.product_id]) {
        finalList.push(Sproduct);
      }
    });
    return finalList;
  }

  useEffect(() => {
    dispatch(fetchShopProducts()); // places return value into REDUX global state
  }, []);

  return (
    <>
      <div className=""></div>

      <div className="ProductCardContainer">
        {ReduxShopProducts.length > 0
          //? findCheapest(ReduxShopProducts).map((ShopProduct) => {
            ? ReduxShopProducts.map(ShopProduct => {return (
              <ShopProductCard ShopProduct={ShopProduct}></ShopProductCard>
            )})
              
            //})
          : ""}
      </div>
    </>
  );
};

export default Display;
