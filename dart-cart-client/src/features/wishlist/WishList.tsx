import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./wishList.css";
import {
  fetchWishList,
  selectAllWishListItems,
  selectStatus,
} from "../../common/slices/wishlistSlice";
import WishListItemView from "./WishListItemView";
import { WishListItem } from "../../common/models";

// const removeFromWishList = (id) => {

//   return axios.post("http://localhost:9005/removeFromWishList", {
//     shopProductId: id
//   },
//   { headers: authHeader() }
//   )
// }

const WishList = () => {
  const WishListItems: WishListItem[] = useSelector(selectAllWishListItems);
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);

  useEffect(() => {
    console.log("useEffect hit");
    if (status === "idle") {
      dispatch(fetchWishList());
    }
  }, [WishListItems]);

  console.log(`WishList.tsx wish list items: ${WishListItems}`);
  
  return (
    <>
      <h2 className="wishListHeader">Your Wish List</h2>
      {status === "success" ? (
        WishListItems.map((WishListItem) => {
          console.log(`Current item in map: ${WishListItem}`);
          return <WishListItemView key={WishListItem.wishListId} {...WishListItem} />;
        })
      ) : (
        <div>
          <h3>Fetching your wish list...</h3>
        </div>
      )}
    </>
  );
};

export default WishList;
