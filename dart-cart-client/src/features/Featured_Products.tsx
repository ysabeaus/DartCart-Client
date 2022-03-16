import React from 'react';
// axios.

import Featured_Product from '../Models/featured_product';
export default function Featured_Products() {
// let anyThing = fetch('http',{get,post})
    return (<>
        
        <Featured_Product productName = 'test1' id= "1" imageUrl = "https://picsum.photos/100/100?random=1" />
        <Featured_Product productName = 'test2' id="2" imageUrl = "https://picsum.photos/100/100?random=2"/>
        <Featured_Product productName = 'test3' id = "3" imageUrl = "https://picsum.photos/100/100?random=3"/>
        {/* //loop */}
    </>);
}