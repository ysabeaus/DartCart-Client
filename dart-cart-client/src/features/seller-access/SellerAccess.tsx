import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../common/hooks";
import { selectUser } from "../../common/slices/authSlice";
import { fetchSeller, selectSeller } from "../../common/slices/sellerAccessSlice";

export const SellerAccess = () => {
    const stateUser = useSelector(selectUser);
    const user = JSON.parse(stateUser || "");
    const stateSeller = useSelector(selectSeller);
    const seller = JSON.parse(stateSeller);
    const dispatch = useAppDispatch();
    const nav = useNavigate();

    useEffect(() => {
        console.log(seller);
        checkIfExists();
    }, []);

    const checkIfExists = () => {
        dispatch(fetchSeller(user.id))
            .unwrap()
            .then((originalPromiseResult) => {
                nav(`/sellers/${seller.homepage}`);
            })
            .catch((rejectedValueOrSerializedError) => {
                nav("/signup");
            });
    };

    return <div>SellerAccess</div>;
};

export default SellerAccess;
