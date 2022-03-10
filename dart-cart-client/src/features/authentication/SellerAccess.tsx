import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectSeller } from "../../common/slices/authSlice";
import { RootState } from "../../common/store";

const SellerAccess = () => {
    const stateSeller = useSelector(selectSeller);
    const seller = JSON.parse(stateSeller);
    const nav = useNavigate();

    useEffect(() => {
        seller ? nav(`${seller.homepage}`) : nav("/signup");
    }, []);

    return <></>;
};

export default SellerAccess;
