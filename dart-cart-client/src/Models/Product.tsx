import { useParams } from "react-router-dom";
const obj = [
    {
        id:1,
        image: ''
    }
];
export default function Product() {
    const { product_id } = useParams();
    const id: number = parseInt(product_id!);
    const ImgStyleBase = {
        backgroundImage: "",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "40%",
    };
    return (<div className="ProductContainer">
        <div className="InnerProduct">
            <div className="ProductInfoContainer">
                <div style={ImgStyleBase}></div>
                <div className="ProductInfoPocket">
                    <h1> {product_id}</h1>
                </div>

            </div>
        </div>
    </div>
    )

}