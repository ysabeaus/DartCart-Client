import Header from "./Header";
import axios from "axios";
import { ShopProduct } from "./models"
import { ShopProductCard } from "./ShopProductCard";
import { Link } from "react-router-dom";
import "./Display.css"
import { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { searchShopProducts, selectShopProducts } from "../../common/slices/SearchSlice";


const SearchDisplay = () => {

    const dispatch = useDispatch()

    //console.log(params)
    const ReduxShopProducts = useSelector(selectShopProducts);
    // const searchString = useRef<HTMLHeadingElement>(null);
    
    // function findCheapest (List: ShopProduct[]) {
    //     let productMap : Map<number, number> = new Map<number, number>();

    //     let finalList: ShopProduct[] = []

    //     for(let i=0; i < List.length; i++) {
    //         if (productMap[List[i].product.product_id]) {
    //             if (List[i].price < productMap[List[i].product.product_id]) {
    //                 productMap[List[i].product.product_id] = List[i].price
    //             }
    //         } else {
    //             productMap[List[i].product.product_id] = List[i].price
    //         }
    //     }
    //     List.forEach(Sproduct => {
    //         if (Sproduct.price == productMap[Sproduct.product.product_id]) {
    //             finalList.push(Sproduct)
    //         }
    //     })
    //     return finalList
    // }

    useEffect(()=> {
        dispatch(searchShopProducts("froio")) // places return value into REDUX global state
    }, [])


const searchString = useRef<HTMLInputElement>(null);
const [search, setSearchResults] = useState([]);


function SearchChange (e) {
  // let navigate = useNavigate()
  // event.preventDefault();
  console.log('event:  ' + searchString.current?.value)
//   setSearchResults = "";


  // navigate({pathname: `/Search/${searchString.current}`})

  // setSearch = event.value

}

    return (

        <>
        <Header></Header>
            <div className="">

            </div>
            <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search" onKeyUp={SearchChange} ref={searchString}></input>

            <div className="ProductCardContainer">
                 {/* <input onKeyUp={searchShopProducts()} placeholder="Search for products"></input> */}
            { 
            
            ReduxShopProducts.length > 0 ?
           ReduxShopProducts
            .map(ShopProduct => {
                return <ShopProductCard ShopProduct={ShopProduct}></ShopProductCard>
            })
            :   ""
           }
           </div>
        <Footer></Footer>
        </>
        
    )
}

export default SearchDisplay;