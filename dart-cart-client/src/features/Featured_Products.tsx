import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    createSlice,
    createSelector,
    createEntityAdapter,
    createAsyncThunk,
} from "@reduxjs/toolkit";
import authHeader from './authentication/AuthHeader';
import Featured_Product from '../Models/featured_product';
const MOCK_SERVER = process.env.REACT_APP_API_URL;


export default function Featured_Products() {
    const [anyThing, setanyThing] = useState<any>();

    useEffect(() => {
        axios.get(MOCK_SERVER + "shop_products/search", {
            headers: authHeader(),
            // params: { name },
        }).then((data) => setanyThing(data.data));

    }, []);

    // anyThing.then(data => console.log(data));
    // console.log(anyThing[0].name);
    return (<>
        <Featured_Product productName={anyThing[0].name} id={anyThing[0].id} imageUrl="https://picsum.photos/100/100?random=1" />
        <Featured_Product productName={anyThing[1].name} id={anyThing[1].id} imageUrl="https://picsum.photos/100/100?random=2" />
        <Featured_Product productName={anyThing[2].name} id={anyThing[2].id} imageUrl="https://picsum.photos/100/100?random=3" />
        {/* //loop */}
    </>);
}