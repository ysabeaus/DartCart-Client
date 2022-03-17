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
    const [anyThing, setanyThing] = useState<any>([]);

    const fetchData = () => {
        axios.get(MOCK_SERVER + "featured_products", {
            headers: authHeader(),
            // params: { name },
        }).then((data) => setanyThing(data.data));

    };

    useEffect(fetchData, []);
    useEffect(() => { console.log(anyThing[0]); }, [anyThing]);
    // anyThing.then(data => console.log(data));

    return (<>
        {anyThing.map(elem => {
           return <Featured_Product productName={elem.name} id="1" imageUrl="https://picsum.photos/100/100?random=1" />
        }
        )}

    </>);
}