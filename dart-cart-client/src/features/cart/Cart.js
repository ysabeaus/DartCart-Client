import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart, updateCart } from '../../common/slices/cartSlice';
import CartItem from './CartItem';


const Cart = () => {


    let carts = useSelector((state) => state.carts.carts)
    const dispatch = useDispatch();
    
    const handleUpdate = (id,quantity) =>{
        
        dispatch(updateCart({
            "id": id,
            "quantity":quantity
        }))
        
        return dispatch(fetchCart)
    }
    
    const [cartList, setCartList] = useState([])
    useEffect(() => {
        if (carts.length == 0) {
            dispatch(fetchCart())
        }

        setCartList(carts.map((element) => (
            <CartItem key={element.id} element={element} handleUpdate={handleUpdate}/>
        )))
        console.log(cartList)
    }, [carts]);
    console.log(carts)

    
    return (
        <>
        
            {cartList}

        </>
    )
}

export default Cart;