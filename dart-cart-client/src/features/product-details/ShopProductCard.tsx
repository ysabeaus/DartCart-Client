import { Product } from "../../common/models";
import { Link } from "react-router-dom";

interface IShopProductCard {
  Product: Product;
}

const imgs = {
  toys: "https://m.media-amazon.com/images/I/81w4UIbh35L._AC_SX466_.jpg ",
  clothing: "https://m.media-amazon.com/images/I/61reCU-pJ5L._AC_UY741_.jpg ",
  furniture: "https://m.media-amazon.com/images/I/91d33j98QjL._AC_SX679_.jpg ",
  entertainment:
    "https://m.media-amazon.com/images/I/51YB3-R+yjS._AC_SY450_.jpg ",
  "school and office":
    "https://m.media-amazon.com/images/I/81fOW9Ol42L._AC_SX679_.jpg ",
  automotive: "https://m.media-amazon.com/images/I/8108SZmY0xL._AC_SX679_.jpg ",
  "home goods":
    "https://m.media-amazon.com/images/I/81kxcL+ptSL._AC_SX679_.jpg ",
  "personal care":
    "https://m.media-amazon.com/images/I/818r+bQMmVL._SX679_.jpg ",
};

const notfound =
  "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png";
export function ShopProductCard({ Product }: IShopProductCard) {
  return (
    <div className="card bg-black text-white row" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={
          Product.categories.length > 0
            ? imgs[Product.categories[0]?.name]
            : notfound
        }
        alt="Card image cap"
      ></img>
      <div className="card-body">
        <h1>{Product?.name || ""}</h1>

        <p className="card-text">{`${Product?.description || ""}`}</p>

        <Link
          id="Chosen Shop Product"
          className="btn  stretched-link"
          to={`/shop-product/${Product?.id}` || ""}
        ></Link>
      </div>
    </div>
  );
}
