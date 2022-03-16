import { useParams } from "react-router-dom";
import "./shopProduct.css";
import { useSelector } from "react-redux";
import { selectShopProductById } from "../../common/slices/shopProductSlice";
import { CompetingSellers } from "../competing-sellers/CompetingSellers";

//imgs
import cartoonBat from "../../imgs/cartoon-baseball-bat.png";
import cartoonComputer from "../../imgs/cartoon-computer.png";
import cartoonSteak from "../../imgs/cartoon-steak.png";
import cartoonClothing from "../../imgs/Clothing-baby-clothes.png";
import cartoonDiamond from "../../imgs/diamond-ring.png";
import cartoonMeds from "../../imgs/Free-medica.png";
import cartoonShoes from "../../imgs/Sneaker-tennis-shoes.png";
import { useEffect } from "react";

const ShopProductDisplay = () => {
  const { shop_product_id } = useParams();

  const id: number = parseInt(shop_product_id!);

  const ReduxShopProducts = useSelector((state) => {
    console.log("id= " + id); return selectShopProductById(state, id)
  }
  );

  useEffect((): void => {
    console.log(ReduxShopProducts);
  }, [ReduxShopProducts]);

  const ImgStyleBase = {
    backgroundImage: "",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "40%",
  };

  function ImgSplice(catagories: String[]) {
    let newImg = Object.assign({}, ImgStyleBase);
    catagories.forEach((catagory) => {
      switch (catagory) {
        case "perishable":
          newImg.backgroundImage = `url('${cartoonSteak}')`;
          break;
        case "furniture":
          newImg.backgroundImage = `url('${cartoonComputer}')`;
          break;
        case "entertainment":
          newImg.backgroundImage = `url('${cartoonComputer}')`;
          break;
        case "clothing":
          newImg.backgroundImage = `url('${cartoonClothing}')`;
          break;
        case "toys":
          newImg.backgroundImage = `url('${cartoonDiamond}')`;
          break;
        case "homegoods":
          newImg.backgroundImage = `url('${cartoonBat}')`;
          break;
        case "automotive":
          newImg.backgroundImage = `url('${cartoonBat}')`;
          break;
        case "personal-care":
          newImg.backgroundImage = `url('${cartoonMeds}')`;
          break;
        case "school&office":
          newImg.backgroundImage = `url('${cartoonShoes}')`;
          break;
      }
    });
    return newImg;
  }

  return (
    <div className="ProductContainer">
      <div className="InnerProduct">
        <div className="ProductInfoContainer">
          {ReduxShopProducts && <div style={ImgStyleBase}></div>}
          <div className="ProductInfoPocket">
            <h2>{ReduxShopProducts?.name?.toUpperCase()}</h2>
            <br />
          </div>
        </div>
        <div className="ProductDescriptionPocket">
          <p>{ReduxShopProducts?.description}</p>
        </div>
      </div>
      <CompetingSellers Seller={ReduxShopProducts?.id!}></CompetingSellers>
    </div>
  );
};

export default ShopProductDisplay;
