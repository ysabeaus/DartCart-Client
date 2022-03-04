import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart} from '../../common/slices/cartSlice';

const Products = () => {
    const username = JSON.parse(localStorage.getItem("user")).username;
    const dispatch = useDispatch()
    const list = [
        {
            "id": 1,
            "quantity": 10,
            "price": 15,
            "discount": 2,
            "shop": null,
            "product": {
                "id": 1,
                "name": "Kelloggs Froot Loops",
                "description": "Delicious frooty flava"
            }
        },
        {
            "id": 2,
            "quantity": 10,
            "price": 15,
            "discount": 2,
            "shop": null,
            "product": {
                "id": 2,
                "name": "Lambogini",
                "description": "Delicious Lambogini"
            }
        }
    ];
    let productList = list.map((element) => (

        <div className='col-4'>
            <div className="card">
                <img className="card-img-top" src="https://www.findingtheuniverse.com/wp-content/uploads/2018/10/Anse-Georgette-Praslin_by_Laurence-Norah-3.jpg" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{element.product.name}</h5>
                    <p className="card-text">{element.product.description}</p>
                    <button className="btn btn-primary" value={element.id} onClick={(e) => handleAddtoCard(e)}>Add to card</button>
                </div>
            </div>

        </div>


    ))

    const handleAddtoCard = (event) => {
        dispatch(addToCart(event.target.value));
    }

    return (
        <>


            <div className="container">
                <div className='row'>
                    {productList}

                </div>
            </div>



        </>
    )
}

export default Products
