import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart, updateCart } from '../../common/slices/cartSlice';

const CartItem = ({element,handleUpdate}) => {

    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(element.quantity)

    const handleUpdateCart = () =>{
        return handleUpdate(element.id,quantity)
    }
    return (
        <div className="card">
                <div className="row no-gutters">
                    <div className="col-3">
                        <img className="cardImg" src="https://www.findingtheuniverse.com/wp-content/uploads/2018/10/Anse-Georgette-Praslin_by_Laurence-Norah-3.jpg" alt="" />
                    </div>
                    <div className="col-9">
                        <div className="card-block px-2" style={{ textAlign: 'left' }}>
                            <h4 className="card-title">{element.shopProduct.product.name}</h4>
                            <p className="card-text">{element.shopProduct.product.description}</p>
                            <select style={{ margin: '1%' }} value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
                                <option value='0'>0</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                            </select>
                            <a href="#" className="btn btn-primary" onMouseUp={()=>dispatch(fetchCart)} onClick={()=>handleUpdateCart()}>Update</a>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CartItem;