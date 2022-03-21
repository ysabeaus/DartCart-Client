import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import {
//     createSlice,
//     createSelector,
//     createEntityAdapter,
//     createAsyncThunk,
// } from "@reduxjs/toolkit";
import authHeader from './authentication/AuthHeader';
import FeaturedProduct from '../Models/featured_product';

const MOCK_SERVER = process.env.REACT_APP_API_URL;


export default function Featured_Products() {
    const [anyThing, setanyThing] = useState<any>([]);

    const fetchData = () => {
        axios.get(MOCK_SERVER + "featured_products", {
            headers: authHeader(),
            // params: { name },
        }).then((data) => {
            let d = data.data.slice(0,5);
            
                return setanyThing(d)});

    };

    useEffect(fetchData, []);
    useEffect(() => { 
        console.log(anyThing); }, [anyThing]);
    // anyThing.then(data => console.log(data));

    return (<>
        {anyThing.map(elem => {
           return <FeaturedProduct key= {elem.id} price = {elem.price} discount = {elem.discount} productName={elem.product.name} id="1"  discprice = {elem.price} imageUrl="https://picsum.photos/100/100?random=1" />
        }
        )}

    </>);
}