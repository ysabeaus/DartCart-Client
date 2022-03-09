import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShopProduct } from "../../common/models";
import {
  fetchCompetitorProducts,
  selectCompetitorProductById,
  selectCompetitorProducts,
} from "../../common/slices/competitorsSlice";
import Logo from "../layout/Logo";
import "./competingSellers.css";

interface SellerProduct {
  Seller: number; //product ID
}

export function CompetingSellers({ Seller }: SellerProduct) {
  const dispatch = useDispatch();

  const ReduxCompetitorProducts : ShopProduct[] = useSelector(selectCompetitorProducts)

  useEffect(() => {
    dispatch(fetchCompetitorProducts(Seller)); // places return value into REDUX global state
  }, []);

  function handleAddtoCard (event) {

  }

  return (
      
          <div className="Competitors">

          {ReduxCompetitorProducts && ReduxCompetitorProducts.
          map(competitors => {
              return (
                  
                  <div className="SellerContainer">
                      <div className="SellerWindow">

                          
                          

                      </div>

                      <div className="SellerPocket">
                      
                          <div className="SellerInfo">
                              <span>{competitors.product.name}</span><br/>
                              <span>Price: ${competitors.price}.99</span><br/>
                              {competitors.discount > 0 && <span className="SellerDiscount">Discount: ${competitors.discount}.00</span>}
                          </div>
                          <div className="SellerInfo">
                              <span>Location: {competitors.shop.location}</span><br/>
                              <span>In Stock: {competitors.quantity}</span><br/>
                          </div>

                      </div>
                     
                      <button className="btn btn-primary" value={competitors.id} onClick={(e) => handleAddtoCard(e)} >Add to card</button>

                  </div>
                  
              )
              

          }) || ""
          }

          </div>
       
  )

}
