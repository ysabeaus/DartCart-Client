import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../common/hooks";
import { selectUser } from "../../common/slices/authSlice";
import { fetchSeller, selectSeller } from "../../common/slices/sellerAccessSlice";

export const SellerHomepage = () => {
    return <div>SellerHomepage</div>;
};

export default SellerHomepage;
