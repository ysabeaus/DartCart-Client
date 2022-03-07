import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { CartItem, RootState } from "../../common/types"
import { selectCartItemById, updateCartItem, updateCart } from "../../common/slices/cartSlice";


const CartItemView = ({ id }: CartItem) => {

    const dispatch = useDispatch()

    const item = useSelector((state: RootState)=> selectCartItemById(state, id))

    const handleItemUpdate = (quantity) => {
        dispatch(updateCartItem({
            id: id,
            changes: {
                quantity: quantity
            }
        }))
    }

    const saveQuantity = () => {
        if(item) dispatch(updateCart(item))
    }


    return  (
        <div className="card">
            <div className="row no-gutters">
                <div className="col-3">
                    <img className="cardImg" src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=1f00&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true"/>
                </div>
                <div className="col-9">
                    <div className="card-block px-2" style={{ textAlign: 'left' }}>
                        <h4 className="card-title">{item?.shopProduct.product.name}</h4>
                        <p className="card-text">{item?.shopProduct.product.description}</p>
                        <input className="form-control" type="number" value={item?.quantity} onChange={e => handleItemUpdate(e.target.value)} min={0}/>
                        <button onClick={saveQuantity}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItemView